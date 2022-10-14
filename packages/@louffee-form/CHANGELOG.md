# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.7.0](https://github.com/louffee/canada-design-system/compare/v0.6.0...v0.7.0) (2022-10-14)

**Note:** Version bump only for package @louffee/canada-form





# [0.6.0](https://github.com/louffee/canada-design-system/compare/v0.5.0...v0.6.0) (2022-10-06)

**Note:** Version bump only for package @louffee/canada-form





# [0.4.0](https://github.com/louffee/canada-design-system/compare/v0.3.3...v0.4.0) (2022-09-11)


### Code Refactoring

* **form:** expose handleSubmit function to th FaCC pattern down the tree ([333f1a5](https://github.com/louffee/canada-design-system/commit/333f1a5e048928c23d605ebf080ab0be7c1c4e0d))


### BREAKING CHANGES

* **form:** We need to explicitly mount the <form> inside of the Form component FaCC (children)
with the given handleSubmit, or else the native submit and form functionalities do not work.





# [0.3.0](https://github.com/louffee/canada-design-system/compare/v0.2.0...v0.3.0) (2022-08-08)

**Note:** Version bump only for package @louffee/canada-form





# 0.2.0 (2022-08-08)


### Features

* create the form system and strategy used @ louffee ([5d515b3](https://github.com/louffee/canada-design-system/commit/5d515b32fd0a9c7320eaf1191f5d9d7be77ec495))
* **form:** create a function to invoke the base of the errorschema with type declaration ([eda15eb](https://github.com/louffee/canada-design-system/commit/eda15ebd09db62ee67e90f2751c23047d28f8dfb))
