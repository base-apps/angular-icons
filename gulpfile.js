'use strict';

var ICON_CATEGORIES = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle',
];

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    merge = require('merge-stream'),
    del = require('del');

gulp.task('clean', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('default', ['clean'], function() {
  var merged = merge();

  merged.add(gulp.src('./lib/*.js')
    .pipe(gulp.dest('./dist/lib')));

  merged.add(gulp.src('./icons/iconic/*.svg')
    .pipe(gulp.dest('./dist/icons/iconic')));

  merged.add(gulp.src('./node_modules/open-iconic/svg/*.svg')
    .pipe(gulp.dest('./dist/icons/open-iconic')));

  merged.add(gulp.src('./node_modules/ionicons/dist/svg/*.svg')
    .pipe(gulp.dest('./dist/icons/ionicons')));

  ICON_CATEGORIES.forEach(function(cat) {
    merged.add(gulp.src('./node_modules/material-design-icons/' + cat + '/svg/production/*_24px.svg')
      .pipe($.rename(function (path) {
        path.basename = path.basename.replace("ic_", "").replace("_24px", "").replace(/_/g, "-");
      }))
      .pipe(gulp.dest('./dist/icons/material-icons')));
  });

  merged.add(gulp.src([
      './iconic.js',
      './ionicons.js',
      './material-icons.js',
      './open-iconic.js'
    ])
    .pipe(gulp.dest('./dist')));

  return merged;
});
