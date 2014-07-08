'use strict';
var fs = require('fs');
var test = require('ava');

test('adds footer', function (t) {
	t.assert(/\nbar$/.test(fs.readFileSync(__dirname + '/tmp/fixture', 'utf8')));
});
