"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../../../npm/wepy-ant/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),button=function(t){function o(){var t,r,n,i;_classCallCheck(this,o);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return r=n=_possibleConstructorReturn(this,(t=o.__proto__||Object.getPrototypeOf(o)).call.apply(t,[this].concat(s))),n.config={usingComponents:{}},n.data={colorList:wx.globalData.colorList,shadow:!1,bordersize:!1},n.methods={SetShadow:function(){this.shadow=e.detail.value},SetBorderSize:function(e){this.bordersize=e.detail.value},demo:function(){}},i=r,_possibleConstructorReturn(n,i)}return _inherits(o,t),o}(_wepy2.default.page);Page(require("./../../../npm/wepy-ant/lib/wepy.js").default.$createPage(button,"common/pages/basics/button"));