#coding:utf_8

import unittest
import os
import sys
if sys.version_info[0] == 2:
    from io import open

import ujson

import foostache


class FoostacheTestCase(unittest.TestCase):

    def setUp(self):
        here = os.path.abspath(os.path.dirname(__file__))
        with open(os.path.join(here, 'language', 'examples', 'sample1.fs'), encoding='utf_8') as f:
            self.sample1fs = f.read()
        with open(os.path.join(here, 'language', 'examples', 'sample1.json'), encoding='utf_8') as f:
            self.sample1json = ujson.decode(f.read())
        with open(os.path.join(here, 'language', 'examples', 'sample1.output'), encoding='utf_8') as f:
            self.sample1output = f.read()
        self.maxDiff = None

    def test_sample1(self):
        template = foostache.Template(self.sample1fs)
        output = template.render(self.sample1json)
        self.assertEqual(self.sample1output, output)


if __name__ == '__main__':
    unittest.main()
