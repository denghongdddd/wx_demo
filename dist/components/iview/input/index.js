"use strict";Component({behaviors:["wx://form-field"],externalClasses:["i-class"],properties:{title:{type:String},type:{type:String,value:"text"},disabled:{type:Boolean,value:!1},placeholder:{type:String,value:""},autofocus:{type:Boolean,value:!1},mode:{type:String,value:"normal"},right:{type:Boolean,value:!1},error:{type:Boolean,value:!1},maxlength:{type:Number},cursor:{type:Number}},methods:{handleInputChange:function(e,t){var a=e.detail,n=void 0===a?{}:a,l=n.value,r=void 0===l?"":l;this.setData({value:r}),this.triggerEvent("change",e)},handleInputFocus:function(e){this.triggerEvent("focus",e)},handleInputBlur:function(e){this.triggerEvent("blur",e)}}});