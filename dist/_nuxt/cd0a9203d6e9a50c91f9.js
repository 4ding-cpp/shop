(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{450:function(e,t,n){"use strict";n.r(t);n(5),n(3),n(2),n(1),n(4);var r=n(0),c=(n(19),n(8)),o=n(22);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={data:function(){return{token:"",dd:"666",buffer:{},list:[]}},created:function(){this.loading(!1)},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.context,e.app,e.store;case 1:case"end":return t.stop()}}),t)})))()},fetch:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.store,e.$axios,e.app;case 1:case"end":return t.stop()}}),t)})))()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({loading:"loading",get_website:"web/get_website"}),{test:function(){},onSubmit:function(){this.$refs.invisibleRecaptcha.execute()},onVerify:function(e){console.log("Verify: "+e)},onExpired:function(){console.log("Expired")},resetRecaptcha:function(){this.$refs.recaptcha.reset()}})},O=n(10),component=Object(O.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"page"}},[e._v("\n\n  "+e._s(e.dd)+"\n  "),n("br"),e._v(" "),n("ul",e._l(e.list,(function(t,i){return n("li",[e._v(e._s(t))])})),0),e._v("\n  xx\n  "),n("br"),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.test()}}},[e._v("Sign in")])])}),[],!1,null,null,null);t.default=component.exports}}]);