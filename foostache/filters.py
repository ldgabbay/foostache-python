# -*- coding: utf-8 -*-

import re


# http://www.w3.org/TR/html5/syntax.html#data-state
#   for most cases (data state) only need to escape "&" and "<"
# http://www.w3.org/TR/html5/syntax.html#attribute-value-(double-quoted)-state
#   for attribute values within double quotes, only need to escape "&" and "\""

def html5(s):
    stack = list()
    head = 0
    while True:
        m = html5._pattern.search(s, head)
        if not m:
            stack.append(s[head:])
            break
        stack.append(s[head:m.start()])
        stack.append(html5._hash[m.group()])
        head = m.end()
    return u"".join(stack)


html5._pattern = re.compile("[&<>\"']")
html5._hash = {u"&": u"&amp;", u"<": u"&lt;", u">": u"&gt;", u"\"": u"&quot;", u"'": u"&#39;"}


# https://tools.ietf.org/html/rfc3986#section-2
# expects 8-bit stream encoded as UTF-8:
#   When a new URI scheme defines a component that represents textual
#   data consisting of characters from the Universal Character Set [UCS],
#   the data should first be encoded as octets according to the UTF-8
#   character encoding [STD63]; then only those octets that do not
#   correspond to characters in the unreserved set should be percent-
#   encoded.  For example, the character A would be represented as "A",
#   the character LATIN CAPITAL LETTER A WITH GRAVE would be represented
#   as "%C3%80", and the character KATAKANA LETTER A would be represented
#   as "%E3%82%A2".
# https://docs.python.org/2/library/codecs.html#standard-encodings

def uri_component(s):
    s = s.encode("utf_8")
    fragments = list()
    for ch in s:
        fragments.append(uri_component._map[ord(ch)])
    return u''.join(fragments)


uri_component._map = list()
for i in range(256):
    uri_component._map.append("%{0:02X}".format(i))
for i in [45, 46, 95, 126] + range(48, 58) + range(65, 91) + range(97, 123):
    uri_component._map[i] = chr(i)