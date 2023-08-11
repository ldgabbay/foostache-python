import io
import os
import re
from setuptools import setup
import sys


PACKAGES = [
    "foostache",
]

INSTALL_REQUIRES = [
    "future~=0.17",
]

if sys.version_info[0] == 2:
    PACKAGES.append("foostache.py2parser")
    INSTALL_REQUIRES.append("antlr4-python2-runtime~=4.7")
elif sys.version_info[0] == 3:
    PACKAGES.append("foostache.py3parser")
    INSTALL_REQUIRES.append("antlr4-python3-runtime~=4.7")
else:
    raise RuntimeError("Unhandled Python version.")


def read(*paths):
    with io.open(os.path.join(*paths), encoding="utf_8") as f:
        return f.read()


def find_version(*file_paths):
    version_file = read(*file_paths)
    version_match = re.search(r"^__version__ = ['\"]([^'\"]*)['\"]", version_file, re.M)
    if version_match:
        return version_match.group(1)
    raise RuntimeError("Unable to find version string.")


HERE = os.path.abspath(os.path.dirname(__file__))

setup(
    name="foostache",
    version=find_version("src", "foostache", "__init__.py"),
    description="The foostache template engine.",
    long_description=read(HERE, "README.md"),
    long_description_content_type="text/markdown",
    url="https://github.com/ldgabbay/foostache-python/",
    author="Lynn Gabbay",
    author_email="gabbay@gmail.com",
    license="MIT",
    classifiers = [
        "Development Status :: 5 - Production/Stable",
        "Environment :: Console",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 2",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Text Processing",
    ],
    packages=PACKAGES,
    package_dir={"": "src"},
    entry_points={
        "console_scripts": [
            "foostache = foostache.__main__:main",
        ],
    },
    test_suite="tests",
    install_requires=INSTALL_REQUIRES,
    python_requires=">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, <4",
)
