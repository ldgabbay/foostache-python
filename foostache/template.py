# -*- coding: utf-8 -*-

import antlr4

import parser.FoostacheLexer as FoostacheLexer
import parser.FoostacheParser as FoostacheParser
import parser.FoostacheParserListener as FoostacheParserListener
from visitor import Visitor


class Template(object):
    class Printer(FoostacheParserListener.FoostacheParserListener):
        def __init__(self, indent=None):
            super(Template.Printer, self).__init__()
            self._indent = indent
            if not self._indent:
                self._indent = 2
            self._total_indent = 0

        def enterEveryRule(self, ctx):
            print ' ' * self._total_indent + "{}: {}".format(type(ctx).__name__[:-7], ctx.getText())
            self._total_indent += self._indent

        def exitEveryRule(self, ctx):
            self._total_indent -= self._indent


    def __init__(self, data):
        if not isinstance(data, unicode):
            raise ValueError('data is not unicode')

        input_stream = antlr4.InputStream(data)
        lexer = FoostacheLexer.FoostacheLexer(input_stream)
        token_stream = antlr4.CommonTokenStream(lexer)
        parser = FoostacheParser.FoostacheParser(token_stream)
        self._tree = parser.template()

    def dump(self, indent=None):
        printer = Template.Printer(indent)
        walker = antlr4.ParseTreeWalker()
        walker.walk(printer, self._tree)

    def render(self, context):
        v = Visitor(context)
        return v.visit(self._tree)
