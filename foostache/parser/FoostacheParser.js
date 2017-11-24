// Generated from FoostacheParser.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FoostacheParserListener = require('./FoostacheParserListener').FoostacheParserListener;
var FoostacheParserVisitor = require('./FoostacheParserVisitor').FoostacheParserVisitor;

var grammarFileName = "FoostacheParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003.\u0139\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007",
    "\u0003C\n\u0003\f\u0003\u000e\u0003F\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004P\n\u0004\u0003\u0005\u0006\u0005S\n\u0005\r\u0005\u000e",
    "\u0005T\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0007\u0007\\\n\u0007\f\u0007\u000e\u0007_\u000b\u0007\u0003\b\u0003",
    "\b\u0003\b\u0007\bd\n\b\f\b\u000e\bg\u000b\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0007\to\n\t\f\t\u000e\tr\u000b\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b{\n\u000b",
    "\u0003\u000b\u0005\u000b~\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u0082\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0007",
    "\f\u0089\n\f\f\f\u000e\f\u008c\u000b\f\u0003\f\u0005\f\u008f\n\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00b6\n\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0007\u0011\u00be\n\u0011\f\u0011\u000e\u0011\u00c1\u000b\u0011\u0003",
    "\u0012\u0003\u0012\u0007\u0012\u00c5\n\u0012\f\u0012\u000e\u0012\u00c8",
    "\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u00cf\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00d7\n\u0012\f\u0012\u000e",
    "\u0012\u00da\u000b\u0012\u0005\u0012\u00dc\n\u0012\u0005\u0012\u00de",
    "\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00e3\n\u0013",
    "\f\u0013\u000e\u0013\u00e6\u000b\u0013\u0003\u0013\u0005\u0013\u00e9",
    "\n\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0007\u0016\u00fd\n\u0016\f\u0016\u000e\u0016\u0100\u000b",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0005",
    "\u0017\u0107\n\u0017\u0003\u0017\u0005\u0017\u010a\n\u0017\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u010e\n\u0018\u0003\u0018\u0005\u0018\u0111",
    "\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u011a\n\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0002\u0003 ",
    " \u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<\u0002\u0003\u0004\u0002,,..\u0141\u0002",
    ">\u0003\u0002\u0002\u0002\u0004D\u0003\u0002\u0002\u0002\u0006O\u0003",
    "\u0002\u0002\u0002\bR\u0003\u0002\u0002\u0002\nV\u0003\u0002\u0002\u0002",
    "\f]\u0003\u0002\u0002\u0002\u000e`\u0003\u0002\u0002\u0002\u0010j\u0003",
    "\u0002\u0002\u0002\u0012u\u0003\u0002\u0002\u0002\u0014x\u0003\u0002",
    "\u0002\u0002\u0016\u0085\u0003\u0002\u0002\u0002\u0018\u0094\u0003\u0002",
    "\u0002\u0002\u001a\u0099\u0003\u0002\u0002\u0002\u001c\u009c\u0003\u0002",
    "\u0002\u0002\u001e\u00a1\u0003\u0002\u0002\u0002 \u00b5\u0003\u0002",
    "\u0002\u0002\"\u00dd\u0003\u0002\u0002\u0002$\u00e8\u0003\u0002\u0002",
    "\u0002&\u00ea\u0003\u0002\u0002\u0002(\u00ec\u0003\u0002\u0002\u0002",
    "*\u00f5\u0003\u0002\u0002\u0002,\u0106\u0003\u0002\u0002\u0002.\u010b",
    "\u0003\u0002\u0002\u00020\u0112\u0003\u0002\u0002\u00022\u0119\u0003",
    "\u0002\u0002\u00024\u011b\u0003\u0002\u0002\u00026\u0120\u0003\u0002",
    "\u0002\u00028\u0125\u0003\u0002\u0002\u0002:\u012a\u0003\u0002\u0002",
    "\u0002<\u012f\u0003\u0002\u0002\u0002>?\u0005\u0004\u0003\u0002?@\u0007",
    "\u0002\u0002\u0003@\u0003\u0003\u0002\u0002\u0002AC\u0005\u0006\u0004",
    "\u0002BA\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002DE\u0003\u0002\u0002\u0002E\u0005\u0003\u0002\u0002\u0002",
    "FD\u0003\u0002\u0002\u0002GP\u0005\b\u0005\u0002HP\u0005\n\u0006\u0002",
    "IP\u0005\u000e\b\u0002JP\u0005\u0010\t\u0002KP\u0005\u0016\f\u0002L",
    "P\u0005(\u0015\u0002MP\u0005*\u0016\u0002NP\u0005<\u001f\u0002OG\u0003",
    "\u0002\u0002\u0002OH\u0003\u0002\u0002\u0002OI\u0003\u0002\u0002\u0002",
    "OJ\u0003\u0002\u0002\u0002OK\u0003\u0002\u0002\u0002OL\u0003\u0002\u0002",
    "\u0002OM\u0003\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002P\u0007\u0003",
    "\u0002\u0002\u0002QS\u0007\u0006\u0002\u0002RQ\u0003\u0002\u0002\u0002",
    "ST\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002",
    "\u0002U\t\u0003\u0002\u0002\u0002VW\u0007\u0004\u0002\u0002WX\u0005",
    "\f\u0007\u0002XY\u0007\u0007\u0002\u0002Y\u000b\u0003\u0002\u0002\u0002",
    "Z\\\u0007\b\u0002\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002",
    "\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\r\u0003",
    "\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002`a\u0007\u0005\u0002\u0002",
    "ae\u0005\"\u0012\u0002bd\u0005\u0012\n\u0002cb\u0003\u0002\u0002\u0002",
    "dg\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002",
    "\u0002fh\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002hi\u0007\t",
    "\u0002\u0002i\u000f\u0003\u0002\u0002\u0002jk\u0007\u0005\u0002\u0002",
    "kl\u0005\"\u0012\u0002lp\u0005\u0014\u000b\u0002mo\u0005\u0012\n\u0002",
    "nm\u0003\u0002\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002",
    "\u0002pq\u0003\u0002\u0002\u0002qs\u0003\u0002\u0002\u0002rp\u0003\u0002",
    "\u0002\u0002st\u0007\t\u0002\u0002t\u0011\u0003\u0002\u0002\u0002uv",
    "\u0007$\u0002\u0002vw\u0007\'\u0002\u0002w\u0013\u0003\u0002\u0002\u0002",
    "xz\u0007%\u0002\u0002y{\u0007(\u0002\u0002zy\u0003\u0002\u0002\u0002",
    "z{\u0003\u0002\u0002\u0002{}\u0003\u0002\u0002\u0002|~\u0007*\u0002",
    "\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0081\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0007)\u0002\u0002\u0080\u0082\u0007",
    "*\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0084\u0007",
    "+\u0002\u0002\u0084\u0015\u0003\u0002\u0002\u0002\u0085\u0086\u0005",
    "\u0018\r\u0002\u0086\u008a\u0005\u0004\u0003\u0002\u0087\u0089\u0005",
    "\u001a\u000e\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008c\u0003",
    "\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003",
    "\u0002\u0002\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003",
    "\u0002\u0002\u0002\u008d\u008f\u0005\u001e\u0010\u0002\u008e\u008d\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u0007\u0005\u0002\u0002\u0091\u0092\u0007",
    "\u0011\u0002\u0002\u0092\u0093\u0007\t\u0002\u0002\u0093\u0017\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0007\u0005\u0002\u0002\u0095\u0096\u0007",
    "\u0014\u0002\u0002\u0096\u0097\u0005 \u0011\u0002\u0097\u0098\u0007",
    "\t\u0002\u0002\u0098\u0019\u0003\u0002\u0002\u0002\u0099\u009a\u0005",
    "\u001c\u000f\u0002\u009a\u009b\u0005\u0004\u0003\u0002\u009b\u001b\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u0007\u0005\u0002\u0002\u009d\u009e\u0007",
    "\u0010\u0002\u0002\u009e\u009f\u0005 \u0011\u0002\u009f\u00a0\u0007",
    "\t\u0002\u0002\u00a0\u001d\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007",
    "\u0005\u0002\u0002\u00a2\u00a3\u0007\u000f\u0002\u0002\u00a3\u00a4\u0007",
    "\t\u0002\u0002\u00a4\u00a5\u0005\u0004\u0003\u0002\u00a5\u001f\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\b\u0011\u0001\u0002\u00a7\u00a8\u0007",
    "\u001b\u0002\u0002\u00a8\u00b6\u0005 \u0011\u0006\u00a9\u00b6\u0005",
    "\"\u0012\u0002\u00aa\u00ab\u0005\"\u0012\u0002\u00ab\u00ac\u0007\u0019",
    "\u0002\u0002\u00ac\u00b6\u0003\u0002\u0002\u0002\u00ad\u00ae\u0005\"",
    "\u0012\u0002\u00ae\u00af\u0007\u001a\u0002\u0002\u00af\u00b0\u0007\u0017",
    "\u0002\u0002\u00b0\u00b6\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007\u001d",
    "\u0002\u0002\u00b2\u00b3\u0005 \u0011\u0002\u00b3\u00b4\u0007\u001e",
    "\u0002\u0002\u00b4\u00b6\u0003\u0002\u0002\u0002\u00b5\u00a6\u0003\u0002",
    "\u0002\u0002\u00b5\u00a9\u0003\u0002\u0002\u0002\u00b5\u00aa\u0003\u0002",
    "\u0002\u0002\u00b5\u00ad\u0003\u0002\u0002\u0002\u00b5\u00b1\u0003\u0002",
    "\u0002\u0002\u00b6\u00bf\u0003\u0002\u0002\u0002\u00b7\u00b8\f\u0005",
    "\u0002\u0002\u00b8\u00b9\u0007\u0018\u0002\u0002\u00b9\u00be\u0005 ",
    "\u0011\u0006\u00ba\u00bb\f\u0004\u0002\u0002\u00bb\u00bc\u0007\u001c",
    "\u0002\u0002\u00bc\u00be\u0005 \u0011\u0005\u00bd\u00b7\u0003\u0002",
    "\u0002\u0002\u00bd\u00ba\u0003\u0002\u0002\u0002\u00be\u00c1\u0003\u0002",
    "\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002",
    "\u0002\u0002\u00c0!\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002",
    "\u0002\u0002\u00c2\u00de\u0007\u001f\u0002\u0002\u00c3\u00c5\u0007\"",
    "\u0002\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002",
    "\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002",
    "\u0002\u0002\u00c7\u00db\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002",
    "\u0002\u0002\u00c9\u00cf\u0005$\u0013\u0002\u00ca\u00cb\u0007 \u0002",
    "\u0002\u00cb\u00cc\u0005&\u0014\u0002\u00cc\u00cd\u0007!\u0002\u0002",
    "\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00c9\u0003\u0002\u0002\u0002",
    "\u00ce\u00ca\u0003\u0002\u0002\u0002\u00cf\u00d8\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0007\u001f\u0002\u0002\u00d1\u00d7\u0005$\u0013\u0002",
    "\u00d2\u00d3\u0007 \u0002\u0002\u00d3\u00d4\u0005&\u0014\u0002\u00d4",
    "\u00d5\u0007!\u0002\u0002\u00d5\u00d7\u0003\u0002\u0002\u0002\u00d6",
    "\u00d0\u0003\u0002\u0002\u0002\u00d6\u00d2\u0003\u0002\u0002\u0002\u00d7",
    "\u00da\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8",
    "\u00d9\u0003\u0002\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da",
    "\u00d8\u0003\u0002\u0002\u0002\u00db\u00ce\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0003\u0002\u0002\u0002\u00dc\u00de\u0003\u0002\u0002\u0002\u00dd",
    "\u00c2\u0003\u0002\u0002\u0002\u00dd\u00c6\u0003\u0002\u0002\u0002\u00de",
    "#\u0003\u0002\u0002\u0002\u00df\u00e9\u0007\'\u0002\u0002\u00e0\u00e4",
    "\u0007\u000b\u0002\u0002\u00e1\u00e3\t\u0002\u0002\u0002\u00e2\u00e1",
    "\u0003\u0002\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002\u0002\u00e4\u00e2",
    "\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e7",
    "\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e7\u00e9",
    "\u0007-\u0002\u0002\u00e8\u00df\u0003\u0002\u0002\u0002\u00e8\u00e0",
    "\u0003\u0002\u0002\u0002\u00e9%\u0003\u0002\u0002\u0002\u00ea\u00eb",
    "\u0007&\u0002\u0002\u00eb\'\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007",
    "\u0005\u0002\u0002\u00ed\u00ee\u0007\u0016\u0002\u0002\u00ee\u00ef\u0005",
    "\"\u0012\u0002\u00ef\u00f0\u0007\t\u0002\u0002\u00f0\u00f1\u0005\u0004",
    "\u0003\u0002\u00f1\u00f2\u0007\u0005\u0002\u0002\u00f2\u00f3\u0007\u0011",
    "\u0002\u0002\u00f3\u00f4\u0007\t\u0002\u0002\u00f4)\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\u0007\u0005\u0002\u0002\u00f6\u00f7\u0007\u0015\u0002",
    "\u0002\u00f7\u00f8\u0005\"\u0012\u0002\u00f8\u00f9\u0005,\u0017\u0002",
    "\u00f9\u00fa\u0007\t\u0002\u0002\u00fa\u00fe\u0005\u0004\u0003\u0002",
    "\u00fb\u00fd\u00052\u001a\u0002\u00fc\u00fb\u0003\u0002\u0002\u0002",
    "\u00fd\u0100\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0101\u0003\u0002\u0002\u0002",
    "\u0100\u00fe\u0003\u0002\u0002\u0002\u0101\u0102\u0007\u0005\u0002\u0002",
    "\u0102\u0103\u0007\u0011\u0002\u0002\u0103\u0104\u0007\t\u0002\u0002",
    "\u0104+\u0003\u0002\u0002\u0002\u0105\u0107\u0007&\u0002\u0002\u0106",
    "\u0105\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107",
    "\u0109\u0003\u0002\u0002\u0002\u0108\u010a\u0005.\u0018\u0002\u0109",
    "\u0108\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a",
    "-\u0003\u0002\u0002\u0002\u010b\u010d\u0007#\u0002\u0002\u010c\u010e",
    "\u0007&\u0002\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010d\u010e",
    "\u0003\u0002\u0002\u0002\u010e\u0110\u0003\u0002\u0002\u0002\u010f\u0111",
    "\u00050\u0019\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0110\u0111",
    "\u0003\u0002\u0002\u0002\u0111/\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0007#\u0002\u0002\u0113\u0114\u0007&\u0002\u0002\u01141\u0003\u0002",
    "\u0002\u0002\u0115\u011a\u00054\u001b\u0002\u0116\u011a\u00056\u001c",
    "\u0002\u0117\u011a\u00058\u001d\u0002\u0118\u011a\u0005:\u001e\u0002",
    "\u0119\u0115\u0003\u0002\u0002\u0002\u0119\u0116\u0003\u0002\u0002\u0002",
    "\u0119\u0117\u0003\u0002\u0002\u0002\u0119\u0118\u0003\u0002\u0002\u0002",
    "\u011a3\u0003\u0002\u0002\u0002\u011b\u011c\u0007\u0005\u0002\u0002",
    "\u011c\u011d\u0007\r\u0002\u0002\u011d\u011e\u0007\t\u0002\u0002\u011e",
    "\u011f\u0005\u0004\u0003\u0002\u011f5\u0003\u0002\u0002\u0002\u0120",
    "\u0121\u0007\u0005\u0002\u0002\u0121\u0122\u0007\f\u0002\u0002\u0122",
    "\u0123\u0007\t\u0002\u0002\u0123\u0124\u0005\u0004\u0003\u0002\u0124",
    "7\u0003\u0002\u0002\u0002\u0125\u0126\u0007\u0005\u0002\u0002\u0126",
    "\u0127\u0007\u000e\u0002\u0002\u0127\u0128\u0007\t\u0002\u0002\u0128",
    "\u0129\u0005\u0004\u0003\u0002\u01299\u0003\u0002\u0002\u0002\u012a",
    "\u012b\u0007\u0005\u0002\u0002\u012b\u012c\u0007\u000f\u0002\u0002\u012c",
    "\u012d\u0007\t\u0002\u0002\u012d\u012e\u0005\u0004\u0003\u0002\u012e",
    ";\u0003\u0002\u0002\u0002\u012f\u0130\u0007\u0005\u0002\u0002\u0130",
    "\u0131\u0007\u0013\u0002\u0002\u0131\u0132\u0007\'\u0002\u0002\u0132",
    "\u0133\u0007\t\u0002\u0002\u0133\u0134\u0005\u0004\u0003\u0002\u0134",
    "\u0135\u0007\u0005\u0002\u0002\u0135\u0136\u0007\u0011\u0002\u0002\u0136",
    "\u0137\u0007\t\u0002\u0002\u0137=\u0003\u0002\u0002\u0002\u001eDOT]",
    "epz}\u0081\u008a\u008e\u00b5\u00bd\u00bf\u00c6\u00ce\u00d6\u00d8\u00db",
    "\u00dd\u00e4\u00e8\u00fe\u0106\u0109\u010d\u0110\u0119"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', 'null', "'{{\"'", "'{{'", 'null', "'\"}}'", 
                     'null', "'}}'", 'null', 'null', "':after'", "':before'", 
                     "':between'", "':else'", "':elseif'", "':end'", "':escape'", 
                     "':filter'", "':if'", "':iterate'", "':with'", 'null', 
                     "'and'", "'exists'", "'is'", "'not'", "'or'", "'('", 
                     "')'", 'null', "'['", "']'", "'^'", "':'", "'|'", "'%'", 
                     'null', 'null', "'0'" ];

var symbolicNames = [ 'null', "COMMENT", "OPENL", "OPEN", "TEXT", "CLOSEL", 
                      "TEXTL", "CLOSE", "WS", "OPENQS", "AFTER", "BEFORE", 
                      "BETWEEN", "ELSE", "ELSEIF", "END", "ESCAPE", "FILTER", 
                      "IF", "ITERATE", "WITH", "TYPE", "AND", "EXISTS", 
                      "IS", "NOT", "OR", "LPAREN", "RPAREN", "DOT", "LBRACKET", 
                      "RBRACKET", "CARET", "COLON", "PIPE", "PERCENT", "INTEGER", 
                      "ID", "ZERO", "DOTN", "PINTEGERN", "NUMBER_SPECIFIER", 
                      "ESCCHARQS", "CLOSEQS", "CHARQS" ];

var ruleNames =  [ "template", "statements", "statement", "rawText", "literal", 
                   "literalText", "stringField", "numberField", "inlineFilter", 
                   "numberFormat", "ifBlock", "ifTag", "elseifBlock", "elseifTag", 
                   "elseBlock", "expression", "path", "objectKey", "arrayIndex", 
                   "withBlock", "iterateBlock", "indexRange", "indexRangeB", 
                   "indexRangeC", "iterateClause", "iterateBeforeClause", 
                   "iterateAfterClause", "iterateBetweenClause", "iterateElseClause", 
                   "filterBlock" ];

function FoostacheParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FoostacheParser.prototype = Object.create(antlr4.Parser.prototype);
FoostacheParser.prototype.constructor = FoostacheParser;

Object.defineProperty(FoostacheParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FoostacheParser.EOF = antlr4.Token.EOF;
FoostacheParser.COMMENT = 1;
FoostacheParser.OPENL = 2;
FoostacheParser.OPEN = 3;
FoostacheParser.TEXT = 4;
FoostacheParser.CLOSEL = 5;
FoostacheParser.TEXTL = 6;
FoostacheParser.CLOSE = 7;
FoostacheParser.WS = 8;
FoostacheParser.OPENQS = 9;
FoostacheParser.AFTER = 10;
FoostacheParser.BEFORE = 11;
FoostacheParser.BETWEEN = 12;
FoostacheParser.ELSE = 13;
FoostacheParser.ELSEIF = 14;
FoostacheParser.END = 15;
FoostacheParser.ESCAPE = 16;
FoostacheParser.FILTER = 17;
FoostacheParser.IF = 18;
FoostacheParser.ITERATE = 19;
FoostacheParser.WITH = 20;
FoostacheParser.TYPE = 21;
FoostacheParser.AND = 22;
FoostacheParser.EXISTS = 23;
FoostacheParser.IS = 24;
FoostacheParser.NOT = 25;
FoostacheParser.OR = 26;
FoostacheParser.LPAREN = 27;
FoostacheParser.RPAREN = 28;
FoostacheParser.DOT = 29;
FoostacheParser.LBRACKET = 30;
FoostacheParser.RBRACKET = 31;
FoostacheParser.CARET = 32;
FoostacheParser.COLON = 33;
FoostacheParser.PIPE = 34;
FoostacheParser.PERCENT = 35;
FoostacheParser.INTEGER = 36;
FoostacheParser.ID = 37;
FoostacheParser.ZERO = 38;
FoostacheParser.DOTN = 39;
FoostacheParser.PINTEGERN = 40;
FoostacheParser.NUMBER_SPECIFIER = 41;
FoostacheParser.ESCCHARQS = 42;
FoostacheParser.CLOSEQS = 43;
FoostacheParser.CHARQS = 44;

FoostacheParser.RULE_template = 0;
FoostacheParser.RULE_statements = 1;
FoostacheParser.RULE_statement = 2;
FoostacheParser.RULE_rawText = 3;
FoostacheParser.RULE_literal = 4;
FoostacheParser.RULE_literalText = 5;
FoostacheParser.RULE_stringField = 6;
FoostacheParser.RULE_numberField = 7;
FoostacheParser.RULE_inlineFilter = 8;
FoostacheParser.RULE_numberFormat = 9;
FoostacheParser.RULE_ifBlock = 10;
FoostacheParser.RULE_ifTag = 11;
FoostacheParser.RULE_elseifBlock = 12;
FoostacheParser.RULE_elseifTag = 13;
FoostacheParser.RULE_elseBlock = 14;
FoostacheParser.RULE_expression = 15;
FoostacheParser.RULE_path = 16;
FoostacheParser.RULE_objectKey = 17;
FoostacheParser.RULE_arrayIndex = 18;
FoostacheParser.RULE_withBlock = 19;
FoostacheParser.RULE_iterateBlock = 20;
FoostacheParser.RULE_indexRange = 21;
FoostacheParser.RULE_indexRangeB = 22;
FoostacheParser.RULE_indexRangeC = 23;
FoostacheParser.RULE_iterateClause = 24;
FoostacheParser.RULE_iterateBeforeClause = 25;
FoostacheParser.RULE_iterateAfterClause = 26;
FoostacheParser.RULE_iterateBetweenClause = 27;
FoostacheParser.RULE_iterateElseClause = 28;
FoostacheParser.RULE_filterBlock = 29;

function TemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_template;
    return this;
}

TemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TemplateContext.prototype.constructor = TemplateContext;

TemplateContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

TemplateContext.prototype.EOF = function() {
    return this.getToken(FoostacheParser.EOF, 0);
};

TemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterTemplate(this);
	}
};

TemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitTemplate(this);
	}
};

TemplateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitTemplate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.TemplateContext = TemplateContext;

FoostacheParser.prototype.template = function() {

    var localctx = new TemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FoostacheParser.RULE_template);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.statements();
        this.state = 61;
        this.match(FoostacheParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterStatements(this);
	}
};

StatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitStatements(this);
	}
};

StatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.StatementsContext = StatementsContext;

FoostacheParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FoostacheParser.RULE_statements);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 63;
                this.statement(); 
            }
            this.state = 68;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.rawText = function() {
    return this.getTypedRuleContext(RawTextContext,0);
};

StatementContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

StatementContext.prototype.stringField = function() {
    return this.getTypedRuleContext(StringFieldContext,0);
};

StatementContext.prototype.numberField = function() {
    return this.getTypedRuleContext(NumberFieldContext,0);
};

StatementContext.prototype.ifBlock = function() {
    return this.getTypedRuleContext(IfBlockContext,0);
};

StatementContext.prototype.withBlock = function() {
    return this.getTypedRuleContext(WithBlockContext,0);
};

StatementContext.prototype.iterateBlock = function() {
    return this.getTypedRuleContext(IterateBlockContext,0);
};

StatementContext.prototype.filterBlock = function() {
    return this.getTypedRuleContext(FilterBlockContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.StatementContext = StatementContext;

FoostacheParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FoostacheParser.RULE_statement);
    try {
        this.state = 77;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 69;
            this.rawText();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this.literal();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 71;
            this.stringField();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 72;
            this.numberField();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 73;
            this.ifBlock();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 74;
            this.withBlock();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 75;
            this.iterateBlock();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 76;
            this.filterBlock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RawTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_rawText;
    return this;
}

RawTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RawTextContext.prototype.constructor = RawTextContext;

RawTextContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.TEXT);
    } else {
        return this.getToken(FoostacheParser.TEXT, i);
    }
};


RawTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterRawText(this);
	}
};

RawTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitRawText(this);
	}
};

RawTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitRawText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.RawTextContext = RawTextContext;

FoostacheParser.prototype.rawText = function() {

    var localctx = new RawTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FoostacheParser.RULE_rawText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 79;
        		this.match(FoostacheParser.TEXT);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 82; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.OPENL = function() {
    return this.getToken(FoostacheParser.OPENL, 0);
};

LiteralContext.prototype.literalText = function() {
    return this.getTypedRuleContext(LiteralTextContext,0);
};

LiteralContext.prototype.CLOSEL = function() {
    return this.getToken(FoostacheParser.CLOSEL, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.LiteralContext = LiteralContext;

FoostacheParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FoostacheParser.RULE_literal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(FoostacheParser.OPENL);
        this.state = 85;
        this.literalText();
        this.state = 86;
        this.match(FoostacheParser.CLOSEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_literalText;
    return this;
}

LiteralTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralTextContext.prototype.constructor = LiteralTextContext;

LiteralTextContext.prototype.TEXTL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.TEXTL);
    } else {
        return this.getToken(FoostacheParser.TEXTL, i);
    }
};


LiteralTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterLiteralText(this);
	}
};

LiteralTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitLiteralText(this);
	}
};

LiteralTextContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitLiteralText(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.LiteralTextContext = LiteralTextContext;

FoostacheParser.prototype.literalText = function() {

    var localctx = new LiteralTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FoostacheParser.RULE_literalText);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FoostacheParser.TEXTL) {
            this.state = 88;
            this.match(FoostacheParser.TEXTL);
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_stringField;
    return this;
}

StringFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringFieldContext.prototype.constructor = StringFieldContext;

StringFieldContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

StringFieldContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

StringFieldContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

StringFieldContext.prototype.inlineFilter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InlineFilterContext);
    } else {
        return this.getTypedRuleContext(InlineFilterContext,i);
    }
};

StringFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterStringField(this);
	}
};

StringFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitStringField(this);
	}
};

StringFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitStringField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.StringFieldContext = StringFieldContext;

FoostacheParser.prototype.stringField = function() {

    var localctx = new StringFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FoostacheParser.RULE_stringField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(FoostacheParser.OPEN);
        this.state = 95;
        this.path();
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FoostacheParser.PIPE) {
            this.state = 96;
            this.inlineFilter();
            this.state = 101;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 102;
        this.match(FoostacheParser.CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_numberField;
    return this;
}

NumberFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberFieldContext.prototype.constructor = NumberFieldContext;

NumberFieldContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

NumberFieldContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

NumberFieldContext.prototype.numberFormat = function() {
    return this.getTypedRuleContext(NumberFormatContext,0);
};

NumberFieldContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

NumberFieldContext.prototype.inlineFilter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InlineFilterContext);
    } else {
        return this.getTypedRuleContext(InlineFilterContext,i);
    }
};

NumberFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterNumberField(this);
	}
};

NumberFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitNumberField(this);
	}
};

NumberFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitNumberField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.NumberFieldContext = NumberFieldContext;

FoostacheParser.prototype.numberField = function() {

    var localctx = new NumberFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FoostacheParser.RULE_numberField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(FoostacheParser.OPEN);
        this.state = 105;
        this.path();
        this.state = 106;
        this.numberFormat();
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FoostacheParser.PIPE) {
            this.state = 107;
            this.inlineFilter();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 113;
        this.match(FoostacheParser.CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InlineFilterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_inlineFilter;
    return this;
}

InlineFilterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InlineFilterContext.prototype.constructor = InlineFilterContext;

InlineFilterContext.prototype.PIPE = function() {
    return this.getToken(FoostacheParser.PIPE, 0);
};

InlineFilterContext.prototype.ID = function() {
    return this.getToken(FoostacheParser.ID, 0);
};

InlineFilterContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterInlineFilter(this);
	}
};

InlineFilterContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitInlineFilter(this);
	}
};

InlineFilterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitInlineFilter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.InlineFilterContext = InlineFilterContext;

FoostacheParser.prototype.inlineFilter = function() {

    var localctx = new InlineFilterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FoostacheParser.RULE_inlineFilter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(FoostacheParser.PIPE);
        this.state = 116;
        this.match(FoostacheParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberFormatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_numberFormat;
    this.flags = null; // Token
    this.width = null; // Token
    this.precision = null; // Token
    this.specifier = null; // Token
    return this;
}

NumberFormatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberFormatContext.prototype.constructor = NumberFormatContext;

NumberFormatContext.prototype.PERCENT = function() {
    return this.getToken(FoostacheParser.PERCENT, 0);
};

NumberFormatContext.prototype.NUMBER_SPECIFIER = function() {
    return this.getToken(FoostacheParser.NUMBER_SPECIFIER, 0);
};

NumberFormatContext.prototype.DOTN = function() {
    return this.getToken(FoostacheParser.DOTN, 0);
};

NumberFormatContext.prototype.ZERO = function() {
    return this.getToken(FoostacheParser.ZERO, 0);
};

NumberFormatContext.prototype.PINTEGERN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.PINTEGERN);
    } else {
        return this.getToken(FoostacheParser.PINTEGERN, i);
    }
};


NumberFormatContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterNumberFormat(this);
	}
};

NumberFormatContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitNumberFormat(this);
	}
};

NumberFormatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitNumberFormat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.NumberFormatContext = NumberFormatContext;

FoostacheParser.prototype.numberFormat = function() {

    var localctx = new NumberFormatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FoostacheParser.RULE_numberFormat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(FoostacheParser.PERCENT);
        this.state = 120;
        _la = this._input.LA(1);
        if(_la===FoostacheParser.ZERO) {
            this.state = 119;
            localctx.flags = this.match(FoostacheParser.ZERO);
        }

        this.state = 123;
        _la = this._input.LA(1);
        if(_la===FoostacheParser.PINTEGERN) {
            this.state = 122;
            localctx.width = this.match(FoostacheParser.PINTEGERN);
        }

        this.state = 127;
        _la = this._input.LA(1);
        if(_la===FoostacheParser.DOTN) {
            this.state = 125;
            this.match(FoostacheParser.DOTN);
            this.state = 126;
            localctx.precision = this.match(FoostacheParser.PINTEGERN);
        }

        this.state = 129;
        localctx.specifier = this.match(FoostacheParser.NUMBER_SPECIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_ifBlock;
    return this;
}

IfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfBlockContext.prototype.constructor = IfBlockContext;

IfBlockContext.prototype.ifTag = function() {
    return this.getTypedRuleContext(IfTagContext,0);
};

IfBlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

IfBlockContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

IfBlockContext.prototype.END = function() {
    return this.getToken(FoostacheParser.END, 0);
};

IfBlockContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

IfBlockContext.prototype.elseifBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseifBlockContext);
    } else {
        return this.getTypedRuleContext(ElseifBlockContext,i);
    }
};

IfBlockContext.prototype.elseBlock = function() {
    return this.getTypedRuleContext(ElseBlockContext,0);
};

IfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIfBlock(this);
	}
};

IfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIfBlock(this);
	}
};

IfBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIfBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IfBlockContext = IfBlockContext;

FoostacheParser.prototype.ifBlock = function() {

    var localctx = new IfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FoostacheParser.RULE_ifBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.ifTag();
        this.state = 132;
        this.statements();
        this.state = 136;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 133;
                this.elseifBlock(); 
            }
            this.state = 138;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

        this.state = 140;
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 139;
            this.elseBlock();

        }
        this.state = 142;
        this.match(FoostacheParser.OPEN);
        this.state = 143;
        this.match(FoostacheParser.END);
        this.state = 144;
        this.match(FoostacheParser.CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfTagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_ifTag;
    return this;
}

IfTagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfTagContext.prototype.constructor = IfTagContext;

IfTagContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

IfTagContext.prototype.IF = function() {
    return this.getToken(FoostacheParser.IF, 0);
};

IfTagContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfTagContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

IfTagContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIfTag(this);
	}
};

IfTagContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIfTag(this);
	}
};

IfTagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIfTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IfTagContext = IfTagContext;

FoostacheParser.prototype.ifTag = function() {

    var localctx = new IfTagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FoostacheParser.RULE_ifTag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(FoostacheParser.OPEN);
        this.state = 147;
        this.match(FoostacheParser.IF);
        this.state = 148;
        this.expression(0);
        this.state = 149;
        this.match(FoostacheParser.CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseifBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_elseifBlock;
    return this;
}

ElseifBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseifBlockContext.prototype.constructor = ElseifBlockContext;

ElseifBlockContext.prototype.elseifTag = function() {
    return this.getTypedRuleContext(ElseifTagContext,0);
};

ElseifBlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ElseifBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterElseifBlock(this);
	}
};

ElseifBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitElseifBlock(this);
	}
};

ElseifBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitElseifBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.ElseifBlockContext = ElseifBlockContext;

FoostacheParser.prototype.elseifBlock = function() {

    var localctx = new ElseifBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FoostacheParser.RULE_elseifBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.elseifTag();
        this.state = 152;
        this.statements();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseifTagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_elseifTag;
    return this;
}

ElseifTagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseifTagContext.prototype.constructor = ElseifTagContext;

ElseifTagContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

ElseifTagContext.prototype.ELSEIF = function() {
    return this.getToken(FoostacheParser.ELSEIF, 0);
};

ElseifTagContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ElseifTagContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

ElseifTagContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterElseifTag(this);
	}
};

ElseifTagContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitElseifTag(this);
	}
};

ElseifTagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitElseifTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.ElseifTagContext = ElseifTagContext;

FoostacheParser.prototype.elseifTag = function() {

    var localctx = new ElseifTagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FoostacheParser.RULE_elseifTag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(FoostacheParser.OPEN);
        this.state = 155;
        this.match(FoostacheParser.ELSEIF);
        this.state = 156;
        this.expression(0);
        this.state = 157;
        this.match(FoostacheParser.CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_elseBlock;
    return this;
}

ElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBlockContext.prototype.constructor = ElseBlockContext;

ElseBlockContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

ElseBlockContext.prototype.ELSE = function() {
    return this.getToken(FoostacheParser.ELSE, 0);
};

ElseBlockContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

ElseBlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterElseBlock(this);
	}
};

ElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitElseBlock(this);
	}
};

ElseBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitElseBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.ElseBlockContext = ElseBlockContext;

FoostacheParser.prototype.elseBlock = function() {

    var localctx = new ElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FoostacheParser.RULE_elseBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(FoostacheParser.OPEN);
        this.state = 160;
        this.match(FoostacheParser.ELSE);
        this.state = 161;
        this.match(FoostacheParser.CLOSE);
        this.state = 162;
        this.statements();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function OrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.expr1 = null; // ExpressionContext;
    this.expr2 = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OrExpressionContext.prototype.constructor = OrExpressionContext;

FoostacheParser.OrExpressionContext = OrExpressionContext;

OrExpressionContext.prototype.OR = function() {
    return this.getToken(FoostacheParser.OR, 0);
};

OrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
OrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterOrExpression(this);
	}
};

OrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitOrExpression(this);
	}
};

OrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.expr1 = null; // ExpressionContext;
    this.expr2 = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AndExpressionContext.prototype.constructor = AndExpressionContext;

FoostacheParser.AndExpressionContext = AndExpressionContext;

AndExpressionContext.prototype.AND = function() {
    return this.getToken(FoostacheParser.AND, 0);
};

AndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterAndExpression(this);
	}
};

AndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitAndExpression(this);
	}
};

AndExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitAndExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BoolExpressionContext.prototype.constructor = BoolExpressionContext;

FoostacheParser.BoolExpressionContext = BoolExpressionContext;

BoolExpressionContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};
BoolExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterBoolExpression(this);
	}
};

BoolExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitBoolExpression(this);
	}
};

BoolExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitBoolExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExistsExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExistsExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ExistsExpressionContext.prototype.constructor = ExistsExpressionContext;

FoostacheParser.ExistsExpressionContext = ExistsExpressionContext;

ExistsExpressionContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

ExistsExpressionContext.prototype.EXISTS = function() {
    return this.getToken(FoostacheParser.EXISTS, 0);
};
ExistsExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterExistsExpression(this);
	}
};

ExistsExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitExistsExpression(this);
	}
};

ExistsExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitExistsExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

FoostacheParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.NOT = function() {
    return this.getToken(FoostacheParser.NOT, 0);
};

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterNotExpression(this);
	}
};

NotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitNotExpression(this);
	}
};

NotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitNotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ParenExpressionContext.prototype.constructor = ParenExpressionContext;

FoostacheParser.ParenExpressionContext = ParenExpressionContext;

ParenExpressionContext.prototype.LPAREN = function() {
    return this.getToken(FoostacheParser.LPAREN, 0);
};

ParenExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParenExpressionContext.prototype.RPAREN = function() {
    return this.getToken(FoostacheParser.RPAREN, 0);
};
ParenExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterParenExpression(this);
	}
};

ParenExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitParenExpression(this);
	}
};

ParenExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitParenExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TypeExpressionContext.prototype.constructor = TypeExpressionContext;

FoostacheParser.TypeExpressionContext = TypeExpressionContext;

TypeExpressionContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

TypeExpressionContext.prototype.IS = function() {
    return this.getToken(FoostacheParser.IS, 0);
};

TypeExpressionContext.prototype.TYPE = function() {
    return this.getToken(FoostacheParser.TYPE, 0);
};
TypeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterTypeExpression(this);
	}
};

TypeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitTypeExpression(this);
	}
};

TypeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitTypeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FoostacheParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, FoostacheParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 165;
            this.match(FoostacheParser.NOT);
            this.state = 166;
            this.expression(4);
            break;

        case 2:
            localctx = new BoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 167;
            this.path();
            break;

        case 3:
            localctx = new ExistsExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 168;
            this.path();
            this.state = 169;
            this.match(FoostacheParser.EXISTS);
            break;

        case 4:
            localctx = new TypeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 171;
            this.path();
            this.state = 172;
            this.match(FoostacheParser.IS);
            this.state = 173;
            this.match(FoostacheParser.TYPE);
            break;

        case 5:
            localctx = new ParenExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 175;
            this.match(FoostacheParser.LPAREN);
            this.state = 176;
            this.expression(0);
            this.state = 177;
            this.match(FoostacheParser.RPAREN);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 189;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 187;
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.expr1 = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FoostacheParser.RULE_expression);
                    this.state = 181;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 182;
                    this.match(FoostacheParser.AND);
                    this.state = 183;
                    localctx.expr2 = this.expression(4);
                    break;

                case 2:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.expr1 = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FoostacheParser.RULE_expression);
                    this.state = 184;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 185;
                    this.match(FoostacheParser.OR);
                    this.state = 186;
                    localctx.expr2 = this.expression(3);
                    break;

                } 
            }
            this.state = 191;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function PathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_path;
    return this;
}

PathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathContext.prototype.constructor = PathContext;


 
PathContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CaretPathContext(parser, ctx) {
	PathContext.call(this, parser);
    PathContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaretPathContext.prototype = Object.create(PathContext.prototype);
CaretPathContext.prototype.constructor = CaretPathContext;

FoostacheParser.CaretPathContext = CaretPathContext;

CaretPathContext.prototype.CARET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.CARET);
    } else {
        return this.getToken(FoostacheParser.CARET, i);
    }
};


CaretPathContext.prototype.objectKey = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectKeyContext);
    } else {
        return this.getTypedRuleContext(ObjectKeyContext,i);
    }
};

CaretPathContext.prototype.LBRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.LBRACKET);
    } else {
        return this.getToken(FoostacheParser.LBRACKET, i);
    }
};


CaretPathContext.prototype.arrayIndex = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayIndexContext);
    } else {
        return this.getTypedRuleContext(ArrayIndexContext,i);
    }
};

CaretPathContext.prototype.RBRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.RBRACKET);
    } else {
        return this.getToken(FoostacheParser.RBRACKET, i);
    }
};


CaretPathContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.DOT);
    } else {
        return this.getToken(FoostacheParser.DOT, i);
    }
};

CaretPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterCaretPath(this);
	}
};

CaretPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitCaretPath(this);
	}
};

CaretPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitCaretPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DotPathContext(parser, ctx) {
	PathContext.call(this, parser);
    PathContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DotPathContext.prototype = Object.create(PathContext.prototype);
DotPathContext.prototype.constructor = DotPathContext;

FoostacheParser.DotPathContext = DotPathContext;

DotPathContext.prototype.DOT = function() {
    return this.getToken(FoostacheParser.DOT, 0);
};
DotPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterDotPath(this);
	}
};

DotPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitDotPath(this);
	}
};

DotPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitDotPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FoostacheParser.PathContext = PathContext;

FoostacheParser.prototype.path = function() {

    var localctx = new PathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FoostacheParser.RULE_path);
    try {
        this.state = 219;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DotPathContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 192;
            this.match(FoostacheParser.DOT);
            break;

        case 2:
            localctx = new CaretPathContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 196;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 193;
                    this.match(FoostacheParser.CARET); 
                }
                this.state = 198;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
            }

            this.state = 217;
            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
            if(la_===1) {
                this.state = 204;
                switch(this._input.LA(1)) {
                case FoostacheParser.OPENQS:
                case FoostacheParser.ID:
                    this.state = 199;
                    this.objectKey();
                    break;
                case FoostacheParser.LBRACKET:
                    this.state = 200;
                    this.match(FoostacheParser.LBRACKET);
                    this.state = 201;
                    this.arrayIndex();
                    this.state = 202;
                    this.match(FoostacheParser.RBRACKET);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 214;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 212;
                        switch(this._input.LA(1)) {
                        case FoostacheParser.DOT:
                            this.state = 206;
                            this.match(FoostacheParser.DOT);
                            this.state = 207;
                            this.objectKey();
                            break;
                        case FoostacheParser.LBRACKET:
                            this.state = 208;
                            this.match(FoostacheParser.LBRACKET);
                            this.state = 209;
                            this.arrayIndex();
                            this.state = 210;
                            this.match(FoostacheParser.RBRACKET);
                            break;
                        default:
                            throw new antlr4.error.NoViableAltException(this);
                        } 
                    }
                    this.state = 216;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
                }


            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectKeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_objectKey;
    return this;
}

ObjectKeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectKeyContext.prototype.constructor = ObjectKeyContext;


 
ObjectKeyContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IdObjectKeyContext(parser, ctx) {
	ObjectKeyContext.call(this, parser);
    ObjectKeyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdObjectKeyContext.prototype = Object.create(ObjectKeyContext.prototype);
IdObjectKeyContext.prototype.constructor = IdObjectKeyContext;

FoostacheParser.IdObjectKeyContext = IdObjectKeyContext;

IdObjectKeyContext.prototype.ID = function() {
    return this.getToken(FoostacheParser.ID, 0);
};
IdObjectKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIdObjectKey(this);
	}
};

IdObjectKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIdObjectKey(this);
	}
};

IdObjectKeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIdObjectKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function QsObjectKeyContext(parser, ctx) {
	ObjectKeyContext.call(this, parser);
    ObjectKeyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QsObjectKeyContext.prototype = Object.create(ObjectKeyContext.prototype);
QsObjectKeyContext.prototype.constructor = QsObjectKeyContext;

FoostacheParser.QsObjectKeyContext = QsObjectKeyContext;

QsObjectKeyContext.prototype.OPENQS = function() {
    return this.getToken(FoostacheParser.OPENQS, 0);
};

QsObjectKeyContext.prototype.CLOSEQS = function() {
    return this.getToken(FoostacheParser.CLOSEQS, 0);
};

QsObjectKeyContext.prototype.CHARQS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.CHARQS);
    } else {
        return this.getToken(FoostacheParser.CHARQS, i);
    }
};


QsObjectKeyContext.prototype.ESCCHARQS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.ESCCHARQS);
    } else {
        return this.getToken(FoostacheParser.ESCCHARQS, i);
    }
};

QsObjectKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterQsObjectKey(this);
	}
};

QsObjectKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitQsObjectKey(this);
	}
};

QsObjectKeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitQsObjectKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FoostacheParser.ObjectKeyContext = ObjectKeyContext;

FoostacheParser.prototype.objectKey = function() {

    var localctx = new ObjectKeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FoostacheParser.RULE_objectKey);
    var _la = 0; // Token type
    try {
        this.state = 230;
        switch(this._input.LA(1)) {
        case FoostacheParser.ID:
            localctx = new IdObjectKeyContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 221;
            this.match(FoostacheParser.ID);
            break;
        case FoostacheParser.OPENQS:
            localctx = new QsObjectKeyContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 222;
            this.match(FoostacheParser.OPENQS);
            this.state = 226;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===FoostacheParser.ESCCHARQS || _la===FoostacheParser.CHARQS) {
                this.state = 223;
                _la = this._input.LA(1);
                if(!(_la===FoostacheParser.ESCCHARQS || _la===FoostacheParser.CHARQS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 229;
            this.match(FoostacheParser.CLOSEQS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayIndexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_arrayIndex;
    return this;
}

ArrayIndexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayIndexContext.prototype.constructor = ArrayIndexContext;

ArrayIndexContext.prototype.INTEGER = function() {
    return this.getToken(FoostacheParser.INTEGER, 0);
};

ArrayIndexContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterArrayIndex(this);
	}
};

ArrayIndexContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitArrayIndex(this);
	}
};

ArrayIndexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitArrayIndex(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.ArrayIndexContext = ArrayIndexContext;

FoostacheParser.prototype.arrayIndex = function() {

    var localctx = new ArrayIndexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FoostacheParser.RULE_arrayIndex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(FoostacheParser.INTEGER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WithBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_withBlock;
    return this;
}

WithBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithBlockContext.prototype.constructor = WithBlockContext;

WithBlockContext.prototype.OPEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.OPEN);
    } else {
        return this.getToken(FoostacheParser.OPEN, i);
    }
};


WithBlockContext.prototype.WITH = function() {
    return this.getToken(FoostacheParser.WITH, 0);
};

WithBlockContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

WithBlockContext.prototype.CLOSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.CLOSE);
    } else {
        return this.getToken(FoostacheParser.CLOSE, i);
    }
};


WithBlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

WithBlockContext.prototype.END = function() {
    return this.getToken(FoostacheParser.END, 0);
};

WithBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterWithBlock(this);
	}
};

WithBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitWithBlock(this);
	}
};

WithBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitWithBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.WithBlockContext = WithBlockContext;

FoostacheParser.prototype.withBlock = function() {

    var localctx = new WithBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FoostacheParser.RULE_withBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(FoostacheParser.OPEN);
        this.state = 235;
        this.match(FoostacheParser.WITH);
        this.state = 236;
        this.path();
        this.state = 237;
        this.match(FoostacheParser.CLOSE);
        this.state = 238;
        this.statements();
        this.state = 239;
        this.match(FoostacheParser.OPEN);
        this.state = 240;
        this.match(FoostacheParser.END);
        this.state = 241;
        this.match(FoostacheParser.CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IterateBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_iterateBlock;
    return this;
}

IterateBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterateBlockContext.prototype.constructor = IterateBlockContext;

IterateBlockContext.prototype.OPEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.OPEN);
    } else {
        return this.getToken(FoostacheParser.OPEN, i);
    }
};


IterateBlockContext.prototype.ITERATE = function() {
    return this.getToken(FoostacheParser.ITERATE, 0);
};

IterateBlockContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

IterateBlockContext.prototype.indexRange = function() {
    return this.getTypedRuleContext(IndexRangeContext,0);
};

IterateBlockContext.prototype.CLOSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.CLOSE);
    } else {
        return this.getToken(FoostacheParser.CLOSE, i);
    }
};


IterateBlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

IterateBlockContext.prototype.END = function() {
    return this.getToken(FoostacheParser.END, 0);
};

IterateBlockContext.prototype.iterateClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IterateClauseContext);
    } else {
        return this.getTypedRuleContext(IterateClauseContext,i);
    }
};

IterateBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIterateBlock(this);
	}
};

IterateBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIterateBlock(this);
	}
};

IterateBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIterateBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IterateBlockContext = IterateBlockContext;

FoostacheParser.prototype.iterateBlock = function() {

    var localctx = new IterateBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FoostacheParser.RULE_iterateBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(FoostacheParser.OPEN);
        this.state = 244;
        this.match(FoostacheParser.ITERATE);
        this.state = 245;
        this.path();
        this.state = 246;
        this.indexRange();
        this.state = 247;
        this.match(FoostacheParser.CLOSE);
        this.state = 248;
        this.statements();
        this.state = 252;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 249;
                this.iterateClause(); 
            }
            this.state = 254;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
        }

        this.state = 255;
        this.match(FoostacheParser.OPEN);
        this.state = 256;
        this.match(FoostacheParser.END);
        this.state = 257;
        this.match(FoostacheParser.CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IndexRangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_indexRange;
    return this;
}

IndexRangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexRangeContext.prototype.constructor = IndexRangeContext;

IndexRangeContext.prototype.INTEGER = function() {
    return this.getToken(FoostacheParser.INTEGER, 0);
};

IndexRangeContext.prototype.indexRangeB = function() {
    return this.getTypedRuleContext(IndexRangeBContext,0);
};

IndexRangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIndexRange(this);
	}
};

IndexRangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIndexRange(this);
	}
};

IndexRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIndexRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IndexRangeContext = IndexRangeContext;

FoostacheParser.prototype.indexRange = function() {

    var localctx = new IndexRangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FoostacheParser.RULE_indexRange);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        _la = this._input.LA(1);
        if(_la===FoostacheParser.INTEGER) {
            this.state = 259;
            this.match(FoostacheParser.INTEGER);
        }

        this.state = 263;
        _la = this._input.LA(1);
        if(_la===FoostacheParser.COLON) {
            this.state = 262;
            this.indexRangeB();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IndexRangeBContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_indexRangeB;
    return this;
}

IndexRangeBContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexRangeBContext.prototype.constructor = IndexRangeBContext;

IndexRangeBContext.prototype.COLON = function() {
    return this.getToken(FoostacheParser.COLON, 0);
};

IndexRangeBContext.prototype.INTEGER = function() {
    return this.getToken(FoostacheParser.INTEGER, 0);
};

IndexRangeBContext.prototype.indexRangeC = function() {
    return this.getTypedRuleContext(IndexRangeCContext,0);
};

IndexRangeBContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIndexRangeB(this);
	}
};

IndexRangeBContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIndexRangeB(this);
	}
};

IndexRangeBContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIndexRangeB(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IndexRangeBContext = IndexRangeBContext;

FoostacheParser.prototype.indexRangeB = function() {

    var localctx = new IndexRangeBContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, FoostacheParser.RULE_indexRangeB);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(FoostacheParser.COLON);
        this.state = 267;
        _la = this._input.LA(1);
        if(_la===FoostacheParser.INTEGER) {
            this.state = 266;
            this.match(FoostacheParser.INTEGER);
        }

        this.state = 270;
        _la = this._input.LA(1);
        if(_la===FoostacheParser.COLON) {
            this.state = 269;
            this.indexRangeC();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IndexRangeCContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_indexRangeC;
    return this;
}

IndexRangeCContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexRangeCContext.prototype.constructor = IndexRangeCContext;

IndexRangeCContext.prototype.COLON = function() {
    return this.getToken(FoostacheParser.COLON, 0);
};

IndexRangeCContext.prototype.INTEGER = function() {
    return this.getToken(FoostacheParser.INTEGER, 0);
};

IndexRangeCContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIndexRangeC(this);
	}
};

IndexRangeCContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIndexRangeC(this);
	}
};

IndexRangeCContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIndexRangeC(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IndexRangeCContext = IndexRangeCContext;

FoostacheParser.prototype.indexRangeC = function() {

    var localctx = new IndexRangeCContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, FoostacheParser.RULE_indexRangeC);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        this.match(FoostacheParser.COLON);
        this.state = 273;
        this.match(FoostacheParser.INTEGER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IterateClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_iterateClause;
    return this;
}

IterateClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterateClauseContext.prototype.constructor = IterateClauseContext;

IterateClauseContext.prototype.iterateBeforeClause = function() {
    return this.getTypedRuleContext(IterateBeforeClauseContext,0);
};

IterateClauseContext.prototype.iterateAfterClause = function() {
    return this.getTypedRuleContext(IterateAfterClauseContext,0);
};

IterateClauseContext.prototype.iterateBetweenClause = function() {
    return this.getTypedRuleContext(IterateBetweenClauseContext,0);
};

IterateClauseContext.prototype.iterateElseClause = function() {
    return this.getTypedRuleContext(IterateElseClauseContext,0);
};

IterateClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIterateClause(this);
	}
};

IterateClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIterateClause(this);
	}
};

IterateClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIterateClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IterateClauseContext = IterateClauseContext;

FoostacheParser.prototype.iterateClause = function() {

    var localctx = new IterateClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, FoostacheParser.RULE_iterateClause);
    try {
        this.state = 279;
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 275;
            this.iterateBeforeClause();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 276;
            this.iterateAfterClause();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 277;
            this.iterateBetweenClause();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 278;
            this.iterateElseClause();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IterateBeforeClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_iterateBeforeClause;
    return this;
}

IterateBeforeClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterateBeforeClauseContext.prototype.constructor = IterateBeforeClauseContext;

IterateBeforeClauseContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

IterateBeforeClauseContext.prototype.BEFORE = function() {
    return this.getToken(FoostacheParser.BEFORE, 0);
};

IterateBeforeClauseContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

IterateBeforeClauseContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

IterateBeforeClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIterateBeforeClause(this);
	}
};

IterateBeforeClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIterateBeforeClause(this);
	}
};

IterateBeforeClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIterateBeforeClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IterateBeforeClauseContext = IterateBeforeClauseContext;

FoostacheParser.prototype.iterateBeforeClause = function() {

    var localctx = new IterateBeforeClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, FoostacheParser.RULE_iterateBeforeClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(FoostacheParser.OPEN);
        this.state = 282;
        this.match(FoostacheParser.BEFORE);
        this.state = 283;
        this.match(FoostacheParser.CLOSE);
        this.state = 284;
        this.statements();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IterateAfterClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_iterateAfterClause;
    return this;
}

IterateAfterClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterateAfterClauseContext.prototype.constructor = IterateAfterClauseContext;

IterateAfterClauseContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

IterateAfterClauseContext.prototype.AFTER = function() {
    return this.getToken(FoostacheParser.AFTER, 0);
};

IterateAfterClauseContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

IterateAfterClauseContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

IterateAfterClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIterateAfterClause(this);
	}
};

IterateAfterClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIterateAfterClause(this);
	}
};

IterateAfterClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIterateAfterClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IterateAfterClauseContext = IterateAfterClauseContext;

FoostacheParser.prototype.iterateAfterClause = function() {

    var localctx = new IterateAfterClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, FoostacheParser.RULE_iterateAfterClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(FoostacheParser.OPEN);
        this.state = 287;
        this.match(FoostacheParser.AFTER);
        this.state = 288;
        this.match(FoostacheParser.CLOSE);
        this.state = 289;
        this.statements();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IterateBetweenClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_iterateBetweenClause;
    return this;
}

IterateBetweenClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterateBetweenClauseContext.prototype.constructor = IterateBetweenClauseContext;

IterateBetweenClauseContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

IterateBetweenClauseContext.prototype.BETWEEN = function() {
    return this.getToken(FoostacheParser.BETWEEN, 0);
};

IterateBetweenClauseContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

IterateBetweenClauseContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

IterateBetweenClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIterateBetweenClause(this);
	}
};

IterateBetweenClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIterateBetweenClause(this);
	}
};

IterateBetweenClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIterateBetweenClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IterateBetweenClauseContext = IterateBetweenClauseContext;

FoostacheParser.prototype.iterateBetweenClause = function() {

    var localctx = new IterateBetweenClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, FoostacheParser.RULE_iterateBetweenClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.match(FoostacheParser.OPEN);
        this.state = 292;
        this.match(FoostacheParser.BETWEEN);
        this.state = 293;
        this.match(FoostacheParser.CLOSE);
        this.state = 294;
        this.statements();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IterateElseClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_iterateElseClause;
    return this;
}

IterateElseClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterateElseClauseContext.prototype.constructor = IterateElseClauseContext;

IterateElseClauseContext.prototype.OPEN = function() {
    return this.getToken(FoostacheParser.OPEN, 0);
};

IterateElseClauseContext.prototype.ELSE = function() {
    return this.getToken(FoostacheParser.ELSE, 0);
};

IterateElseClauseContext.prototype.CLOSE = function() {
    return this.getToken(FoostacheParser.CLOSE, 0);
};

IterateElseClauseContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

IterateElseClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterIterateElseClause(this);
	}
};

IterateElseClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitIterateElseClause(this);
	}
};

IterateElseClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitIterateElseClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.IterateElseClauseContext = IterateElseClauseContext;

FoostacheParser.prototype.iterateElseClause = function() {

    var localctx = new IterateElseClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, FoostacheParser.RULE_iterateElseClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(FoostacheParser.OPEN);
        this.state = 297;
        this.match(FoostacheParser.ELSE);
        this.state = 298;
        this.match(FoostacheParser.CLOSE);
        this.state = 299;
        this.statements();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FilterBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FoostacheParser.RULE_filterBlock;
    this.filterName = null; // Token
    return this;
}

FilterBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FilterBlockContext.prototype.constructor = FilterBlockContext;

FilterBlockContext.prototype.OPEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.OPEN);
    } else {
        return this.getToken(FoostacheParser.OPEN, i);
    }
};


FilterBlockContext.prototype.FILTER = function() {
    return this.getToken(FoostacheParser.FILTER, 0);
};

FilterBlockContext.prototype.CLOSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FoostacheParser.CLOSE);
    } else {
        return this.getToken(FoostacheParser.CLOSE, i);
    }
};


FilterBlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

FilterBlockContext.prototype.END = function() {
    return this.getToken(FoostacheParser.END, 0);
};

FilterBlockContext.prototype.ID = function() {
    return this.getToken(FoostacheParser.ID, 0);
};

FilterBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.enterFilterBlock(this);
	}
};

FilterBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FoostacheParserListener ) {
        listener.exitFilterBlock(this);
	}
};

FilterBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FoostacheParserVisitor ) {
        return visitor.visitFilterBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FoostacheParser.FilterBlockContext = FilterBlockContext;

FoostacheParser.prototype.filterBlock = function() {

    var localctx = new FilterBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, FoostacheParser.RULE_filterBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(FoostacheParser.OPEN);
        this.state = 302;
        this.match(FoostacheParser.FILTER);
        this.state = 303;
        localctx.filterName = this.match(FoostacheParser.ID);
        this.state = 304;
        this.match(FoostacheParser.CLOSE);
        this.state = 305;
        this.statements();
        this.state = 306;
        this.match(FoostacheParser.OPEN);
        this.state = 307;
        this.match(FoostacheParser.END);
        this.state = 308;
        this.match(FoostacheParser.CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FoostacheParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 15:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FoostacheParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FoostacheParser = FoostacheParser;
