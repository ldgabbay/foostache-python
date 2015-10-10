# -*- coding: utf-8 -*-

import os

from setuptools import setup, find_packages


def read(*paths):
    with open(os.path.join(*paths), 'r') as f:
        return f.read()


setup(
    name='foostache',
    version='1.1.1',
    description='Implementation of foostache template language',
    long_description=read('README.rst'),
    url='https://github.com/ldgabbay/foostache-python/',
    author='Lynn Gabbay',
    author_email='gabbay@gmail.com',
    license='MIT',
    classifiers = [
#        'Development Status :: 3 - Alpha',
        'Development Status :: 4 - Beta',
#        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 2 :: Only',
        'Natural Language :: English',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Operating System :: OS Independent',
        'Topic :: Software Development :: Libraries'
    ],
    packages=find_packages(),
    keywords='foostache mustache',
    install_requires=[
        "antlr4-python2-runtime>=4.5,<4.6"
    ]
)
