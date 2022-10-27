import gulp from 'gulp';
import inlinesource from 'gulp-inline-source';
import replace from 'gulp-replace';


function defaultTask(cb) {
    // place code for your default task here
    gulp.task('default', () => {
        return gulp
          .src('./build/*.html')
          .pipe(replace('.js"></script>', '.js" inline></script>'))
          .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
          .pipe(
            inlinesource({
              compress: false,
              ignore: ['png'],
            })
          )
          .pipe(gulp.dest('./build'));
      });
    cb();
  }
  
  exports.default = defaultTask
