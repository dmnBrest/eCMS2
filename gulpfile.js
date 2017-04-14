var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var gutil = require('gulp-util');
var gls = require('gulp-live-server');

var tsProject = ts.createProject('./src/server/tsconfig.json');
var server;

/* SERVER:BUILD */
gulp.task('server:templates', function(cb) {
	return gulp.src("./src/server/templates/**/*").pipe(gulp.dest('./dist/server/templates'));
});
gulp.task('server:static', function(cb) {
	return gulp.src("./static/**/*").pipe(gulp.dest('./dist/static'));
});

gulp.task('server:build', function() {
	var tsResult = gulp.src("./src/server/**/*.ts")
		.pipe(sourcemaps.init())
		.pipe(tsProject());
	return tsResult.js
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./dist'));
});

/* CLIENT:BUILD */
gulp.task('client:build', function(cb) {
	console.log('Watch client');
	gulp.src('')
		.pipe(webpackStream(require('./webpack.js'), require('webpack')))
		.pipe(gulp.dest('./dist/static/react'));
});

/* SERVER:NODEMON */
gulp.task('server:server', ['server:static', 'server:templates', 'server:build'], function (cb) {
	if (server) {
		console.log('Reload server!');
		server.stop().then(function(){
			server.start();
		})
	} else {
		console.log('Start server!');
		server = gls.new('./dist/server/app.js');
		server.start();
	}
	cb(null);
});

gulp.task('server:watch', function(cb){
	console.log('Watch server');
	gulp.watch(['./src/server/**/*.ts', './src/server/templates/**/*.html', './static/css/**/*'], ['server:server']);
	cb(null);
})

gulp.task('start', ['server:server', 'server:watch', 'client:build']);

