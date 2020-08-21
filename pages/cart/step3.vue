<template>
  <div id="page">
    <section class="content">
      <Step />
      <div class="container" style="min-height: 600px">
        <div class="row">
          <div class="col-md-12">
            <!-- 會員專區 -->
            <div class="border p-3 mt-3">
              <h5>會員專區</h5>
              <p>
                會員登入
                <span class="hint-label">*登入會員管理訂單更方便！</span>
              </p>
              <div class="user-login-buttons">
                <button type="button" class="w-100 l-btn btn-primary" @click="signIn">會員登入</button>
              </div>
              <div class="mt-2 mb-2">
                <span class="hint-label">* </span>非會員購買
              </div>
              <input
                class="form-control"
                :class="{'is-invalid': validation.hasError('buyer.email')}"
                type="text"
                v-model="buyer.email"
                placeholder="連絡信箱"
              />
              <div class="hint-label mt-2">訂單通知會寄到此信箱，請您務必填入正確的 E-mail</div>
            </div>
            <!-- 購買人 -->
            <div class="border p-3 mt-3">
              <h5>購買人資訊</h5>
              <div class="from-group mb-3">
                <div class="row">
                  <div class="col-md-2 float-left control-label">
                    <span class="hint-label">* </span>姓名
                  </div>
                  <div class="col-md-10 float-left mb-3">
                    <input
                      class="form-control"
                      v-model="buyer.name"
                      :class="{'is-invalid': validation.hasError('buyer.name')}"
                      type="text"
                      placeholder="購買人姓名"
                    />
                  </div>
                  <div class="col-md-2 float-left control-label">
                    <span class="hint-label">* </span>聯絡電話
                  </div>
                  <div class="col-md-10 float-left mb-3">
                    <input
                      class="form-control"
                      v-model="buyer.phone"
                      :class="{'is-invalid': validation.hasError('buyer.phone')}"
                      type="text"
                      placeholder="購買人聯絡電話，例：0987654321"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- 收件人 -->
            <div class="border p-3 mt-3">
              <h5 >收件人資訊</h5>
              <div class="form-check w-100 ml-3"></div>
              <div class="from-group mb-3">
                <div class="row">
                  <div class="col-md-12 float-left control-label mb-3">
                    <input class type="checkbox"  v-model="checked" />
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                      <label class="form-check-label check-label" for="defaultCheck1">取件人與購買人相同</label>
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2 float-left control-label">
                    <span class="hint-label">* </span>姓名
                  </div>
                  <div class="col-md-10 float-left mb-3">
                    <input
                      class="form-control"
                      v-model="receiver.name"
                      :class="{'is-invalid': validation.hasError('receiver.name')}"
                      type="text"
                      placeholder="收件人姓名"
                    />
                    <div class="hint-label mt-2">*超商取貨請使用本名，並記得攜帶身分證前往取貨</div>
                  </div>
                  <div class="col-md-2 float-left control-label">
                    <span class="hint-label">* </span>聯絡電話
                  </div>
                  <div class="col-md-10 float-left mb-3">
                    <input
                      class="form-control"
                      v-model="receiver.phone"
                      :class="{'is-invalid': validation.hasError('receiver.phone')}"
                      type="text"
                      placeholder="收件人聯絡電話，例：0987654321"
                    />
                    <div
                      class="hint-label mt-2"
                    >*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321</div>
                  </div>
                  <div class="col-md-2 float-left control-label">
                    <span class="hint-label">* </span>聯絡信箱
                  </div>
                  <div class="col-md-10 float-left mb-3">
                    <input
                      class="form-control"
                      v-model="receiver.email"
                      :class="{'is-invalid': validation.hasError('receiver.email')}"
                      type="text"
                      placeholder="聯絡信箱"
                    />
                  </div>
                  <div class="col-md-2 float-left control-label">聯絡地址</div>
                  <div class="col-md-10 float-left mb-3">
                    <input
                      class="form-control"
                      v-model="receiver.address"
                      :class="{'is-invalid': validation.hasError('receiver.address')}"
                      type="text"
                      placeholder="聯絡地址"
                    />
                  </div>
                  <div class="col-md-12 float-left mb-3">
                    <button
                      type="button"
                      @click="get_cvsStore()"
                      class="w-100 l-btn pick-btn btn-block"
                    >選擇取貨門市</button>
                  </div>
                  <!-- 下方選項 -->
                  <div class="form-check w-100 ml-3">
                    <div class="collapse list-unstyled" id="homeSubmenu">
                      <div class="col-md-2 float-left control-label">姓名</div>
                      <div class="col-md-10 float-left mb-3">
                        <input class="form-control" type="text" placeholder="購買人姓名" />
                        <div class="hint-label mt-2">*超商取貨請使用本名，並記得攜帶身分證前往取貨</div>
                      </div>
                      <div class="col-md-2 float-left control-label">聯絡電話</div>
                      <div class="col-md-10 float-left mb-3">
                        <input class="form-control" type="text" placeholder="購買人聯絡電話，例：0987654321" />
                        <div
                          class="hint-label mt-2"
                        >*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 索取發票 -->
            <div v-if="false" class="border p-3 mt-3">
              <h5>索取發票</h5>
              <div class="from-group mb-3">
                <div class="row">
                  <div class="col-md-2 float-left control-label">電子發票</div>
                  <div class="col-md-10 float-left mb-3">
                    <div class="form-check form-check-inline" v-for="(item,i) in invoice_option">
                      <input
                        class="form-check-input"
                        type="radio"
                        :value="item.id"
                        v-model="invoice"
                      />
                      <label class="form-check-label" :for="item.id">{{item.title}}</label>
                    </div>
                  </div>
                </div>
                <!-- type:1 -->
                <div class="row p-2" v-if="invoice===1">
                  <div class="col-md-12 float-left mb-3 rule">依統一發票使用辦法規定</div>
                </div>
                <!-- type:2 -->
                <div class="row" v-if="invoice===2">
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入統一編號" />
                  </div>
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入發票抬頭" />
                  </div>
                </div>
                <!-- type:3 -->
                <div class="row" v-if="invoice===3">
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入手機條碼" />
                  </div>
                </div>
                <!-- type:4 -->
                <div class="row" v-if="invoice===4">
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入自然人憑證" />
                  </div>
                </div>
                <!-- type:5 -->
                <div class="row" v-if="invoice===5">
                  <!-- <div class="col-md-2 float-left control-label"></div> -->
                  <div class="col-md-12 float-left mb-3">
                    <input class="form-control" type="text" placeholder="請輸入捐贈機構捐贈碼" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 訂單備註 -->
            <div class="border p-3 mt-3">
              <h5>訂單備註</h5>
              <div class="form-group pt-3">
                <textarea class="form-control rounded-0" rows="3" placeholder="有什麼想告訴賣家嗎?" v-model="buyer.remark" ></textarea>
              </div>
              <div class="w-100">
                <input class="form-check-input mt-2" type="checkbox" value />
                <label class="form-check-label check-label ml-4" for="defaultCheck1">用上述資料直接註冊會員</label>
              </div>
              <div class="w-100">
                <input class="form-check-input mt-2" type="checkbox" value />
                <label class="form-check-label check-label ml-4" for="defaultCheck1">同意會員責任規範及個資聲明</label>
              </div>
              <div class="w-100">
                <input class="form-check-input mt-2" type="checkbox" value />
                <label
                  class="form-check-label check-label ml-4"
                  for="defaultCheck1"
                >為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利</label>
              </div>
              <div class="w-100 mt-3">
                <button type="button" @click="create_Order()" class="w-100 l-btn checkout-btn">立即結帳</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
export default {
  data() {
    return {
      order: {},
      storeID: "",
      invoice: 1,
      checked:true,
      invoice_option: [
        { id: 1, title: "會員載具(個人)" },
        { id: 2, title: "公司用(統編)" },
        { id: 3, title: "手機載具" },
        { id: 4, title: "自然人憑證" },
        { id: 5, title: "捐贈碼" },
      ],

      // 購買人
      buyer: {
        phone: "",
        email: "",
        name: "",
        remark: "",
      },
      // 收件人
      receiver: {
        // address: "",
        phone: "0912345678",
        email: "RECEIVER01@gmail.com",
        name: "RECEIVER01",
        address: "" ,
        cvs_code: "",
        cvs_type: "",
        cvs_name: "",
        cvs_address: "",
      },
    };
  },
  watch: {
    "$store.state.account.user"(to, from) {
      this.init_BuyerInfo();
    },
    checked:function (to,from) {
      this.copyBuyer(to)
    }
  },
  validators: {
    "receiver.name": function (value) {
      return this.Validator.value(value).required("請選擇收件人姓名");
    },
    "receiver.phone": function (value) {
      return this.Validator.value(value)
        .required("請選擇收件人電話")
        .length(10);
    },
    "receiver.email": function (value) {
      return this.Validator.value(value)
        .required("請確認收件人聯絡信箱為必填")
        .email("請確認收件人聯絡信箱");
    },
    "receiver.cvs_type,receiver.cvs_name,receiver.cvs_address,receiver.cvs_code": function (
      value
    ) {
      return this.Validator.value(value).required("請選擇取貨門市");
    },
    "buyer.name": function (value) {
      return this.Validator.value(value).required("請確認購買者姓名");
    },
    "buyer.phone": function (value) {
      return this.Validator.value(value)
        .required("請確認購買者電話")
        .length(10);
    },
    "buyer.email": function (value) {
      return this.Validator.value(value)
        .required("請確認購買者信箱")
        .email("請確認購買者信箱");
    },
  },
  methods: {
    ...mapActions({
      loading: "loading",
      _store: "_store",
    }),
    /**
     * 檢查表單
     */
    submit: async function () {
      return this.$validate().then((success, e) => {
        console.log(this.validation.allErrors());
        return { res: success, message: this.validation.allErrors() };
      });
    },
    /**
     * 登入
     */
    signIn: function () {
      this.$modal.show("login");
    },
    /**
     * 複製購買人
     */
    copyBuyer: function (bol) {
      this.receiver.name = (bol)? this.buyer.name : "" ;
      this.receiver.phone = (bol)? this.buyer.phone : ""
      this.receiver.email = (bol)? this.buyer.email : ""
    },
    /**
     * 送出訂單
     */
    create_Order: async function () {
      let err = await this.submit();
      if (!err.res) {
        alert("form error:\n" + err.message.join("\n"));
        return;
      }

      let o = { ...this.$store.state.order.content, ...this.buyer };
      o.car_id = this.$store.state.cart.info.id;
      o.payment_adapter = this.order.PaymentAdapter.id;
      o.logistics_adapter = this.order.LogisticsAdapter.id;
      o.other.receiver = this.receiver;
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("order/create_Order", {
        condition: cond,
      });

      if (result.code === 0 || result.data == "") {
        alert(result.data);
        return false;
      } else {
        alert("createOrder OK:" + result.data);
        let service = this.order.PaymentAdapter.service;
        if (service == "") {
          this.$router.push(`/cart/orderList?id=${result.data}`);
          return true;
        }
        let redirect = `${process.env.REDIRECT_URL}/cart/orderList?id=${result.data}`;
        let url = `/payment/${service}/order/${result.data}?&redirect=${redirect}`;
        window.location = url;
      }
      return true;
    },
    /**
     * 選擇取貨門市
     */
    get_cvsStore: async function () {
      let id = this.order.LogisticsAdapter.id;
      let service = this.order.LogisticsAdapter.service;
      let redirect = `${process.env.REDIRECT_URL}/cart/step3`;
      window.location = `/logistics/${service}/storemap?a=${id}&redirect=${redirect}`;
    },
    /**
     * 設定購買人資訊
     */
    init_BuyerInfo() {
      let store = this.$store.state.account.user;
      this.buyer.email = this.receiver.email = store.email ? store.email : "";
      this.buyer.phone = this.receiver.phone = store.phone ? store.phone : "";
      this.buyer.name = this.receiver.name = store.name ? store.name : "";
    },


  },
  created: function () {
    this.init_BuyerInfo();
  },
  mounted: async function () {
    this.loading(true);
    this.order = JSON.parse(localStorage.getItem("order"));
    // 檢查是否有物流金流資料 沒有返回
    if (
      this.order == null ||
      !this.order.hasOwnProperty("LogisticsAdapter") ||
      !this.order.hasOwnProperty("PaymentAdapter")
    ) {
      this.$router.push("/cart/step2");
      localStorage.removeItem("order");
      return;
    }
    //
    let query = this.$route.query;
    this.receiver.cvs_code = query.hasOwnProperty("Code") ? query.Code : "";
    this.receiver.cvs_name = query.hasOwnProperty("Name") ? query.Name : "";
    this.receiver.cvs_type = query.hasOwnProperty("Cate") ? query.Cate : "";
    this.receiver.cvs_address = query.hasOwnProperty("Addr") ? query.Addr : "";

    this.loading(false);
  },
};
</script>
<style lang="scss" scoped>
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  margin: 0 1;
}
.rule {
  background-color: #86919b;
  color: white;
  padding: 10px;
  font-size: 14px;
}
</style>