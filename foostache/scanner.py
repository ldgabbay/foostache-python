# -*- coding: utf-8 -*-

"""
Tokenizes templates into text and tag tokens.

"""


class Token(object):
    pass


class TextToken(Token):
    def __init__(self, text):
        if type(text) is not unicode:
            raise ValueError("text is not unicode")

        self._text = text

    def __repr__(self):
        return self._text


class TagToken(Token):
    def __init__(self, tag_body):
        if type(tag_body) is not unicode:
            raise ValueError("tag_body is not unicode")

        self._tag_body = tag_body

    def __repr__(self):
        return "{{" + self._tag_body + "}}"


def scan(template):
    """Tokenizes template and returns generator for tokens"""
    if type(template) is not unicode:
        raise ValueError("template is not unicode")

    head = 0
    tail = None

    while True:

        block = list()
        while True:
            tail = template.find(u'{{', head)
            if tail == -1:
                block.append(template[head:])
                yield TextToken(''.join(block))
                break
            elif template[tail + 2: tail + 4] == u'{{':
                block.append(template[head: tail + 2])
                head = tail + 4
            else:
                block.append(template[head: tail])
                yield TextToken(''.join(block))
                head = tail + 2
                break

        if tail == -1:
            break

        block = list()
        while True:
            tail = template.find(u'}}', head)
            if tail == -1:
                raise ValueError("tag not closed")
            elif template[tail + 2: tail + 4] == u'}}':
                block.append(template[head: tail + 2])
                head = tail + 4
            else:
                block.append(template[head: tail])
                yield TagToken(''.join(block))
                head = tail + 2
                break
