'use strict'
const del = require('del')
const gulp = require('gulp')
const standard = require('gulp-standard')
const zip = require('gulp-zip')

const srcPath = 'src'
const testPath = 'test'
const distPath = 'dist'

gulp.task('clean', () => {
  return del([distPath])
})

gulp.task('lint', () => {
  return gulp.src([`${srcPath}/**/*.+(js|jsx)`, `${testPath}/**/*.+(js|jsx)`])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      breakOnWarning: true,
      quiet: false,
      showRuleNames: true,
      showFilePath: true
    }))
})

gulp.task('build', ['clean', 'lint'], () => {
  return gulp.src([`${srcPath}/**/*`, 'package.json'])
    .pipe(zip('api.zip'))
    .pipe(gulp.dest(distPath))
})

gulp.task('default', ['clean', 'lint', 'build'])
