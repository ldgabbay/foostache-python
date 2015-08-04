# -*- coding: utf-8 -*-

import antlr4

import parser.FoostacheLexer as FoostacheLexer
import parser.FoostacheParser as FoostacheParser
from visitor import Visitor


class Template(object):
    def __init__(self, data):
        if not isinstance(data, unicode):
            raise ValueError('data is not unicode')

        input_stream = antlr4.InputStream(data)
        lexer = FoostacheLexer.FoostacheLexer(input_stream)
        token_stream = antlr4.CommonTokenStream(lexer)
        parser = FoostacheParser.FoostacheParser(token_stream)
        self._tree = parser.template()

    def render(self, context):
        v = Visitor(context)
        return v.visit(self._tree)
