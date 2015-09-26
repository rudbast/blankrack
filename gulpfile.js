var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('styles', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('imagemin', function () {
    gulp.src('src/img/**.*')
        .pipe(imagemin({
            progressive: true
        })).pipe(gulp.dest('assets/img/'));
});

gulp.task('default', function() {
    gulp.watch('src/sass/**/*.scss', ['styles']);
});
