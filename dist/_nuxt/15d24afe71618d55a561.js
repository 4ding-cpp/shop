(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{497:function(t,e,n){var content=n(509);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2685edc2",content,!0,{sourceMap:!1})},508:function(t,e,n){"use strict";var r=n(497);n.n(r).a},509:function(t,e,n){(e=n(12)(!1)).push([t.i,".cart-content-container[data-v-7ac6f090]{border:1px solid #d5d1d1;border-top:0;padding:1rem;margin-bottom:.1rem;display:flex;justify-content:space-between;align-items:center;font-size:15px}.cart-content-container[data-v-7ac6f090]:first-of-type{border-top:1px solid #d5d1d1}.cart-content-container.ecoupon-entry__content[data-v-7ac6f090]{display:flex;flex-wrap:wrap;margin-top:14px;margin-bottom:14px}.cart-content-container.ecoupon-entry__action[data-v-7ac6f090]{display:flex;padding:16px;font-size:16px;width:20px;cursor:pointer}.total[data-v-7ac6f090]{color:#999;font-size:.8em;background:#e6e6e6;padding:10px}.total .title[data-v-7ac6f090]{font-size:14px;color:#333;font-weight:bolder}.total .total-money[data-v-7ac6f090]{color:#ff5353;font-size:18px;font-weight:bolder}.bord-top-dash[data-v-7ac6f090]{border-top:1px dashed #a8a0a0}p[data-v-7ac6f090]{font-size:15px;color:#333;font-weight:700;padding-bottom:0;cursor:default}.table[data-v-7ac6f090]{border:1px solid #dee2e6}.table td[data-v-7ac6f090],.table th[data-v-7ac6f090]{vertical-align:middle}.blink[data-v-7ac6f090]{color:red;font-weight:700;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:blink-data-v-7ac6f090;animation-name:blink-data-v-7ac6f090;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes blink-data-v-7ac6f090{0%{opacity:1}to{opacity:.2}}@keyframes blink-data-v-7ac6f090{0%{opacity:1}to{opacity:.2}}",""]),t.exports=e},531:function(t,e,n){"use strict";n.r(e);n(6),n(4),n(11),n(3),n(2),n(5);var r=n(0),o=(n(15),n(1)),c=n(14),d=n(17),l=n(167),f=n.n(l);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _,m={data:function(){return{cart:{count:0,money:0,list:{}},imgesUrl:"",goods:[],activity:[],purchase:[{image:"/images/prod01.jpg",name:"輕柔空氣感彩妝刷",price:"680",offer:"249"}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.context,t.app,t.store,t.route;case 1:case"end":return e.stop()}}),e)})))()},watch:{},computed:{},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({loading:"loading",_store:"_store"}),{total:function(){var t=this.$store.state.cart,e=0,n=0;return Object.keys(t.content).forEach((function(r){n+=Number(t.content[r].amount),e+=Number(t.content[r].price)*Number(t.content[r].amount)})),this.cart.money=e,this.cart.count=n,e},get_completeCar:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,v,i,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if({},n=t.$store.state.cart.content,r=t.$store.state.cart.info,o=f()(n).map((function(t){return{amount:t.amount,shell_id:t.shell_id,sku:t.sku}})),null!=n&&null!=r.id){e.next=6;break}return e.abrupt("return");case 6:return c=d.Struct.fromJavaScript({buy:o}),e.next=9,t.$store.dispatch("cart/get_completeCar",{app:t,token:t.$store.state.account.token,condition:c});case 9:if(200===(l=e.sent).code){for(i in r={state:1,id:l.data.car_id},console.log(l),t.goods=l.data.goods,t.activity=l.data.activity,v={},t.goods)_=t.goods[i],v["".concat(_.shell_id,"-").concat(_.sku)]=_;t._store({act:"cart/set_cart_info",data:{state:1,id:l.data.car_id}}),t._store({act:"cart/set_cart",data:v})}case 11:case"end":return e.stop()}}),e)})))()},add_cart:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._store({act:"cart/set_one_cart",data:t});case 2:return n.next=4,e.get_completeCar();case 4:case"end":return n.stop()}}),n)})))()},del_cart:function(i){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.goods[i]),t._store({act:"cart/del_cart",data:t.goods[i]}),t.goods.splice(i,1),e.next=5,t.get_completeCar();case 5:case"end":return e.stop()}}),e)})))()}}),beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:(_=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading(!0),t.next=3,this.get_completeCar();case 3:this.loading(!1);case 4:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},h=(n(508),n(9)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("section",{staticClass:"content"},[n("Step"),t._v(" "),n("div",{staticClass:"container"},[n("table",{staticClass:"table"},[t._m(0),t._v(" "),n("tbody",t._l(t.goods,(function(e,i){return n("tr",[n("td",[n("img",{attrs:{src:""+t.imgesUrl+e.photox[0].src,alt:"",width:"80px"}})]),t._v(" "),n("td",[t._v(t._s(e.name.tw))]),t._v(" "),n("td",[t._v(t._s(e.shell_id))]),t._v(" "),n("td",[t._v("NT$"+t._s(e.price))]),t._v(" "),n("td",[n("ButtonSubAdd",{attrs:{data:e,count:e.amount},on:{"update:data":function(t){e=t},"update:count":function(n){return t.$set(e,"amount",n)},after_change:t.add_cart}})],1),t._v(" "),n("td",[t._v(t._s(e.amount*e.price))]),t._v(" "),n("td",[n("i",{staticClass:"fas fa-trash-alt",on:{click:function(e){return t.del_cart(i)}}})])])})),0),t._v(" "),0==t.goods.length?n("thead",[n("th",{staticClass:"text-center text-danger",attrs:{colspan:"7"}},[t._v("無資料")])]):t._e()]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 bord-top-dash p-3"},t._l(t.activity,(function(e,i){return n("div",{staticClass:"cart-content-container"},[n("div",{staticClass:"ecoupon-entry__content"},[n("i",{staticClass:"fas fa-cart-plus"}),t._v(" "),n("span",{staticClass:"ecoupon-entry__title"},[t._v(t._s(e.name.tw))]),t._v(" "),e.reached?n("span",{staticClass:"blink"},[t._v("已符合!")]):t._e()]),t._v(" "),t._m(1,!0)])})),0),t._v(" "),n("div"),t._v(" "),n("div",{staticClass:"total col-lg-6"}),t._v(" "),n("div",{staticClass:"total col-lg-6"},[t._m(2),t._v(" "),n("div",{staticClass:"col-md-12 d-flex justify-content-between p-2"},[n("div",{},[t._v("商品小計")]),t._v(" "),n("div",{},[t._v("NT$"+t._s(t.total()))])]),t._v(" "),n("div",{staticClass:"col-md-12 d-flex justify-content-between bord-top-dash p-2"},[n("div",{},[t._v("共"+t._s(t.cart.count)+"項")]),t._v(" "),n("div",{staticClass:"total-money"},[t._v("NT$"+t._s(t.cart.money))])]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("nuxt-link",{staticClass:"w-100 btn btn-outline-primary btn-sm",attrs:{tag:"button",to:"/cart/step2"}},[t._v("下一步")])],1)])]),t._v(" "),n("div",{staticClass:"purchase row"},[n("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 p-2 title"},[t._v("加購專區")]),t._v(" "),t._l(t.purchase,(function(t){return n("div",{staticClass:"card col-lg-3 col-md-3 col-xs-6 p-2"},[n("Purchase")],1)}))],2)])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("圖片")]),t._v(" "),n("th",[t._v("名稱")]),t._v(" "),n("th",[t._v("規格")]),t._v(" "),n("th",[t._v("單價")]),t._v(" "),n("th",{attrs:{width:"18%"}},[t._v("數量")]),t._v(" "),n("th",[t._v("小計")]),t._v(" "),n("th")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ecoupon-entry__action"},[e("span"),this._v(" "),e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 d-flex justify-content-between p-2"},[e("div",{staticClass:"title"},[this._v("一般會員")]),this._v(" "),e("div",{})])}],!1,null,"7ac6f090",null);e.default=component.exports}}]);