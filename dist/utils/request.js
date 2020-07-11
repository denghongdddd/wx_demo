"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _tips=require("./tips.js"),_tips2=_interopRequireDefault(_tips),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_util=require("./../api/util.js"),_util2=_interopRequireDefault(_util),request={https:function(e,t,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=_wepy2.default.$instance.globalData;wx.showNavigationBarLoading();var s=wx.getStorageSync("iProjectId");!!s&&(o.iProjectId=s),"object"==_util2.default.getType(r.userData)&&r.userData.hasOwnProperty("sUserNo")&&(o.sUserName=encodeURI(r.userData.sUserNo));var i=t;return"postNet"==i&&(i="post"),"getNet"==i&&(i="get"),new Promise(function(r){wx.request({url:e,method:i,data:a,header:Object.assign({"Content-Type":"application/json"},o),success:function(e){if(404==e.statusCode&&_tips2.default.alert("请求的网址不存在"),("postNet"==t||"getNet"==t)&&500==e.statusCode)return wx.showModal({title:"提示",content:"内部服务器请求出错",showCancel:!1}),!noLoad&&_tips2.default.loaded(),!1;r(e.data)},fail:function(e){r()},complete:function(e){-1!==e.errMsg.indexOf("request:fail")&&wx.showModal({content:"网络连接错误，请检查网络",showCancel:!1}),wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()}})})}};exports.default=request;