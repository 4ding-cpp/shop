(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{505:function(t,e,r){var content=r(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("7fcc13cb",content,!0,{sourceMap:!1})},513:function(t,e,r){"use strict";var c=r(505);r.n(c).a},514:function(t,e,r){(e=r(12)(!1)).push([t.i,'.btn-facebook[data-v-635c3772]{background-color:#3b5998}.btn-facebook[data-v-635c3772]:hover{background-color:#2b4477}.btn-login[data-v-635c3772]{background-color:#86919b}.btn-login[data-v-635c3772]:hover{background-color:#595f64}.btn-csv[data-v-635c3772]:hover{background-color:#00c123;color:#fff}i.fa-trash-alt[data-v-635c3772]{cursor:pointer}i.fa-trash-alt[data-v-635c3772]:hover{color:#6c757d}section[data-v-635c3772]{counter-reset:circle-head}.circle-head[data-v-635c3772]{height:36px;position:relative;padding-left:46px;line-height:38px;font-size:17px;font-weight:700;margin-bottom:15px;color:#3c4c57}.circle-head[data-v-635c3772]:before{font-family:Open Sans,sans-serif;left:0;top:0;width:36px;height:36px;line-height:34px;position:absolute;counter-increment:circle-head;content:counter(circle-head);border-radius:50%;border:1px solid #9a9ea2;color:#9a9ea2;text-align:center;font-size:14px}[data-toggle=collapse] .fas[data-v-635c3772]:before{content:"\\f054";float:right;transition:all .5s;transform:rotate(-90deg)}[aria-expanded=true] .fas[data-v-635c3772]:before{content:"\\f054";transition:all .5s;transform:rotate(90deg)}',""]),t.exports=e},523:function(t,e,r){"use strict";r.r(e);r(6),r(4),r(11),r(3),r(2),r(5);var c=r(0),n=(r(18),r(14),r(1)),o=r(16),l=r(17),d=r(244),v=r.n(d);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f,_,C,y,k,w,x={data:function(){return{order:{},storeID:"",checked:{userData:{value:!0,title:"取件人與購買人相同"},step:!0},logistic:{selected:0,list:[]},cash:{show:!0,selected:0,list:[]},buyer:{phone:"",email:"",name:"",address:"",remark:""},receiver:{phone:"0912345678",email:"RECEIVER01@gmail.com",name:"RECEIVER01",address:"",cvs_code:"",cvs_type:"",cvs_name:"",cvs_address:""},total:{fee_logistics:0,money:0},timer:{c:0,t:0},cart:{count:0,money:0,list:[]},imgesUrl:"",activity:[],purchase:[{image:"/images/prod01.jpg",name:"輕柔空氣感彩妝刷",price:"680",offer:"249"}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.context,t.app,t.store,t.route;case 1:case"end":return e.stop()}}),e)})))()},validators:{"receiver.name":function(t){return this.Validator.value(t).required("請選擇收件人姓名")},"receiver.phone":function(t){return this.Validator.value(t).required("請選擇收件人電話").length(10)},"receiver.email":function(t){return this.Validator.value(t).required("請確認收件人聯絡信箱為必填").email("請確認收件人聯絡信箱")},"receiver.cvs_type,receiver.cvs_name,receiver.cvs_address,receiver.cvs_code":function(t){return this.Validator.value(t).required("請選擇取貨門市")},"buyer.name":function(t){return this.Validator.value(t).required("請確認購買者姓名")},"buyer.phone":function(t){return this.Validator.value(t).required("請確認購買者電話").length(10)},"buyer.email":function(t){return this.Validator.value(t).required("請確認購買者信箱").email("請確認購買者信箱")}},watch:{"$store.state.account.user":function(t,e){this.init_BuyerInfo()}},computed:{SynCopy:function(){console.log(this.checked.userData.value),!1!==this.checked.userData.value&&(this.receiver.name=this.buyer.name,this.receiver.phone=this.buyer.phone,this.receiver.email=this.buyer.email,this.receiver.address=this.buyer.address)}},methods:m({},Object(o.b)({loading:"loading",_store:"_store"}),{get_cvsStore:(w=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.get_completeCar();case 2:localStorage.setItem("order",JSON.stringify({receiver:this.receiver,buyer:this.buyer,logistic:this.logistic.selected,cash:this.cash.selected})),e=this.logistic.list[this.logistic.selected].data.adapter_id,r=this.logistic.list[this.logistic.selected].data.service,window.location="/logistics/".concat(r,"/storemap?a=").concat(e,"&redirect=").concat("/cart/step1");case 7:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)}),get_logistics:(k=Object(n.a)(regeneratorRuntime.mark((function t(){var e,i,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("cash/get_logistics",{condition:null});case 2:if(0!==(e=t.sent).code){t.next=6;break}return this.$toast.error(e.data),t.abrupt("return",!1);case 6:for(i in e.data)r=e.data[i],c={id:i,title:""!=r.remark?"".concat(r.name.tw,"<br>(").concat(r.remark,")"):"".concat(r.name.tw),data:r},this.logistic.list.push(c);return console.log("logist",this.logistic),t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t,this)}))),function(){return k.apply(this,arguments)}),get_payment:(y=Object(n.a)(regeneratorRuntime.mark((function t(){var e,i,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("cash/get_payment",{condition:null});case 2:if(0!==(e=t.sent).code){t.next=6;break}return this.$toast.error(e.data),t.abrupt("return",!1);case 6:for(i in console.log("pay:",e),e.data)r=e.data[i],c={id:i,title:""!=r.remark?"".concat(r.name.tw,"<br>(").concat(r.remark,")"):"".concat(r.name.tw),data:r},this.cash.list.push(c);return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)}),calculateCart:function(){var t=this.cart.list,e=0;return console.log("calculateCart",t),Object.keys(t).forEach((function(r){Number(t[r].amount),e+=Number(t[r].price)*Number(t[r].amount)})),this.cart.money=e,e},get_completeCar:function(){var t=arguments,e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var c,n,o,d,h,m,f,_,C,i,y;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c=!(t.length>0&&void 0!==t[0])||t[0],{},n=e.cart.list,o=e.$store.state.cart.info,d=v()(n).map((function(t){return{amount:t.amount,shell_id:t.shell_id,sku:t.sku}})),null!=n&&null!=o.id){r.next=7;break}return r.abrupt("return");case 7:if(h=(new Date).getTime()/1e3,m=e.timer.t,!(h-m<5&&!1===c)){r.next=11;break}return r.abrupt("return");case 11:return e.timer.t=(new Date).getTime()/1e3,f=l.Struct.fromJavaScript({buy:d}),r.next=15,e.$store.dispatch("cart/get_completeCar",{app:e,token:e.$store.state.account.token,condition:f});case 15:if(_=r.sent,console.log("get_completeCar:",_),e.checked.step=!0,200===_.code){for(i in o={state:1,id:_.data.car_id},e.cart.list=_.data.goods,e.activity=_.data.activity,C={},e.cart.list)y=e.cart.list[i],C["".concat(y.shell_id,"-").concat(y.sku)]=y;e._store({act:"cart/set_cart_info",data:{state:1,id:_.data.car_id}}),e._store({act:"cart/set_cart",data:C})}case 19:case"end":return r.stop()}}),r)})))()},add_cart:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._store({act:"cart/set_one_cart",data:t});case 2:e.counter();case 3:case"end":return r.stop()}}),r)})))()},del_cart:function(i){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._store({act:"cart/del_cart",data:t.cart.list[i]}),t.cart.list.splice(i,1),t.counter();case 3:case"end":return e.stop()}}),e)})))()},clear_cart:function(i){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._store({act:"cart/set_cart",data:[]}),t.cart.list=[],t.checked.step=!1,clearInterval(t.timer.t);case 4:case"end":return e.stop()}}),e)})))()},delay_cart:function(){var t=this;this.timer.c>0?setTimeout((function(){t.timer.c--,t.delay_cart()}),1e3):(console.log("do"),this.get_completeCar(!1))},countDownTimer:function(){},counter:function(){this.timer.c=5,this.delay_cart()},submit:(C=Object(n.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.$validate().then((function(t,r){return console.log(e.validation.allErrors()),{res:t,message:e.validation.allErrors()}})));case 1:case"end":return t.stop()}}),t,this)}))),function(){return C.apply(this,arguments)}),signIn:function(){this.$modal.show("login")},create_Order:(_=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,c,n,o,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.submit();case 2:if((e=t.sent).res){t.next=6;break}return alert(e.message.join("\n")),t.abrupt("return");case 6:return(r=m({},this.$store.state.order.content,{},this.buyer)).car_id=this.$store.state.cart.info.id,r.payment_adapter=this.cash.list[this.cash.selected].data.adapter_id,r.logistics_adapter=this.logistic.list[this.logistic.selected].data.adapter_id,r.other.receiver=this.receiver,console.log("create_Order",r),c=l.Struct.fromJavaScript(r),t.next=15,this.$store.dispatch("order/create_Order",{condition:c});case 15:if(0!==(n=t.sent).code&&""!=n.data){t.next=21;break}return alert(n.data),t.abrupt("return",!1);case 21:if(alert("createOrder OK:"+n.data),""!=(o=this.cash.list[this.cash.selected].data.service)){t.next=26;break}return this.$router.push("/order/complete?id=".concat(n.data)),t.abrupt("return",!0);case 26:d="/order/complete?id=".concat(n.data),v="/payment/".concat(o,"/order/").concat(n.data,"?&redirect=").concat(d),window.location=v;case 29:return t.abrupt("return",!0);case 30:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),init_BuyerInfo:function(){var t=this.$store.state.account.user;this.buyer.email=t.email?t.email:"",this.buyer.phone=t.phone?t.phone:"",this.buyer.name=t.name?t.name:"",this.buyer.address=t.address?t.address:""}}),beforeCreate:function(){},created:function(){this.init_BuyerInfo()},beforeMount:function(){},mounted:(f=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading(!0),this.order=JSON.parse(localStorage.getItem("order")),localStorage.removeItem("order"),this.cart.list=this.$store.state.cart.content,t.next=6,this.get_completeCar();case 6:return t.next=8,this.get_logistics();case 8:return t.next=10,this.get_payment();case 10:null!==this.order&&(this.buyer=this.order.buyer,this.receiver=this.order.receiver,this.cash.selected=this.order.cash,this.logistic.selected=this.order.logistic),e=this.$route.query,this.receiver.cvs_code=e.hasOwnProperty("Code")?e.Code:"",this.receiver.cvs_name=e.hasOwnProperty("Name")?e.Name:"",this.receiver.cvs_type=e.hasOwnProperty("Cate")?e.Cate:"",this.receiver.cvs_address=e.hasOwnProperty("Addr")?e.Addr:"",this.loading(!1);case 17:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},$=(r(513),r(7)),component=Object($.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page"}},[t._v("\n  "+t._s(t.SynCopy)+"\n  "),r("section",{staticClass:"content"},[r("div",{staticClass:"container"},[r("section",{staticClass:"row"},[r("div",{staticClass:"col-md-2",staticStyle:{"padding-right":"10px"}},[r("div",{staticClass:"checkout-amount-wrap"},[r("ul",{staticClass:"list-unstyled components checkout-amount"},[t._m(0),t._v(" "),r("div",{staticClass:"collapse list-unstyled",attrs:{id:"leftProdCounter"}},[r("li",[t._v("\n                  商品小計\n                  "),r("span",{staticClass:"float-right"},[t._v(t._s(t.calculateCart()))])])]),t._v(" "),r("li",[t._v("\n                運費\n                "),t.logistic.list[t.logistic.selected]?r("span",{staticClass:"float-right"},[t._v(t._s(t.logistic.list[t.logistic.selected].data.logistics_fee))]):t._e()]),t._v(" "),r("li",{staticClass:"totoal-money font-weight-bolder"},[t._v("\n                應付總額\n                "),r("span",{staticClass:"price float-right"},[t._v("\n                  NT$\n                  "),t.logistic.list[t.logistic.selected]?r("span",{staticClass:"total"},[t._v(t._s(t.cart.money+t.logistic.list[t.logistic.selected].data.logistics_fee))]):t._e()])])])]),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"col-md-10"},[r("div",{},[r("div",{staticClass:"circle-head w-100"},[t._v("購物車內容")]),t._v(" "),r("div",{staticClass:"col-md-12 pl-0 table-responsive"},[r("table",{staticClass:"table"},[t._m(2),t._v(" "),r("tbody",[t._l(t.cart.list,(function(e,i){return r("tr",[r("td",[r("img",{attrs:{src:""+t.imgesUrl+e.photox[0].src,alt:"",width:"100px"}})]),t._v(" "),r("td",[t._v(t._s(e.name.tw))]),t._v(" "),r("td",[t._v(t._s(e.sku))]),t._v(" "),r("td",{staticClass:"font-size-16"},[t._v("NT$"+t._s(e.price))]),t._v(" "),r("td",[r("ButtonSubAdd",{attrs:{data:e,count:e.amount},on:{"update:data":function(t){e=t},"update:count":function(r){return t.$set(e,"amount",r)},after_change:t.add_cart}})],1),t._v(" "),r("td",{staticClass:"font-size-16"},[t._v(t._s(e.amount*e.price))]),t._v(" "),r("td",[r("i",{staticClass:"fas fa-trash-alt",on:{click:function(e){return t.del_cart(i)}}})])])})),t._v(" "),0==t.cart.list.length?r("tr",[r("td",{staticClass:"text-center text-danger",attrs:{colspan:"7"}},[t._v("無資料")])]):t._e()],2)])]),t._v(" "),r("div",{staticClass:"col-md-12 pl-0 mb-3"})]),t._v(" "),!0===t.checked.step?r("div",{staticClass:"step2 d-flex flex-column"},[r("div",{staticClass:"circle-head"},[t._v("會員專區")]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"d-flex"},[r("button",{staticClass:"l-btn btn-facebook mr-2",staticStyle:{width:"50%"},attrs:{type:"button"},on:{click:t.get_completeCar}},[t._v("\n                FACEBOOK\n                快速註冊\n              ")]),t._v(" "),r("button",{staticClass:"l-btn btn-login mr-2 w-50",attrs:{type:"button"},on:{click:t.signIn}},[t._v("會員登入")])]),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"col-md-12 pl-0 pr-2 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.email,expression:"buyer.email"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.email")},attrs:{type:"text",placeholder:"連絡信箱"},domProps:{value:t.buyer.email},on:{input:function(e){e.target.composing||t.$set(t.buyer,"email",e.target.value)}}})]),t._v(" "),t._m(5)]):t._e(),t._v(" "),!0===t.checked.step?r("div",{staticClass:"step3"},[t._m(6),t._v(" "),t._m(7),t._v(" "),r("div",{staticClass:"row mb-3"},[r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("配送方式")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left"},[r("div",{staticClass:"row"},t._l(t.logistic.list,(function(e,i){return r("div",{staticClass:"col-md-4 pr-2 mb-3"},[r("ButtonChoice",{attrs:{title:e.title,free:!1,active:t.logistic.selected==e.id},on:{selected:function(r){t.logistic.selected=e.id}}})],1)})),0)]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"}),t._v(" "),r("div",{staticClass:"col-md-10 pr-2 float-left mb-3"},[r("button",{staticClass:"w-100 l-btn pick-btn btn-block",attrs:{type:"button"},on:{click:function(e){return t.get_cvsStore()}}},[t._v("選擇取貨門市")])]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("付款方式")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left"},[!0===t.cash.show?r("div",{staticClass:"row"},t._l(t.cash.list,(function(e,i){return r("div",{staticClass:"col-md-4 pr-2 mb-3"},[r("ButtonChoice",{attrs:{title:e.title,free:!1,active:t.cash.selected==e.id},on:{selected:function(r){t.cash.selected=e.id}}})],1)})),0):t._e()]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("備註")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.buyer.remark,expression:"buyer.remark"}],staticClass:"form-control rounded-0",attrs:{rows:"1",placeholder:"有什麼想告訴賣家嗎?"},domProps:{value:t.buyer.remark},on:{input:function(e){e.target.composing||t.$set(t.buyer,"remark",e.target.value)}}})])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"row mb-3"},[t._m(8),t._v(" "),t._m(9),t._v(" "),r("div",{staticClass:"col-md-10 mb-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.name,expression:"buyer.name"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.name")},attrs:{type:"text",placeholder:"購買人姓名"},domProps:{value:t.buyer.name},on:{input:function(e){e.target.composing||t.$set(t.buyer,"name",e.target.value)}}}),t._v(" "),t.validation.hasError("buyer.name")?r("div",{staticClass:"hint-label mt-2"},[t._v("*"+t._s(t.validation.firstError("buyer.name")))]):t._e()]),t._v(" "),t._m(10),t._v(" "),r("div",{staticClass:"col-md-10 mb-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.phone,expression:"buyer.phone"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.phone")},attrs:{type:"text",placeholder:"購買人聯絡電話，例：0987654321"},domProps:{value:t.buyer.phone},on:{input:function(e){e.target.composing||t.$set(t.buyer,"phone",e.target.value)}}}),t._v(" "),t.validation.hasError("buyer.phone")?r("div",{staticClass:"hint-label mt-2"},[t._v("*"+t._s(t.validation.firstError("buyer.phone")))]):t._e()]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("聯絡地址")]),t._v(" "),r("div",{staticClass:"col-md-10 mb-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.address,expression:"buyer.address"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.address")},attrs:{type:"text",placeholder:"請輸入購買人地址"},domProps:{value:t.buyer.address},on:{input:function(e){e.target.composing||t.$set(t.buyer,"address",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"w-100"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checked.userData.value,expression:"checked.userData.value"}],staticClass:"form-check-input mt-2",attrs:{href:"#receiverForm",type:"checkbox","data-toggle":"collapse","aria-expanded":"false"},domProps:{checked:Array.isArray(t.checked.userData.value)?t._i(t.checked.userData.value,null)>-1:t.checked.userData.value},on:{change:function(e){var r=t.checked.userData.value,c=e.target,n=!!c.checked;if(Array.isArray(r)){var o=t._i(r,null);c.checked?o<0&&t.$set(t.checked.userData,"value",r.concat([null])):o>-1&&t.$set(t.checked.userData,"value",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.checked.userData,"value",n)}}}),t._v(" "),r("label",{staticClass:"form-check-label check-label ml-4",attrs:{for:"defaultCheck1"}},[t._v(t._s(t.checked.userData.title))])])])]),t._v(" "),r("div",{staticClass:"row mb-3 collapse list-unstyled",attrs:{id:"receiverForm"}},[t._m(11),t._v(" "),t._m(12),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.name,expression:"receiver.name"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.name")},attrs:{type:"text",placeholder:"收件人姓名"},domProps:{value:t.receiver.name},on:{input:function(e){e.target.composing||t.$set(t.receiver,"name",e.target.value)}}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*超商取貨請使用本名，並記得攜帶身分證前往取貨")])]),t._v(" "),t._m(13),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.phone,expression:"receiver.phone"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.phone")},attrs:{type:"text",placeholder:"收件人聯絡電話，例：0987654321"},domProps:{value:t.receiver.phone},on:{input:function(e){e.target.composing||t.$set(t.receiver,"phone",e.target.value)}}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321")])]),t._v(" "),t._m(14),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.email,expression:"receiver.email"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.email")},attrs:{type:"text",placeholder:"聯絡信箱"},domProps:{value:t.receiver.email},on:{input:function(e){e.target.composing||t.$set(t.receiver,"email",e.target.value)}}}),t._v(" "),t.validation.hasError("receiver.email")?r("div",{staticClass:"hint-label mt-2"},[t._v("*"+t._s(t.validation.firstError("receiver.email")))]):t._e()]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("聯絡地址")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.address,expression:"receiver.address"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.address")},attrs:{type:"text",placeholder:"聯絡地址"},domProps:{value:t.receiver.address},on:{input:function(e){e.target.composing||t.$set(t.receiver,"address",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"row mb-3"},[r("div",{staticClass:"col-md-12"},[t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),r("div",{staticClass:"w-100 mt-3"},[r("button",{staticClass:"w-100 l-btn checkout-btn",attrs:{type:"button"},on:{click:function(e){return t.create_Order()}}},[t._v("立即結帳")])])])])]):t._e()])])]),t._v(" "),r("Footers")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#leftProdCounter","data-toggle":"collapse","aria-expanded":"false"}},[this._v("\n                  結帳金額\n                  "),e("i",{staticClass:"fas float-right"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkout-amount-wrap"},[e("ul",{staticClass:"list-unstyled components checkout-amount"},[e("li",[this._v("優惠碼")]),this._v(" "),e("li",[this._v("\n                輸入優惠碼\n                "),e("div",{staticStyle:{height:"30px"}},[e("input",{staticClass:"h-100",staticStyle:{width:"95px"},attrs:{type:"text"}}),this._v(" "),e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"}},[this._v("確認")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("圖片")]),t._v(" "),r("th",[t._v("名稱")]),t._v(" "),r("th",[t._v("規格")]),t._v(" "),r("th",[t._v("單價")]),t._v(" "),r("th",{staticStyle:{width:"200px"}},[t._v("數量")]),t._v(" "),r("th",[t._v("小計")]),t._v(" "),r("th")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2 font-weight-bolder"},[this._v("\n              會員登入\n              "),e("span",{staticClass:"hint-label"},[this._v("*登入會員管理訂單更方便！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-2 mb-2 font-weight-bolder"},[e("span",{staticClass:"hint-label"},[this._v("*")]),this._v("非會員購買\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-2 mb-2 font-weight-bolder"},[e("span",{staticClass:"hint-label"},[this._v("*訂單通知會寄到此信箱，請您務必填入正確的 E-mail")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex flex-column pt-4"},[e("div",{staticClass:"circle-head"},[this._v("付款運送方式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("div",{staticClass:"col-md-6 pl-0 pr-2 mb-3 shipping"},[e("button",{staticClass:"shipping-method on-active",attrs:{type:"button"}},[e("div",{staticClass:"shipping-label"},[e("div",[e("span",[e("i",{staticClass:"pr-2 fas fa-check-circle"}),this._v("超商\n                      ")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 mb-3 float-left control-label"},[e("b",[this._v("購買人資訊")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("*")]),this._v("姓名\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("*")]),this._v("聯絡電話\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 mt-3"},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("*")]),this._v("姓名\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("*")]),this._v("聯絡電話\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("*")]),this._v("聯絡信箱\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},[e("input",{staticClass:"form-check-input mt-2",attrs:{type:"checkbox",value:"",checked:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label ml-4",attrs:{for:"defaultCheck1"}},[this._v("用上述資料直接註冊會員")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},[e("input",{staticClass:"form-check-input mt-2",attrs:{type:"checkbox",value:"",checked:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label ml-4",attrs:{for:"defaultCheck1"}},[this._v("同意會員責任規範及個資聲明")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},[e("input",{staticClass:"form-check-input mt-2",attrs:{type:"checkbox",value:"",checked:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label ml-4",attrs:{for:"defaultCheck1"}},[this._v("為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利")])])}],!1,null,"635c3772",null);e.default=component.exports}}]);