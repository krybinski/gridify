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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.js
// Get a class name without the selector
var parseSelector = function parseSelector(selector) {
  return selector.slice(1, selector.length);
}; // Remove item from DOM tree

var removeItemFromDom = function removeItemFromDom(item) {
  item.parentNode.removeChild(item);
}; // Create event

var prepareEvent = function prepareEvent(name, element) {
  var event = new Event(name);
  element.dispatchEvent(event);
};
// CONCATENATED MODULE: ./src/constants.js
/* harmony default export */ var constants = ({
  EVENTS: {
    INIT: 'gridify:init',
    RESIZED: 'gridify:resized'
  }
});
// CONCATENATED MODULE: ./src/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




(function (factory) {
  window.Gridify = factory();
})(function () {
  'use strict';

  var Gridify =
  /*#__PURE__*/
  function () {
    function Gridify(opts) {
      _classCallCheck(this, Gridify);

      this.options = Object.assign(Gridify.defaults, opts);
      this.container = document.querySelector(this.options.containerSelector);
      this.items = this.container.querySelectorAll(this.options.itemSelector);
      this.elementsData = [];
      this.columns = [];
      this.columnsNumber = this._getColumnsNumber();

      this._init();
    } // Get columns elements from DOM


    _createClass(Gridify, [{
      key: "_getColumns",
      value: function _getColumns() {
        return this.container.querySelectorAll(this.options.columnSelector);
      } // Get first column element from DOM

    }, {
      key: "_getFirstColumn",
      value: function _getFirstColumn() {
        return this._getColumns()[0];
      } // Get number of columns

    }, {
      key: "_getColumnsNumber",
      value: function _getColumnsNumber() {
        var instanceForCompute = false;

        if (this._getColumns().length === 0) {
          instanceForCompute = true;
          var column = document.createElement('div');
          column.classList.add(parseSelector(this.options.columnSelector));
          this.container.appendChild(column);
        }

        var columnWidth = this._getFirstColumn().offsetWidth;

        var containerWidth = this.container.offsetWidth;

        if (instanceForCompute) {
          this._getColumns().forEach(function (element) {
            return removeItemFromDom(element);
          });
        }

        return Math.round(containerWidth / columnWidth);
      } // Save items content and params and removes originals items

    }, {
      key: "_recordAndRemove",
      value: function _recordAndRemove() {
        var _this = this;

        this.items.forEach(function (item, index) {
          _this.elementsData.push({
            content: item.outerHTML,
            column: index % _this.columnsNumber
          });

          removeItemFromDom(item);
        });
      } // Determines in which column an item should be

    }, {
      key: "_setColumnsPosition",
      value: function _setColumnsPosition() {
        for (var i in this.elementsData) {
          this.elementsData[i].column = i % this.columnsNumber;
        }
      } // Append html string to DOM element

    }, {
      key: "_appendHtml",
      value: function _appendHtml(element, str) {
        var div = document.createElement('div');
        div.innerHTML = str;

        while (div.children.length > 0) {
          element.appendChild(div.children[0]);
        }
      } // Write and append html

    }, {
      key: "_draw",
      value: function _draw() {
        for (var i = 0; i < this.columnsNumber; i++) {
          var column = document.createElement('div');
          column.classList.add(parseSelector(this.options.columnSelector));
          this.container.appendChild(column);
        } // Creates items


        for (var _i in this.elementsData) {
          var content = this.elementsData[_i].content !== undefined ? this.elementsData[_i].content : '';
          var index = _i % this.columnsNumber;
          var container = this.container.querySelectorAll(this.options.columnSelector)[index];

          this._appendHtml(container, content);
        }
      }
    }, {
      key: "_resize",
      value: function _resize() {
        if (this.columnsNumber !== this._getColumnsNumber()) {
          this.columnsNumber = this._getColumnsNumber();

          this._setColumnsPosition();

          this._draw();

          prepareEvent(constants.EVENTS.RESIZED, this.container);
        }
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this2 = this;

        var loadedHandler = function loadedHandler() {
          prepareEvent(constants.EVENTS.INIT, _this2.container);
          _this2.columnsNumber = _this2._getColumnsNumber();

          _this2._recordAndRemove();

          _this2._draw();
        };

        window.addEventListener('DOMContentLoaded', loadedHandler, false);

        if (this.options.resizable) {
          window.addEventListener('resize', this._resize.bind(this), false);
        }
      }
    }]);

    return Gridify;
  }();

  Gridify.defaults = {
    containerSelector: '.grid',
    itemSelector: '.grid--item',
    columnSelector: '.grid--column',
    resizable: true
  };
  return Gridify;
});

/***/ })
/******/ ]);