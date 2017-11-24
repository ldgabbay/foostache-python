// Generated from FoostacheParser.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FoostacheParser.
function FoostacheParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FoostacheParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FoostacheParserListener.prototype.constructor = FoostacheParserListener;

// Enter a parse tree produced by FoostacheParser#template.
FoostacheParserListener.prototype.enterTemplate = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#template.
FoostacheParserListener.prototype.exitTemplate = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#statements.
FoostacheParserListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#statements.
FoostacheParserListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#statement.
FoostacheParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#statement.
FoostacheParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#rawText.
FoostacheParserListener.prototype.enterRawText = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#rawText.
FoostacheParserListener.prototype.exitRawText = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#literal.
FoostacheParserListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#literal.
FoostacheParserListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#literalText.
FoostacheParserListener.prototype.enterLiteralText = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#literalText.
FoostacheParserListener.prototype.exitLiteralText = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#stringField.
FoostacheParserListener.prototype.enterStringField = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#stringField.
FoostacheParserListener.prototype.exitStringField = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#numberField.
FoostacheParserListener.prototype.enterNumberField = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#numberField.
FoostacheParserListener.prototype.exitNumberField = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#inlineFilter.
FoostacheParserListener.prototype.enterInlineFilter = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#inlineFilter.
FoostacheParserListener.prototype.exitInlineFilter = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#numberFormat.
FoostacheParserListener.prototype.enterNumberFormat = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#numberFormat.
FoostacheParserListener.prototype.exitNumberFormat = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#ifBlock.
FoostacheParserListener.prototype.enterIfBlock = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#ifBlock.
FoostacheParserListener.prototype.exitIfBlock = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#ifTag.
FoostacheParserListener.prototype.enterIfTag = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#ifTag.
FoostacheParserListener.prototype.exitIfTag = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#elseifBlock.
FoostacheParserListener.prototype.enterElseifBlock = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#elseifBlock.
FoostacheParserListener.prototype.exitElseifBlock = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#elseifTag.
FoostacheParserListener.prototype.enterElseifTag = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#elseifTag.
FoostacheParserListener.prototype.exitElseifTag = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#elseBlock.
FoostacheParserListener.prototype.enterElseBlock = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#elseBlock.
FoostacheParserListener.prototype.exitElseBlock = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#orExpression.
FoostacheParserListener.prototype.enterOrExpression = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#orExpression.
FoostacheParserListener.prototype.exitOrExpression = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#andExpression.
FoostacheParserListener.prototype.enterAndExpression = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#andExpression.
FoostacheParserListener.prototype.exitAndExpression = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#boolExpression.
FoostacheParserListener.prototype.enterBoolExpression = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#boolExpression.
FoostacheParserListener.prototype.exitBoolExpression = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#existsExpression.
FoostacheParserListener.prototype.enterExistsExpression = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#existsExpression.
FoostacheParserListener.prototype.exitExistsExpression = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#notExpression.
FoostacheParserListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#notExpression.
FoostacheParserListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#parenExpression.
FoostacheParserListener.prototype.enterParenExpression = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#parenExpression.
FoostacheParserListener.prototype.exitParenExpression = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#typeExpression.
FoostacheParserListener.prototype.enterTypeExpression = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#typeExpression.
FoostacheParserListener.prototype.exitTypeExpression = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#dotPath.
FoostacheParserListener.prototype.enterDotPath = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#dotPath.
FoostacheParserListener.prototype.exitDotPath = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#caretPath.
FoostacheParserListener.prototype.enterCaretPath = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#caretPath.
FoostacheParserListener.prototype.exitCaretPath = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#idObjectKey.
FoostacheParserListener.prototype.enterIdObjectKey = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#idObjectKey.
FoostacheParserListener.prototype.exitIdObjectKey = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#qsObjectKey.
FoostacheParserListener.prototype.enterQsObjectKey = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#qsObjectKey.
FoostacheParserListener.prototype.exitQsObjectKey = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#arrayIndex.
FoostacheParserListener.prototype.enterArrayIndex = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#arrayIndex.
FoostacheParserListener.prototype.exitArrayIndex = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#withBlock.
FoostacheParserListener.prototype.enterWithBlock = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#withBlock.
FoostacheParserListener.prototype.exitWithBlock = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#iterateBlock.
FoostacheParserListener.prototype.enterIterateBlock = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#iterateBlock.
FoostacheParserListener.prototype.exitIterateBlock = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#indexRange.
FoostacheParserListener.prototype.enterIndexRange = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#indexRange.
FoostacheParserListener.prototype.exitIndexRange = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#indexRangeB.
FoostacheParserListener.prototype.enterIndexRangeB = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#indexRangeB.
FoostacheParserListener.prototype.exitIndexRangeB = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#indexRangeC.
FoostacheParserListener.prototype.enterIndexRangeC = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#indexRangeC.
FoostacheParserListener.prototype.exitIndexRangeC = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#iterateClause.
FoostacheParserListener.prototype.enterIterateClause = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#iterateClause.
FoostacheParserListener.prototype.exitIterateClause = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#iterateBeforeClause.
FoostacheParserListener.prototype.enterIterateBeforeClause = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#iterateBeforeClause.
FoostacheParserListener.prototype.exitIterateBeforeClause = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#iterateAfterClause.
FoostacheParserListener.prototype.enterIterateAfterClause = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#iterateAfterClause.
FoostacheParserListener.prototype.exitIterateAfterClause = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#iterateBetweenClause.
FoostacheParserListener.prototype.enterIterateBetweenClause = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#iterateBetweenClause.
FoostacheParserListener.prototype.exitIterateBetweenClause = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#iterateElseClause.
FoostacheParserListener.prototype.enterIterateElseClause = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#iterateElseClause.
FoostacheParserListener.prototype.exitIterateElseClause = function(ctx) {
};


// Enter a parse tree produced by FoostacheParser#filterBlock.
FoostacheParserListener.prototype.enterFilterBlock = function(ctx) {
};

// Exit a parse tree produced by FoostacheParser#filterBlock.
FoostacheParserListener.prototype.exitFilterBlock = function(ctx) {
};



exports.FoostacheParserListener = FoostacheParserListener;