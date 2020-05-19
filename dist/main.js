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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(2);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Screenwidth less than 1024px\n-------------------------------------------------------------------- */\n@media only screen and (max-width: 1024px) {\n    header .banner-text h1 {\n        font: 80px/1.1em 'Open Sans', sans-serif;\n        letter-spacing: -1px;\n        margin: 0 auto 12px auto;\n        font-weight: 800;\n    }\n}\n\n\n/* Screenwidth less than 900px\n--------------------------------------------------------------------- */\n@media only screen and (max-width: 900px) {\n\n    /* header styles\n   ------------------------------------------------------------------ */\n    header .banner { padding-bottom: 12px; }\n    header .banner-text h1 {\n        font: 78px/1.1em 'Open Sans', sans-serif;\n        letter-spacing: -1px;\n        font-weight: 800;      \n    }\n    header .banner-text h3 {\n        font: 17px/1.9em 'Open Sans', sans-serif;\n        width: 80%;\n    }\n    header .banner-text hr {\n        width: 65%;\n        margin: 12px auto;\n    }\n    #nav-wrap {\n        font: 11px 'Open Sans', sans-serif;\n        letter-spacing: 1.5px;\n        font-weight: 800;\n    }\n    #twitter li span {\n        line-height: 1;\n        font-size: 12px;\n    }\n    .capcha{\n        margin-left: 120px;\n        margin-bottom: 33px;\n    }\n    \n    /* About Section\n    ------------------------------- */\n    #about .profile-pic {\n        width: 100px;\n        height: 100px;\n        margin-left: 12px;\n    }\n    #about .contact-details { width: 50%; }\n    #about .download { width: 50%; }\n\n    /* Contact Section\n    ------------------------------- */\n    #contact .section-head { margin-bottom: 30px; }\n    #contact .header-col h1:before {\n        font-size: 66px;\n        line-height: 66px;\n    }\n    #contact .section-head p.lead { font: 17px/33px 'Open Sans', sans-serif; }\n\n}\n\n\n/* Screenwidth less than 767px\n--------------------------------------------------------------------- */\n@media only screen and (max-width: 767px) {\n    \n    /* GENERAL\n    ------------------------------- */\n\n    .row {\n        width: 460px;\n        margin: 0 auto;\n        padding: 0;\n    }\n\n    .education {\n        padding-bottom: 50px;\n    }\n\n    .column, .columns {\n        width: auto !important;\n        float: none;\n        margin-left: 0;\n        margin-right: 0;\n        padding: 0 30px;\n    }\n\n    .row .row { width: auto; max-width: none; margin: 0 -30px; }\n\n    h3 {\n        font-size: 17.5px;\n        line-height: 30px;\n        margin-bottom: 12px;\n        font-weight: 800;\n    }\n\n    h5 {\n        font-size: 16px;\n        line-height: 30px;\n        font-weight: 800!important;\n    }\n\n    .bars li em {\n        font: 13.5px 'Open Sans', sans-serif;\n        color: #313131;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        font-weight: 800;\n        position: relative;\n        top: -28px;\n    }\n\n    [class*=\"column\"] + [class*=\"column\"]:last-child { float: none; }\n    [class*=\"bgrid\"] [class*=\"column\"] + [class*=\"column\"]:last-child { float: none; }\n\n    /* Offsets */\n    .row .offset-1    { margin-left: 0%; }\n    .row .offset-2    { margin-left: 0%; }\n    .row .offset-3    { margin-left: 0%; }\n    .row .offset-4    { margin-left: 0%; }\n    .row .offset-5    { margin-left: 0%; }\n    .row .offset-6    { margin-left: 0%; }\n    .row .offset-7    { margin-left: 0%; }\n    .row .offset-8    { margin-left: 0%; }\n    .row .offset-9    { margin-left: 0%; }\n    .row .offset-10   { margin-left: 0%; }\n    .row .offset-11   { margin-left: 0%; }\n\n\n    /* ESPECIFICO\n    ------------------------------- */\n    #nav-wrap {\n        font: 12px 'Open Sans', sans-serif;\n        background: transparent !important;\n        letter-spacing: 1.5px;  \n        width: auto;\n        position: fixed;\n        top: 0;\n        right: 0;\n    }\n    #nav-wrap > a {\n        width: 48px;\n        height: 48px;\n        text-align: left;\n        background-color: #CC5200;\n        position: relative;\n        border: none;\n        float: right;\n\n        font: 0/0 a;\n        text-shadow: none;\n        color: transparent;\n\n        position: relative;\n        top: 0px;\n        right: 30px;\n    }\n\n    #nav-wrap > a:before,\n    #nav-wrap > a:after {\n        position: absolute;\n        border: 2px solid #fff;\n        top: 35%;\n        left: 25%;\n        right: 25%;\n        content: '';\n    }\n    #nav-wrap > a:after { top: 60%; }\n\n    /* toggle buttons */\n    #nav-wrap:not( :target ) > a:first-of-type,\n    #nav-wrap:target > a:last-of-type  {\n        display: block;\n    }\n\n    /* hide menu panel */\n    #nav-wrap ul#nav {\n        height: auto;\n        display: none;\n        clear: both;\n        width: auto; \n        float: right;     \n        position: relative;\n        top: 12px;\n        right: 0;\n    }\n\n    /* display menu panels */\n    #nav-wrap:target > ul#nav\t{\n        display: block;\n        padding: 30px 20px 48px 20px;\n        background: #1f2024;\n        margin: 0 30px;\n        clear: both;\n    }\n\n    ul#nav li {\n        display: block;\n        height: auto;      \n        margin: 0 auto; \n        padding: 0 4%;           \n        text-align: left;\n        border-bottom: 1px solid #2D2E34;\n        border-bottom-style: dotted; \n    }\n\n    ul#nav li a {  \n        display: block;    \n        margin: 0;\n        padding: 0;      \n        margin: 12px 0; \n        line-height: 16px; /* reset line-height from 48px */\n        border: none;\n    }  \n\n    #col_cen {\n        font-size: 14px;\n        font-family: sans-serif;\n        margin-left: 50px;\n        font-weight: bold;\n        line-height: 3;\n    }\n\n    #col_der {\n        line-height: 2.9;\n        font-size: 14px;\n        margin-right: 10px;\n        float: right;\n    }\n\n    #twitter li span {\n        line-height: 1;\n        font-size: 15px;\n    }\n\n    /* Header\n    ------------------------------- */\n    header .banner {\n        padding-bottom: 12px;\n        padding-top: 6px;\n    }\n    header .banner-text h1 { \n        font: 55px/1.1em 'Open Sans', sans-serif; \n        font-weight: 800;\n    }\n    header .banner-text h3 {\n        font: 16px/1.9em 'Open Sans', serif;\n        width: 85%;\n    }\n    header .banner-text hr {\n        width: 33%;\n        margin: 30px auto;\n    }\n\n    /* header social links */\n    header .social {\n        margin: 18px 0 24px 0;\n        font-size: 24px;\n        line-height: 36px;      \n    }\n    header .social li { margin: 0 10px; }\n\n    /* scrolldown link */\n    header .scrolldown { display: none; }\n\n\n   /* About Section\n    ------------------------------- */\n    #about .profile-pic {\n        text-align: center;\n        margin-left: 33%;\n        margin-bottom: 20px;\n        margin-top: -50px;\n    }\n\n    #about .download .button {\n        width: 100%;\n        text-align: center;\n        padding: 15px 20px;\n    }\n    #about .main-col { padding-right: 30px; }\n\n    .seccion-profile .header-col {\n        padding-top: 0;\n        margin-bottom: 48px;\n        text-align: center;\n    }\n\n    #resume h1 { letter-spacing: 3px; }\n    #resume .main-col { padding-right: 30px; }\n    #resume h3, #resume .info { text-align: left; }\n\n    .bars { width: 100%; }\n\n    /* Portfolio Section\n    ------------------------------- */\n    #portfolio-wrapper .columns { margin-bottom: 40px; }\n    .popup-modal {\tmax-width: 85%; }\n\n    /* Control Nav */\n    .flex-control-nav {\n        text-align: center;\n        margin-left: -30px;\n    }\n\n   /* Contact Section\n    ------------------------------- */\n    #contact { padding-bottom: 66px; }\n    #contact .section-head { margin-bottom: 12px; }\n    #contact .section-head h1 {\n        font: 16px/24px 'Open Sans', sans-serif;            \n        text-align: center;   \n        margin-bottom: 30px;\n        text-shadow: 0px 1px 3px rgba(0, 0, 0, 1);\n    }  \n    #contact h1 span { display: block; }\n    #contact .header-col { padding-top: 0; }\n    #contact .header-col h1:before { content: none;\t}\n    #contact .section-head p.lead { text-align: center;}\n\n    /* Footer\n    ------------------------------- */\n    /* copyright */\n    footer .copyright li:before { content: none; }\n    footer .copyright li { margin-right: 12px; }\n\n    /* social links */\n    footer .social-links { font-size: 22px; }\n    footer .social-links li { margin-left: 18px; }\n\n    /* Go To Top Button */\n    #go-top { margin-left: -22px; }\n    #go-top a {\n        width: 54px;\n        height: 54px;\n        font-size: 18px;\n        line-height: 54px;\n    }\n\n    /*Contact Form*/\n    .capcha{\n        margin-left: 1px;\n        margin-bottom: 3px;\n    }\n\n}\n\n\n/* Screenwidth less than 480px\n--------------------------------------------------------------------- */\n\n  @media only screen and (max-width: 480px) {\n\n    .row { width: auto; }\n\n    #nav-wrap ul#nav { width: auto; float: none; }\n\n     /* Header\n    ------------------------------- */\n    header .banner { padding-top: 24px; }\n    header .banner-text h1 {\n        font: 40px/1.1em 'Open Sans', sans-serif;      \n        margin: 0 auto 24px auto;\n        font-weight: 800 !important;\n    }\n    header .banner-text h3 {\n        font: 14px/1.9em 'Open Sans', sans-serif;\n        width: 83%;\n    }\n\n    /* header social links */\n    header .social { font-size: 20px;}\n    header .social li { margin: 0 6px; }\n\n    /* Footer\n    ------------------------------- */\n    /* social links */\n    footer .social-links { font-size: 20px; }\n    footer .social-links li { margin-left: 14px; }   \n\n    .fa{\n        font-size: 16px;\n    }\n\n    .owl-pagination{\n        display: none !important;\n    }\n\n    .owl-wrapper-outer{\n        height: 200px !important;\n    }\n\n    .item img{\n        width: 150px !important;\n    }\n\n    /*Contact Form*/\n    .capcha{\n        margin-left: 1px;\n        margin-bottom: 3px;\n        margin-top: 30px;\n    }\n\n    .education {\n        padding-bottom: 50px;\n    }\n\n}\n\n/* Screenwidth less than 900px\n--------------------------------------------------------------------- */\n@media only screen and (max-width: 900px) {\n\n    /* block grids on small screens */\n    .s-bgrid-sixths [class*=\"column\"]   { width: 16.66667%; }\n    .s-bgrid-quarters [class*=\"column\"] { width: 25%; }\n    .s-bgrid-thirds [class*=\"column\"]   { width: 33.33333%; }\n    .s-bgrid-halves [class*=\"column\"]   { width: 50%; }\n\n    /* block grids left clearing */\n    .first { clear: none; }\n    .s-first { clear: left; }\n\n}\n\n\n/* Larger Screens > 1200px\n--------------------------------------------------------------------- */\n@media screen and (min-width: 1200px) {\n    .wide .row { max-width: 1180px; }\n}\n\n.cf:before,\n.cf:after {\n    content: \" \";\n    display: table;\n}\n.cf:after {\n    clear: both;\n}\n\n.remove-bottom { margin-bottom: 0 !important; }\n.half-bottom { margin-bottom: 12px !important; }\n.add-bottom { margin-bottom: 24px !important; }\n.no-border { border: none; }\n\n.text-center  { text-align: center !important; }\n.text-left    { text-align: left !important; }\n.text-right   { text-align: right !important; }\n.pull-left    { float: left !important; }\n.pull-right   { float: right !important; }\n.align-center {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    text-align: center !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/functions.js
var myopacity = 0;

function numeroEnLetras(num, idioma) {

    switch (idioma) {
        case 0:

            switch (num) {
                case 12:
                    return 'doce';
                case 13:
                    return 'trece';
                case 14:
                    return 'catorce';
                case 15:
                    return 'quince';
                case 16:
                    return 'dieciséis';
                case 17:
                    return 'diecisiete';
                case 18:
                    return 'dieciocho';
                case 19:
                    return 'diecinueve';
                case 20:
                    return 'veinte';
                case 21:
                    return 'veintiun';
                case 22:
                    return 'veintidos';
                case 23:
                    return 'veintitres';
                case 24:
                    return 'veinticuatro';
                case 25:
                    return 'veinticino';
                case 26:
                    return 'veintiseis';
                case 27:
                    return 'veintidossiete';
                case 28:
                    return 'veintidosocho';
                case 29:
                    return 'veintidosnueve';
                case 30:
                    return 'treinta';
                case 31:
                    return 'treinta y un';
                case 32:
                    return 'treinta y dos';
                case 33:
                    return 'treinta y tres';
                case 34:
                    return 'treinta y cuatro';
                case 35:
                    return 'treinta y cinco';
                case 36:
                    return 'treinta y seis';
                case 37:
                    return 'treinta y siete';
                case 38:
                    return 'treinta y ocho';
                case 39:
                    return 'treinta y nueve';
                case 40:
                    return 'cuarenta';
                default:
                    return 'mas de cuarenta';
            }
            
            break;
    
        case 1:

            switch (num) {
                case 12:
                    return 'twelve';
                case 13:
                    return 'thirteen';
                case 14:
                    return 'fourteen';
                case 15:
                    return 'fifteen';
                case 16:
                    return 'sixteen';
                case 17:
                    return 'seventeen';
                case 18:
                    return 'eighteen';
                case 19:
                    return 'nineteen';
                case 20:
                    return 'twenty';
                case 21:
                    return 'twenty one';
                case 22:
                    return 'twenty two';
                case 23:
                    return 'twenty three';
                case 24:
                    return 'twenty four';
                case 25:
                    return 'twenty five';
                case 26:
                    return 'twenty six';
                case 27:
                    return 'twenty seven';
                case 28:
                    return 'twenty eigth';
                case 29:
                    return 'twenty nine';
                case 30:
                    return 'thirty';
                case 31:
                    return 'thirty one';
                case 32:
                    return 'thirty two';
                case 33:
                    return 'thirty three';
                case 34:
                    return 'thirty four';
                case 35:
                    return 'thirty five';
                case 36:
                    return 'thirty six';
                case 37:
                    return 'thirty seven';
                case 38:
                    return 'thirty eigth';
                case 39:
                    return 'thirty nine';
                case 40:
                    return 'forty';
                default:
                    return 'more then forty';
            }

            break;
    }
    
}

function getExperiencia(idioma) {
    const datetimeInicioLaboral = new Date('September 1, 2006');
    const hoy = new Date();

    let antiguedad = hoy.getFullYear() - datetimeInicioLaboral.getFullYear();
    const m = hoy.getMonth() - datetimeInicioLaboral.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < datetimeInicioLaboral.getDate())) {
        antiguedad--;
    }

    return numeroEnLetras(antiguedad, idioma);
}

function getVersionApp() {
    let version = '';
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'version') {
            version = metas[i].getAttribute('content');
        }
    }

    return version;
}

function getIdiomaLocalStorage() {
    if (localStorage.getItem('lang')) {
        return localStorage.getItem('lang');
    } else {
        localStorage.setItem('lang', 'es');
        return localStorage.getItem('lang');
    }
}

function getIdLang(idioma) {

    let idLang = 0;

    switch (idioma) {
        case 'es':
            idLang = 0;
        break;
    
        case 'en':
            idLang = 1;
        break;
    }

    return idLang;
}

function myFadeFunction() {
    
    if (myopacity < 1) {
        myopacity += 0.075;
        setTimeout(function(){
            myFadeFunction();
        }, 50);
    }
    document.getElementById('contenido').style.opacity = myopacity;
}
// CONCATENATED MODULE: ./src/js/sections.js


function cargarSecciones(idioma, allContent) {

    let idLang = getIdLang(idioma);
    let version = getVersionApp();

    showLoading(idLang, allContent);

    // Menu
    showMenuSection(idLang, allContent);

    // Header
    showHeaderSection(idioma, allContent);
    setTimeout(function() {
        $('.fa.fa-chevron-circle-down').removeClass("hidden").hide().fadeIn(50);
    }, 50);

    // About
    $.ajax({
            url: '../src/sections/about.html?v='+version+'&lang='+idioma,
            success: function(respuesta) {
                $('#about').html(respuesta);
                showAboutSection(idioma, allContent);
            }
    });

    // Educacion
    $.ajax({
        url: '../src/sections/education.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            $('#education').html(respuesta);
            showEducationSection(idioma, allContent);
            showCursos(idioma, allContent.cursos);
        }
    });

    // Trabajo
    $.ajax({
        url: '../src/sections/work.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            $('#work').html(respuesta);
            showWorkSection(idioma, allContent);
        }
    });

    // Docencia
    $.ajax({
        url: '../src/sections/docencia.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            $('#docencia').html(respuesta);
            showDocenciaSection(idioma, allContent);
        }
    });

    // Skills
    $.ajax({
        url: '../src/sections/skills.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            var current_section = $("#nav li.current").text();

            $('#skills').html(respuesta);
            showSkillsSection(idioma, allContent);

            if(current_section==="Skills") {
                $('.bar-expand').removeClass('progress').addClass('progress');
            }
        }
    });

    // Portfolio
    $.ajax({
        url: '../src/sections/portfolio.html?v='+version+'&lang='+idioma,
        success: function(respuesta) {
            $('#portfolio').html(respuesta);
            showPortfolioSection(idioma, allContent.portfolio);
        }
    });

    
}

function cambiarIdioma(idioma, allContent) {

    const idiomaLocalStorage = getIdiomaLocalStorage();

    if(idiomaLocalStorage !== idioma) {
        localStorage.setItem('lang', idioma);
    }

    let idLang = getIdLang(idioma);

    // Loading
    showLoading(idLang, allContent);
    // Menu
    showMenuSection(idioma, allContent);
    // Header
    showHeaderSection(idioma, allContent);
    // About
    showAboutSection(idioma, allContent);
    // Education
    showEducationSection(idioma, allContent);
    // Cursos
    showCursos(idioma, allContent.cursos);
    // Education
    showWorkSection(idioma, allContent);
    // Docencia
    showDocenciaSection(idioma, allContent);
    // Skills
    showSkillsSection(idioma, allContent);
    // Portfolio
    showPortfolioSection(idioma, allContent.portfolio);
}

function showLoading(idioma, allContent) {
    let idLang = getIdLang(idioma);
    $("#loading").text(allContent.content.loading[idLang]);
}

function showMenuSection(idioma, allContent) {

    let idLang = getIdLang(idioma);

    $('#link-home').html(allContent.content.menu.inicio[idLang]).hide().fadeIn(1000);
    $('#link-acerca').html(allContent.content.menu.acerca[idLang]).hide().fadeIn(1000);
    $('#link-education').html(allContent.content.menu.educacion[idLang]).hide().fadeIn(1000);
    $('#link-work').html(allContent.content.menu.trabajo[idLang]).hide().fadeIn(1000);
    $('#link-skills').html(allContent.content.menu.skills[idLang]).hide().fadeIn(1000);
    $('#link-portfolio').html(allContent.content.menu.portfolio[idLang]).hide().fadeIn(1000);
    $('#lang').html(allContent.content.menu.idioma[idLang]).hide().fadeIn(1000);
}

function showHeaderSection(idioma, allContent) {
    let idLang = getIdLang(idioma);

    $("#content-header").hide();

    $("#header1").text(allContent.content.header1[idLang]);
    $("#header2").text(allContent.content.header2[idLang]);
    $("#headerAnios").text(getExperiencia(idLang));

    $("#content-header").fadeIn(1000);
}

function showAboutSection(idioma, allContent) {

    let idLang = getIdLang(idioma);
    
    $("#aboutTitulo").text(allContent.content.aboutTitulo[idLang]).hide().fadeIn(1000);
    $("#aboutParrafo").text(allContent.content.aboutParrafo[idLang]).hide().fadeIn(1000);
    $("#aboutContacto").text(allContent.content.aboutContacto[idLang]).hide().fadeIn(1000);
    $("#aboutLinks").hide().fadeIn(1000);
}

function showEducationSection(idioma, allContent) {
    
    let idLang = getIdLang(idioma);

    $('#education').hide();

    $("#educationTitulo").text(allContent.content.educationTitulo[idLang]);
    $("#educationLicenciado").text(allContent.content.educationLicenciado[idLang]);
    $("#educationTecnicatura").text(allContent.content.educationTecnicatura[idLang]);
    $("#educationPendienteUces").text(allContent.content.educationPendienteUces[idLang]);
    $("#educationCursosTitulo").text(allContent.content.educationCursosTitulo[idLang]);

    $('#education').fadeIn(1000);
}

$('body').on('click', '#cargarMasCursos', function() {
    $('#cursosContentOculto').css('display', 'block');
    $('#cargarMasCursos').remove();
});

function showCursos(idioma, cursos) {

    let idLang = getIdLang(idioma);
    
    var tituloCurso;
    var nombreCurso;
    let cantidadItems = 0;
    var mostrarMasLink = '';

    $('#cursosContentVisible').html('');
    $('#cursosContentOculto').html('');
    $('#cursosContentVisible').hide();
    $('#cursosContentOculto').hide();

    cursos.forEach(element => {

        cantidadItems++;

        if (idLang === 0) {
            nombreCurso = element.nombre;
            mostrarMasLink = 'Mostrar mas';
        } else {
            nombreCurso = element.name;
            mostrarMasLink = 'Show more';
        }

        if(element.url.length > 1) {
            tituloCurso = `<a href="${element.url}" target="_blank">
                                <h3>${nombreCurso}</h3>
                            </a>`;
        } else {
            tituloCurso = `<h3>${nombreCurso}</h3>`;
        }

        if (cantidadItems <= 10) {
            $('#cursosContentVisible').append(`
                <div class="row item">
                    <div class="twelve columns"> ${tituloCurso}
                        <p class="detalle-cursos">
                                <em class="detalle-cursos-em">${element.anio} • ${element.horas}h • ${element.institucion}</em>
                                <br/>
                        </p>
                    </div>
                </div>
            `);
        } else {
            $('#cursosContentOculto').append(`
                <div class="row item">
                    <div class="twelve columns"> ${tituloCurso}
                        <p class="detalle-cursos">
                                <em class="detalle-cursos-em">${element.anio} • ${element.horas}h • ${element.institucion}</em>
                                <br/>
                        </p>
                    </div>
                </div>
            `);
        }    


    });

    if ($('#cargarMasCursos').length > 0) {
        $('#cargarMasCursos').remove();
    }

    $('#cursosContentMostrarMas').append(`
        <div>
            <a id="cargarMasCursos" style="cursor: pointer;">${mostrarMasLink}</a>
        </div>
    `);

    $('#cursosContentVisible').fadeIn(1000);


}

function showWorkSection(idioma, allContent) {

    let idLang = getIdLang(idioma);

    $('#work').hide();

    $("#trabajoTitulo").text(allContent.content.trabajoTitulo[idLang]);
    
    $("#trabajoItLeadSector").text(allContent.content.trabajoItLeadSector[idLang]);
    $("#trabajoItLeadFecha").text(allContent.content.trabajoItLeadFecha[idLang]);
    $("#trabajoItLeadText").text(allContent.content.trabajoItLeadText[idLang]);

    $("#trabajoProjectManagerSector").text(allContent.content.trabajoProjectManagerSector[idLang]);
    $("#trabajoProjectManagerFecha").text(allContent.content.trabajoProjectManagerFecha[idLang]);
    $("#trabajoProjectManagerText").text(allContent.content.trabajoProjectManagerText[idLang]);

    $("#trabajoDesaWebSector").text(allContent.content.trabajoDesaWebSector[idLang]);
    $("#trabajoDesaWebFecha").text(allContent.content.trabajoDesaWebFecha[idLang]);
    $("#trabajoDesaWebText").text(allContent.content.trabajoDesaWebText[idLang]);

    $("#trabajoDesaDeskSector").text(allContent.content.trabajoDesaDeskSector[idLang]);
    $("#trabajoDesaDeskFecha").text(allContent.content.trabajoDesaDeskFecha[idLang]);
    $("#trabajoDesaDeskText").text(allContent.content.trabajoDesaDeskText[idLang]);
    
    $("#trabajoAnalisisSector").text(allContent.content.trabajoAnalisisSector[idLang]);
    $("#trabajoAnalisisFecha").text(allContent.content.trabajoAnalisisFecha[idLang]);
    $("#trabajoAnalisisText").text(allContent.content.trabajoAnalisisText[idLang]);
    
    $("#trabajoFreelanceSector").text(allContent.content.trabajoFreelanceSector[idLang]);
    $("#trabajoFreelanceFecha").text(allContent.content.trabajoFreelanceFecha[idLang]);
    $("#trabajoFreelanceText").text(allContent.content.trabajoFreelanceText[idLang]);

    $('#work').fadeIn(1000);
}

function showDocenciaSection(idioma, allContent) {

    let idLang = getIdLang(idioma);

    $("#docenciaTitulo").text(allContent.content.docenciaTitulo[idLang]).hide().fadeIn(1000);
    $("#docenciaFecha").text(allContent.content.docenciaFecha[idLang]).hide().fadeIn(1000);
    $("#docenciaText").text(allContent.content.docenciaText[idLang]).hide().fadeIn(1000);
}

function showSkillsSection(idioma, allContent) {

    let idLang = getIdLang(idioma);

    $("#skillsResponsabilidad").text(allContent.content.skillsResponsabilidad[idLang]).hide().fadeIn(1000);
    $("#skillsProactividad").text(allContent.content.skillsProactividad[idLang]).hide().fadeIn(1000);
    $("#skillsComunicacion").text(allContent.content.skillsComunicacion[idLang]).hide().fadeIn(1000);
    $("#skillsMotivacion").text(allContent.content.skillsMotivacion[idLang]).hide().fadeIn(1000);
    $("#skillsDelegation").text(allContent.content.skillsDelegation[idLang]).hide().fadeIn(1000);
}

$('body').on('click', '#cargarMasPortfolio', function() {
    $('#portfolioContentOculto').css('display', 'block');
    $('#cargarMasPortfolio').remove();
});

function showPortfolioSection(idioma, portfolio) {

    let idLang = getIdLang(idioma);

    $('#portfolioContentVisible').html('');
    $('#portfolioContentOculto').html('');
    $('#portfolioContentVisible').hide();
    $('#portfolioContentOculto').hide();

    let cantidadItems = 0;

    var nombre;
    var resumen;
    var mostrarMasLink;

    portfolio.forEach(element => {

        switch (idLang) {
            case 0:
                nombre = element.nombre;
                resumen = element.resumen;
                mostrarMasLink = 'Mostrar mas';
                break;

            case 1:
                nombre = element.name;
                resumen = element.summary;
                mostrarMasLink = 'Show more';
                break;
        }

        cantidadItems++;

        if (cantidadItems <= 10) {
            $('#portfolioContentVisible').append(`
                <div class="row">
                    <div class="twelve columns">
                    <h3><a href="${element.url}" target="_blank">${nombre}</a></h3>
                        <p class="detalle-cursos">
                            <em class="detalle-cursos-em hash-lenguaje"><span>${element.lenguaje}</em></span><br />
                            ${resumen}
                        </p>
                    </div>
                </div>
            `);
        } else {
            $('#portfolioContentOculto').append(`
                <div class="row">
                    <div class="twelve columns">
                        <h3><a href="${element.url}" target="_blank">${nombre}</a></h3>
                            <p class="detalle-cursos">
                                <em class="detalle-cursos-em hash-lenguaje"><span>${element.lenguaje}</em></span><br />
                                ${resumen}
                            </p>
                    </div>
                </div>
            `);
        }

        
    }); 

    if ($('#cargarMasPortfolio').length > 0) {
        $('#cargarMasPortfolio').remove();
    }

    $('#portfolioContent').append(`
        <div>
            <a id="cargarMasPortfolio" style="cursor: pointer;">${mostrarMasLink}</a>
        </div>
    `);

    $('#portfolioContentVisible').fadeIn(1000);

}

function cargarImagenBackground() {
    // Imagen de fondo y opacidad al inicio
    var img1 = document.createElement("img");
    img1.src = "../src/assets/images/home-background/home-background-1.jpg";
    img1.onload = function() {
        $('header').css('background', "url('../src/assets/images/home-background/home-background-1.jpg') no-repeat top center" );
        myFadeFunction();
        $('.loading').css('display', 'none');
    };
}
// CONCATENATED MODULE: ./src/js/content.js


const content_version = getVersionApp();

const getContenido = async function() {
    const result = await $.ajax({
        url: '../src/services/content.json?v='+content_version
    });
    return result;
};

const getPortfolio = async function() {
    const result = await $.ajax({
        url: '../src/services/portfolio.json?v='+content_version
    });
    return result;
};

const getCursos = async function() {
    const result = await $.ajax({
        url: '../src/services/cursos.json?v='+content_version
    });
    return result;
};
// EXTERNAL MODULE: ./src/css/media-queries.css
var media_queries = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/init.js






let init_idioma = getIdiomaLocalStorage();
let init_allContent = [];
let content = {};
let init_portfolio = [];
let init_cursos = [];

jQuery(document).ready(function($) {
    
    // ==============================================================
    // Flexslider
    // ==============================================================
    $('.flexslider').flexslider({
        namespace: "flex-",
        controlsContainer: ".flex-container",
        animation: 'slide',
        controlNav: true,
        directionNav: false,
        smoothHeight: true,
        slideshowSpeed: 7000,
        animationSpeed: 400,
        randomize: false,
    });

    // ==============================================================
    // Smooth Scrolling
    // ==============================================================
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function() {
            window.location.hash = target;
        });
    });

    // ==============================================================
    // Highlight the current section in the navigation bar
    // ==============================================================
    var sections = $("section");
    var navigation_links = $("#nav-wrap a");

    sections.waypoint({
        handler: function(event, direction) {

            var active_section;

            active_section = $(this);

            if (direction === "up")
                active_section = active_section.prev();

            var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");

            //Color barra browser
            var current_section = active_section.attr("id");

            switch(current_section){
                case 'home':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'about':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#292929">');
                break;

                case 'education':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'work':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'docencia':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'skills':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#24004a">');
                break;

                case 'portfolio':
                    $('meta[name=theme-color]').remove();
                    $('head').append('<meta name="theme-color" content="#292929">');
                break;
            }

            if(current_section==='skills'){
                $('.bar-expand').removeClass('progress').addClass('progress');
            }
            
        },
        offset: '35%'

    });

    // ==============================================================
    // Make sure that #header-background-image height is = browser height
    // ==============================================================
    $('header').css({'height': $(window).height()});
       $(window).on('resize', function() {
        $('header').css({'height': $(window).height()});
        $('body').css({'width': $(window).width()});
    });

    // ==============================================================
    // Fade In/Out Primary Navigation
    // ==============================================================
    $(window).on('scroll', function() {

        var h = $('header').height();
        var y = $(window).scrollTop();
        var nav = $('#nav-wrap');

        if ((y > h * 0.20) && (y < h) && ($(window).outerWidth() > 768)) {
            nav.fadeOut('fast');
        }
        else {
            if (y < h * 0.20) {
                nav.removeClass('opaque').fadeIn('fast');
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }

    });

    // ==============================================================
    // Cambiar Idioma
    // ==============================================================
    $('#lang').click(function(e) {

        let idioma = 'es';

        switch (e.target.innerText) {
            case 'ENGLISH':
                idioma = 'en';
                e.target.innerText = 'ESPAÑOL';
            break;
        
            case 'ESPAÑOL':
                idioma = 'es';
                e.target.innerText = 'ENGLISH';
            break;
        }

        var current_section = $("#nav li.current").children().attr('href');
        var buttonMenu = $('#nav-wrap').children().eq(1);

        $("#lang").parent().removeClass("current");

        cambiarIdioma(idioma, init_allContent);

        buttonMenu.click();
        $(this).attr("href", current_section);

    });

});

const start = async function() {

    Promise.all([
                  getContenido(), 
                  getCursos(), 
                  getPortfolio()
                ])
            .then(arr => {
                content = arr[0];
                init_cursos =  arr[1];
                init_portfolio = arr[2];
                init_allContent = {content, cursos: init_cursos, portfolio: init_portfolio};
                cargarSecciones(init_idioma, init_allContent);
                cargarImagenBackground();
            });
    
};






// EXTERNAL MODULE: ./src/styles.css
var styles = __webpack_require__(4);

// CONCATENATED MODULE: ./src/index.js



start();

/***/ })
/******/ ]);