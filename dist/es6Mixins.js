(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		exports["es6Mixins"] = factory();
	else
		root["es6Mixins"] = factory();
})(this, function () {
	return /******/ (function (modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/
		var installedModules = {};

		/******/ 	// The require function
		/******/
		function __webpack_require__(moduleId) {

			/******/ 		// Check if module is in cache
			/******/
			if (installedModules[moduleId])
			/******/      return installedModules[moduleId].exports;

			/******/ 		// Create a new module (and put it into the cache)
			/******/
			var module = installedModules[moduleId] = {
				/******/      exports: {},
				/******/      id: moduleId,
				/******/      loaded: false
				/******/
			};

			/******/ 		// Execute the module function
			/******/
			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ 		// Flag the module as loaded
			/******/
			module.loaded = true;

			/******/ 		// Return the exports of the module
			/******/
			return module.exports;
			/******/
		}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/
		__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/
		__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/
		__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/
		return __webpack_require__(0);
		/******/
	})
	/************************************************************************/
	/******/([
		/* 0 */
		/***/ function (module, exports) {

			'use strict';

			/*

			 The MIT License (MIT)
			 Copyright (c) 2016 Narendra Sisodiya https://github.com/nsisodiya

			 */

			module.exports = function (Main, Rest) {
				Rest.map(function (v) {
					return Object.getOwnPropertyNames(v.prototype);
				}).reduce(function (a, b) {
					return a.concat(b);
				}, []).filter(function (item, pos, arr) {
					return arr.indexOf(item) === pos && item !== 'constructor';
				}).map(function (method) {
					var backup = Main.prototype[method];
					Main.prototype[method] = function () {
						var _this = this,
								_arguments = arguments;

						Rest.map(function (v) {
							if (typeof v.prototype[method] === "function") {
								v.prototype[method].apply(_this, _arguments);
							}
				});
						if (typeof backup === 'function') {
							backup.apply(this, arguments);
						}
			};
				});
			};

			/***/
		}
		/******/])
});
;