const postcss = require('postcss')
const stylelint = require('stylelint')
const syntax = require('postcss-syntax')

postcss([stylelint({ fix: true })])
  .process(source, { syntax })
  .then(function (result) {
    // An alias for the result.css property. Use it with syntaxes that generate non-CSS output.
    result.content
  })
