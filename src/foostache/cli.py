# -*- coding: utf-8 -*-

from __future__ import (absolute_import, division, print_function, unicode_literals)
from builtins import (ascii, bytes, chr, dict, filter, hex, input, int, map, next, oct, open, pow, range, round, str, super, zip)

import sys

import ujson

import foostache

def main(args=None):
    if args is None:
        args = sys.argv[1:]
    with open(args[0], encoding='utf_8') as f:
        data = f.read()

    with open(args[1], 'rb') as f:
        context = ujson.decode(f.read())

    template = foostache.Template(data)
    print(template.render(context), end='')

    return 0
