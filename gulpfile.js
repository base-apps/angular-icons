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
  'toggle'
];

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    args = require('yargs').argv,
    runSequence = require('run-sequence'),
    merge = require('merge-stream'),
    del = require('del');

var nextVersion = "";

gulp.task('clean', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('setversion', function () {
  return gulp.src(['./package.json', './package-lock.json'])
    .pipe($.bump({type: args.publish || 'patch'}))
    .pipe($.tap(function(file){
      var json = JSON.parse(String(file.contents));
      nextVersion = json.version;
    }));
});

gulp.task('saveversion', function () {
  return gulp.src(['./package.json', './package-lock.json'])
    .pipe($.bump({type: args.publish || 'patch'}))
    .pipe(gulp.dest('./'));
});

gulp.task('tagversion', ['saveversion'], function () {
  return gulp.src(['./package.json', './package-lock.json', './dist/**/*'])
    .pipe($.git.add())
    .pipe($.git.commit('publish version ' + nextVersion))
    .pipe($.filter(['./package.json', './package-lock.json']))
    .pipe($.tagVersion());
});

gulp.task('build', ['clean', 'setversion'], function() {
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

  merged.add(gulp.src('./src/**/*.js')
    // update CDNs
    .pipe($.replace(/https:\/\/cdn\.jsdelivr\.net\/angular-icons\/0\.0\.0/g, 'https://cdn.jsdelivr.net/angular-icons/' + nextVersion))
    .pipe($.replace(/https:\/\/npmcdn\.com\/angular-icons@0\.0\.0/g, 'https://npmcdn.com/angular-icons@' + nextVersion))
    .pipe($.replace(/https:\/\/unpkg\.com\/angular-icons@0\.0\.0/g, 'https://unpkg.com/angular-icons@' + nextVersion))
    .pipe(gulp.dest('./dist')));

  return merged;
});

gulp.task('default', ['build'], function(cb) {
  if (args.publish) {
    return runSequence('tagversion', cb);
  } else {
    cb();
  }
});
