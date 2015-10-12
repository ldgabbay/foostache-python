#!/usr/bin/env python

import codecs
import sys

import cjson

import foostache

def main(args):
    with open(args[0], 'rb') as f:
        bytes = f.read()
        data = codecs.decode(bytes, 'utf_8')

    with open(args[1], 'rb') as f:
        context = cjson.decode(f.read())

    template = foostache.Template(data)
    print template.render(context)

    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
