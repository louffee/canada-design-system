const config = require('stylelint-config-louffee')

module.exports = {
  ...config,
  extends: [...config.extends, 'stylelint-config-recommended-scss'],
}
