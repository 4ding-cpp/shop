(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{486:function(t,e,o){var content=o(493);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("3603f624",content,!0,{sourceMap:!1})},492:function(t,e,o){"use strict";var n=o(486);o.n(n).a},493:function(t,e,o){(e=o(12)(!1)).push([t.i,".data-analytics>div[data-v-2b44fbb4]{border-right:1px solid #e8e8e8;padding:5px 35px;text-align:center}.data-analytics>div>div[data-v-2b44fbb4]:first-child{display:inline-block;text-align:center;color:#777}.data-analytics>div>div[data-v-2b44fbb4]:last-child{font-size:22px;color:#e08f8a;margin-top:8px}li[data-v-2b44fbb4]{flex:1 1 auto}.nav-tabs[data-v-2b44fbb4]{border-bottom:1px solid #000}.nav-tabs .nav-link[data-v-2b44fbb4]{border:1px solid transparent;border-top-left-radius:0;border-top-right-radius:0}.nav-tabs .nav-link[data-v-2b44fbb4]:focus,.nav-tabs .nav-link[data-v-2b44fbb4]:hover{background-color:#e9b6b3;border-color:#e9b6b3;color:#fff}.nav-tabs .nav-link.active[data-v-2b44fbb4]{color:#fff;background-color:#000;border-color:#000}table td[data-v-2b44fbb4],table th[data-v-2b44fbb4]{white-space:nowrap}",""]),t.exports=e},515:function(t,e,o){"use strict";o.r(e);o(6),o(4),o(3),o(2),o(5);var n=o(0),r=o(14);o(16);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d={name:"",props:{},data:function(){return{module_data:null,page:{loading:!0},tab:{selected:0,list:[{key:"order_record",name:"訂單記錄查詢",module:"RecordOrder"},{key:"favorte_list",name:"商品追蹤清單",module:"RecordFavorite"},{key:"favorte_list",name:"優惠卷清單",module:"RecordCoupon"},{key:"acc_edit",name:"個人資料修改",module:"AccountEdit"}]}}},watch:{},computed:{},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({loading:"loading",_store:"_store"})),beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){this.loading(!0),this.loading(!1)},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},l=(o(492),o(9)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page"}},[o("section",{staticClass:"content"},[o("div",{staticClass:"container"},[o("div",{staticClass:"content col-md-12",staticStyle:{"min-height":"500px"}},[t._m(0),t._v(" "),o("div",{staticClass:"row text-center pb-4 col-md-12 table-responsive"},[o("ul",{staticClass:"nav nav-tabs w-100"},t._l(t.tab.list,(function(e,i){return o("li",{staticClass:"nav-item",on:{click:function(e){t.tab.selected=i}}},[o("a",{staticClass:"nav-link",class:{active:t.tab.selected==i},attrs:{href:"javascript: void(0)"}},[t._v(t._s(e.name))])])})),0)]),t._v(" "),o("div",{staticClass:"row text-center col-md-12"},[o(t.tab.list[t.tab.selected].module,{tag:"components",attrs:{data:t.module_data},on:{"update:data":function(e){t.module_data=e}}})],1),t._v(" "),o("modal",{attrs:{name:"drag_RecordCustomer",width:"60%",height:"auto",draggable:!0}},[o("RecordCustomer",{attrs:{data:t.module_data},on:{"update:data":function(e){t.module_data=e}}})],1)],1)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"data-analytics row pb-5 pt-5"},[o("div",{staticClass:"col-md-2"},[o("div",{},[t._v("\n              會員等級\n              "),o("span",{staticClass:"pink"})]),t._v(" "),o("div",{},[t._v("VIP會員")])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{},[t._v("消費累積金額")]),t._v(" "),o("div",{},[t._v("$ 5,332")])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{},[t._v("下階段升級差額")]),t._v(" "),o("div",{},[t._v("$ 10,000")])]),t._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{},[t._v("可用購物金")]),t._v(" "),o("div",{},[t._v("0")])]),t._v(" "),o("div",{staticClass:"col-md-2",staticStyle:{"border-right":"0"}},[o("div",{},[t._v("可使用優惠卷")]),t._v(" "),o("div",{},[t._v("0張")])])])}],!1,null,"2b44fbb4",null);e.default=component.exports}}]);