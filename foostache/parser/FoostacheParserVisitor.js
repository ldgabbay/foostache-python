// Generated from FoostacheParser.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FoostacheParser.

function FoostacheParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FoostacheParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FoostacheParserVisitor.prototype.constructor = FoostacheParserVisitor;

// Visit a parse tree produced by FoostacheParser#template.
FoostacheParserVisitor.prototype.visitTemplate = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#statements.
FoostacheParserVisitor.prototype.visitStatements = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#statement.
FoostacheParserVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#rawText.
FoostacheParserVisitor.prototype.visitRawText = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#literal.
FoostacheParserVisitor.prototype.visitLiteral = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#literalText.
FoostacheParserVisitor.prototype.visitLiteralText = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#stringField.
FoostacheParserVisitor.prototype.visitStringField = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#numberField.
FoostacheParserVisitor.prototype.visitNumberField = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#inlineFilter.
FoostacheParserVisitor.prototype.visitInlineFilter = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#numberFormat.
FoostacheParserVisitor.prototype.visitNumberFormat = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#ifBlock.
FoostacheParserVisitor.prototype.visitIfBlock = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#ifTag.
FoostacheParserVisitor.prototype.visitIfTag = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#elseifBlock.
FoostacheParserVisitor.prototype.visitElseifBlock = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#elseifTag.
FoostacheParserVisitor.prototype.visitElseifTag = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#elseBlock.
FoostacheParserVisitor.prototype.visitElseBlock = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#orExpression.
FoostacheParserVisitor.prototype.visitOrExpression = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#andExpression.
FoostacheParserVisitor.prototype.visitAndExpression = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#boolExpression.
FoostacheParserVisitor.prototype.visitBoolExpression = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#existsExpression.
FoostacheParserVisitor.prototype.visitExistsExpression = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#notExpression.
FoostacheParserVisitor.prototype.visitNotExpression = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#parenExpression.
FoostacheParserVisitor.prototype.visitParenExpression = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#typeExpression.
FoostacheParserVisitor.prototype.visitTypeExpression = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#dotPath.
FoostacheParserVisitor.prototype.visitDotPath = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#caretPath.
FoostacheParserVisitor.prototype.visitCaretPath = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#idObjectKey.
FoostacheParserVisitor.prototype.visitIdObjectKey = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#qsObjectKey.
FoostacheParserVisitor.prototype.visitQsObjectKey = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#arrayIndex.
FoostacheParserVisitor.prototype.visitArrayIndex = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#withBlock.
FoostacheParserVisitor.prototype.visitWithBlock = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#iterateBlock.
FoostacheParserVisitor.prototype.visitIterateBlock = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#indexRange.
FoostacheParserVisitor.prototype.visitIndexRange = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#indexRangeB.
FoostacheParserVisitor.prototype.visitIndexRangeB = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#indexRangeC.
FoostacheParserVisitor.prototype.visitIndexRangeC = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#iterateClause.
FoostacheParserVisitor.prototype.visitIterateClause = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#iterateBeforeClause.
FoostacheParserVisitor.prototype.visitIterateBeforeClause = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#iterateAfterClause.
FoostacheParserVisitor.prototype.visitIterateAfterClause = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#iterateBetweenClause.
FoostacheParserVisitor.prototype.visitIterateBetweenClause = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#iterateElseClause.
FoostacheParserVisitor.prototype.visitIterateElseClause = function(ctx) {
};


// Visit a parse tree produced by FoostacheParser#filterBlock.
FoostacheParserVisitor.prototype.visitFilterBlock = function(ctx) {
};



exports.FoostacheParserVisitor = FoostacheParserVisitor;