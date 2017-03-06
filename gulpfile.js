var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')
var spawn = require('child_process').spawn;
var node;

var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']

};

/**
* $ gulp server
* description: launch the server. If there's a server already running, kill it.
*/
gulp.task('server', function() {
 if (node) node.kill()
 node = spawn('node', ['keystone.js'], {stdio: 'inherit'})
 node.on('close', function (code) {
   if (code === 8) {
     gulp.log('Error detected, waiting for changes...');
   }
 });
})

gulp.task('watch', function () {
	gulp.run('server');
	gulp.watch('routes/**/*.js', function () {
		gulp.run('server')
	});
});

gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('deploy', shell.task('git push heroku'));
gulp.task('default', ['watch', 'runKeystone']);
