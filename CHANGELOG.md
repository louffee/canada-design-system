# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/louffee/canada-design-system/compare/v0.4.0...v0.4.1) (2022-09-11)

**Note:** Version bump only for package canada





# [0.4.0](https://github.com/louffee/canada-design-system/compare/v0.3.3...v0.4.0) (2022-09-11)


### Code Refactoring

* **form:** expose handleSubmit function to th FaCC pattern down the tree ([333f1a5](https://github.com/louffee/canada-design-system/commit/333f1a5e048928c23d605ebf080ab0be7c1c4e0d))


### Features

* create "@louffee/canada-masks" package with numbers mask as its starter ([ad9029d](https://github.com/louffee/canada-design-system/commit/ad9029da851d4a53d60194edaf516893df3c30ca))
* create Tooltip component ([269eb50](https://github.com/louffee/canada-design-system/commit/269eb50efa6def9d4bddb759c6936e0058018fa4))
* create TopBar composite component ([a12b3a9](https://github.com/louffee/canada-design-system/commit/a12b3a9149e1c2d276889ba77d77e8034bc060ed))
* **global-hooks:** create useClipboard custom hook function ([fe2cc34](https://github.com/louffee/canada-design-system/commit/fe2cc340378790f3e36204067e683ef312d7dec6))
* **text-field:** create support for "mask" prop which allows systematic adoption from masks package ([d82eb04](https://github.com/louffee/canada-design-system/commit/d82eb04541a74fd64ab3506b433fda926bdd2f25))


### Performance Improvements

* **button:** wrap OutlinedButton component with a memo high-order-component ([1e3649c](https://github.com/louffee/canada-design-system/commit/1e3649cda8c93b66f370f3e00ff279ea7b4fd6f0))
* **button:** wrap SoftButton component within a memo hoc ([ea9e517](https://github.com/louffee/canada-design-system/commit/ea9e517fa276cc3ff9f0101bf53a22a59bb7b315))
* **button:** wrap the NeutralButton component in a memo high-order component ([946c1c2](https://github.com/louffee/canada-design-system/commit/946c1c2ef4b3ef678352a56b17b44da8bf041382))
* **icon:** wrap the Icon component in a memo high-order component ([42e910d](https://github.com/louffee/canada-design-system/commit/42e910d2e6324d6f0924b61d41b312f9de692ec2))


### BREAKING CHANGES

* **form:** We need to explicitly mount the <form> inside of the Form component FaCC (children)
with the given handleSubmit, or else the native submit and form functionalities do not work.





## [0.3.3](https://github.com/louffee/canada-design-system/compare/v0.3.2...v0.3.3) (2022-08-09)

**Note:** Version bump only for package canada





## [0.3.2](https://github.com/louffee/canada-design-system/compare/v0.3.1...v0.3.2) (2022-08-09)

**Note:** Version bump only for package canada





## [0.3.1](https://github.com/louffee/canada-design-system/compare/v0.3.0...v0.3.1) (2022-08-08)

**Note:** Version bump only for package canada





# [0.3.0](https://github.com/louffee/canada-design-system/compare/v0.2.0...v0.3.0) (2022-08-08)


### Features

* **global-hooks:** create useWindowSize hook to watch the dimensions of the window ([036793e](https://github.com/louffee/canada-design-system/commit/036793ec3eca620da0660311e8b63d4b4f9c2a36))





# 0.2.0 (2022-08-08)


### Features

* add a bunch of hooks ([28f0eaf](https://github.com/louffee/canada-design-system/commit/28f0eafedfa6c45843bd0262d114e3d4b2d47667))
* add useDocumentEvent hook ([5e31f95](https://github.com/louffee/canada-design-system/commit/5e31f95aa8c15bf9b61f6f685c1a22a9fe6dae59))
* add useEvent hook to create events with useCallback ([1986252](https://github.com/louffee/canada-design-system/commit/1986252faea6bc41178a163db16103c6c46ec030))
* **button:** create a component for neutral cases - NeutralButton ([1f1046f](https://github.com/louffee/canada-design-system/commit/1f1046fc01c9573a7da945fed7e76fd648bfd459))
* **button:** create the OutlinedButton component ([f6a42e0](https://github.com/louffee/canada-design-system/commit/f6a42e031db686d57ddd2c84f8637de7fce35964))
* create a package for Input component ([18d2217](https://github.com/louffee/canada-design-system/commit/18d2217769f5aadb6ad50936f98588912e5b1bf7))
* create a SoftButton package component ([0a63227](https://github.com/louffee/canada-design-system/commit/0a63227f9252fd17a41695a8c32cfaac79b6d200))
* create Icon package to provide Material Design icons ([bdd01ab](https://github.com/louffee/canada-design-system/commit/bdd01ab393a9805786962e7db93bc813fb7817a2))
* create TextField package component :smile: ([e505273](https://github.com/louffee/canada-design-system/commit/e505273a1e735ce678996edb346f7c55c97423cf))
* create the CircularProgress component ([6463429](https://github.com/louffee/canada-design-system/commit/646342995235218e506ba1fba1568559d29930ba))
* create the form system and strategy used @ louffee ([5d515b3](https://github.com/louffee/canada-design-system/commit/5d515b32fd0a9c7320eaf1191f5d9d7be77ec495))
* create utility CSS classes package ([f507972](https://github.com/louffee/canada-design-system/commit/f507972aa5c335184c447af180c34ea816551992))
* **form:** create a function to invoke the base of the errorschema with type declaration ([eda15eb](https://github.com/louffee/canada-design-system/commit/eda15ebd09db62ee67e90f2751c23047d28f8dfb))
* **global-hooks:** add useLatest hook ([199a40d](https://github.com/louffee/canada-design-system/commit/199a40d0925366e5eea151b3e1449f1235ed8f46))
* **global-hooks:** create a package responsible for controlling all hooks ([8f783ab](https://github.com/louffee/canada-design-system/commit/8f783ab1a10fa797808c66df9cf0de590dbf12ee))
* **icon:** create the icons based on the material icons API from react-icons package ([f77ddd7](https://github.com/louffee/canada-design-system/commit/f77ddd7f072edfee1e19cbaaad149870c339bc69))
* **react-utils:** create a package with react-related util functions ([7cc4eee](https://github.com/louffee/canada-design-system/commit/7cc4eee4dd9f0b60e57b0c4115c6a5229aa5e0aa))
* **style-system:** create style system and theming package for all Canada monolith repository ([cf100ba](https://github.com/louffee/canada-design-system/commit/cf100ba9fea9a08fc7a0bd0aac41c1f645610b41))
* **typography:** create a typography package component ([a1cdd49](https://github.com/louffee/canada-design-system/commit/a1cdd495569b038d9eb516aa03a26d8e9023a57b))


### Reverts

* use npm registry in lerna configuration file ([78f533a](https://github.com/louffee/canada-design-system/commit/78f533a977ba1c90d41570ce31dc859580e29f36))
