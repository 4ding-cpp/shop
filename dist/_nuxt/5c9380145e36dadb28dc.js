(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{468:function(t,e,r){"use strict";r.r(e);r(5),r(3),r(2),r(1),r(4);var n=r(0),o=(r(17),r(8)),c=r(15);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d,l={data:function(){return{product_list:[],page_info:{}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.context,r=t.app,t.store,n=t.route,null,void 0!==n.params.id&&(new r.sqlpb.Condition).setO(10).setV(n.params.id);case 3:case"end":return e.stop()}}),e)})))()},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.store,t.$axios,t.app;case 1:case"end":return e.stop()}}),e)})))()},watch:{},computed:{},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({loading:"loading",get_product:"product/get_product"}),{},Object(c.d)({set_product_list:"product/set_product_list"}),{test:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),beforeCreate:function(){},created:function(){this.loading(!0)},beforeMount:function(){},mounted:(d=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading(!1);case 1:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},O=r(9),component=Object(O.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page"}},[this._m(0),this._v(" "),e("Footers")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container"},[this._v("page")])])}],!1,null,null,null);e.default=component.exports}}]);