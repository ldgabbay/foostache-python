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
