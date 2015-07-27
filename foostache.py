#!/usr/bin/env python

import sys

import cjson

import foostache

def main(args):
    tree = foostache.parse(args[0])
    with open(args[1], "r") as f:
        context = cjson.decode(f.read())

    print foostache.eval(tree, context)

    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
