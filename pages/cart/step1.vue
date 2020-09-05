<template>
  <div id="page">
    {{SynCopy}}
    <section class="content">
      <div class="container">
        <section class="row">
          <!-- 左側 -->
          <div class="col-md-2">
            <div class="checkout-amount-wrap">
              <ul class="list-unstyled components checkout-amount">
                <li>
                  <a href="#leftProdCounter" data-toggle="collapse" aria-expanded="false">
                    結帳金額
                    <i class="fas float-right"></i>
                  </a>
                </li>
                <div class="collapse list-unstyled" id="leftProdCounter">
                  <li>
                    商品小計
                    <span class="float-right">489</span>
                  </li>
                </div>
                <li>
                  運費
                  <span class="float-right">{{ total.fee_logistics }}</span>
                </li>
                <li class="totoal-money font-weight-bolder">
                  應付總額
                  <span class="price float-right">
                    NT$
                    <span class="total">{{total.money}}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="checkout-amount-wrap">
              <ul class="list-unstyled components checkout-amount">
                <li>優惠碼</li>
                <li>
                  輸入優惠碼
                  <div style="height: 30px;">
                    <input type="text" class="w-50 h-100" />
                    <button type="button" class="btn btn-outline-danger btn-sm">確認</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 右側 -->
          <div class="col-md-10">
            <!-- step1 -->
            <div class="row">
              <div class="circle-head w-100">購物車內容</div>
              <div class="col-md-12 pl-0 table-responsive">
                <table class="table">
                  <thead>
                    <th>圖片</th>
                    <th>名稱</th>
                    <th>規格</th>
                    <th>單價</th>
                    <th style="width:200px">數量</th>
                    <th>小計</th>
                    <th></th>
                  </thead>
                  <tbody>
                    <tr v-for="(item,i) in goods">
                      <td>
                        <img :src="`${imgesUrl}${item.photox[0].src}`" alt width="80px" />
                        <!-- <img src="/images/noprod.png" alt width="80px" /> -->
                      </td>
                      <td>{{item.name.tw}}</td>
                      <td>{{item.sku }}</td>
                      <td>NT${{item.price}}</td>
                      <td>
                        <ButtonSubAdd
                          :data.sync="item"
                          :count.sync="item.amount"
                          @after_change="add_cart"
                        />
                      </td>
                      <td>{{ item.amount * item.price }}</td>
                      <td>
                        <i @click="del_cart(i)" class="fas fa-trash-alt"></i>
                      </td>
                    </tr>
                    <tr v-if="goods.length==0">
                      <td class="text-center text-danger" colspan="7">無資料</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-12 pl-0 mb-3">
                <!-- <button
                  @click="get_completeCar"
                  type="button"
                  class="btn btn-danger mr-2 w-25 float-right"
                >修改購物車</button>-->
                <button
                  @click="clear_cart"
                  type="button"
                  class="btn btn-secondary mr-2 w-25 float-right"
                >清空購物車</button>
              </div>
            </div>
            <!-- step2 -->

            <div v-if="checked.step===true" class="step2 row d-flex flex-column">
              <div class="circle-head">會員專區</div>
              <div class="mb-2 font-weight-bolder">
                會員登入
                <span class="hint-label">*登入會員管理訂單更方便！</span>
              </div>
              <div class="d-flex">
                <button
                  @click="get_completeCar"
                  type="button"
                  class="l-btn btn-facebook mr-2"
                  style="width:50%"
                >
                  FACEBOOK
                  快速註冊
                </button>
                <button type="button" @click="signIn" class="l-btn btn-login mr-2 w-50">會員登入</button>
              </div>
              <div class="mt-2 mb-2 font-weight-bolder">
                <span class="hint-label">*</span>非會員購買
              </div>
              <div class="col-md-12 pl-0 pr-2 float-left mb-3">
                <input
                  class="form-control"
                  :class="{'is-invalid': validation.hasError('buyer.email')}"
                  type="text"
                  v-model="buyer.email"
                  placeholder="連絡信箱"
                />
              </div>

              <div class="mt-2 mb-2 font-weight-bolder">
                <span class="hint-label">*訂單通知會寄到此信箱，請您務必填入正確的 E-mail</span>
              </div>
            </div>
            <!-- step3 -->
            <div v-if="checked.step===true" class="step3">
              <div class="row d-flex flex-column pt-4">
                <div class="circle-head">付款運送方式</div>
              </div>
              <div class="row">
                <div class="col-md-6 pl-0 pr-2 mb-3 shipping">
                  <button type="button" class="shipping-method on-active">
                    <div class="shipping-label">
                      <div>
                        <span>
                          <i class="pr-2 fas fa-check-circle"></i>超商
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div class="row mb-3">
                <!-- 超商選項 -->
                <div class="col-md-2 float-left control-label">配送方式</div>
                <div class="col-md-10 float-left">
                  <div class="row">
                    <div v-for="(item,i) in logistic.list" class="col-md-4 pr-2 mb-3">
                      <ButtonChoice
                        :title="item.title"
                        :free="false"
                        :active="logistic.selected==item.id"
                        @selected="logistic.selected=item.id"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 float-left control-label"></div>
                <div class="col-md-10 pr-2 float-left mb-3">
                  <button
                    type="button"
                    @click="get_cvsStore()"
                    class="w-100 l-btn pick-btn btn-block"
                  >選擇取貨門市</button>
                </div>
                <div class="col-md-2 float-left control-label">付款方式</div>
                <div class="col-md-10 float-left">
                  <div class="row" v-if="cash.show===true">
                    <div v-for="(item,i) in cash.list" class="col-md-4 pr-2 mb-3">
                      <ButtonChoice
                        :title="item.title"
                        :free="false"
                        :active="cash.selected==item.id"
                        @selected="cash.selected=item.id"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 float-left control-label">備註</div>
                <div class="col-md-10 float-left mb-3">
                  <textarea
                    class="form-control rounded-0"
                    rows="1"
                    placeholder="有什麼想告訴賣家嗎?"
                    v-model="buyer.remark"
                  ></textarea>
                </div>
              </div>
              <hr />
              <!-- 購買人資訊 -->
              <div class="row mb-3">
                <div class="col-md-12 mb-3 float-left control-label">
                  <b>購買人資訊</b>
                </div>
                <div class="col-md-2 float-left control-label">
                  <span class="hint-label">*</span>姓名
                </div>
                <div class="col-md-10 mb-3 float-left">
                  <input
                    class="form-control"
                    v-model="buyer.name"
                    :class="{'is-invalid': validation.hasError('buyer.name')}"
                    type="text"
                    placeholder="購買人姓名"
                  />
                </div>
                <div class="col-md-2 float-left control-label">
                  <span class="hint-label">*</span>聯絡電話
                </div>
                <div class="col-md-10 mb-3 float-left">
                  <input
                    class="form-control"
                    v-model="buyer.phone"
                    :class="{'is-invalid': validation.hasError('buyer.phone')}"
                    type="text"
                    placeholder="購買人聯絡電話，例：0987654321"
                  />
                </div>
                <div class="col-md-2 float-left control-label">聯絡地址</div>
                <div class="col-md-10 mb-3 float-left">
                  <input
                    class="form-control"
                    v-model="buyer.address"
                    :class="{'is-invalid': validation.hasError('buyer.address')}"
                    type="text"
                    placeholder="請輸入購買人地址"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="w-100">
                    <input
                      class="form-check-input mt-2"
                      href="#receiverForm"
                      type="checkbox"
                      v-model="checked.userData.value"
                      data-toggle="collapse"
                      aria-expanded="false"
                    />
                    <label
                      class="form-check-label check-label ml-4"
                      for="defaultCheck1"
                    >{{checked.userData.title}}</label>
                  </div>
                </div>
              </div>
              <div class="row mb-3 collapse list-unstyled" id="receiverForm">
                <!-- <div class="row mb-3" id="receiverForm"> -->
                <div class="col-md-12 mt-3">
                  <hr />
                </div>
                <div class="col-md-2 float-left control-label">
                  <span class="hint-label">*</span>姓名
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
                  <span class="hint-label">*</span>聯絡電話
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
                  <span class="hint-label">*</span>聯絡信箱
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
              </div>
              <div class="row mb-3">
                <div class="col-md-12">
                  <div class="w-100">
                    <input class="form-check-input mt-2" type="checkbox" value checked />
                    <label class="form-check-label check-label ml-4" for="defaultCheck1">用上述資料直接註冊會員</label>
                  </div>
                  <div class="w-100">
                    <input class="form-check-input mt-2" type="checkbox" value checked />
                    <label
                      class="form-check-label check-label ml-4"
                      for="defaultCheck1"
                    >同意會員責任規範及個資聲明</label>
                  </div>
                  <div class="w-100">
                    <input class="form-check-input mt-2" type="checkbox" value checked />
                    <label
                      class="form-check-label check-label ml-4"
                      for="defaultCheck1"
                    >為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利</label>
                  </div>
                  <div class="w-100 mt-3">
                    <button
                      type="button"
                      @click="create_Order()"
                      class="w-100 l-btn checkout-btn"
                    >立即結帳</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footers />
    </section>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import _values from "lodash/values";

export default {
  data() {
    return {
      order: {},
      storeID: "",
      // invoice: 1,
      checked: {
        userData: {
          value: true,
          title: "取件人與購買人相同",
        },
        step: true,
      },
      // invoice_option: [
      //   { id: 1, title: "會員載具(個人)" },
      //   { id: 2, title: "公司用(統編)" },
      //   { id: 3, title: "手機載具" },
      //   { id: 4, title: "自然人憑證" },
      //   { id: 5, title: "捐贈碼" },
      // ],
      // 物流
      logistic: {
        selected: 0,
        list: [],
      },
      // 金流
      cash: {
        show: true,
        selected: 0,
        list: [],
      },
      // 購買人
      buyer: {
        phone: "",
        email: "",
        name: "",
        address: "",
        remark: "",
      },
      // 收件人
      receiver: {
        // address: "",
        phone: "0912345678",
        email: "RECEIVER01@gmail.com",
        name: "RECEIVER01",
        address: "",
        cvs_code: "",
        cvs_type: "",
        cvs_name: "",
        cvs_address: "",
      },

      //統計 運費 , 總金額
      total: {
        fee_logistics: 0,
        money: 0,
      },
      // 計數
      timer: {
        c: 0,
        t: 0,
      },
      // 購物車
      cart: {
        count: 0,
        money: 0,
        list: {},
      },
      imgesUrl: process.env.IMG_URL,

      goods: [],
      activity: [],
      purchase: [
        {
          image: "/images/prod01.jpg",
          name: "輕柔空氣感彩妝刷",
          price: "680",
          offer: "249",
        },
      ],
    };
  },
  async asyncData({ context, app, store, route }) {},
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
  watch: {
    "$store.state.account.user"(to, from) {
      this.init_BuyerInfo();
    },
  },
  computed: {
    //相依的資料改變時才做計算方法
    SynCopy: function () {
      console.log(this.checked.userData.value);
      if (this.checked.userData.value === false) return;
      this.receiver.name = this.buyer.name;
      this.receiver.phone = this.buyer.phone;
      this.receiver.email = this.buyer.email;
      this.receiver.address = this.buyer.address;
    },
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      _store: "_store",
    }),

    /**
     * 選擇取貨門市
     */
    get_cvsStore: async function () {
      await this.get_completeCar();
      localStorage.setItem(
        "order",
        JSON.stringify({
          receiver: this.receiver,
          buyer: this.buyer,
          logistic: this.logistic.selected,
          cash: this.cash.selected,
        })
      );
      let id = this.logistic.list[this.logistic.selected].data.adapter_id;
      let service = this.logistic.list[this.logistic.selected].data.service;
      let redirect = `${process.env.REDIRECT_URL}/cart/step1`;
      window.location = `/logistics/${service}/storemap?a=${id}&redirect=${redirect}`;
    },
    /**
     * 物流
     */
    get_logistics: async function () {
      let result = await this.$store.dispatch("cash/get_logistics", {
        condition: null,
      });

      if (result.code === 0) {
        this.$toast.error(result.data);
        return false;
      }
      for (let i in result.data) {
        let d = result.data[i];
        let o = {
          id: i,
          title:
            d.remark != "" ? `${d.name.tw}<br>(${d.remark})` : `${d.name.tw}`,
          data: d,
        };
        // 物流
        this.logistic.list.push(o);
        // if (i == 0) {
        //   this.total.fee_logistics = d.logistics_fee;
        //   this.cash.show = d.payment_type == 6 ? false : true;
        // }
      }
      return true;
    },
    /**
     * 付款方式
     */
    get_payment: async function () {
      let result = await this.$store.dispatch("cash/get_payment", {
        condition: null,
      });
      if (result.code === 0) {
        this.$toast.error(result.data);
        return false;
      }
      console.log("pay:", result);
      for (let i in result.data) {
        let d = result.data[i];
        let o = {
          id: i,
          title:
            d.remark != "" ? `${d.name.tw}<br>(${d.remark})` : `${d.name.tw}`,
          data: d,
        };
        this.cash.list.push(o);
      }
      return true;
    },
    /**
     * 計算購物車
     */
    // total() {
    //   let cart = this.$store.state.cart;
    //   let money = 0;
    //   let amount = 0;
    //   Object.keys(cart.content).forEach((k) => {
    //     amount += Number(cart.content[k].amount);
    //     money += Number(cart.content[k].price) * Number(cart.content[k].amount);
    //   });
    //   this.cart.money = money;
    //   this.cart.count = amount;
    //   return money;
    // },
    // 將目前購物車 送出取得可套用活動相關資訊
    async get_completeCar(focus = true) {
      let data = {};
      let cart = this.goods;
      let cart_info = this.$store.state.cart.info;
      let buy = _values(cart).map((res) => {
        return {
          amount: res.amount,
          shell_id: res.shell_id,
          sku: res.sku,
        };
      });

      if (cart == null || cart_info.id == null) return;
      let nowTime = new Date().getTime() / 1000;
      let lastTime = this.timer.t;
      if (nowTime - lastTime < 5 && focus === false) return;
      this.timer.t = new Date().getTime() / 1000;
      let cond = Struct.fromJavaScript({ buy: buy });

      let result = await this.$store.dispatch("cart/get_completeCar", {
        app: this,
        token: this.$store.state.account.token,
        condition: cond,
      });
      console.log("get_completeCar:", result);
      this.checked.step = true;
      if (result.code === 200) {
        cart_info = { state: 1, id: result.data.car_id };
        this.goods = result.data.goods;
        this.activity = result.data.activity;
        let data = {};
        for (let i in this.goods) {
          let o = this.goods[i];
          data[`${o.shell_id}-${o.sku}`] = o;
        }
        this._store({
          act: "cart/set_cart_info",
          data: { state: 1, id: result.data.car_id },
        });
        this._store({ act: "cart/set_cart", data: data });
      }
    },
    /**
     * 新增購物車
     */
    async add_cart(o) {
      await this._store({ act: "cart/set_one_cart", data: o });
      this.counter();
      // this.checked.step = false;
    },
    /**
     * 減少購物車
     */
    async del_cart(i) {
      this._store({ act: "cart/del_cart", data: this.goods[i] });
      this.goods.splice(i, 1);
      this.counter();
      // this.checked.step = false;
    },
    /**
     * 清空購物車
     */
    async clear_cart(i) {
      this._store({ act: "cart/set_cart", data: [] });
      this.goods = [];
      this.checked.step = false;
      clearInterval(this.timer.t);
    },
    delay_cart() {
      if (this.timer.c > 0) {
        setTimeout(() => {
          this.timer.c--;
          this.delay_cart();
        }, 1000);
      } else {
        console.log("do");
        this.get_completeCar(false);
      }
    },
    countDownTimer() {},
    counter() {
      this.timer.c = 5;
      this.delay_cart();
    },
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
     * 送出訂單
     */
    create_Order: async function () {
      let err = await this.submit();
      if (!err.res) {
        alert(err.message.join("\n"));
        return;
      }

      let o = { ...this.$store.state.order.content, ...this.buyer };
      o.car_id = this.$store.state.cart.info.id;
      o.payment_adapter = this.cash.list[this.cash.selected].data.adapter_id;
      o.logistics_adapter = this.logistic.list[
        this.logistic.selected
      ].data.adapter_id;
      o.other.receiver = this.receiver;
      console.log("create_Order", o);
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("order/create_Order", {
        condition: cond,
      });

      if (result.code === 0 || result.data == "") {
        alert(result.data);
        return false;
      } else {
        alert("createOrder OK:" + result.data);
        let service = this.cash.list[this.cash.selected].data.service;
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
     * 設定購買人資訊
     */
    init_BuyerInfo() {
      let store = this.$store.state.account.user;
      this.buyer.email = store.email ? store.email : "";
      this.buyer.phone = store.phone ? store.phone : "";
      this.buyer.name = store.name ? store.name : "";
      this.buyer.address = store.address ? store.address : "";
    },
  },
  //BEGIN--生命週期
  beforeCreate: function () {
    //實體初始化
  },
  created: function () {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    this.init_BuyerInfo();
  },
  beforeMount: function () {
    //執行元素掛載之前。
  },
  mounted: async function () {
    //元素已掛載， el 被建立。
    this.loading(true);
    this.order = JSON.parse(localStorage.getItem("order"));
    localStorage.removeItem("order");
    // console.log("local:",this.order);
    this.goods = this.$store.state.cart.content;
    await this.get_completeCar();
    await this.get_logistics();
    await this.get_payment();

    if (this.order !== null) {
      this.buyer = this.order.buyer;
      this.receiver = this.order.receiver;
      this.cash.selected = this.order.cash;
      this.logistic.selected = this.order.logistic;
    }
    let query = this.$route.query;
    this.receiver.cvs_code = query.hasOwnProperty("Code") ? query.Code : "";
    this.receiver.cvs_name = query.hasOwnProperty("Name") ? query.Name : "";
    this.receiver.cvs_type = query.hasOwnProperty("Cate") ? query.Cate : "";
    this.receiver.cvs_address = query.hasOwnProperty("Addr") ? query.Addr : "";

    this.loading(false);
  },
  beforeUpdate: function () {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function () {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function () {
    //實體還可使用。
  },
  destroyed: function () {
    //實體銷毀。
  },
  //END--生命週期
};
</script>
<style lang="scss" scoped>
// FB 按鈕
.btn-facebook {
  background-color: #3b5998;
  &:hover {
    background-color: #2b4477;
  }
}
// 登入 按鈕
.btn-login {
  background-color: #86919b;
  &:hover {
    background-color: #595f64;
  }
}
// 選擇門市
.btn-csv {
  &:hover {
    background-color: #00c123;
    color: white;
  }
}
// 刪除
i.fa-trash-alt {
  cursor: pointer;
  &:hover {
    color: #6c757d;
  }
}
section {
  counter-reset: circle-head;
}
.circle-head {
  height: 36px;
  position: relative;
  padding-left: 46px;
  line-height: 38px;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #3c4c57;

  &::before {
    font-family: "Open Sans", sans-serif;
    left: 0;
    top: 0;
    width: 36px;
    height: 36px;
    line-height: 34px;
    position: absolute;
    counter-increment: circle-head;
    content: counter(circle-head);
    border-radius: 50%;
    border: 1px solid #9a9ea2;
    color: #9a9ea2;
    text-align: center;
    font-size: 14px;
  }
}

[data-toggle="collapse"] .fas:before {
  content: "\f054";
  float: right;
  transition: all 0.5s;
  transform: rotate(-90deg);
}

[aria-expanded="true"] .fas:before {
  content: "\f054";
  transition: all 0.5s;
  transform: rotate(90deg);
}
</style>