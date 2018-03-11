var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp
      .src('./app/assets/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./app/assets/css'))
      .pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function() {
    browserSync.init({ 
        server: "./app" 
    });

    gulp.watch(['./app/assets/scss/**.scss'], ['sass']);
    gulp.watch("./app/*.html").on("change", browserSync.reload);
});

gulp.task('default', ['serve', 'sass']);