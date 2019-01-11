ROOT_DIR := $(shell pwd)

PKG_NAME := $(shell python ./setup.py --name)
PKG_VERSION := $(shell python ./setup.py --version)

SOURCE_DIR = language/antlr4
TARGET_DIR = foostache/parser

BUILD_DIR = build
DIST_DIR = dist
CLASSPATH_DIR = classpath

ANTLR4_JAR = $(CLASSPATH_DIR)/antlr-4.7.2-complete.jar

PARSER_FILES = \
	$(TARGET_DIR)/FoostacheLexer.interp \
	$(TARGET_DIR)/FoostacheLexer.py \
	$(TARGET_DIR)/FoostacheLexer.tokens \
	$(TARGET_DIR)/FoostacheParser.interp \
	$(TARGET_DIR)/FoostacheParser.py \
	$(TARGET_DIR)/FoostacheParser.tokens \
	$(TARGET_DIR)/FoostacheParserListener.py \
	$(TARGET_DIR)/FoostacheParserVisitor.py


.PHONY : all clean distclean dist test pypi pypitest

all : $(PARSER_FILES)

$(PARSER_FILES) : $(ANTLR4_JAR) $(SOURCE_DIR)/FoostacheLexer.g4 $(SOURCE_DIR)/FoostacheParser.g4
	mkdir -p $(TARGET_DIR)
	cd $(SOURCE_DIR); java -Xmx500M -cp $(ROOT_DIR)/$(ANTLR4_JAR) org.antlr.v4.Tool -Dlanguage=Python2 -visitor -o $(ROOT_DIR)/$(TARGET_DIR) FoostacheLexer.g4 FoostacheParser.g4

$(ANTLR4_JAR) :
	mkdir -p $(CLASSPATH_DIR)
	curl -sSL https://www.antlr.org/download/antlr-4.7.2-complete.jar -o $(ANTLR4_JAR)

distclean : clean
	rm -f $(PARSER_FILES) $(ANTLR4_JAR)
	find . -name \*.pyc -delete

clean :
	rm -rf .eggs $(BUILD_DIR) $(DIST_DIR) $(PKG_NAME).egg-info

dist : $(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION).tar.gz $(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py2-none-any.whl

$(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION).tar.gz : $(PARSER_FILES)
	python ./setup.py sdist --dist-dir $(DIST_DIR)

$(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py2-none-any.whl : $(PARSER_FILES)
	python ./setup.py bdist_wheel --dist-dir $(DIST_DIR) --bdist-dir $(BUILD_DIR)

test : all
	python ./setup.py test

pypi : dist
	twine upload -r pypi $(DIST_DIR)/*

testpypi : dist
	twine upload -r testpypi $(DIST_DIR)/*
