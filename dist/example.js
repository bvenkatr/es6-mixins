(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@nsisodiya/es6-mixins"));
	else if (typeof define === 'function' && define.amd)
		define(["es6Mixins"], factory);
	else if (typeof exports === 'object')
		exports["example"] = factory(require("@nsisodiya/es6-mixins"));
	else
		root["example"] = factory(root["es6Mixins"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_1__) {
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
		/***/ function (module, exports, __webpack_require__) {

			'use strict';

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			var _es6Mixins = __webpack_require__(1);

			var _es6Mixins2 = _interopRequireDefault(_es6Mixins);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			// The first class to be used as a mixin

			var TestMixin1 = function () {
				function TestMixin1() {
					_classCallCheck(this, TestMixin1);
				}

				_createClass(TestMixin1, [{
					key: 'testMethod1',
					value: function testMethod1() {
						console.log('test Method 1 from TestMixin1');
			}
				}, {
					key: 'testMethod2',
					value: function testMethod2() {
						console.log('test Method 2 from TestMixin2');
					}
				}]);

				return TestMixin1;
			}();

			// The second class to be used as a mixin


			var TestMixin2 = function () {
				function TestMixin2() {
					_classCallCheck(this, TestMixin2);
		}

				_createClass(TestMixin2, [{
					key: 'testMethod1',
					value: function testMethod1() {
						console.log('test Method 1 from TestMixin2');
					}
				}]);

				return TestMixin2;
			}();

			var MainClass = function MainClass() {
				_classCallCheck(this, MainClass);

				this.testMethod1(); // outputs 'test Method 1 from TestMixin2' and then 'test Method 1 from TestMixin1' will warn in console about duplicate methods.
			};

			(0, _es6Mixins2.default)(MainClass, [TestMixin1, TestMixin2]);

			new MainClass();

			/***/
		},
		/* 1 */
		/***/ function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

			/***/
		}
		/******/])
});
;