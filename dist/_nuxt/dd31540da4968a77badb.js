(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{450:function(t,e,n){var content=n(458);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("c38df75c",content,!0,{sourceMap:!1})},457:function(t,e,n){"use strict";var o=n(450);n.n(o).a},458:function(t,e,n){(e=n(12)(!1)).push([t.i,"",""]),t.exports=e},474:function(t,e,n){"use strict";n.r(e);n(5),n(3),n(2),n(1),n(4);var o=n(0),r=n(16);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"",props:{},data:function(){return{email:""}},watch:{},computed:{},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({loading:"loading"}),{clickCallback:function(t){console.log(t)},submit:function(){this.$validate().then((function(t){t&&alert("Validation succeeded!")}))}}),validators:{email:function(t){return this.Validator.value(t).required().email()}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){var t=this;setTimeout((function(){t.loading(!1)}),3e3)},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},f=(n(457),n(9)),component=Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page"}},[e("section",{staticClass:"content"},[e("div",{staticClass:"container"},[e("paginate",{attrs:{pageCount:10,containerClass:"pagination",clickHandler:this.clickCallback}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);