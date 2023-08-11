from __future__ import (absolute_import, division, print_function, unicode_literals)
from builtins import (ascii, bytes, chr, dict, filter, hex, input, int, map, next, oct, open, pow, range, round, str, super, zip)

import os
import unittest

import json

import foostache


class FoostacheTestCase(unittest.TestCase):

    def setUp(self):
        here = os.path.abspath(os.path.dirname(__file__))
        with open(os.path.join(here, "language", "examples", "sample1.fs"), encoding="utf_8") as f:
            self.sample1fs = f.read()
        with open(os.path.join(here, "language", "examples", "sample1.json"), "rb") as f:
            self.sample1json = json.load(f)
        with open(os.path.join(here, "language", "examples", "sample1.output"), encoding="utf_8") as f:
            self.sample1output = f.read()
        self.maxDiff = None

    def test_sample1(self):
        template = foostache.Template(self.sample1fs)
        output = template.render(self.sample1json)
        self.assertEqual(self.sample1output, output)


if __name__ == "__main__":
    unittest.main()
