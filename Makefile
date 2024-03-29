ROOT_DIR := $(shell pwd)

PKG_NAME := $(shell python ./setup.py --name)
PKG_VERSION := $(shell python ./setup.py --version)

SOURCE_DIR = language/antlr4
PY2_TARGET_DIR = src/foostache/py2parser
PY3_TARGET_DIR = src/foostache/py3parser

BUILD_DIR = build
DIST_DIR = dist
CLASSPATH_DIR = classpath

SOURCE_FILES := $(shell find src -type f -name \*.py | sed 's: :\\ :g')

ANTLR4_JAR = $(CLASSPATH_DIR)/antlr4.jar

PARSER_FILES = \
	$(PY2_TARGET_DIR)/FoostacheLexer.interp \
	$(PY2_TARGET_DIR)/FoostacheLexer.py \
	$(PY2_TARGET_DIR)/FoostacheLexer.tokens \
	$(PY2_TARGET_DIR)/FoostacheParser.interp \
	$(PY2_TARGET_DIR)/FoostacheParser.py \
	$(PY2_TARGET_DIR)/FoostacheParser.tokens \
	$(PY2_TARGET_DIR)/FoostacheParserListener.py \
	$(PY2_TARGET_DIR)/FoostacheParserVisitor.py \
	$(PY3_TARGET_DIR)/FoostacheLexer.interp \
	$(PY3_TARGET_DIR)/FoostacheLexer.py \
	$(PY3_TARGET_DIR)/FoostacheLexer.tokens \
	$(PY3_TARGET_DIR)/FoostacheParser.interp \
	$(PY3_TARGET_DIR)/FoostacheParser.py \
	$(PY3_TARGET_DIR)/FoostacheParser.tokens \
	$(PY3_TARGET_DIR)/FoostacheParserListener.py \
	$(PY3_TARGET_DIR)/FoostacheParserVisitor.py


.PHONY : all clean distclean dist test pypi pypitest

all : $(PARSER_FILES)

$(SOURCE_DIR)/FoostacheLexer.g4 $(SOURCE_DIR)/FoostacheParser.g4 :
	git submodule update --init --recursive

$(PARSER_FILES) : $(ANTLR4_JAR) $(SOURCE_DIR)/FoostacheLexer.g4 $(SOURCE_DIR)/FoostacheParser.g4
	cd $(SOURCE_DIR); java -Xmx500M -cp $(ROOT_DIR)/$(ANTLR4_JAR) org.antlr.v4.Tool -Dlanguage=Python2 -visitor -o $(ROOT_DIR)/$(PY2_TARGET_DIR) FoostacheLexer.g4 FoostacheParser.g4
	cd $(SOURCE_DIR); java -Xmx500M -cp $(ROOT_DIR)/$(ANTLR4_JAR) org.antlr.v4.Tool -Dlanguage=Python3 -visitor -o $(ROOT_DIR)/$(PY3_TARGET_DIR) FoostacheLexer.g4 FoostacheParser.g4

$(ANTLR4_JAR) :
	mkdir -p $(CLASSPATH_DIR)
	curl -sSL https://www.antlr.org/download/antlr-4.13.0-complete.jar -o $(ANTLR4_JAR)

distclean : clean
	rm -f $(PARSER_FILES)
	rm -rf .tox $(CLASSPATH_DIR)

clean :
	rm -rf .eggs $(BUILD_DIR) $(DIST_DIR) src/$(PKG_NAME).egg-info
	find . -name __pycache__ -type d -print0 | xargs -0 rm -rf
	find . -name \*.pyc -type f -delete

dist2 : $(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py2-none-any.whl

dist : $(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py3-none-any.whl

$(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION).tar.gz : $(PARSER_FILES) $(SOURCE_FILES)
	python ./setup.py sdist --dist-dir $(DIST_DIR)

$(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py2-none-any.whl : $(PARSER_FILES) $(SOURCE_FILES)
	python2 ./setup.py bdist_wheel --dist-dir $(DIST_DIR) --bdist-dir $(BUILD_DIR)

$(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py3-none-any.whl : $(PARSER_FILES) $(SOURCE_FILES)
	python3 ./setup.py bdist_wheel --dist-dir $(DIST_DIR) --bdist-dir $(BUILD_DIR)

test2 : all
	python2 ./setup.py test

test : all
	python3 ./setup.py test

pypi2 : dist2
	twine upload -r pypi $(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py2-none-any.whl

pypi : dist
	twine upload -r pypi $(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py3-none-any.whl

testpypi2 : dist2
	twine upload -r testpypi $(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py2-none-any.whl

testpypi : dist
	twine upload -r testpypi $(DIST_DIR)/$(PKG_NAME)-$(PKG_VERSION)-py3-none-any.whl
