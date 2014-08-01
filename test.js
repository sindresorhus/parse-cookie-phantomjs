'use strict';
var test = require('ava');
var parseCookiePhantomjs = require('./');

test(function (t) {
	t.assert(parseCookiePhantomjs('foo=bar; Path=/; Domain=localhost').name === 'foo');
});
