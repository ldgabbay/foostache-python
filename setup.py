# -*- coding: utf-8 -*-

import os

from setuptools import setup, find_packages


def read(*paths):
    with open(os.path.join(*paths), 'r') as f:
        return f.read()


setup(
    name='foostache',
    version='1.2.dev0',
    description='Implementation of foostache template language',
    long_description=read('description.rst'),
    url='https://github.com/ldgabbay/foostache-python/',
    author='Lynn Gabbay',
    author_email='gabbay@gmail.com',
    license='MIT',
    classifiers = [
        'Development Status :: 5 - Production/Stable',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2 :: Only',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'Topic :: Software Development :: Libraries :: Python Modules',
        'Topic :: Text Processing',
    ],
    packages=find_packages(),
    scripts=['bin/foostache'],
    test_suite="tests",
    keywords='foostache mustache',
    install_requires=[
        "antlr4-python2-runtime~=4.5.1",
        "ujson==1.35"
    ]
)
