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
