(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{506:function(t,e,r){var content=r(517);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("352721c1",content,!0,{sourceMap:!1})},516:function(t,e,r){"use strict";var n=r(506);r.n(n).a},517:function(t,e,r){(e=r(12)(!1)).push([t.i,'.section-heading[data-v-87411b98]{margin:20px 0;position:relative;padding-left:15px;font-weight:400}.section-heading h5[data-v-87411b98]{margin:0}.section-heading[data-v-87411b98]:after{content:"";display:table;clear:both}.section-heading[data-v-87411b98]:before{content:"";display:block;height:100%;position:absolute;border-left:3px solid #000;left:0}',""]),t.exports=e},531:function(t,e,r){"use strict";r.r(e);r(6),r(4),r(3),r(2),r(5);var n=r(0),o=(r(14),r(1)),c=r(16);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l,f={data:function(){return{product_list:[],page_info:{},title:""}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,data,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.context,r=t.app,n=t.store,o=t.route,data={page_info:{name:"分類",url:"/products/class/?prod=所有商品",prod:o.query.prod}},c=null,void 0!==o.params.id&&(c=new r.sqlpb.Condition).setO(10).setV(o.params.id),e.next=6,n.dispatch("product/get_product",{app:r,token:n.state.account.token,condition:c});case 6:return 200===(d=e.sent).code&&(data.product_list=d.data),e.abrupt("return",data);case 9:case"end":return e.stop()}}),e)})))()},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.store,t.$axios,t.app;case 1:case"end":return e.stop()}}),e)})))()},watch:{},computed:{},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({loading:"loading"}),{test:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),beforeCreate:function(){},created:function(){this.loading(!0)},beforeMount:function(){},mounted:(l=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading(!0),this.title=this.$route.query.prod,this.loading(!1);case 3:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},h=(r(516),r(7)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page"}},[r("section",{staticClass:"content"},[r("div",{staticClass:"container"},[r("Breadcrumb",{attrs:{data:t.page_info}}),t._v(" "),t._m(0)],1),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"sidebar col-md-3 pt-3 mb-4"},[r("Sidebar")],1),t._v(" "),r("div",{staticClass:"content col-md-9 pt-3 mb-4"},[r("div",{staticClass:"section-heading"},[r("h5",{},[r("span",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{},[t._l(t.product_list,(function(t,i){return[r("Products",{attrs:{data:t}})]}))],2)])])])]),t._v(" "),r("Footers")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("img",{attrs:{alt:"電動修鬍",height:"auto",src:"//7627.cyberbiz.tw/s/files/7627/ckeditor/pictures/content_357fbb76-ca03-4a48-b287-b48c5b737138.jpg",width:"100%"}})])])}],!1,null,"87411b98",null);e.default=component.exports}}]);