# Changelog

## [6.1.0] - 2017-12-09
### Added
- added light version support for prism(refractor) based highlighting

## [6.0.4] - 2017-11-22
### Changed
- fixed vendor prefixing for prism styles

## [6.0.3] - 2017-11-17
### Changed
- add links to available languages in README (by @adamweeks)
- fix line number display for prism highlighter

## [6.0.2] - 2017-11-16
### Changed
- fix git links in package.json

## [6.0.1] - 2017-11-16
### Changed
- update package main to be root instead of dist

## [6.0.0] - 2017-11-16
### Added
- add support for alternative syntax highlighting using ast generated from prismjs via <a href="https://github.com/wooorm/refractor">refractor</a> (by @conorhastings and @maxmcd)

## [5.8.1] - 2017-10-26
### Changed
- avoid unneeded function calls if language is text
- note text language in readme

## [5.8.0] - 2017-10-26
### Changed
- avoid unneeded function calls if language is text
- note text language in readme

## [5.8.0] - 2017-10-25
### Added
- add support for text as valid language

## [5.7.1] - 2017-10-26
### Changed
- check if children is array and use children[0] if so.

## [5.7.0] - 2017-08-21
### Changed
- check if we have language before attempting to highlight.
- add test for unknown language to avoid further issues with content not rendering


## [5.6.3] - 2017-08-12
### Added
- added code of conduct 

### Changed
- update dependency versions

## [5.6.2] - 2017-05-29
### Changed
- fix edge cases in line wrapping feature

## [5.6.0] - 2017-05-11
### Added
- add list of available languages (by @forresto)

## [5.5.2] - 2017-05-07
### Added
- render plain string if no language present

## [5.5.1] - 2017-05-05
### Added
- add license file

### Changed
- update readme

## [5.50] - 2017-04-23
### Added
- added test for useInlineStyles=false

### Changed
- export previously unexported functions from createElemeent

## [5.4.1] - 2017-04-23
### Added
- add code coverage

## [5.4.0] - 2017-04-23
### Added
- add code coverage


## [5.2.0] - 2017-04-08
### Added
- flatten tree before using wrapLines function
- allow using a custom renderer without wrapLines

## [5.1.3] - 2017-04-02
### Added
- flatten tree before using wrapLines function
- allow using a custom renderer without wrapLines

### Changed
- update broken links in demo
- handle some edge cases in wrapLines function
- generalize function for finding text child 


## [5.1.2] - 2017-03-21

### Changed
- update version of react-syntax-highlighter-virtualized-renderer for demo
- handle some edge cases in wrapLines function

## [5.1.1] - 2017-03-21
### Added
- add api to allow for use of custom renderer (virtualized, native, etc...)

## [5.1.0] - 2017-03-21
### Added
- add api to allow for use of custom renderer (virtualized, native, etc...)

## [5.0.0] - 2017-02-12
### Added
- allow wrapping of individual element in <span> tag

## [4.0.1] - 2016-12-09
### Added
- allow styling individual numbers

## [3.0.2] - 2016-12-04

### Added
- add support for IE and older android browsers (by @
yahiousun)

## [3.0.1] - 2016-12-03

### Changed
- update dependencies

## [3.0.0] - 2016-10-29

### Added
- wrap individual line numbers in span

### Changed
- removed envified light build in favor of only using seperate entry point






