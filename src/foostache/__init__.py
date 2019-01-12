# -*- coding: utf-8 -*-

from __future__ import (absolute_import, division, print_function, unicode_literals)
from builtins import (ascii, bytes, chr, dict, filter, hex, input, int, map, next, oct, open, pow, range, round, str, super, zip)

__version__ = '1.2.0'

import sys

if sys.version_info[0] == 2:
    from .py2parser import (FoostacheLexer, FoostacheParser, FoostacheParserListener, FoostacheParserVisitor)
elif sys.version_info[0] == 3:
    from .py3parser import (FoostacheLexer, FoostacheParser, FoostacheParserListener, FoostacheParserVisitor)
else:
    raise RuntimeError("Unhandled Python version.")

from .template import Template
