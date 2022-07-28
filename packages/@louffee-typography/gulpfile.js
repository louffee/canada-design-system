const { watch } = require('gulp')
const { exec } = require('child_process')

function watchFilesToBuild() {
  const watchman = watch('./src/**.{ts,tsx}')

  watchman.on('change', () => {
    exec('yarn workspace @louffee/typography run build', (err) => {
      if (err) {
        console.error(`Gulp: ⛈ Error while building typography ${err}`)
      } else {
        console.log('Gulp: Typography build complete 🎉')
      }
    })
  })
}

module.exports = watchFilesToBuild
