const gulp       = require('gulp');

const postcss    = require('gulp-postcss');
const sass       = require('gulp-sass');
const babel      = require('gulp-babel');
const concat     = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const gutil      = require('gulp-util')
const rename     = require('gulp-rename');
const eslint     = require('gulp-eslint');
const inject     = require('gulp-inject');
const server     = require('gulp-server-livereload');
const watch      = require('gulp-watch');
const cssnext    = require('autoprefixer');
const cssnano    = require('gulp-cssnano');
const reporter   = require('postcss-reporter');

const APP_NAME = '<%= name %>';
const DESTINATION_DIRECTORY = 'dist/';

gulp.task('css', () => {
  const processors = [
    cssnext({
      'browers': ['last 2 versions', 'ie 10', '> 5% in AU'],
      'compress': gutil.env.type === 'production' ? true : false
    }),
  ];

  return gulp.src(gutil.env.type === 'production'? 'src/stylesheets/index.scss' : 'src/stylesheets/dev-index.scss')
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(postcss(processors))
             .pipe(gutil.env.type === 'production' ? cssnano() : gutil.noop())
             .pipe(sourcemaps.write('.'))
             .pipe(rename({ basename: APP_NAME }))
             .pipe(gulp.dest(DESTINATION_DIRECTORY));
});

gulp.task('lint', () => {
  return gulp.src(['src/javascripts/*.js'])
             .pipe(eslint())
             .pipe(eslint.format())
             .pipe(eslint.failAfterError());
});

gulp.task('js', ['lint'], () => {
  return gulp.src('src/javascripts/*.js')
             .pipe(sourcemaps.init())
             .pipe(babel())
             .pipe(concat(`${APP_NAME}.js`))
             .pipe(sourcemaps.write("."))
             .pipe(gulp.dest(DESTINATION_DIRECTORY));
});

gulp.task('html', () => {
  return gulp.src('src/templates/*.html')
             .pipe(inject(gulp.src([`${DESTINATION_DIRECTORY}*.css`, `${DESTINATION_DIRECTORY}*.js`]), {
               removeTags: true,
               ignorePath: DESTINATION_DIRECTORY,
               addRootSlash: false,
             }))
             .pipe(gulp.dest(DESTINATION_DIRECTORY));
});

gulp.task('watch', () => {
  gulp.watch('src/stylesheets/**/*.scss', ['css']);
  gulp.watch('src/javascripts/**/*.js', ['js']);
  gulp.watch('src/templates/**/*.html', ['html']);
});

gulp.task('build', ['css', 'js', 'html']);
gulp.task('default', ['build']);
gulp.task('serve', ['build', 'watch'], () => {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      open: true,
      defaultFile: 'index.html'
    }));
});
