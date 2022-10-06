const fs = require('fs')

const SCOPE_SETTING = '@louffee-'
const packageNames = fs.readdirSync('./packages').map((name) => name.replace(SCOPE_SETTING, ''))

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', ['root', 'workspace', 'deps', 'dev-deps', 'release', 'workflow', ...packageNames]],
    'scope-case': [2, 'always', 'kebab-case'],
  },
}
