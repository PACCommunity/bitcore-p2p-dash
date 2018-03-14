'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-pac');

bitcoreTasks('p2p-pac', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
