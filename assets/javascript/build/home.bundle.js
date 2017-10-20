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
  /*initDropdown('.dropdown');*/
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
  var currElement = $(el);

  if (!currElement) {
    return false;
  } else {

    /**
     * Toggle function
     */
    var clickTrigger = function clickTrigger(container) {
      var dropdown = $(container);

      $(dropdown).each(function (i) {
        $(dropdown[i]).on('click', function (e) {
          e.preventDefault();

          if ($(dropdown[i]).hasClass('active')) {
            $(dropdown[i]).removeClass('active');
            return;
          }
          $(dropdown[i]).addClass('active');

          $(document).mouseup(function (e) {
            if (!$(dropdown[i]).is(e.target) && $(dropdown[i]).has(e.target).length === 0) {
              $(dropdown[i]).removeClass('active');
            }
          });
        });
      });
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

  var currElement = document.querySelectorAll(el);
  var paneCollection = void 0,
      dataToggle = void 0;

  if (!currElement) {
    return false;
  } else {

    /**
     * Function to render all panes
     */
    var paneRender = function paneRender(container) {
      paneCollection = currElement[0].children;

      for (var i = 0; i < paneCollection.length; i++) {
        dataToggle = paneCollection[i].dataset.toggle;

        if (dataToggle == 'close') {
          paneCollection[i].classList.add('closed');
          paneCollection[i].children[0].innerHTML = OPEN_LABEL_TEXT;
        } else if (dataToggle == 'open') {
          paneCollection[i].classList.add('opened');
          paneCollection[i].children[0].innerHTML = CLOSE_LABEL_TEXT;
        }
      }
      /*paneCollection = $(container).find('.pane');
        for (let i=0; i < paneCollection.length; i++) {
        dataToggle = $(paneCollection[i]).data('toggle');
          if (dataToggle == 'close') {
          $(paneCollection[i])
            .addClass('closed')
            .find('.panel .title')
            .text(openLabel);
        } else if (dataToggle == 'open') {
          $(paneCollection[i])
            .addClass('opened')
            .removeClass('closed')
            .find('.panel .title')
            .text(closeLabel);
        }
      }*/
    };

    /**
     * Toggle function
     */


    var clickTrigger = function clickTrigger(container) {}
    /*let panel = $(container).find('.pane > .panel');
      $(panel).each((i) => {
      $(panel[i]).on('click', () => {
        dataToggle = $(panel[i]).closest('.pane').data('toggle');
          if (dataToggle == 'close') {
          $(panel)
            .closest('.pane')
            .addClass('closed')
            .removeClass('opened')
            .data('toggle', 'close')
            .find('.panel .title')
            .text(openLabel);
            $(panel[i])
            .closest('.pane')
            .addClass('opened')
            .removeClass('closed')
            .data('toggle', 'open')
            .find('.panel .title')
            .text(closeLabel);
        } else if (dataToggle == 'open') {
          $(panel)
            .closest('.pane')
            .addClass('closed')
            .removeClass('opened')
            .data('toggle', 'close')
            .find('.panel .title')
            .text(openLabel);
        }
      });
    });*/


    /**
     * Init functions
     */
    ;

    paneRender(currElement);
    clickTrigger(currElement);
  }
}

/***/ })
/******/ ]);