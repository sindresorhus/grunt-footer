# grunt-footer [![Build Status](https://travis-ci.org/sindresorhus/grunt-footer.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-footer)

> Add a footer to files


## Install

```sh
$ npm install --save-dev grunt-footer
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	info: 'footer text',
	footer: {
		dist: {
			options: {
				text: '<%= info %>'
			},
			files: {
				'dist/main.js': 'src/main.js'
			}
		}
	}
});

grunt.registerTask('default', ['footer']);
```


## Options

### text

Type: `string`

Text to be appended to files.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
