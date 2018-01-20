var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
	del = require('del'),
	concat = require('gulp-concat'),
usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify');


gulp.task('deleteDistFolder', function(){
	return del ("./dist");
});


gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/**/*'])
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))

		
		.pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('scriptsJs', ['deleteDistFolder'], function(){ return gulp.src(['./app/assets/scripts/particles.js', './app/assets/scripts/app.js', './app/assets/script.js'])
.pipe(concat('scripts.js'))
.pipe(gulp.dest('./dist/assets/scripts'));							
	
});



gulp.task('usemin', ['deleteDistFolder'], function(){
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css: [function(){return rev()}, function(){return cssnano()}],
		js: [function(){return rev()}, function(){return uglify()}]
	}))
	.pipe(gulp.dest("./dist"));
})



gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'scriptsJs', 'usemin']);