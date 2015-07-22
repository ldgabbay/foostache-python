# -*- coding: utf-8 -*-


class Text(object):
    def __init__(self, text):
        if type(text) is not unicode:
            raise ValueError("text is not unicode")
        self._text = text

    def __repr__(self):
        return self._text


class Tag(object):
    def __init__(self, tag_body):
        if type(tag_body) is not unicode:
            raise ValueError("tag_body is not unicode")
        self._tag_body = tag_body

    def __repr__(self):
        return "{{" + self._tag_body + "}}"


def scan(template):
    if type(template) is not unicode:
        raise ValueError("template is not unicode")

    tokens = list()
    head = 0
    tail = None

    while True:

        block = list()
        while True:
            tail = template.find(u'{{', head)
            if tail == -1:
                block.append(template[head:])
                tokens.append(Text(''.join(block)))
                break
            elif template[tail + 2: tail + 4] == u'{{':
                block.append(template[head: tail + 2])
                head = tail + 4
            else:
                block.append(template[head: tail])
                tokens.append(Text(''.join(block)))
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
                tokens.append(Tag(''.join(block)))
                head = tail + 2
                break

    return tokens
