# Change Log

## 1.3.0 - 2023-08-11
### Added
- Removed dependency on `ujson`

### Fixed
- Dependency version specifiers were unnecessarily limited

## 1.1.2 - 2015-10-12
### Changed
- Bumped Development Status to 5 - Production/Stable
- Enforced clean before building for PyPI

### Added
- `foostache` as an installed script

## 1.1.1 - 2015-10-09
### Fixed
- "path exists" was always evaluating true

## 1.1.0 - 2015-08-10
### Added
- foostache 1.1.0 support
	- `jss` filter support

## 1.0.1 - 2015-08-04
### Fixed
- Throw exception when "path is type" has invalid path
- Quoted string handling
- Whitespace handling
- foostache.py

### Added
- This CHANGELOG
- template.dump(indent=2)

## 1.0.0 - 2015-08-03
### Added
- Initial foostache implementation
