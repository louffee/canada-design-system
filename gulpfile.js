const gulp = require('gulp')
const gulpEslint = require('gulp-eslint')

function lintFiles(gulpCallback) {
  return gulp
    .src(['./packages/**/src/**.{tsx,ts}'])
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpEslint.failOnError())
    .on('end', function onEndLintingFiles() {
      console.log(
        'Lint task: ESLint has successfully run over all files and formatted them in case of any styling issues.'
      )

      if (typeof gulpCallback === 'function') {
        gulpCallback()
      }
    })
}

exports.lint = lintFiles
