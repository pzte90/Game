/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/draw.js":
/*!************************!*\
  !*** ./src/js/draw.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Draw = /*#__PURE__*/function () {\n  function Draw() {\n    _classCallCheck(this, Draw);\n\n    this.options = ['blue', 'red', 'white'];\n  }\n\n  _createClass(Draw, [{\n    key: \"drawColors\",\n    value: function drawColors(cards) {\n      var colors = [];\n\n      for (var i = 0; i < cards; i++) {\n        var randomColor = Math.floor(Math.random() * this.options.length);\n        colors.push(this.options[randomColor]);\n      }\n\n      return colors;\n    }\n  }]);\n\n  return Draw;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/draw.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw.js */ \"./src/js/draw.js\");\n/* harmony import */ var _rules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules.js */ \"./src/js/rules.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.accountValue = document.querySelector('.general__info-value span'), this.gameCount = document.querySelector('.general__info-count span'), this.wins = document.querySelector('.general__info-win span'), this.loses = document.querySelector('.general__info-lose span'), this.cards = document.querySelectorAll('.cards__container');\n    this.draw = new _draw_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.addColors(); // this.show();\n  }\n\n  _createClass(Game, [{\n    key: \"show\",\n    value: function show() {\n      console.log(this.accountValue, this.gameCount, this.wins, this.loses, this.cards.length, this.draw.drawColors(), _rules_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkWin());\n    }\n  }, {\n    key: \"addColors\",\n    value: function addColors() {\n      var colors = this.draw.drawColors(this.cards.length);\n      this.cards.forEach(function (card, index) {\n        card.style.backgroundColor = colors[index];\n      });\n      this.accountValue.textContent = \" Bid x\".concat(_rules_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkWin(colors));\n    }\n  }]);\n\n  return Game;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/rules.js":
/*!*************************!*\
  !*** ./src/js/rules.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rules; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Rules = /*#__PURE__*/function () {\n  function Rules() {\n    _classCallCheck(this, Rules);\n  }\n\n  _createClass(Rules, null, [{\n    key: \"checkWin\",\n    value: function checkWin(options) {\n      var win = 0;\n\n      var uniqueColors = _toConsumableArray(new Set(options));\n\n      var _loop = function _loop(i) {\n        var sameColor = options.filter(function (color) {\n          return color === uniqueColors[i];\n        });\n\n        if (sameColor.length === 3) {\n          win += 1.2;\n        } else if (sameColor.length === 4) {\n          win += 1.5;\n        } else if (sameColor.length === 5) {\n          win += 2;\n        } else if (sameColor.length === 6) {\n          win += 3;\n        }\n      };\n\n      for (var i = 0; i < uniqueColors.length; i++) {\n        _loop(i);\n      }\n\n      console.log(win);\n      return win;\n    }\n  }]);\n\n  return Rules;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/rules.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game.js */ \"./src/js/game.js\");\n\n\nvar game = new _js_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });