import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import fileInclude from 'gulp-file-include';
import { deleteAsync } from 'del';

const sassCompiler = gulpSass(sass);
const server = browserSync.create();

function compileAndMinifyCss() {
  return gulp.src('src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(server.stream());
}

function minifyJs() {
  return gulp.src('src/js/**/*.js') 
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js')) 
    .pipe(server.stream());
}

function optimizeImages() {
  return gulp.src('src/assets/images/**/*.+(png|jpg|jpeg|gif|svg)') 
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images')); 
}

function includeHtml() {
  return gulp.src(['src/html/*.html']) 
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist')); 
}

function clean() {
  return deleteAsync(['dist/**/*.+(js|css|jpg|jpeg|png|gif|svg|html)', 'dist/**/*', '!dist/js/', '!dist/css/', '!dist/images/']);
}

function watch() {
  server.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch('src/scss/**/*.scss', compileAndMinifyCss);
  gulp.watch('src/js/**/*.js', minifyJs);
  gulp.watch('src/images/**/*.+(png|jpg|jpeg|gif|svg)', optimizeImages);
  gulp.watch('src/html/**/*.html', includeHtml);
  gulp.watch('dist/**/*.html').on('change', server.reload);
}

const build = gulp.series(
  clean,
  compileAndMinifyCss,
  minifyJs,
  optimizeImages,
  includeHtml
);


export {
  compileAndMinifyCss,
  minifyJs,
  optimizeImages,
  includeHtml,
  watch, 
  build,
  clean
};
