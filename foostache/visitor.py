# -*- coding: utf-8 -*-

import re

import filters
import parser.FoostacheParserVisitor as FoostacheParserVisitor


class Visitor(FoostacheParserVisitor.FoostacheParserVisitor):
    PARENTS = re.compile("\\^*", re.UNICODE)
    FIRST = re.compile("(((\\w+)|(\"(([^\\\\\"]|\\\\[\\\\/bfnrt\"]|\\\\u[0-9a-fA-F]{4})*)\")))|(\\[(0|([1-9][0-9]*))\\])", re.UNICODE)
    REST = re.compile("(\\.((\\w+)|(\"(([^\\\\\"]|\\\\[\\\\/bfnrt\"]|\\\\u[0-9a-fA-F]{4})*)\")))|(\\[(0|([1-9][0-9]*))\\])", re.UNICODE)
    # >>> FIRST.match("x").groups()
    # ('x', 'x', 'x', None, None, None, None, None, None)
    # >>> FIRST.match('"x"').groups()
    # ('"x"', '"x"', None, '"x"', 'x', 'x', None, None, None)
    # >>> FIRST.match('[0]').groups()
    # (None, None, None, None, None, None, '[0]', '0', None)

    TYPES = {
        "string": unicode,
        "array": list,
        "object": dict,
        "number": (int, float),
        "boolean": bool,
        "null": type(None)
    }

    FILTERMAP = {
        "html": filters.html5,
        "uri": filters.uri_component
    }

    def __init__(self, context):
        self._contexts = list()
        self._contexts.append(context)
        self._filters = list()
        self._iterates = list()


    def resolve(self, path, default=None):
        if type(path) is not unicode:
            raise ValueError("path must be a unicode")

        if path == ".":
            if len(self._contexts) == 0:
                if default is not None:
                    return default
                raise KeyError("no such context")
            return self._contexts[-1]

        m = Visitor.PARENTS.match(path)
        assert m
        head = m.end()
        if head + 1 > len(self._contexts):
            if default is not None:
                return default
            raise KeyError("no such context")
        context = self._contexts[-1 - head]

        if head == len(path):
            return context

        m = Visitor.FIRST.match(path, head)
        while True:
            if not m:
                raise ValueError("cannot parse path element: char {} in {}".format(head, path))
            if m.group(2):
                if type(context) is not dict:
                    if default is not None:
                        return default
                    raise KeyError("path element is not an object: char {} in {}".format(head, path))
                if m.group(3):
                    key = m.group(3)
                elif m.group(5):
                    key = m.group(5)
                else:
                    assert False
                if key not in context:
                    if default is not None:
                        return default
                    raise KeyError("key {} not found: char {} in {}".format(key, head, path))
                else:
                    context = context.get(key)
            elif m.group(7):
                if type(context) is not list:
                    if default is not None:
                        return default
                    raise KeyError("path element is not an object: char {} in {}".format(head, path))
                index = int(m.group(8))
                if index >= len(context):
                    if default is not None:
                        return default
                    raise KeyError("index {} out of bounds: char {} in {}".format(index, head, path))
                context = context[index]
            head = m.end()
            if head == len(path):
                return context
            m = Visitor.REST.match(path, head)


    # Visit a parse tree produced by FoostacheParser#template.
    def visitTemplate(self, ctx):
        return self.visit(ctx.statements())


    # Visit a parse tree produced by FoostacheParser#statements.
    def visitStatements(self, ctx):
        results = list()
        for statement in ctx.statement():
            results.append(self.visit(statement))
        return u''.join(results)


    # Visit a parse tree produced by FoostacheParser#statement.
    def visitStatement(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by FoostacheParser#rawText.
    def visitRawText(self, ctx):
        return ctx.getText()


    # Visit a parse tree produced by FoostacheParser#literalText.
    def visitLiteral(self, ctx):
        return ctx.literalText().getText()


    def applyFilters(self, s):
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
        value = self.applyFilters(value)
        return value


    # Visit a parse tree produced by FoostacheParser#numberField.
    def visitNumberField(self, ctx):
        value = self.visit(ctx.path())
        value = self.visit(ctx.numberFormat()).format(value)
        for f in ctx.inlineFilter():
            g = Visitor.FILTERMAP.get(self.visit(f), None)
            if g:
                value = g(value)
        value = self.applyFilters(value)
        return unicode(value)


    def visitNumberFormat(self, ctx):
        # PERCENT (flags=ZERO)? (width=PINTEGERN)? (DOTN precision=PINTEGERN)? specifier=NUMBER_SPECIFIER
        if ctx.specifier.text == u"d":
            if ctx.width:
                if ctx.flags:
                    return "{{:0{}d}}".format(ctx.width.text)
                else:
                    return "{{:{}d}}".format(ctx.width.text)
            return "{:d}"
        else: # if ctx.specifier.text == u"f":
            p = u"6"
            if ctx.precision:
                p = ctx.precision.text
            if ctx.width:
                if ctx.flags:
                    return "{{:0{}.{}f}}".format(ctx.width.text, p)
                else:
                    return "{{:{}.{}f}}".format(ctx.width.text, p)
            return "{{:.{}f}}".format(p)
        return u""


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
        return u""


    # Visit a parse tree produced by FoostacheParser#ifTag.
    def visitIfTag(self, ctx):
        return self.visit(ctx.expression())


    #    # Visit a parse tree produced by FoostacheParser#elseifBlock.
    #    def visitElseifBlock(self, ctx):
    #        return u"" # self.visitChildren(ctx)


    # Visit a parse tree produced by FoostacheParser#elseifTag.
    def visitElseifTag(self, ctx):
        return self.visit(ctx.expression())


    #    # Visit a parse tree produced by FoostacheParser#elseBlock.
    #    def visitElseBlock(self, ctx):
    #        return u"" # self.visitChildren(ctx)


    #    # Visit a parse tree produced by FoostacheParser#expression.
    #    def visitExpression(self, ctx):
    #        return self.visitChildren(ctx)


    def visitBoolExpression(self, ctx):
        # TODO confirm boolean
        return self.visit(ctx.path())


    def visitExistsExpression(self, ctx):
        try:
            return True
        except KeyError:
            return False


    def visitTypeExpression(self, ctx):
        try:
            value = self.visit(ctx.path())
            return isinstance(value, Visitor.TYPES[ctx.TYPE().getText()])
        except KeyError:
            return False


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


    # Visit a parse tree produced by FoostacheParser#path.
    def visitPath(self, ctx):
        return self.resolve(ctx.getText()) # self.visitChildren(ctx)


    # Visit a parse tree produced by FoostacheParser#objectKey.
    def visitObjectKey(self, ctx):
        return u"" # self.visitChildren(ctx)


    # Visit a parse tree produced by FoostacheParser#arrayIndex.
    def visitArrayIndex(self, ctx):
        return u"" # self.visitChildren(ctx)


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
            r = range(start, stop, step)
        else:
            r = range(start, stop)

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
        return u"".join(results)


    # Visit a parse tree produced by FoostacheParser#indexRange.
    def visitIndexRange(self, ctx):
        start = 0
        if ctx.INTEGER():
            start = int(ctx.INTEGER().getText())
        (stop, step) = (None, None)
        if ctx.indexRangeB():
            (stop, step) = self.visit(ctx.indexRangeB())
        return (start, stop, step)


    # Visit a parse tree produced by FoostacheParser#indexRange.
    def visitIndexRangeB(self, ctx):
        stop = None
        if ctx.INTEGER():
            stop = int(ctx.INTEGER().getText())
        step = None
        if ctx.indexRangeC():
            step = self.visit(ctx.indexRangeC())
        return (stop, step)


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
        return None # self.visitChildren(ctx)


    # Visit a parse tree produced by FoostacheParser#iterateAfterClause.
    def visitIterateAfterClause(self, ctx):
        self._iterates[-1]["after"].append(ctx.statements())
        return None # self.visitChildren(ctx)


    # Visit a parse tree produced by FoostacheParser#iterateBetweenClause.
    def visitIterateBetweenClause(self, ctx):
        self._iterates[-1]["between"].append(ctx.statements())
        return None # self.visitChildren(ctx)


    # Visit a parse tree produced by FoostacheParser#iterateElseClause.
    def visitIterateElseClause(self, ctx):
        self._iterates[-1]["else"].append(ctx.statements())
        return None # self.visitChildren(ctx)


    # Visit a parse tree produced by FoostacheParser#filterBlock.
    def visitFilterBlock(self, ctx):
        self._filters.append(Visitor.FILTERMAP.get(ctx.filterName.text, None))
        value = self.visit(ctx.statements())
        self._filters.pop()
        return value
