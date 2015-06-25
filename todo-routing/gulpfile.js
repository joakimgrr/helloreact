var gulp = require('gulp');
var react = require('gulp-react');
var webpack = require('gulp-webpack');

gulp.task('react', function() {
    return gulp.src('public/components/*')
        .pipe(react())
        .pipe(gulp.dest('public/build/'));
});

gulp.task('webpack', ['react'], function() {
    return gulp.src('public/build/main.js')
        .pipe(webpack({
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(gulp.dest('public/'))
});

gulp.task('watch', function() {
    gulp.watch('public/components/*.js', ['webpack']);
})

gulp.task('default', ['react', 'webpack']);