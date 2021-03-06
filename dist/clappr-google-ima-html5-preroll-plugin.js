(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["ClapprGoogleImaHtml5PrerollPlugin"] = factory(require("clappr"));
	else
		root["ClapprGoogleImaHtml5PrerollPlugin"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// source: https://github.com/mathiasbynens/small
var mp4 = exports.mp4 = 'data:video/mp4;base64, AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAGm1kYXQAAAGzABAHAAABthBgUYI9t+8AAAMNbW9vdgAAAGxtdmhkAAAAAMXMvvrFzL76AAAD6AAAACoAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhpb2RzAAAAABCAgIAHAE/////+/wAAAiF0cmFrAAAAXHRraGQAAAAPxcy++sXMvvoAAAABAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAgAAAAIAAAAAAG9bWRpYQAAACBtZGhkAAAAAMXMvvrFzL76AAAAGAAAAAEVxwAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABaG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAShzdGJsAAAAxHN0c2QAAAAAAAAAAQAAALRtcDR2AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAgACABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAXmVzZHMAAAAAA4CAgE0AAQAEgICAPyARAAAAAAMNQAAAAAAFgICALQAAAbABAAABtYkTAAABAAAAASAAxI2IAMUARAEUQwAAAbJMYXZjNTMuMzUuMAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAASAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1My4yMS4x';

// 1x1 black SVG pixel
var svg = exports.svg = 'data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"><rect x="0" y="0" width="1" height="1" fill="#000000" /></svg>';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cb, secure, timeout) {
  var win = window,
      doc = document,
      el = 'script';

  var onLoad = function onLoad(r) {
    win.clearTimeout(timer);
    if (typeof cb === 'function') cb(r);
  };

  if (win.google && win.google.ima) {
    onLoad(true);

    return;
  }

  var timer = null;
  var s = secure === true ? 'https:' : '';
  var first = doc.getElementsByTagName(el)[0];
  var script = doc.createElement(el);

  script.src = s + '//imasdk.googleapis.com/js/sdkloader/ima3.js';
  script.async = true;
  if (typeof cb === 'function') script.onload = function () {
    onLoad(true);
  };
  first.parentNode.insertBefore(script, first);
  if (timeout) {
    timer = win.setTimeout(function () {
      onLoad(false);
    }, timeout);
  }
};

module.exports = exports['default']; /**
                                      * Google IMA HTML5 SDK lazy loader.
                                      * @function
                                      * @param {function} The library loaded callback.
                                      * @param {boolean} Set to true to force HTTPS load protocol. (Default behaviour is to match current protocol)
                                      * @param {number} The load timeout in milliseconds
                                      */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".google-ima-html5-preroll-plugin[data-preroll] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: left; }\n  .google-ima-html5-preroll-plugin[data-preroll] .preroll-container[data-preroll] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1337;\n    background-color: #000;\n    cursor: pointer;\n    overflow: hidden;\n    display: none; }\n    .google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll]:hover .preroll-overlay-icon[data-preroll] {\n      opacity: 1; }\n    .google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll] .preroll-overlay-icon[data-preroll] {\n      position: relative;\n      width: 100%;\n      height: 25%;\n      top: 50%;\n      transform: translateY(-50%);\n      opacity: 0.75; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svg-spinner\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 80 80\" xml:space=\"preserve\"></svg>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path fill=\"#010101\" d=\"M1.425.35L14.575 8l-13.15 7.65V.35z\"></path></svg>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clappr = __webpack_require__(6);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _dummy = __webpack_require__(0);

var _imaLoader = __webpack_require__(1);

var _imaLoader2 = _interopRequireDefault(_imaLoader);

var _play = __webpack_require__(5);

var _play2 = _interopRequireDefault(_play);

var _loader = __webpack_require__(4);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 01-play.svg icon from Clappr player


// http://articles.dappergentlemen.com/2015/01/13/svg-spinner/

var ClapprGoogleImaHtml5PrerollPlugin = function (_UICorePlugin) {
  _inherits(ClapprGoogleImaHtml5PrerollPlugin, _UICorePlugin);

  _createClass(ClapprGoogleImaHtml5PrerollPlugin, [{
    key: 'name',
    get: function get() {
      return 'google-ima-html5-preroll-plugin';
    }
  }, {
    key: 'attributes',
    get: function get() {
      return {
        'class': this.name,
        'data-preroll': ''
      };
    }
  }]);

  function ClapprGoogleImaHtml5PrerollPlugin(core) {
    _classCallCheck(this, ClapprGoogleImaHtml5PrerollPlugin);

    var _this = _possibleConstructorReturn(this, (ClapprGoogleImaHtml5PrerollPlugin.__proto__ || Object.getPrototypeOf(ClapprGoogleImaHtml5PrerollPlugin)).call(this, core));

    _this._imaIsloaded = false;
    _this._imaLoadResult = false;
    _this._pluginIsReady = false;

    var cfg = _this.options.googleImaHtml5PrerollPlugin;
    if (!cfg) {
      _this._pluginError('configuration is missing');
    }

    _this._tag = cfg.tag;
    _this._autostart = cfg.autostart === false ? false : true; // Default is true
    _this._events = _clappr.$.isPlainObject(cfg.events) ? cfg.events : {};
    var timeout = cfg.imaLoadTimeout > 0 ? cfg.imaLoadTimeout : 6000; // Default is 6 seconds

    // TODO: Add an option which is an array of plugin name to disable

    if (!_this._tag) {
      _this._pluginError('tag option is required');
    }

    // Ensure Google IMA SDK is loaded
    (0, _imaLoader2.default)(function (result) {
      _this._imaLoadResult = result;
      _this._imaIsloaded = true;
      _this._initImaSDK();
    }, true, timeout);
    return _this;
  }

  _createClass(ClapprGoogleImaHtml5PrerollPlugin, [{
    key: 'bindEvents',
    value: function bindEvents() {
      this.listenTo(this.core.mediaControl, _clappr.Events.MEDIACONTROL_CONTAINERCHANGED, this._onMediaControlContainerChanged);
      this.listenTo(this.core, _clappr.Events.CORE_READY, this._onCoreReady);
    }
  }, {
    key: '_onMediaControlContainerChanged',
    value: function _onMediaControlContainerChanged() {
      this.core.mediaControl.container.$el.append(this.el);
    }
  }, {
    key: '_pluginError',
    value: function _pluginError(msg) {
      throw new Error(this.name + ': ' + msg);
    }
  }, {
    key: '_onCoreReady',
    value: function _onCoreReady() {
      // Get current container. (To disable bindings during ad playback)
      this._container = this.core.getCurrentContainer();
      if (!this._container) {
        this._pluginError('failed to get Clappr current container');
      }

      // Get current playback. (To get playback element)
      this._playback = this.core.getCurrentPlayback();
      if (!this._playback) {
        this._pluginError('failed to get Clappr playback');
      }

      // Attempt to get poster plugin. (May interfere with media control)
      this._posterPlugin = this._container.getPlugin('poster'

      // Attempt to get click-to-pause plugin. (May interfere with advert click handling)
      );this._clickToPausePlugin = this._container.getPlugin('click_to_pause');

      this._contentElement = this._playback.el;
      this._initPlugin();
    }
  }, {
    key: '_disableControls',
    value: function _disableControls() {
      this.core.disableMediaControl();
      this._posterPlugin && this._posterPlugin.disable();
      this._clickToPausePlugin && this._clickToPausePlugin.disable();
      this._container.stopListening();
    }
  }, {
    key: '_enableControls',
    value: function _enableControls() {
      this._clickToPausePlugin && this._clickToPausePlugin.enable();
      this._posterPlugin && this._posterPlugin.enable();
      this.core.enableMediaControl();
    }
  }, {
    key: '_initPlugin',
    value: function _initPlugin() {
      var _this2 = this;

      // Ensure browser can play video content. (Avoid to display an ad with nothing after)
      if (this._playback.name === 'no_op') {
        this.destroy();

        return;
      }

      // Ensure playback is using HTML5 video element if mobile device
      if (this._playback.tagName !== 'video' && _clappr.Browser.isMobile) {
        this.destroy();

        return;
      }

      // Display overlay (with loader icon)
      this._$clickOverlay.show

      // Disable Clappr during ad playback
      ();process.nextTick(function () {
        return _this2._disableControls();
      });

      this._useDummyMp4Video = false;
      this._useBlackSvgPixel = false;

      var src = this._playback.el && this._playback.el.src;
      if (!src || src.length === 0) {
        // Ensure video element has one source loaded (expected by most of ad SDK libraries)
        // This is required if loaded source is a .m3u8 handled by hls.js playback (src is empty)
        this._playback.el.src = _dummy.mp4;
        this._useDummyMp4Video = true;
      } else if (this._playback.name === 'html5_video' && !this._playback.el.hasAttribute('poster')) {
        // Hide video source preview using a black 1 pixel video poster. (Smoother user experience on iOS/MacOSX)
        this._playback.el.poster = _dummy.svg;
        this._useBlackSvgPixel = true;
      }

      // Note that some ad SDK may also change the video element styles without properly restoring state after ad playback.
      // A possible enhancement could be also to backup element styles and restore them after ad playback.

      this._pluginIsReady = true;
      this._initImaSDK();
    }
  }, {
    key: '_createImaContainer',
    value: function _createImaContainer() {
      this._destroyImaContainer
      // IMA does not clean ad container when finished
      // For the sake of simplicity, wrap into a <div> element
      ();if (this._adContainer) {
        this._imaContainer = document.createElement('div');
        this._adContainer.appendChild(this._imaContainer);
      }
    }
  }, {
    key: '_destroyImaContainer',
    value: function _destroyImaContainer() {
      if (this._imaContainer && this._adContainer) {
        this._adContainer.removeChild(this._imaContainer);
        delete this._imaContainer;
      }
    }
  }, {
    key: '_createAdDisplayContainer',
    value: function _createAdDisplayContainer() {
      this._createImaContainer();
      this._adDisplayContainer = new google.ima.AdDisplayContainer(this._imaContainer, this._contentElement);
    }
  }, {
    key: '_initImaSDK',
    value: function _initImaSDK() {
      if (!this._imaIsloaded || !this._pluginIsReady) {
        return;
      }

      // Skip ad scenario if IMA SDK is not successfully loaded
      // May happen if user has ad blocker, or Google server unavailable
      if (!this._imaLoadResult) {
        this._playVideoContent();

        return;
      }

      this._createAdDisplayContainer();
      this._requestAd();
    }
  }, {
    key: '_requestAd',
    value: function _requestAd() {
      var _this3 = this;

      var adsLoader = new google.ima.AdsLoader(this._adDisplayContainer);

      adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
        _this3._onAdsManagerLoaded(e);
      });

      adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
        _this3._onAdError(e);
      });

      var adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = this._tag;
      adsRequest.linearAdSlotWidth = '100%';
      adsRequest.linearAdSlotHeight = '100%';
      adsRequest.nonLinearAdSlotWidth = '100%';
      adsRequest.nonLinearAdSlotHeight = '100%';

      // requestAds() trigger _onAdsManagerLoaded() or _onAdError()
      adsLoader.requestAds(adsRequest);
    }
  }, {
    key: '_onAdsManagerLoaded',
    value: function _onAdsManagerLoaded(adsManagerLoadedEvent) {
      var _this4 = this;

      var adsRenderingSettings = new google.ima.AdsRenderingSettings();

      // Plugin will handle playback state when ad has completed
      adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = false;

      this._adsManager = adsManagerLoadedEvent.getAdsManager(this._contentElement, adsRenderingSettings);

      this._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
        _this4._onAdError(e);
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function () {
        _this4._imaEvent('content_resume_requested');
        _this4._playVideoContent();
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function () {
        _this4._imaEvent('content_pause_requested');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, function () {
        _this4._imaEvent('loaded');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, function () {
        _this4._imaEvent('click');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, function () {
        _this4._imaEvent('impression');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, function () {
        _this4._imaEvent('started');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, function () {
        _this4._imaEvent('first_quartile');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, function () {
        _this4._imaEvent('midpoint');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, function () {
        _this4._imaEvent('third_quartile');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, function () {
        _this4._imaEvent('complete');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function () {
        _this4._imaEvent('paused');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, function () {
        _this4._imaEvent('resumed');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, function () {
        _this4._imaEvent('skipped');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function () {
        _this4._imaEvent('user_close');
      });

      this._setupOverlay();
    }
  }, {
    key: '_onAdError',
    value: function _onAdError(adErrorEvent) {
      // google.ima.AdErrorEvent : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdErrorEvent
      // google.ima.AdError : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdError
      // console.log('onAdError: ' + adErrorEvent.getError())
      this._imaEvent('ad_error', adErrorEvent);
      this._playVideoContent();
    }
  }, {
    key: '_imaEvent',
    value: function _imaEvent(eventName, e) {
      _clappr.$.isFunction(this._events[eventName]) && this._events[eventName](e);
    }
  }, {
    key: '_setupOverlay',
    value: function _setupOverlay() {
      var _this5 = this;

      // Ad start must be done as the result of a user action on mobile.
      // For more details, read https://developers.google.com/interactive-media-ads/docs/sdks/html5/mobile_video
      if (!this._autostart || _clappr.Browser.isMobile) {
        var startAd = function startAd(e) {
          try {
            _this5._clickOverlay.removeEventListener('click', startAd, false);
            e.preventDefault();
            e.stopPropagation();
          } catch (err) {}
          _this5._$clickOverlay.hide
          // Use playback "consent" feature to capture user action (Clappr 0.2.66 or greater)
          ();_this5._playback.consent();
          _this5._playAds();
        };

        this._setPlayIcon();
        this._clickOverlay.addEventListener('click', startAd, false);

        return;
      }

      // Otherwise, autostart ad display
      this._$clickOverlay.hide();
      this._playAds();
    }
  }, {
    key: '_playAds',
    value: function _playAds() {
      this._adDisplayContainer.initialize();

      try {
        this._adsManager.init(this._contentElement.offsetWidth, this._contentElement.offsetHeight, google.ima.ViewMode.NORMAL);
        this._adsManager.start();
      } catch (e) {
        // console.log('adsManager catched error', e)
        this._imaEvent('error', e);
        this._playVideoContent();
      }
    }
  }, {
    key: '_playVideoContent',
    value: function _playVideoContent() {
      var _this6 = this;

      process.nextTick(function () {
        _this6._enableControls();
        _this6.$el.hide

        // Ensure recycleVideo playback option is enabled with mobile devices (Clappr 0.2.66 or greater)
        ();var playbackOptions = _this6.core.options.playback || {};
        playbackOptions.recycleVideo = _clappr.Browser.isMobile;

        _this6.core.configure({
          playback: playbackOptions,
          sources: _this6.core.options.sources,
          autoPlay: true
        });
      });
    }
  }, {
    key: '_remove',
    value: function _remove() {
      if (this._$adContainer) {
        this._$adContainer.remove();
      }
      if (this._$clickOverlay) {
        this._$clickOverlay.remove();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this._remove();
      this._$adContainer = (0, _clappr.$)("<div />").addClass("preroll-container").attr('data-preroll', '');
      this._$clickOverlay = (0, _clappr.$)("<div />").addClass("preroll-overlay").attr('data-preroll', '');
      this._$clickOverlay.append(_loader2.default);
      this._$clickOverlay.find('svg').addClass('preroll-overlay-icon').attr('data-preroll', '');
      this.$el.append(this._$adContainer);
      this.$el.append(this._$clickOverlay);
      this.$el.append(_clappr.Styler.getStyleFor(_style2.default));
      this._adContainer = this._$adContainer[0];
      this._clickOverlay = this._$clickOverlay[0];

      return this;
    }
  }, {
    key: '_setPlayIcon',
    value: function _setPlayIcon() {
      this._$clickOverlay.find('svg').replaceWith(_play2.default);
      this._$clickOverlay.find('svg path').css('fill', '#fff');
      this._$clickOverlay.find('svg').addClass('preroll-overlay-icon').attr('data-preroll', '');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this._adsManager) {
        this._adsManager.destroy();
      }
      this._destroyImaContainer();
      _get(ClapprGoogleImaHtml5PrerollPlugin.prototype.__proto__ || Object.getPrototypeOf(ClapprGoogleImaHtml5PrerollPlugin.prototype), 'destroy', this).call(this);
    }
  }]);

  return ClapprGoogleImaHtml5PrerollPlugin;
}(_clappr.UICorePlugin);

exports.default = ClapprGoogleImaHtml5PrerollPlugin;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
});