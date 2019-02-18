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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n(function (factory) {\n  window.Gridify = factory();\n})(function () {\n  'use strict';\n\n  var Gridify =\n  /*#__PURE__*/\n  function () {\n    function Gridify(opts) {\n      _classCallCheck(this, Gridify);\n\n      this.options = Object.assign(Gridify.defaults, opts);\n      this.container = document.querySelector(this.options.containerSelector);\n      this.items = this.container.querySelectorAll(this.options.itemSelector);\n      this.elementsData = [];\n      this.columns = [];\n      this.columnsNumber = this.getColumnsNumber();\n      this.init();\n    } // Get columns elements from DOM\n\n\n    _createClass(Gridify, [{\n      key: \"getColumns\",\n      value: function getColumns() {\n        return this.container.querySelectorAll(this.options.columnSelector);\n      } // Get first column element from DOM\n\n    }, {\n      key: \"getFirstColumn\",\n      value: function getFirstColumn() {\n        return this.getColumns()[0];\n      } // Get number of columns\n\n    }, {\n      key: \"getColumnsNumber\",\n      value: function getColumnsNumber() {\n        var instanceForCompute = false;\n\n        if (this.getColumns().length === 0) {\n          instanceForCompute = true;\n          var column = document.createElement('div');\n          column.classList.add(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseSelector\"])(this.options.columnSelector));\n          this.container.appendChild(column);\n        }\n\n        var columnWidth = this.getFirstColumn().offsetWidth;\n        var containerWidth = this.container.offsetWidth;\n\n        if (instanceForCompute) {\n          this.getColumns().forEach(function (element) {\n            return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeItemFromDom\"])(element);\n          });\n        }\n\n        return Math.round(containerWidth / columnWidth);\n      } // Save items content and params and removes originals items\n\n    }, {\n      key: \"recordAndRemove\",\n      value: function recordAndRemove() {\n        var _this = this;\n\n        this.items.forEach(function (item, index) {\n          _this.elementsData.push({\n            content: item.outerHTML,\n            column: index % _this.columnsNumber\n          });\n\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"removeItemFromDom\"])(item);\n        });\n      } // Determines in which column an item should be\n\n    }, {\n      key: \"setColumnsPosition\",\n      value: function setColumnsPosition() {\n        for (var i in this.elementsData) {\n          this.elementsData[i].column = i % this.columnsNumber;\n        }\n      } // Append html string to DOM element\n\n    }, {\n      key: \"appendHtml\",\n      value: function appendHtml(element, str) {\n        var div = document.createElement('div');\n        div.innerHTML = str;\n\n        while (div.children.length > 0) {\n          element.appendChild(div.children[0]);\n        }\n      } // Write and append html\n\n    }, {\n      key: \"draw\",\n      value: function draw() {\n        for (var i = 0; i < this.columnsNumber; i++) {\n          var column = document.createElement('div');\n          column.classList.add(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseSelector\"])(this.options.columnSelector));\n          this.container.appendChild(column);\n        } // Creates items\n\n\n        for (var _i in this.elementsData) {\n          var content = this.elementsData[_i].content !== undefined ? this.elementsData[_i].content : '';\n          var index = _i % this.columnsNumber;\n          var container = this.container.querySelectorAll(this.options.columnSelector)[index];\n          this.appendHtml(container, content);\n        }\n\n        this.options.onResize();\n      }\n    }, {\n      key: \"resize\",\n      value: function resize() {\n        if (this.columnsNumber !== this.getColumnsNumber()) {\n          this.columnsNumber = this.getColumnsNumber();\n          this.setColumnsPosition();\n          this.draw();\n        }\n      }\n    }, {\n      key: \"init\",\n      value: function init() {\n        this.columnsNumber = this.getColumnsNumber();\n        this.recordAndRemove();\n        this.draw();\n\n        if (this.options.resizable) {\n          window.addEventListener('resize', this.resize.bind(this), false);\n        }\n      }\n    }]);\n\n    return Gridify;\n  }();\n\n  Gridify.defaults = {\n    containerSelector: '.grid',\n    itemSelector: '.grid--item',\n    columnSelector: '.grid--column',\n    resizable: true,\n    onResize: function onResize() {\n      console.log('grid resized');\n    }\n  };\n  return Gridify;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: parseSelector, removeItemFromDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseSelector\", function() { return parseSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeItemFromDom\", function() { return removeItemFromDom; });\n// Get a class name without the selector\nvar parseSelector = function parseSelector(selector) {\n  return selector.slice(1, selector.length);\n}; // Remove item from DOM tree\n\nvar removeItemFromDom = function removeItemFromDom(item) {\n  item.parentNode.removeChild(item);\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });