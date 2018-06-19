var gulp = require('gulp');
var sass = require('gulp-sass');


var PATHS = {
    sass: {
        src: 'assets/styles/sass/app.scss',
        dst: 'assets/styles/css/'
    }
};


gulp.task('compile-sass', function () {
    return gulp.src(PATHS.sass.src)
               .pipe(sass({
                   'minify': true
                }))
               .pipe(gulp.dest(PATHS.sass.dst));
});


gulp.task('compile', function () {
    gulp.watch(PATHS.sass.src, gulp.series('compile-sass'));
});
