from __future__ import (absolute_import, division, print_function, unicode_literals)
from builtins import (ascii, bytes, chr, dict, filter, hex, input, int, map, next, oct, open, pow, range, round, str, super, zip)

from . import filters

from . import FoostacheParser
from . import FoostacheParserVisitor


class PathError(BaseException):
    pass


class Visitor(FoostacheParserVisitor.FoostacheParserVisitor):
    TYPES = {
        "string": (str,),
        "array": (list,),
        "object": (dict,),
        "number": (int, float),
        "boolean": (bool,),
        "null": (type(None),)
    }

    @staticmethod
    def _is_type(value, type_string):
        assert type_string in Visitor.TYPES
        return isinstance(value, Visitor.TYPES[type_string])

    FILTERMAP = {
        "html": filters.html5,
        "uri": filters.uri_component,
        "jss": filters.js_string
    }

    def __init__(self, context):
        self._contexts = list()
        self._contexts.append(context)
        self._filters = list()
        self._iterates = list()

    # Visit a parse tree produced by FoostacheParser#template.
    def visitTemplate(self, ctx):
        return self.visit(ctx.statements())

    # Visit a parse tree produced by FoostacheParser#statements.
    def visitStatements(self, ctx):
        results = list()
        for statement in ctx.statement():
            results.append(self.visit(statement))
        return "".join(results)

    # Visit a parse tree produced by FoostacheParser#statement.
    def visitStatement(self, ctx):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by FoostacheParser#rawText.
    def visitRawText(self, ctx):
        return ctx.getText()

    # Visit a parse tree produced by FoostacheParser#literalText.
    def visitLiteral(self, ctx):
        return ctx.literalText().getText()

    def apply_filters(self, s):
        for f in reversed(self._filters):
            if f:
                s = f(s)
        return s

    # Visit a parse tree produced by FoostacheParser#stringField.
    def visitStringField(self, ctx):
        value = self.visit(ctx.path())
        for f in ctx.inlineFilter():
            g = Visitor.FILTERMAP.get(self.visit(f), None)
            if g:
                value = g(value)
        value = self.apply_filters(value)
        return value

    # Visit a parse tree produced by FoostacheParser#numberField.
    def visitNumberField(self, ctx):
        value = self.visit(ctx.path())
        value = self.visit(ctx.numberFormat()).format(value)
        for f in ctx.inlineFilter():
            g = Visitor.FILTERMAP.get(self.visit(f), None)
            if g:
                value = g(value)
        value = self.apply_filters(value)
        return str(value)

    def visitNumberFormat(self, ctx):
        # PERCENT (flags=ZERO)? (width=PINTEGERN)? (DOTN precision=PINTEGERN)? specifier=NUMBER_SPECIFIER
        if ctx.specifier.text == "d":
            if ctx.width:
                if ctx.flags:
                    return "{{:0{}d}}".format(ctx.width.text)
                else:
                    return "{{:{}d}}".format(ctx.width.text)
            return "{:d}"
        else:  # if ctx.specifier.text == "f":
            p = "6"
            if ctx.precision:
                p = ctx.precision.text
            if ctx.width:
                if ctx.flags:
                    return "{{:0{}.{}f}}".format(ctx.width.text, p)
                else:
                    return "{{:{}.{}f}}".format(ctx.width.text, p)
            return "{{:.{}f}}".format(p)

    def visitInlineFilter(self, ctx):
        return ctx.ID().getText()

    # Visit a parse tree produced by FoostacheParser#ifBlock.
    def visitIfBlock(self, ctx):
        if self.visit(ctx.ifTag()):
            return self.visit(ctx.statements())
        for e in ctx.elseifBlock():
            if self.visit(e.elseifTag()):
                return self.visit(e.statements())
        if ctx.elseBlock():
            return self.visit(ctx.elseBlock().statements())
        return ""

    # Visit a parse tree produced by FoostacheParser#ifTag.
    def visitIfTag(self, ctx):
        return self.visit(ctx.expression())

    #    # Visit a parse tree produced by FoostacheParser#elseifBlock.
    #    def visitElseifBlock(self, ctx):
    #        return "" # self.visitChildren(ctx)

    # Visit a parse tree produced by FoostacheParser#elseifTag.
    def visitElseifTag(self, ctx):
        return self.visit(ctx.expression())

    #    # Visit a parse tree produced by FoostacheParser#elseBlock.
    #    def visitElseBlock(self, ctx):
    #        return "" # self.visitChildren(ctx)

    #    # Visit a parse tree produced by FoostacheParser#expression.
    #    def visitExpression(self, ctx):
    #        return self.visitChildren(ctx)

    def visitBoolExpression(self, ctx):
        # TODO confirm boolean
        return self.visit(ctx.path())

    def visitExistsExpression(self, ctx):
        try:
            self.visit(ctx.path())
            return True
        except PathError:
            return False

    def visitTypeExpression(self, ctx):
        value = self.visit(ctx.path())
        return self._is_type(value, ctx.TYPE().getText())

    def visitParenExpression(self, ctx):
        return self.visit(ctx.expression())

    def visitAndExpression(self, ctx):
        if not self.visit(ctx.expr1):
            return False
        else:
            return self.visit(ctx.expr2)

    def visitOrExpression(self, ctx):
        if self.visit(ctx.expr1):
            return True
        else:
            return self.visit(ctx.expr2)

    def visitNotExpression(self, ctx):
        return not self.visit(ctx.expression())

    def visitDotPath(self, ctx):
        if len(self._contexts) == 0:
            raise PathError("no context")
        return self._contexts[-1]

    def visitCaretPath(self, ctx):
        if len(ctx.CARET()) > len(self._contexts) - 1:
            raise PathError("no context")
        self._working_path = self._contexts[-1 - len(ctx.CARET())]
        self.visitChildren(ctx)
        result = self._working_path
        del self._working_path
        return result

    def visitQsObjectKey(self, ctx):
        if not self._is_type(self._working_path, "object"):
            raise PathError("not an object")

        chars = list()
        for t in ctx.getChildren():
            if t.symbol.type == FoostacheParser.FoostacheParser.CHARQS:
                chars.append(t.getText())
            elif t.symbol.type == FoostacheParser.FoostacheParser.ESCCHARQS:
                x = t.getText()
                if x[1] == "\"":
                    x = "\""
                elif x[1] == "\\":
                    x = "\\"
                elif x[1] == "/":
                    x = "/"
                elif x[1] == "b":
                    x = "\b"
                elif x[1] == "f":
                    x = "\f"
                elif x[1] == "n":
                    x = "\n"
                elif x[1] == "r":
                    x = "\r"
                elif x[1] == "t":
                    x = "\t"
                elif x[1] == "u":
                    x = chr(int(x[2:], 16))
                else:
                    assert False
                chars.append(x)
        key = "".join(chars)

        if key not in self._working_path:
            raise PathError("key {} not found in {}".format(ctx.getText(), self._working_path))

        self._working_path = self._working_path[key]

    def visitIdObjectKey(self, ctx):
        if not self._is_type(self._working_path, "object"):
            raise PathError("not an object")

        key = ctx.getText()

        if key not in self._working_path:
            raise PathError("key {} not found in {}".format(ctx.getText(), self._working_path))

        self._working_path = self._working_path[key]

    # Visit a parse tree produced by FoostacheParser#arrayIndex.
    def visitArrayIndex(self, ctx):
        if not self._is_type(self._working_path, "array"):
            raise PathError("not an array")

        index = int(ctx.getText())

        if index < 0:
            index = len(self._working_path) + index

        if (index < 0) or (index > len(self._working_path)):
            raise PathError("index {} out of range".format(ctx.getText()))

        self._working_path = self._working_path[index]

    # Visit a parse tree produced by FoostacheParser#withBlock.
    def visitWithBlock(self, ctx):
        self._contexts.append(self.visit(ctx.path()))
        value = self.visit(ctx.statements())
        self._contexts.pop()
        return value

    # Visit a parse tree produced by FoostacheParser#iterateBlock.
    def visitIterateBlock(self, ctx):
        array = self.visit(ctx.path())
        clauses = {
            "body": list(),
            "before": list(),
            "after": list(),
            "between": list(),
            "else": list()
        }
        self._iterates.append(clauses)
        for x in ctx.iterateClause():
            self.visit(x)
        results = list()

        (start, stop, step) = self.visit(ctx.indexRange())
        if start < 0:
            start = start + len(array)
        if stop is None:
            stop = len(array)
        elif stop < 0:
            stop = stop + len(array)
        if step is not None:
            r = list(range(start, stop, step))
        else:
            r = list(range(start, stop))

        if not array or not r:
            for x in clauses["else"]:
                results.append(self.visit(x))
        else:
            for x in clauses["before"]:
                results.append(self.visit(x))
            self._contexts.append(array[r[0]])
            results.append(self.visit(ctx.statements()))
            self._contexts.pop()
            for i in r[1:]:
                for x in clauses["between"]:
                    results.append(self.visit(x))
                self._contexts.append(array[i])
                results.append(self.visit(ctx.statements()))
                self._contexts.pop()
            for x in clauses["after"]:
                results.append(self.visit(x))
        return "".join(results)

    # Visit a parse tree produced by FoostacheParser#indexRange.
    def visitIndexRange(self, ctx):
        start = 0
        if ctx.INTEGER():
            start = int(ctx.INTEGER().getText())
        (stop, step) = (None, None)
        if ctx.indexRangeB():
            (stop, step) = self.visit(ctx.indexRangeB())
        return start, stop, step

    # Visit a parse tree produced by FoostacheParser#indexRange.
    def visitIndexRangeB(self, ctx):
        stop = None
        if ctx.INTEGER():
            stop = int(ctx.INTEGER().getText())
        step = None
        if ctx.indexRangeC():
            step = self.visit(ctx.indexRangeC())
        return stop, step

    # Visit a parse tree produced by FoostacheParser#indexRange.
    def visitIndexRangeC(self, ctx):
        value = int(ctx.INTEGER().getText())
        if value <= 0:
            return None
        return value

    # Visit a parse tree produced by FoostacheParser#iterateClause.
    def visitIterateClause(self, ctx):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by FoostacheParser#iterateBeforeClause.
    def visitIterateBeforeClause(self, ctx):
        self._iterates[-1]["before"].append(ctx.statements())
        return None  # self.visitChildren(ctx)

    # Visit a parse tree produced by FoostacheParser#iterateAfterClause.
    def visitIterateAfterClause(self, ctx):
        self._iterates[-1]["after"].append(ctx.statements())
        return None  # self.visitChildren(ctx)

    # Visit a parse tree produced by FoostacheParser#iterateBetweenClause.
    def visitIterateBetweenClause(self, ctx):
        self._iterates[-1]["between"].append(ctx.statements())
        return None  # self.visitChildren(ctx)

    # Visit a parse tree produced by FoostacheParser#iterateElseClause.
    def visitIterateElseClause(self, ctx):
        self._iterates[-1]["else"].append(ctx.statements())
        return None  # self.visitChildren(ctx)

    # Visit a parse tree produced by FoostacheParser#filterBlock.
    def visitFilterBlock(self, ctx):
        self._filters.append(Visitor.FILTERMAP.get(ctx.filterName.text, None))
        value = self.visit(ctx.statements())
        self._filters.pop()
        return value
