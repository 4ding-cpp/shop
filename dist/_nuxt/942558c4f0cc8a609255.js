(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{472:function(t,e,r){var content=r(483);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("6ad20da9",content,!0,{sourceMap:!1})},482:function(t,e,r){"use strict";var c=r(472);r.n(c).a},483:function(t,e,r){(e=r(12)(!1)).push([t.i,"input[type=checkbox][data-v-03b5c599],input[type=radio][data-v-03b5c599]{box-sizing:border-box;margin:0 1}.rule[data-v-03b5c599]{background-color:#86919b;color:#fff;padding:10px;font-size:14px}",""]),t.exports=e},489:function(t,e,r){"use strict";r.r(e);r(6),r(4),r(3),r(2),r(5),r(19),r(14);var c=r(1),n=r(0),o=r(17),l=r(15);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m,h,f,_,y={data:function(){return{order:{},storeID:"",invoice:1,checked:!0,invoice_option:[{id:1,title:"會員載具(個人)"},{id:2,title:"公司用(統編)"},{id:3,title:"手機載具"},{id:4,title:"自然人憑證"},{id:5,title:"捐贈碼"}],buyer:{phone:"",email:"",name:"",remark:""},receiver:{phone:"0912345678",email:"RECEIVER01@gmail.com",name:"RECEIVER01",address:"",cvs_code:"",cvs_type:"",cvs_name:"",cvs_address:""}}},watch:{"$store.state.account.user":function(t,e){this.init_BuyerInfo()},checked:function(t,e){this.copyBuyer(t)}},validators:{"receiver.name":function(t){return this.Validator.value(t).required("請選擇收件人姓名")},"receiver.phone":function(t){return this.Validator.value(t).required("請選擇收件人電話").length(10)},"receiver.email":function(t){return this.Validator.value(t).required("請確認收件人聯絡信箱為必填").email("請確認收件人聯絡信箱")},"receiver.cvs_type,receiver.cvs_name,receiver.cvs_address,receiver.cvs_code":function(t){return this.Validator.value(t).required("請選擇取貨門市")},"buyer.name":function(t){return this.Validator.value(t).required("請確認購買者姓名")},"buyer.phone":function(t){return this.Validator.value(t).required("請確認購買者電話").length(10)},"buyer.email":function(t){return this.Validator.value(t).required("請確認購買者信箱").email("請確認購買者信箱")}},methods:v({},Object(o.b)({loading:"loading",_store:"_store"}),{submit:(_=Object(c.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.$validate().then((function(t,r){return console.log(e.validation.allErrors()),{res:t,message:e.validation.allErrors()}})));case 1:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),signIn:function(){this.$modal.show("login")},copyBuyer:function(t){this.receiver.name=t?this.buyer.name:"",this.receiver.phone=t?this.buyer.phone:"",this.receiver.email=t?this.buyer.email:""},create_Order:(f=Object(c.a)(regeneratorRuntime.mark((function t(){var e,r,c,n,o,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.submit();case 2:if((e=t.sent).res){t.next=6;break}return alert("form error:\n"+e.message.join("\n")),t.abrupt("return");case 6:return(r=v({},this.$store.state.order.content,{},this.buyer)).car_id=this.$store.state.cart.info.id,r.payment_adapter=this.order.PaymentAdapter.id,r.logistics_adapter=this.order.LogisticsAdapter.id,r.other.receiver=this.receiver,c=l.Struct.fromJavaScript(r),t.next=14,this.$store.dispatch("order/create_Order",{condition:c});case 14:if(0!==(n=t.sent).code&&""!=n.data){t.next=20;break}return alert(n.data),t.abrupt("return",!1);case 20:if(alert("createOrder OK:"+n.data),""!=(o=this.order.PaymentAdapter.service)){t.next=25;break}return this.$router.push("/cart/orderList?id=".concat(n.data)),t.abrupt("return",!0);case 25:d="".concat("https://4ding.store","/cart/orderList?id=").concat(n.data),m="/payment/".concat(o,"/order/").concat(n.data,"?&redirect=").concat(d),window.location=m;case 28:return t.abrupt("return",!0);case 29:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),get_cvsStore:(h=Object(c.a)(regeneratorRuntime.mark((function t(){var e,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.order.LogisticsAdapter.id,r=this.order.LogisticsAdapter.service,c="".concat("https://4ding.store","/cart/step3"),window.location="/logistics/".concat(r,"/storemap?a=").concat(e,"&redirect=").concat(c);case 4:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),init_BuyerInfo:function(){var t=this.$store.state.account.user;this.buyer.email=this.receiver.email=t.email?t.email:"",this.buyer.phone=this.receiver.phone=t.phone?t.phone:"",this.buyer.name=this.receiver.name=t.name?t.name:""}}),created:function(){this.init_BuyerInfo()},mounted:(m=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading(!0),this.order=JSON.parse(localStorage.getItem("order")),null!=this.order&&this.order.hasOwnProperty("LogisticsAdapter")&&this.order.hasOwnProperty("PaymentAdapter")){t.next=6;break}return this.$router.push("/cart/step2"),localStorage.removeItem("order"),t.abrupt("return");case 6:e=this.$route.query,this.receiver.cvs_code=e.hasOwnProperty("Code")?e.Code:"",this.receiver.cvs_name=e.hasOwnProperty("Name")?e.Name:"",this.receiver.cvs_type=e.hasOwnProperty("Cate")?e.Cate:"",this.receiver.cvs_address=e.hasOwnProperty("Addr")?e.Addr:"",this.loading(!1);case 12:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},C=(r(482),r(9)),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page"}},[r("section",{staticClass:"content"},[r("Step"),t._v(" "),r("div",{staticClass:"container",staticStyle:{"min-height":"600px"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"border p-3 mt-3"},[r("h5",[t._v("會員專區")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"user-login-buttons"},[r("button",{staticClass:"w-100 l-btn btn-primary",attrs:{type:"button"},on:{click:t.signIn}},[t._v("會員登入")])]),t._v(" "),t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.email,expression:"buyer.email"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.email")},attrs:{type:"text",placeholder:"連絡信箱"},domProps:{value:t.buyer.email},on:{input:function(e){e.target.composing||t.$set(t.buyer,"email",e.target.value)}}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("訂單通知會寄到此信箱，請您務必填入正確的 E-mail")])]),t._v(" "),r("div",{staticClass:"border p-3 mt-3"},[r("h5",[t._v("購買人資訊")]),t._v(" "),r("div",{staticClass:"from-group mb-3"},[r("div",{staticClass:"row"},[t._m(2),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.name,expression:"buyer.name"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.name")},attrs:{type:"text",placeholder:"購買人姓名"},domProps:{value:t.buyer.name},on:{input:function(e){e.target.composing||t.$set(t.buyer,"name",e.target.value)}}})]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.phone,expression:"buyer.phone"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.phone")},attrs:{type:"text",placeholder:"購買人聯絡電話，例：0987654321"},domProps:{value:t.buyer.phone},on:{input:function(e){e.target.composing||t.$set(t.buyer,"phone",e.target.value)}}})])])])]),t._v(" "),r("div",{staticClass:"border p-3 mt-3"},[r("h5",[t._v("收件人資訊")]),t._v(" "),r("div",{staticClass:"form-check w-100 ml-3"}),t._v(" "),r("div",{staticClass:"from-group mb-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 float-left control-label mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var r=t.checked,c=e.target,n=!!c.checked;if(Array.isArray(r)){var o=t._i(r,null);c.checked?o<0&&(t.checked=r.concat([null])):o>-1&&(t.checked=r.slice(0,o).concat(r.slice(o+1)))}else t.checked=n}}}),t._v(" "),t._m(4)])]),t._v(" "),r("div",{staticClass:"row"},[t._m(5),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.name,expression:"receiver.name"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.name")},attrs:{type:"text",placeholder:"收件人姓名"},domProps:{value:t.receiver.name},on:{input:function(e){e.target.composing||t.$set(t.receiver,"name",e.target.value)}}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*超商取貨請使用本名，並記得攜帶身分證前往取貨")])]),t._v(" "),t._m(6),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.phone,expression:"receiver.phone"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.phone")},attrs:{type:"text",placeholder:"收件人聯絡電話，例：0987654321"},domProps:{value:t.receiver.phone},on:{input:function(e){e.target.composing||t.$set(t.receiver,"phone",e.target.value)}}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321")])]),t._v(" "),t._m(7),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.email,expression:"receiver.email"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.email")},attrs:{type:"text",placeholder:"聯絡信箱"},domProps:{value:t.receiver.email},on:{input:function(e){e.target.composing||t.$set(t.receiver,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("聯絡地址")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.address,expression:"receiver.address"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.address")},attrs:{type:"text",placeholder:"聯絡地址"},domProps:{value:t.receiver.address},on:{input:function(e){e.target.composing||t.$set(t.receiver,"address",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-12 float-left mb-3"},[r("button",{staticClass:"w-100 l-btn pick-btn btn-block",attrs:{type:"button"},on:{click:function(e){return t.get_cvsStore()}}},[t._v("選擇取貨門市")])]),t._v(" "),t._m(8)])])]),t._v(" "),t._e(),t._v(" "),r("div",{staticClass:"border p-3 mt-3"},[r("h5",[t._v("訂單備註")]),t._v(" "),r("div",{staticClass:"form-group pt-3"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.buyer.remark,expression:"buyer.remark"}],staticClass:"form-control rounded-0",attrs:{rows:"3",placeholder:"有什麼想告訴賣家嗎?"},domProps:{value:t.buyer.remark},on:{input:function(e){e.target.composing||t.$set(t.buyer,"remark",e.target.value)}}})]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("div",{staticClass:"w-100 mt-3"},[r("button",{staticClass:"w-100 l-btn checkout-btn",attrs:{type:"button"},on:{click:function(e){return t.create_Order()}}},[t._v("立即結帳")])])])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n              會員登入\n              "),e("span",{staticClass:"hint-label"},[this._v("*登入會員管理訂單更方便！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-2 mb-2"},[e("span",{staticClass:"hint-label"},[this._v("* ")]),this._v("非會員購買\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("* ")]),this._v("姓名\n                ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("* ")]),this._v("聯絡電話\n                ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#homeSubmenu","data-toggle":"collapse","aria-expanded":"false"}},[e("label",{staticClass:"form-check-label check-label",attrs:{for:"defaultCheck1"}},[this._v("取件人與購買人相同")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("* ")]),this._v("姓名\n                ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("* ")]),this._v("聯絡電話\n                ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 float-left control-label"},[e("span",{staticClass:"hint-label"},[this._v("* ")]),this._v("聯絡信箱\n                ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-check w-100 ml-3"},[r("div",{staticClass:"collapse list-unstyled",attrs:{id:"homeSubmenu"}},[r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("姓名")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"購買人姓名"}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*超商取貨請使用本名，並記得攜帶身分證前往取貨")])]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("聯絡電話")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"購買人聯絡電話，例：0987654321"}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入統一編號"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入發票抬頭"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入手機條碼"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入自然人憑證"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入捐贈機構捐贈碼"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},[e("input",{staticClass:"form-check-input mt-2",attrs:{type:"checkbox",value:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label ml-4",attrs:{for:"defaultCheck1"}},[this._v("用上述資料直接註冊會員")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},[e("input",{staticClass:"form-check-input mt-2",attrs:{type:"checkbox",value:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label ml-4",attrs:{for:"defaultCheck1"}},[this._v("同意會員責任規範及個資聲明")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},[e("input",{staticClass:"form-check-input mt-2",attrs:{type:"checkbox",value:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label ml-4",attrs:{for:"defaultCheck1"}},[this._v("為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利")])])}],!1,null,"03b5c599",null);e.default=component.exports}}]);