[![PyPI version](https://badge.fury.io/py/foostache.svg)](https://badge.fury.io/py/foostache)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/foostache.svg)
![PyPI - License](https://img.shields.io/pypi/l/foostache.svg)

# `foostache` for Python

## Build Instructions

These must be installed:

* `curl`
* `make`
* `java`
* `python`
* `pip` packages
	* `setuptools`
	* `wheel`
	* `twine`


To generate the code:
```bash
make
```

To build the distribution files:
```bash
make dist
```

To test the code:
```bash
make test
```

To upload the distribution files to PyPI:
```bash
make pypi
```

To upload the distribution files to Test PyPI:
```bash
make testpypi
```
