"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../../../npm/wepy-ant/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),timeline=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.config={usingComponents:{}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),t}(_wepy2.default.page);Page(require("./../../../npm/wepy-ant/lib/wepy.js").default.$createPage(timeline,"common/pages/basics/timeline"));