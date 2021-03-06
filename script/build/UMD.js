;(function (global) {/* eslint-disable */'use strict'
function factory (window, __require__) {
'{%module%}'
}

/* istanbul ignore next */
if (typeof exports === 'object' && typeof module === 'object' && module !== null) {
	if (typeof __webpack_require__ === 'undefined' && typeof require === 'function' && global.global === global && global.process) {
		module.exports = factory(global, require)
	} else {
		module.exports = factory(global)
	}
} else if (typeof define === 'function' && define.amd) {
	define(factory(global))
} else {
	global.dio = factory(global)
}
})(/* istanbul ignore next */typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
