# -*- coding: utf-8 -*-

import antlr4

import parser.FoostacheLexer as FoostacheLexer
import parser.FoostacheParser as FoostacheParser
import parser.FoostacheParserListener as FoostacheParserListener
from visitor import Visitor


class Template(object):
    class Printer(FoostacheParserListener.FoostacheParserListener):
        def __init__(self):
            super(Template.Printer, self).__init__()
            self.indent = 0

        def enterEveryRule(self, ctx):
            print ' ' * self.indent + "{}: {}".format(type(ctx).__name__[:-7], ctx.getText())
            self.indent += 1

        def exitEveryRule(self, ctx):
            self.indent -= 1


    def __init__(self, data):
        if not isinstance(data, unicode):
            raise ValueError('data is not unicode')

        input_stream = antlr4.InputStream(data)
        lexer = FoostacheLexer.FoostacheLexer(input_stream)
        token_stream = antlr4.CommonTokenStream(lexer)
        parser = FoostacheParser.FoostacheParser(token_stream)
        self._tree = parser.template()

    def dump(self):
        printer = Template.Printer()
        walker = antlr4.ParseTreeWalker()
        walker.walk(printer, self._tree)

    def render(self, context):
        v = Visitor(context)
        return v.visit(self._tree)
