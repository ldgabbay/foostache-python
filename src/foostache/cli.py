# -*- coding: utf-8 -*-

from __future__ import (absolute_import, division, print_function, unicode_literals)
from builtins import (ascii, bytes, chr, dict, filter, hex, input, int, map, next, oct, open, pow, range, round, str, super, zip)

import os
import sys

import ujson

import foostache

def usage(message=None):
    if message:
        print("{0}: {1}".format(os.path.basename(sys.argv[0]), message), file=sys.stderr)
    print("usage: {0} template-file context-json-file".format(os.path.basename(sys.argv[0])), file=sys.stderr)


def main(args=None):
    if args is None:
        args = sys.argv[1:]

    if len(args) < 2:
        usage()
        return -1

    try:
        with open(args[0], encoding='utf_8') as f:
            data = f.read()

        with open(args[1], 'rb') as f:
            context = ujson.decode(f.read())

        template = foostache.Template(data)
        print(template.render(context), end='')
        return 0
    except Exception as e:
        usage(str(e))
        return -1
