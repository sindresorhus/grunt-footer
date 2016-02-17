'use strict';
var detectNewline = require('detect-newline');

module.exports = function (grunt) {
	grunt.registerMultiTask('footer', 'Add a footer', function () {
		var options = this.options({
			text: ''
		});

		this.files.forEach(function (el) {
			var src = el.src[0];
			var out = grunt.file.read(src) + detectNewline.graceful(src) + options.text;
			grunt.file.write(el.dest, out);
		});
	});
};
