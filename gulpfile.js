(() => {

  const
    gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    gulpUseref = require('gulp-useref'),
    gulpCache = require('gulp-cache'),
    del = require('del'),
    gulpImagemin = require('gulp-imagemin'),
    gulpCssnano = require('gulp-cssnano'),
    gulpIf = require('gulp-if'),
    gulpPug = require('gulp-pug'),
    browserSync = require('browser-sync').create(),
    fs = require('fs'),
    scssSource = 'src/scss/**';

  function server(done) {
    browserSync.init({
      server: {
        baseDir: 'src'
      }
    })
    done()
  }

  function sass() {
    return gulp.src(scssSource)
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(gulp.dest('css'))
      .pipe(gulp.dest('src/css'))
      .pipe(gulpCssnano({ zindex: false }))
  }

  function useref() {
    return gulp.src('src/*.html')
      .pipe(gulpUseref())
      // .pipe(gulpIf('src/js/*.js', gulp.dest('dist')))
      // .pipe(gulpIf('*.css', cssnano({zindex: false})))
      .pipe(gulp.dest('src/'))
  }

  function js() {
    return gulp.src('src/js/*.js')
      .pipe(gulp.dest('js'))
  }

  function css() {
    return gulp.src('src/css/*.css')
      .pipe(gulp.dest('css'))
      .pipe(gulp.dest('src/css'))
  }

  function images() {
    return gulp
      .src('src/img/*.+(png|jpg|jpeg|gif|svg)')
      .pipe(gulpCache(gulpImagemin()))
      .pipe(gulp.dest('img'))
  }

  function assets() {
    return gulp.src('src/assets/*')
      .pipe(gulp.dest('assets'))
  }

  function favicons() {
    return gulp
      .src('src/favicons/*.+(png|jpg|jpeg|gif|svg|ico|xml|json|webmanifest)')
      .pipe(gulpIf('*.+(png|jpg|jpeg|gif|svg)', gulpCache(gulpImagemin())))
      .pipe(gulp.dest('favicons'))
  }

  function pug(done) {
    fs.readFile('./src/data/data.json', 'utf-8', (err, data) => {
      if (err) throw err

      data = JSON.parse(data)

      return gulp
        .src('src/pug/*.pug')
        .pipe(
          gulpPug({ data: data }).on('error', function (err) {
            console.log(err)
          })
        )
        .pipe(gulp.dest('src/'))
    })
    done()
  }

  function cleanDist() {
    return del.sync(['dist/**/*'])
  }

  function watch(done) {
    gulp.watch('src/pug/**', pug)
    gulp.watch('src/data/*.json', pug)
    gulp.watch(scssSource, sass)
    gulp.watch('src/*.html').on('change', browserSync.reload)
    gulp.watch('src/js/*.js', browserSync.reload)
    done()
  }

  exports.watch = gulp.series(watch, server)

  exports.build = gulp.series(pug, sass, images, favicons, js, css, assets, useref)

  exports.default = gulp.series(watch, server)
})();