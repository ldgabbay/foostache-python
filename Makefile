CLASSPATH_DIR=classpath
ANTLR4_JAR=$(CLASSPATH_DIR)/antlr-4.7.2-complete.jar

ROOT_DIR=$(shell pwd)
SOURCE_DIR=language/antlr4

TARGET_DIR=foostache/parser

BUILD_DIR=build
DIST_DIR=dist

generated = \
	$(TARGET_DIR)/FoostacheLexer.interp \
	$(TARGET_DIR)/FoostacheLexer.py \
	$(TARGET_DIR)/FoostacheLexer.tokens \
	$(TARGET_DIR)/FoostacheParser.interp \
	$(TARGET_DIR)/FoostacheParser.py \
	$(TARGET_DIR)/FoostacheParser.tokens \
	$(TARGET_DIR)/FoostacheParserListener.py \
	$(TARGET_DIR)/FoostacheParserVisitor.py


.PHONY : all clean distclean dist test pypi pypitest

all : $(generated)

$(generated) : $(ANTLR4_JAR) $(SOURCE_DIR)/FoostacheLexer.g4 $(SOURCE_DIR)/FoostacheParser.g4
	mkdir -p $(TARGET_DIR)
	cd $(SOURCE_DIR); java -Xmx500M -cp $(ROOT_DIR)/$(ANTLR4_JAR) org.antlr.v4.Tool -Dlanguage=Python2 -visitor -o $(ROOT_DIR)/$(TARGET_DIR) FoostacheLexer.g4 FoostacheParser.g4

$(ANTLR4_JAR) :
	mkdir -p $(CLASSPATH_DIR)
	curl -sSL https://www.antlr.org/download/antlr-4.7.2-complete.jar -o $(ANTLR4_JAR)

distclean : clean
	rm -f $(generated) $(ANTLR4_JAR)
	find . -name \*.pyc -delete

clean :
	rm -rf .eggs $(BUILD_DIR) $(DIST_DIR) foostache.egg-info

dist : clean $(generated)
	python ./setup.py sdist --dist-dir $(DIST_DIR)
	python ./setup.py bdist_wheel --dist-dir $(DIST_DIR) --bdist-dir $(BUILD_DIR)

test : all
	python ./setup.py test

pypi : dist
	twine upload -r pypi $(DIST_DIR)/*

pypitest : dist
	twine upload -r testpypi $(DIST_DIR)/*
