[![PyPI version](https://badge.fury.io/py/foostache.svg)](https://badge.fury.io/py/foostache)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/foostache.svg)
![PyPI - License](https://img.shields.io/pypi/l/foostache.svg)

# foostache

**foostache** is a language and environment independent template engine.

Unlike alternatives such as Jinja2 and mustache, foostache can theoretically be implemented in any programming language for any runtime environment. The complete language specification can be found [here](https://github.com/ldgabbay/foostache).

This package provides a command-line utility and modules for Python 2 and 3.


## Example

A **template** is marked-up unicode that might look like this:
```text
{{:iterate my_array 1::2}}{{. %5.2f}}{{:before}}[{{:between}}, {{:after}}]{{:end}}
```

The template can be rendered given a **context**. The context is usually specified with a JSON value, such as:
```json
{ "my_array": [2.6, 4, 18, 3.51, 42, 96.8] }
```

When the above context is applied to the above template, the following output is generated:
```text
[ 4.00,  3.51, 96.80]
```


## Command-Line

```text
foostache template-file context-json-file
```

```text
python -m foostache template-file context-json-file
```


## Module

```python
import foostache

template = foostache.Template("{{:iterate .}}{{.}}{{:end}}")
assert template.render(["a", "b", "c"]) == "abc"
```
