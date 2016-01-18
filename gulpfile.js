var gulp          = require('gulp')
  , rename        = require('gulp-rename')
  , uglify        = require('gulp-uglify')
  , sass          = require('gulp-sass')
  ;

gulp.task('scripts', function() {
  gulp.src('./lib/angular/angular.min.js')
    .pipe(gulp.dest('./demo/js'));
});

gulp.task('styles', function() {
  gulp.src('./demo/styles/main.scss')
    .on('data', function(file) {
      // https://github.com/dlmanning/gulp-sass/issues/28#issuecomment-43951089
      var path = require('path');
      if (process.platform === 'win32') {
        file.path = path.relative('.', file.path);
        file.path = file.path.replace(/\\/g, '/');
      }
    })
    .pipe(sass({ errLogToConsole: true })) // error handling still breaks in conjunction with sourcemaps
    .pipe(gulp.dest('./demo/styles'));
});

gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename("ng-FitText.min.js"))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
  gulp.watch('./demo/**/*.scss', ['styles']);
});

gulp.task('default',['styles', 'scripts']);