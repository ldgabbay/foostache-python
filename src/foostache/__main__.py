from __future__ import (absolute_import, division, print_function, unicode_literals)
from builtins import (ascii, bytes, chr, dict, filter, hex, input, int, map, next, oct, open, pow, range, round, str, super, zip)

import os
import sys

import ujson

from . import Template


def print_error(message=None):
    print("{0}: {1}".format("foostache", message), file=sys.stderr)


def print_usage():
    print("usage: {0} template-file context-json-file".format("foostache"), file=sys.stderr)


def main(args=None):
    if args is None:
        args = sys.argv

    try:
        
        args = args[1:]

        if len(args) < 2:
            print_usage()
            return os.EX_USAGE

        with open(args[0], encoding="utf_8") as f:
            data = f.read()

        with open(args[1], "rb") as f:
            context = ujson.decode(f.read())

        template = Template(data)
        print(template.render(context), end="")
        return os.EX_OK

    except Exception as e:
        print_error(str(e))
        return os.EX_SOFTWARE


if __name__ == "__main__":
    sys.exit(main(sys.argv))
