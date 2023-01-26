'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return gulp
        .src('./src/assets/scss/*.scss')
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
}

function themes() {
    return gulp
        .src('./src/assets/scss/themes/*.scss')
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/themes'))
}

exports.default = gulp.parallel(buildStyles, themes)