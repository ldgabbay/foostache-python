# -*- coding: utf-8 -*-

"""
Parses tokens into AST.

"""

from __future__ import absolute_import

import collections

from . import pushback_iterable
from . import scanner


class Node(object):
    def render(self, context_stack):
        raise NotImplementedError()


class TemplateNode(Node):
    def __init__(self, nodes):
        if not isinstance(nodes, collections.Iterable):
            raise ValueError('nodes is not iterable')

        self._nodes = list(nodes)

        try:
            next(node for node in self._nodes if not isinstance(node, Node))
            raise ValueError('nodes element is not Node')
        except StopIteration:
            pass

    def render(self, context_stack):
        blocks = list()
        for node in self._nodes:
            blocks.append(node.render(context_stack))
        return u"".join(blocks)


class TextNode(Node):
    def __init__(self, text):
        if type(text) is not unicode:
            raise ValueError("text is not unicode")
        self._text = text

    def render(self, context):
        return self._text


class StringFieldNode(Node):
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


class NumberFieldNode(Node):
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


class IfNode(Node):
    def __init__(self, then_expression, then_template, elseifs=None, else_template=None):
        if type(then_expression) is not unicode:
            raise ValueError("then_expression is not unicode")
        if not isinstance(then_template, Node):
            raise ValueError("then_template is not Node")
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
                if not isinstance(elseif[1], Node):
                    raise ValueError("elseifs element 1 is not Node")
            self._elseifs = list(elseifs)
        else:
            self._elseifs = None
        if else_template is not None:
            if not isinstance(else_template, Node):
                raise ValueError("else_template is not Node")
        self._else_template = else_template


class WithNode(Node):
    pass


class IterateNode(Node):
    pass


class EscapeNode(Node):
    pass


class CommentNode(Node):
    def __init__(self):
        pass

    def render(self, context_stack):
        return u""


class ParserContext(object):
    def __init__(self, tokens):
        self._tokens = list(tokens)
        self._pos = 0
        self._pos_stack = list()

    def top(self):
        if self._pos < len(self._tokens):
            return self._tokens[self._pos]
        return None

    def next(self):
        self._pos = self._pos + 1

    def start(self):
        self._pos_stack.append(self._pos)

    def commit(self):
        self._pos_stack.pop()

    def rollback(self):
        self._pos = self._pos_stack.pop()


def parse_text(tokens):
    t = next(tokens)
    if isinstance(t, scanner.TextToken):
        return TextNode(t.text())
    tokens.pushback(t)
    return None


def parse_thing(pc):
    pc.start()
    



def parse_template(tokens, pos):
    nodes = list()
    # while True:




def parse(tokens):
    if not isinstance(tokens, collections.Iterable):
        raise ValueError('tokens is not iterable')

    tokens = list(tokens)
    return parse_template(tokens, 0)