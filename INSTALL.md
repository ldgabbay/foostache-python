# Build Instructions

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
