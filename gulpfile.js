'use strict';

// dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');


// compile scss into css
function style() {
    // locate scss file
    return gulp.src('./src/assets/scss/**/*.scss')
    // pass that file through sass compiler
    .pipe(sass())
    // save the compiled CSS
    .pipe(gulp.dest('./src/assets/css'))
    // stream changes to all browsers
    .pipe(browserSync.stream());
}   

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/assets/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/assets/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;