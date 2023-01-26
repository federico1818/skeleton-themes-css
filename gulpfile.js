'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return gulp
        .src('./src/assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
};

exports.default = buildStyles