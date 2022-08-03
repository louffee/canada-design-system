const postcss = require('postcss')
const stylelint = require('stylelint')
const syntax = require('postcss-syntax')
const fs = require('fs')

const source = fs.readFileSync('./packages/@louffee-utility-classes/index.css', 'utf8')

postcss([stylelint({ fix: true })])
  .process(source, { syntax })
  .then(function (result) {
    // An alias for the result.css property. Use it with syntaxes that generate non-CSS output.
    console.log('PostCSS has successfully processed the result!')
  })
