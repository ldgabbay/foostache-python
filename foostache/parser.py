# -*- coding: utf-8 -*-

class ASTNode(object):
    pass


class Text(ASTNode):
    def __init__(self, text):
        if type(text) is not unicode:
            raise ValueError("text is not unicode")
        self._text = text

    def render(self, context):
        return self._text


class Template(ASTNode):
    def __init__(self, nodes):
        try:
            for node in nodes:
                if not isinstance(node, ASTNode):
                    raise ValueError('nodes must contain only ASTNode elements')
        except TypeError:
            raise ValueError('nodes must be iterable')

        self._nodes = list(nodes)

    def render(self, context_stack):
        blocks = list()
        for node in self._nodes:
            blocks.append(node.render(context_stack))
        return u"".join(blocks)


class StringField(ASTNode):
    def __init__(self, path, escapes=None):
        if type(path) is not unicode:
            raise ValueError("path is not unicode")
        self._path = path
        if escapes is not None:
            if type(escapes) is not list:
                raise ValueError("escapes is not list")
            self._escapes = list(escapes)

    def render(self, context_stack):
        try:
            s = context_stack[self._path]
            if type(s) is not unicode:
                raise KeyError
            # TODO apply escapes
            return s
        except KeyError:
            return u""


class NumberField(ASTNode):
    def __init__(self, path, format):
        if type(path) is not unicode:
            raise ValueError("path is not unicode")
        if type(format) is not unicode:
            raise ValueError("format is not unicode")
        self._path = path
        self._format = format

    def render(self, context_stack):
        try:
            n = context_stack[self._path]
            if not isinstance(n, (int, float)):
                raise KeyError
            # TODO apply number formatting
            return unicode(n)
        except KeyError:
            return u""


class If(ASTNode):
    def __init__(self, then_expression, then_template, elseifs=None, else_template=None):
        if type(then_expression) is not unicode:
            raise ValueError("then_expression is not unicode")
        if not isinstance(then_template, ASTNode):
            raise ValueError("then_template is not ASTNode")
        self._then_expression = then_expression
        self._then_template = then_template
        if elseifs is not None:
            if type(elseifs) is not list:
                raise ValueError("elseifs is not list")
            for elseif in elseifs:
                if type(elseif) is not tuple:
                    raise ValueError("elseifs element is not tuple")
                if len(elseif) != 2:
                    raise ValueError("elseifs element length is not 2")
                if type(elseif[0]) is not unicode:
                    raise ValueError("elseifs element 0 is not unicode")
                if not isinstance(elseif[1], ASTNode):
                    raise ValueError("elseifs element 1 is not ASTNode")
            self._elseifs = list(elseifs)
        else:
            self._elseifs = None
        if else_template is not None:
            if not isinstance(else_template, ASTNode):
                raise ValueError("else_template is not ASTNode")
        self._else_template = else_template


class With(ASTNode):
    pass


class Iterate(ASTNode):
    pass


class Escape(ASTNode):
    pass


class Comment(ASTNode):
    def __init__(self):
        pass

    def render(self, context_stack):
        return u""

