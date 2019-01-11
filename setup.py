# -*- coding: utf-8 -*-

#from __future__ import (absolute_import, division, print_function, unicode_literals)
#from builtins import (ascii, bytes, chr, dict, filter, hex, input, int, map, next, oct, open, pow, range, round, str, super, zip)

import re
import io
import os
import sys

if sys.version_info[0] == 2:
    from io import open
    pyv_install_requires = [
        "antlr4-python2-runtime~=4.7.2",
    ]
    pyv_packages = [
        'foostache.py2parser',
    ]
elif sys.version_info[0] == 3:
    pyv_install_requires = [
        "antlr4-python3-runtime~=4.7.2",
    ]
    pyv_packages = [
        'foostache.py3parser',
    ]
else:
    raise RuntimeError("Unhandled Python version.")

from setuptools import setup


def read(*paths):
    with open(os.path.join(*paths), 'r') as f:
        return f.read()


def find_version(*file_paths):
    version_file = read(*file_paths)
    version_match = re.search(r"^__version__ = ['\"]([^'\"]*)['\"]", version_file, re.M)
    if version_match:
        return version_match.group(1)
    raise RuntimeError("Unable to find version string.")


setup(
    name='foostache',
    version=find_version('foostache', '__init__.py'),
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
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Topic :: Software Development :: Libraries :: Python Modules',
        'Topic :: Text Processing',
    ],
    packages=[
        'foostache'
    ] + pyv_packages,
    entry_points={
        'console_scripts': [
            'foostache = foostache.cli:main',
        ],
    },
    test_suite="tests",
    keywords='foostache mustache',
    install_requires=[
        "future",
        "ujson==1.35",
    ] + pyv_install_requires,
)
