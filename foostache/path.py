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
