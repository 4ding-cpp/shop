(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{434:function(t,e,r){var content=r(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("3e13820e",content,!0,{sourceMap:!1})},442:function(t,e,r){"use strict";var o=r(434);r.n(o).a},443:function(t,e,r){(e=r(12)(!1)).push([t.i,".rule[data-v-87940c00]{background-color:#86919b;color:#fff;padding:10px;font-size:14px}",""]),t.exports=e},449:function(t,e,r){"use strict";r.r(e);r(5),r(3),r(2),r(1),r(4),r(18);var o=r(8),c=r(0),l=r(21),n=r(34);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m,h,f,_,C={data:function(){return{order:{},storeID:"",invoice:1,invoice_option:[{id:1,title:"會員載具(個人)"},{id:2,title:"公司用(統編)"},{id:3,title:"手機載具"},{id:4,title:"自然人憑證"},{id:5,title:"捐贈碼"}],buyer:{phone:"0900000000",email:"BUYER01@gmail.com",name:"BUYER01"},receiver:{phone:"0912345678",email:"RECEIVER01@gmail.com",name:"RECEIVER01",cvs_code:"",cvs_type:"",cvs_name:"",cvs_address:""}}},validators:{"receiver.name":function(t){return this.Validator.value(t).required("請選擇收件人姓名")},"receiver.phone":function(t){return this.Validator.value(t).required("請選擇收件人電話").length(10)},"receiver.email":function(t){return this.Validator.value(t).required("請確認收件人聯絡信箱為必填").email("請確認收件人聯絡信箱")},"receiver.cvs_type,receiver.cvs_name,receiver.cvs_address,receiver.cvs_code":function(t){return this.Validator.value(t).required("請選擇取貨門市")},"buyer.name":function(t){return this.Validator.value(t).required("請確認購買者姓名")},"buyer.phone":function(t){return this.Validator.value(t).required("請確認購買者電話").length(10)},"buyer.email":function(t){return this.Validator.value(t).required("請確認購買者信箱").email("請確認購買者信箱")}},methods:d({},Object(l.b)({loading:"loading",_store:"_store"}),{submit:(_=Object(o.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.$validate().then((function(t,r){return console.log(e.validation.allErrors()),{res:t,message:e.validation.allErrors()}})));case 1:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),goto:function(t){window.open(t,"註冊","width=300,height=300")},copyBuyer:function(){},create_Order:(f=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,o,c,l,v,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.submit();case 2:if((e=t.sent).res){t.next=6;break}return alert("form error:\n"+e.message.join("\n")),t.abrupt("return");case 6:return(r=d({},this.$store.state.order.content)).car_id=this.$store.state.cart.info.id,r.payment_adapter=this.order.PaymentAdapter.id,r.logistics_adapter=this.order.LogisticsAdapter.id,r.other.receiver=this.receiver,o=n.Struct.fromJavaScript(r),t.next=14,this.$store.dispatch("order/create_Order",{condition:o});case 14:if(0!==(c=t.sent).code&&""!=c.data){t.next=20;break}return alert(c.data),t.abrupt("return",!1);case 20:alert("createOrder OK:",c.data),l=this.order.PaymentAdapter.service,v="".concat("https://shop.4ding.site","/cart/orderList?id=").concat(c.data),m="".concat("https://payment.4ding.site","/payment/").concat(l,"/order/").concat(c.data,"?&redirect=").concat(v),window.location=m;case 25:return t.abrupt("return",!0);case 26:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),get_cvsStore:(h=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.order.LogisticsAdapter.id,r=this.order.LogisticsAdapter.service,o="".concat("https://shop.4ding.site","/cart/step3"),window.location="".concat("https://payment.4ding.site","/logistics/").concat(r,"/storemap?a=").concat(e,"&redirect=").concat(o);case 4:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})}),created:function(){},mounted:(m=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading(!0),console.log("query:",this.$route.query),this.order=JSON.parse(localStorage.getItem("order")),null!=this.order&&this.order.hasOwnProperty("LogisticsAdapter")&&this.order.hasOwnProperty("PaymentAdapter")){t.next=7;break}return this.$router.push("/cart/step2"),localStorage.removeItem("order"),t.abrupt("return");case 7:e=this.$route.query,this.receiver.cvs_code=e.hasOwnProperty("Code")?e.Code:"",this.receiver.cvs_name=e.hasOwnProperty("Name")?e.Name:"",this.receiver.cvs_type=e.hasOwnProperty("Cate")?e.Cate:"",this.receiver.cvs_address=e.hasOwnProperty("Addr")?e.Addr:"",this.loading(!1);case 13:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},y=(r(442),r(9)),component=Object(y.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page"}},[r("section",{staticClass:"content"},[r("Step"),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"MemberLogin"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"text-center"},[t._v("歡迎回來")]),t._v(" "),r("button",{staticClass:"l-btn btn-facebook mr-2 w-100",attrs:{type:"button"}},[t._v("\n              FACEBOOK\n              快速登入\n            ")]),t._v(" "),r("hr",{staticClass:"divider"}),t._v(" "),r("button",{staticClass:"l-btn btn-line mr-2 w-100",attrs:{type:"button"}},[t._v("LINE 快速登入")]),t._v(" "),r("hr",{staticClass:"divider"}),t._v(" "),r("input",{staticClass:"form-control mb-3",attrs:{type:"text",placeholder:"E-MAIL"}}),t._v(" "),r("input",{staticClass:"form-control mb-3",attrs:{type:"text",placeholder:"密碼"}}),t._v(" "),r("button",{staticClass:"l-btn btn-user mr-2 w-100",attrs:{type:"button"}},[t._v("會員登入")]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"login-footer row mt-3"},[t._m(2),t._v(" "),r("div",{staticClass:"col-xs-6 text-center"},[r("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return t.goto("/login/registered")}}},[r("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),t._v(" 註冊新會員\n                ")])])])])])])]),t._v(" "),r("div",{staticClass:"container",staticStyle:{"min-height":"600px"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"border p-3"},[r("h5",[t._v("會員專區")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"mt-2 mb-2"},[t._v("非會員購買")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.email,expression:"buyer.email"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.email")},attrs:{type:"text",placeholder:"連絡信箱"},domProps:{value:t.buyer.email},on:{input:function(e){e.target.composing||t.$set(t.buyer,"email",e.target.value)}}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("訂單通知會寄到此信箱，請您務必填入正確的 E-mail")])]),t._v(" "),t._m(5),t._v(" "),r("div",{staticClass:"border p-3 mt-3"},[r("h5",[t._v("索取發票")]),t._v(" "),r("div",{staticClass:"from-group mb-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("電子發票")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},t._l(t.invoice_option,(function(e,i){return r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.invoice,expression:"invoice"}],staticClass:"form-check-input",attrs:{type:"radio"},domProps:{value:e.id,checked:t._q(t.invoice,e.id)},on:{change:function(r){t.invoice=e.id}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:e.id}},[t._v(t._s(e.title))])])})),0)]),t._v(" "),1===t.invoice?r("div",{staticClass:"row p-2"},[r("div",{staticClass:"col-md-12 float-left mb-3 rule"},[t._v("依統一發票使用辦法規定")])]):t._e(),t._v(" "),2===t.invoice?r("div",{staticClass:"row"},[t._m(6),t._v(" "),t._m(7)]):t._e(),t._v(" "),3===t.invoice?r("div",{staticClass:"row"},[t._m(8)]):t._e(),t._v(" "),4===t.invoice?r("div",{staticClass:"row"},[t._m(9)]):t._e(),t._v(" "),5===t.invoice?r("div",{staticClass:"row"},[t._m(10)]):t._e()])])]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("div",{staticClass:"row border p-3"},[r("h5",[t._v("購買人資訊")]),t._v(" "),r("div",{staticClass:"from-group mb-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("姓名")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.name,expression:"buyer.name"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.name")},attrs:{type:"text",placeholder:"購買人姓名"},domProps:{value:t.buyer.name},on:{input:function(e){e.target.composing||t.$set(t.buyer,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("聯絡電話")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyer.phone,expression:"buyer.phone"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("buyer.phone")},attrs:{type:"text",placeholder:"購買人聯絡電話，例：0987654321"},domProps:{value:t.buyer.phone},on:{input:function(e){e.target.composing||t.$set(t.buyer,"phone",e.target.value)}}})])])])]),t._v(" "),r("div",{staticClass:"row border p-3 mt-3"},[r("h5",[t._v("收件人資訊")]),t._v(" "),r("div",{staticClass:"form-check w-100 ml-3"}),t._v(" "),r("div",{staticClass:"from-group mb-3"},[t._m(11),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("姓名")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.name,expression:"receiver.name"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.name")},attrs:{type:"text",placeholder:"收件人姓名"},domProps:{value:t.receiver.name},on:{input:function(e){e.target.composing||t.$set(t.receiver,"name",e.target.value)}}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*超商取貨請使用本名，並記得攜帶身分證前往取貨")])]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("聯絡電話")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.phone,expression:"receiver.phone"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.phone")},attrs:{type:"text",placeholder:"收件人聯絡電話，例：0987654321"},domProps:{value:t.receiver.phone},on:{input:function(e){e.target.composing||t.$set(t.receiver,"phone",e.target.value)}}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321")])]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("聯絡信箱")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.receiver.email,expression:"receiver.email"}],staticClass:"form-control",class:{"is-invalid":t.validation.hasError("receiver.email")},attrs:{type:"text",placeholder:"聯絡信箱"},domProps:{value:t.receiver.email},on:{input:function(e){e.target.composing||t.$set(t.receiver,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-12 float-left mb-3"},[r("button",{staticClass:"l-btn pick-btn btn-block ml-3",attrs:{type:"button"},on:{click:function(e){return t.get_cvsStore()}}},[t._v("選擇取貨門市")])]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),r("div",{staticClass:"form-check w-100 m-3"},[r("button",{staticClass:"col-md-5 l-btn checkout-btn",attrs:{type:"button"},on:{click:function(e){return t.create_Order()}}},[t._v("立即結帳")])]),t._v("\n                "+t._s(t.receiver)+"\n              ")])])])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:""}},[this._v("會員登入")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-check w-100 mt-2"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"defaultCheck1"}}),this._v(" "),e("label",{staticClass:"form-check-label check-label",attrs:{for:"defaultCheck1"}},[this._v("保持登入")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-6 text-center"},[e("a",{attrs:{href:""}},[e("i",{staticClass:"fa fa-key",attrs:{"aria-hidden":"true"}}),this._v(" 忘記密碼嗎？\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n              會員登入\n              "),e("span",{staticClass:"hint-label"},[this._v("*登入會員管理訂單更方便！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-login-buttons"},[e("button",{staticClass:"l-btn fb-login-btn mr-2",attrs:{type:"button"}},[this._v("快速登入")]),this._v(" "),e("button",{staticClass:"l-btn line-login-btn mr-2",attrs:{type:"button"}},[this._v("快速登入")]),this._v(" "),e("button",{staticClass:"l-btn user-login-btn",attrs:{type:"button","data-toggle":"modal","data-target":"#MemberLogin"}},[this._v("會員登入")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border p-3 mt-3"},[e("h5",[this._v("訂單備註")]),this._v(" "),e("div",{staticClass:"form-group"},[e("textarea",{staticClass:"form-control rounded-0",attrs:{rows:"3",placeholder:"有什麼想告訴賣家嗎?"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入統一編號"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入發票抬頭"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入手機條碼"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入自然人憑證"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 float-left mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入捐贈機構捐贈碼"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 float-left control-label mb-3"},[e("input",{attrs:{type:"checkbox",value:""}}),this._v(" "),e("a",{attrs:{href:"#homeSubmenu","data-toggle":"collapse","aria-expanded":"false"}},[e("label",{staticClass:"form-check-label check-label",attrs:{for:"defaultCheck1"}},[this._v("取件人與購買人相同")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-check w-100 ml-3"},[r("div",{staticClass:"collapse list-unstyled",attrs:{id:"homeSubmenu"}},[r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("姓名")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"購買人姓名"}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*超商取貨請使用本名，並記得攜帶身分證前往取貨")])]),t._v(" "),r("div",{staticClass:"col-md-2 float-left control-label"},[t._v("聯絡電話")]),t._v(" "),r("div",{staticClass:"col-md-10 float-left mb-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"購買人聯絡電話，例：0987654321"}}),t._v(" "),r("div",{staticClass:"hint-label mt-2"},[t._v("*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-check w-100 ml-3"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label",attrs:{for:"defaultCheck1"}},[this._v("用上述資料直接註冊會員")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-check w-100 ml-3"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label",attrs:{for:"defaultCheck1"}},[this._v("同意會員責任規範及個資聲明")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-check w-100 ml-3"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:""}}),this._v(" "),e("label",{staticClass:"form-check-label check-label",attrs:{for:"defaultCheck1"}},[this._v("為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利")])])}],!1,null,"87940c00",null);e.default=component.exports}}]);