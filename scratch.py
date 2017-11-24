# https://ianpreston.io/talks/a4talk/#/

# -*- coding: utf-8 -*-

import re

PARENTS = re.compile("\\^*", re.UNICODE)
FIRST = re.compile("(((\\w+)|(\"(([^\\\\\"]|\\\\[\\\\/bfnrt\"]|\\\\u[0-9a-fA-F]{4})*)\")))|(\\[(0|([1-9][0-9]*))\\])",
                   re.UNICODE)
REST = re.compile("(\\.((\\w+)|(\"(([^\\\\\"]|\\\\[\\\\/bfnrt\"]|\\\\u[0-9a-fA-F]{4})*)\")))|(\\[(0|([1-9][0-9]*))\\])",
                  re.UNICODE)

RANGE_NUMBER = re.compile("0|(-?[1-9][0-9]*)")


# >>> FIRST.match("x").groups()
# ('x', 'x', 'x', None, None, None, None, None, None)
# >>> FIRST.match('"x"').groups()
# ('"x"', '"x"', None, '"x"', 'x', 'x', None, None, None)
# >>> FIRST.match('[0]').groups()
# (None, None, None, None, None, None, '[0]', '0', None)

class Context(object):
    def __init__(self, context):
        from collections import deque
        self._contexts = deque((context,))
        self._escapes = deque()

    def __getitem__(self, path):
        if type(path) is not unicode:
            raise ValueError("path must be a unicode")

        if path == ".":
            if len(self._contexts) == 0:
                raise KeyError("no such context")
            return self._contexts[-1]

        m = PARENTS.match(path)
        assert m
        head = m.end()
        if head + 1 > len(self._contexts):
            raise KeyError("no such context")
        context = self._contexts[-1 - head]

        if head == len(path):
            return context

        m = FIRST.match(path, head)
        while True:
            if not m:
                raise ValueError("cannot parse path element: char {} in {}".format(head, path))
            if m.group(2):
                if type(context) is not dict:
                    raise KeyError("path element is not an object: char {} in {}".format(head, path))
                if m.group(3):
                    key = m.group(3)
                elif m.group(5):
                    key = m.group(5)
                else:
                    assert False
                if key not in context:
                    raise KeyError("key {} not found: char {} in {}".format(key, head, path))
                else:
                    context = context.get(key)
            elif m.group(7):
                if type(context) is not list:
                    raise KeyError("path element is not an object: char {} in {}".format(head, path))
                index = int(m.group(8))
                if index >= len(context):
                    raise KeyError("index {} out of bounds: char {} in {}".format(index, head, path))
                context = context[index]
            head = m.end()
            if head == len(path):
                return context
            m = REST.match(path, head)

    def push_context(self, path):
        try:
            self._contexts.append(self[path])
        except:
            self._contexts.append(None)
            raise

    def pop_context(self):
        self._contexts.pop()

    def push_escape(self, escape):
        if not isinstance(escape, Escaper):
            raise ValueError("escape is not an Escaper")

        self._escapes.append(escape)

    def pop_escape(self):
        self._escapes.pop()


obj = {"a": 1, "b": [2, 3, {"c": 5}], "d": {"e": 6, "f": 7}}
ctx = Context(obj)

# -*- coding: utf-8 -*-


class Expression(object):
    def eval(self, context):
        raise NotImplementedError()


class Exists(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsString(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsNumber(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsObject(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsArray(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsBoolean(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsNull(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class And(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class Or(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class Not(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass



class FilterStack(object):
    def __init__(self):
        from collections import deque
        self._filters = deque()

    def push(self, filter):
        self._filters.appendleft(filter)

    def pop(self):
        self._filters.popleft()

    def apply(self, s):
        for filter in self._filters:
            s = filter(s)
        return s
# -*- coding: utf-8 -*-

import re


class Path(object):
    def __init__(self, depth, steps):
        if type(depth) is not int:
            raise ValueError("depth is not int")
        if not (depth >= 0):
            raise ValueError("depth is negative")
        try:
            for step in steps:
                if not isinstance(step, PathStep):
                    raise ValueError("steps element is not PathStep")
        except TypeError:
            raise ValueError("steps is not iterable")

        self._depth = depth
        self._steps = steps

    def eval(self, context_stack):
        if self._depth >= len(context_stack):
            raise KeyError("depth too deep for context_stack")
        context = context_stack[-1 - self._depth]
        for step in self._steps:
            context = step.eval(context)
        return context


class PathStep(object):
    def eval(self, context):
        raise NotImplementedError()


class ObjectKeyPathStep(PathStep):
    def __init__(self, key):
        if type(key) is not unicode:
            raise ValueError("key is not unicode")

        self._key = key

    def eval(self, context):
        if type(context) is not dict:
            raise ValueError("context is not dict")
        if self._key not in context:
            raise ValueError("key {} not found in context".format(self._key))

        return context.get(self._key)


class ArrayIndexPathStep(PathStep):
    def __init__(self, index):
        if type(index) is not int:
            raise ValueError("index is not int")

        self._index = index

    def eval(self, context):
        if type(context) is not list:
            raise ValueError("context is not list")
        if (self._index <= -len(context)) or (self._index >= len(context)):
            raise ValueError("index {} exceeds array length {}".format(self._index, len(context)))

        return context[self._index]


PARENTS = re.compile("\\^*", re.UNICODE)
FIRST = re.compile("(((\\w+)|(\"(([^\\\\\"]|\\\\[\\\\/bfnrt\"]|\\\\u[0-9a-fA-F]{4})*)\")))|(\\[(0|([1-9][0-9]*))\\])",
                   re.UNICODE)
REST = re.compile("(\\.((\\w+)|(\"(([^\\\\\"]|\\\\[\\\\/bfnrt\"]|\\\\u[0-9a-fA-F]{4})*)\")))|(\\[(0|([1-9][0-9]*))\\])",
                  re.UNICODE)

RANGE_NUMBER = re.compile("0|(-?[1-9][0-9]*)")


# >>> FIRST.match("x").groups()
# ('x', 'x', 'x', None, None, None, None, None, None)
# >>> FIRST.match('"x"').groups()
# ('"x"', '"x"', None, '"x"', 'x', 'x', None, None, None)
# >>> FIRST.match('[0]').groups()
# (None, None, None, None, None, None, '[0]', '0', None)

class Context(object):
    def __init__(self, context):
        from collections import deque
        self._contexts = deque((context,))
        self._escapes = deque()

    def __getitem__(self, path):
        if type(path) is not unicode:
            raise ValueError("path must be a unicode")

        if path == ".":
            if len(self._contexts) == 0:
                raise KeyError("no such context")
            return self._contexts[-1]

        m = PARENTS.match(path)
        assert m
        head = m.end()
        if head + 1 > len(self._contexts):
            raise KeyError("no such context")
        context = self._contexts[-1 - head]

        if head == len(path):
            return context

        m = FIRST.match(path, head)
        while True:
            if not m:
                raise ValueError("cannot parse path element: char {} in {}".format(head, path))
            if m.group(2):
                if type(context) is not dict:
                    raise KeyError("path element is not an object: char {} in {}".format(head, path))
                if m.group(3):
                    key = m.group(3)
                elif m.group(5):
                    key = m.group(5)
                else:
                    assert False
                if key not in context:
                    raise KeyError("key {} not found: char {} in {}".format(key, head, path))
                else:
                    context = context.get(key)
            elif m.group(7):
                if type(context) is not list:
                    raise KeyError("path element is not an object: char {} in {}".format(head, path))
                index = int(m.group(8))
                if index >= len(context):
                    raise KeyError("index {} out of bounds: char {} in {}".format(index, head, path))
                context = context[index]
            head = m.end()
            if head == len(path):
                return context
            m = REST.match(path, head)
# -*- coding: utf-8 -*-

"""
Iterable wrapper that allows pushback.

Safe for both Python 2 & 3
"""

import collections

from future.utils import implements_iterator


@implements_iterator
class PushbackIterable(object):
    def __init__(self, iterable):
        if not isinstance(iterable, collections.Iterable):
            raise ValueError('iterable is not iterable')

        self._iterable = iter(iterable)
        self._pushback = list()

    def pushback(self, element):
        self._pushback.append(element)

    def __iter__(self):
        return self

    def __next__(self):
        if self._pushback:
            return self._pushback.pop()
        return next(self._iterable)
# -*- coding: utf-8 -*-

"""
Tokenizes templates into text and tag tokens.

"""


class Token(object):
    pass


class TextToken(Token):
    def __init__(self, text):
        if type(text) is not unicode:
            raise ValueError("text is not unicode")

        self._text = text

    def text(self):
        return self._text

    def __repr__(self):
        return self._text


class TagToken(Token):
    def __init__(self, tag_body):
        if type(tag_body) is not unicode:
            raise ValueError("tag_body is not unicode")

        self._tag_body = tag_body

    def body(self):
        return self._tag_body

    def __repr__(self):
        return "{{" + self._tag_body + "}}"


def scan(template):
    """Tokenizes template and returns generator for tokens"""
    if type(template) is not unicode:
        raise ValueError("template is not unicode")

    head = 0
    tail = None

    while True:

        block = list()
        while True:
            tail = template.find(u'{{', head)
            if tail == -1:
                block.append(template[head:])
                yield TextToken(''.join(block))
                break
            elif template[tail + 2: tail + 4] == u'{{':
                block.append(template[head: tail + 2])
                head = tail + 4
            else:
                block.append(template[head: tail])
                yield TextToken(''.join(block))
                head = tail + 2
                break

        if tail == -1:
            break

        block = list()
        while True:
            tail = template.find(u'}}', head)
            if tail == -1:
                raise ValueError("tag not closed")
            elif template[tail + 2: tail + 4] == u'}}':
                block.append(template[head: tail + 2])
                head = tail + 4
            else:
                block.append(template[head: tail])
                yield TagToken(''.join(block))
                head = tail + 2
                break
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