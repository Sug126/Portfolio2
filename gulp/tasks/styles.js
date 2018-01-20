var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	mixins = require('postcss-mixins')
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');





gulp.task('styles', function(){
return	gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, nested, autoprefixer]))
	
	.pipe(gulp.dest('./app/temp/styles'));

});