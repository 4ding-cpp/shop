(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{471:function(t,e,n){"use strict";n.r(e);n(5),n(3),n(2),n(1),n(4);var r=n(0),o=(n(17),n(7)),c=n(15);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d,l={data:function(){return{content:[]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,data,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.context,n=t.app,r=t.store,void 0!==(o=t.route).params.id){e.next=3;break}return e.abrupt("return");case 3:return data={content:""},(c=new n.sqlpb.Condition).setF("page_id").setV(o.params.id),e.next=8,r.dispatch("web/get_WebPage",{app:n,token:r.state.other.token,condition:c});case 8:return f=e.sent,console.log("page>>>",f),200==f.code&&(data.content=f.data),e.abrupt("return",data);case 12:case"end":return e.stop()}}),e)})))()},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.store,t.$axios,t.app;case 1:case"end":return e.stop()}}),e)})))()},watch:{},computed:{},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({loading:"loading",get_product:"product/get_product"}),{},Object(c.d)({set_product_list:"product/set_product_list"}),{test:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),beforeCreate:function(){},created:function(){this.loading(!0)},beforeMount:function(){},mounted:(d=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading(!1);case 1:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},h=n(9),component=Object(h.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page"}},[this._m(0),this._v(" "),e("Footers")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container"},[this._v("\n      聯絡資訊\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);