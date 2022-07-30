const { exec } = require('child_process')
const metadata = require('../package.json')

const { devDependencies } = metadata

const LINT_RELATED_TERM = 'eslint'

console.log('Analyzing dependencies related to linting...')
const dependencies = Object.keys(devDependencies).filter((dep) => dep.includes(LINT_RELATED_TERM))

const dependenciesWithFixedVersion = dependencies.map((dep) => `${dep}@'${devDependencies[dep]}'`)

const listedDependencies = dependenciesWithFixedVersion.join(' ')

console.log(`The lint-related dependencies are ${listedDependencies}`)
const installtionCommand = `yarn add -DW ${listedDependencies} --no-lockfile`

exec(installtionCommand, (error) => {
  if (error) {
    const errorMessage = ['Could not install lint-related  dependencies due to the following error', error]

    console.error(errorMessage.join('\n'))
    process.exit(1)
  }

  console.log('Lint-related dependencies installed successfully')
})
