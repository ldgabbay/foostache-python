# -*- coding: utf-8 -*-

import antlr4

import parser.FoostacheParserListener as FoostacheParserListener


class Printer(FoostacheParserListener.FoostacheParserListener):
    def __init__(self):
        super(Printer, self).__init__()
        self.indent = 0

    def enterEveryRule(self, ctx):
        print ' ' * self.indent + "{}: {}".format(type(ctx).__name__, ctx.getText())
        self.indent += 1

    def exitEveryRule(self, ctx):
        self.indent -= 1


def output(tree):
    printer = Printer()
    walker = antlr4.ParseTreeWalker()
    walker.walk(printer, tree)
    return 0
