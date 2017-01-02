var gulp 	= require('gulp'),
	changed = require('gulp-changed'),
	ftp 	= require('gulp-ftp'),
	src			= "../raw/**",
	destination	= "../upload/",
	user		= "<enter-ftp-user-name>",
	host		= "<enter-ftp-host>",
	pass		= "<enter-ftp-password>",
	remotePath	= "<enter-ftp-remote-path>"
	ftpConfig	= { host: host, user: user, pass: pass, remotePath: remotePath};

gulp.task('upload', [], function() {
  return gulp.src(src)
	.pipe(changed(destination))
	.pipe(gulp.dest(destination))
	.pipe(ftp(ftpConfig));
});

gulp.task('default', [], function() {
  console.log("Hi there from gulp");
});
