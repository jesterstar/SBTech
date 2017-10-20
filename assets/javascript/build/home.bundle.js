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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _header = __webpack_require__(1);

var _sidebar = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Home page
 */
var Home = function () {

  /**
   * Home page constructor
   */
  function Home() {
    _classCallCheck(this, Home);

    this.initModules();
  }

  /**
   * Method for init Home page modules
   */


  _createClass(Home, [{
    key: 'initModules',
    value: function initModules() {
      (0, _header.initHeader)();
      (0, _sidebar.initSidebar)();
    }
  }]);

  return Home;
}();

new Home();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initHeader = initHeader;

var _dropdown = __webpack_require__(2);

function initHeader() {

  /**
   * Init dropwodn module
   */
  (0, _dropdown.initDropdown)('.dropdown');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDropdown = initDropdown;
/**
 * Module to init dropdown
 */

function initDropdown(el) {

  /**
   * Define variables
   */
  var currElement = document.querySelectorAll(el);

  if (!currElement) {
    return false;
  } else {

    /**
     * Toggle function
     */
    var clickTrigger = function clickTrigger(container) {
      var dropdown = container[0];

      function initClick(e) {
        e.preventDefault();

        /**
         * Condition to remove/add active class
         */
        if (this.classList.value.match('active')) {
          this.className = 'dropdown';
          return;
        }

        this.classList.add('active');

        /**
         * Event when user click not on active element
         */
        /*$(document).mouseup(function (e){
          if (!$(dropdown[i]).is(e.target) && $(dropdown[i]).has(e.target).length === 0) {
            $(dropdown[i]).removeClass('active');
          }
        });*/
      }

      dropdown.addEventListener('click', initClick, false);
    };

    /**
     * Init function
     */


    clickTrigger(currElement);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSidebar = initSidebar;

var _accordion = __webpack_require__(4);

function initSidebar() {

  /**
   * Init accordion module
   */
  (0, _accordion.initAccordion)('.accordion');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAccordion = initAccordion;
/**
 * Module to init accordion
 */

function initAccordion(el) {

  /**
   * Define constants
   */
  var OPEN_LABEL_TEXT = 'Click to open';
  var CLOSE_LABEL_TEXT = 'Click to close';

  /**
   * Define variables
   */
  var currElement = document.querySelectorAll(el);
  var dataToggle = void 0,
      panel = void 0;

  if (!currElement) {
    return false;
  } else {

    /**
     * Method to render all panes
     */
    var paneRender = function paneRender(container) {
      panel = container[0].children;

      for (var i = 0; i < panel.length; i++) {
        dataToggle = panel[i].dataset.toggle;

        if (dataToggle == 'close') {
          panel[i].classList.add('closed');
          panel[i].children[0].innerHTML = OPEN_LABEL_TEXT;
        } else if (dataToggle == 'open') {
          panel[i].classList.add('opened');
          panel[i].children[0].innerHTML = CLOSE_LABEL_TEXT;
        }
      }
    };

    /**
     * Click trigger method
     */


    var clickTrigger = function clickTrigger(container) {
      panel = container[0].children;

      /**
       * Method to click on pane
       */
      function initClick() {
        dataToggle = this.parentNode.dataset.toggle;

        if (dataToggle == 'open') {
          this.innerHTML = OPEN_LABEL_TEXT;
          this.parentNode.dataset.toggle = 'close';
          this.parentNode.classList.replace('opened', 'closed');
        } else if (dataToggle = 'close') {
          closeAllPanes();

          this.innerHTML = CLOSE_LABEL_TEXT;
          this.parentNode.dataset.toggle = 'open';
          this.parentNode.classList.replace('closed', 'opened');
        }
      }

      /**
       * Method to close all panes
       */
      function closeAllPanes() {
        for (var i = 0; i < panel.length; i++) {
          panel[i].children[0].innerHTML = OPEN_LABEL_TEXT;
          panel[i].dataset.toggle = 'close';
          panel[i].classList.replace('opened', 'closed');
        }
      }

      /**
       * Adding event listener to the panes
       */
      for (var i = 0; i < panel.length; i++) {
        panel[i].children[0].addEventListener('click', initClick, false);
      }
    };

    /**
     * Init method`s
     */


    paneRender(currElement);
    clickTrigger(currElement);
  }
}

/***/ })
/******/ ]);