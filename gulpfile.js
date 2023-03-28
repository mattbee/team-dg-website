const gulp    = require("gulp");
const sass    = require('gulp-sass')(require('sass'));

/*
  generate the css with sass
*/
gulp.task('css', function() {
  return gulp.src('./scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./_includes/css'));
});

/*
  Watch folders for changess
*/
gulp.task("watch", function() {
  gulp.watch('./scss/**/*.scss', gulp.parallel('css'));
});

gulp.task('default', gulp.parallel(
  'css'
));
