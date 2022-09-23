import * as gulp from 'gulp'
import eslintPlugin from 'gulp-eslint'

const SOURCE_CODE_PACKAGES_PATTERN_FILES = './packages/**/src/**.{tsx,ts}'

/**
 * Create a ESLint pipe process via Gulp.
 *
 * @param gulpCallback {Function}
 * @returns {*}
 */
function lintFiles(gulpCallback) {
  return gulp
    .src([SOURCE_CODE_PACKAGES_PATTERN_FILES])
    .pipe(eslintPlugin())
    .pipe(eslintPlugin.format())
    .pipe(eslintPlugin.failOnError())
    .on('end', () => {
      console.log(
        'Lint task: ESLint has successfully run over all files and formatted them in case of any styling issues.',
      )

      if (typeof gulpCallback === 'function') {
        gulpCallback()
      }
    })
}

export const lint = lintFiles
