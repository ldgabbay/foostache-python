from __future__ import (absolute_import, division, print_function, unicode_literals)
from builtins import (ascii, bytes, chr, dict, filter, hex, input, int, map, next, oct, open, pow, range, round, str, super, zip)

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
    return "".join(stack)


html5._pattern = re.compile("[&<>\"']")
html5._hash = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"}


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
    # in Py2, type(s)=='unicode', type(s.encode('utf_8'))=='str'
    # in Py3, type(s)=='str'    , type(s.encode('utf_8'))=='bytes'
    # want 'bytes'
    s = bytes(s.encode("utf_8"))
    fragments = list()
    for ch in s:
        fragments.append(uri_component._map[ch])
    return "".join(fragments)


uri_component._map = list()
for i in range(256):
    uri_component._map.append("%{0:02X}".format(i))
# PY23 fix list(range(...))
for i in [45, 46, 95, 126] + list(range(48, 58)) + list(range(65, 91)) + list(range(97, 123)):
    uri_component._map[i] = chr(i)


# http://www.ecma-international.org/ecma-262/6.0/index.html#sec-static-semantics-sv

def js_string(s):
    fragments = list()
    # TODO optimize this loop
    for ch in s:
        fragments.append(js_string._map.get(ch, ch))
    return "".join(fragments)


js_string._map = {
    "\b": "\\b",        # \b  0x0008  BACKSPACE   <BS>
    "\t": "\\t",        # \t  0x0009  CHARACTER TABULATION    <HT>
    "\n": "\\n",        # \n  0x000A  LINE FEED (LF)  <LF>
    "\v": "\\v",        # \v  0x000B  LINE TABULATION <VT>
    "\f": "\\f",        # \f  0x000C  FORM FEED (FF)  <FF>
    "\r": "\\r",        # \r  0x000D  CARRIAGE RETURN (CR)    <CR>
    "\"": "\\\"",       # \"  0x0022  QUOTATION MARK  "
    "\'": "\\\'",       # \'  0x0027  APOSTROPHE  '
    "\\": "\\\\",       # \\  0x005C  REVERSE SOLIDUS \
}
