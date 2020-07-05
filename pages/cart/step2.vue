<template>
  <div id="page">
    <section class="content">
      <Step />
      <div class="container">
        <div class="row">
          <div class="content col-md-9" style="min-height:500px">
            <h5 class="control-label">付款運送方式</h5>
            <div>
              <div class="w-100 mb-4">
                <!-- 付款運送方式 -->
                <div class="row">
                  <div class="col-md-6 pr-2 mb-3 shipping">
                    <button
                      type="button"
                      class="shipping-method"
                      @click="active='store'"
                      :class="{'on-active':active==='store'}"
                    >
                      <div class="shipping-label">
                        <div>
                          <span>
                            <i
                              class="pr-2"
                              :class="{'fas fa-check-circle':active==='store','far fa-circle ':active!=='store'}"
                            ></i>超商
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div class="col-md-6 pr-2 mb-3 shipping">
                    <button
                      type="button"
                      class="shipping-method"
                      @click="active='home'"
                      :class="{'on-active':active==='home'}"
                    >
                      <div class="shipping-label">
                        <div>
                          <span>
                            <i
                              class="pr-2"
                              :class="{'fas fa-check-circle':active==='home','far fa-circle ':active!=='home'}"
                            ></i>宅配
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <!-- 超商選項 -->
                <div class="from-group mb-3">
                  <!-- 配送方式 -->
                  <div class="row">
                    <div class="col-md-2 float-left control-label">配送方式</div>
                    <div class="col-md-10 float-left">
                      <div class="row">
                        <div v-for="(item,i) in delivery.list" class="col-md-4 pr-2 mb-3">
                          <ButtonChoice
                            :title="item.title"
                            :free="free_shipping"
                            :active="delivery.selected===item.id"
                            @selected="delivery.selected=item.id"
                          />
                        </div>
                        <button
                          type="button"
                          @click="get_cvsStore()"
                          class="l-btn pick-btn btn-block mt-3 ml-3"
                        >選擇取貨門市</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="from-group mb-3" v-if>
                  <!-- 付款方式 -->
                  <div class="row">
                    <div class="col-md-2 float-left control-label">付款方式</div>
                    <div class="col-md-10 float-left">
                      <div class="row">
                        <div v-for="(item,i) in cash.list" class="col-md-4 pr-2 mb-3">
                          <ButtonChoice
                            :title="item.title"
                            :free="free_shipping"
                            :active="cash.selected===item.id"
                            @selected="cash.selected=item.id"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 卡號  -->
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-2 float-left control-label">卡號</div>
                    <div class="col-md-10 float-left ">
                      <input data-index="0" maxlength="4" class="form-control ipt-cards d-inline-block" value />
                      <span class="dash">-</span>
                      <input data-index="1" maxlength="4" class="form-control ipt-cards d-inline-block" value />
                      <span class="dash">-</span>
                      <input data-index="2" maxlength="4" class="form-control ipt-cards d-inline-block" value />
                      <span class="dash">-</span>
                      <input data-index="3" maxlength="4" class="form-control ipt-cards d-inline-block" value />
                    </div>
                  </div>
                </div>
                <!-- 卡片背面後三碼  -->
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-2 float-left control-label">卡片背面後三碼</div>
                    <div class="col-md-10 float-left ">
                      <input data-index="0" maxlength="4" class="form-control ipt-cards d-inline-block" value />
                    </div>
                  </div>
                </div>
                <!-- 有效期限  -->
                <div class="form-group mb-3">
                  <div class="row">
                    <div class="col-md-2 float-left control-label">有效期限</div>
                    <div class="col-md-2 float-left">
                      <select id="inputState" class="form-control  d-inline-block">
                        <option selected>01</option>
                        <option>02</option>
                      </select>
                    </div>
                    <div class="col-md-1 float-left control-label">月</div>
                    <div class="col-md-2 float-left  ipt-cards">
                      <select id="inputState" class="form-control  d-inline-block">
                        <option selected>2020</option>
                        <option>2021</option>
                      </select>
                    </div>
                    <div class="col-md-5 float-left control-label">年</div>
                  </div>
                </div>
                <!-- 持卡人姓名 -->
                <div class="from-group mb-3">
                  <div class="row">
                    <div class="col-md-2 float-left control-label">持卡人姓名</div>
                    <div class="col-md-10 float-left">
                      <input class="form-control" type="text" placeholder="" />
                    </div>
                  </div>
                </div>
                <!-- 連絡電話 -->
                <div class="from-group mb-3">
                  <div class="row">
                    <div class="col-md-2 float-left control-label">連絡電話</div>
                    <div class="col-md-10 float-left">
                      <input class="form-control" type="text" placeholder="" />
                    </div>
                  </div>
                </div>
                <!-- 備註 -->
                <div class="from-group mb-3">
                  <div class="row">
                    <div class="col-md-2 float-left control-label">備註</div>
                    <div class="col-md-10 float-left">
                      <input class="form-control" type="text" placeholder />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右邊結帳金額 -->
          <div class="col-md-3">
            <div class="checkout-amount-wrap">
              <ul class="list-unstyled components checkout-amount">
                <li>
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">結帳金額</a>
                </li>
                <li class="collapse list-unstyled" id="homeSubmenu">
                  商品小計
                  <span class="float-right">489</span>
                </li>
                <li>
                  運費
                  <span class="float-right">0</span>
                </li>
                <li>
                  應付總額
                  <span class="price float-right">
                    NT$
                    <span class="total">489{{delivery.selected}}-{{cash.selected}}</span>
                  </span>
                </li>
                <li>
                  <button @click="toStep3()" class="w-100 btn btn-outline-primary btn-sm">前往結帳</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="forms"></div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
export default {
  data() {
    return {
      forms: null,
      free_shipping: false,
      active: "store",
      // 物流
      delivery: {
        selected: 0,
        list: []
      },
      // 金流
      cash: {
        selected: 0,
        list: []
      },
      render_id: ""
    };
  },
  watch: {
    // SSR此頁面 會觸發
    "$store.state.cart.info": async function(after, before) {
      switch (true) {
        case after.state == 1 && after.id != "":
          await this.get_lockCar();
          this.loading(false);
          break;
        default:
          this.loading(false);
      }
    }
  },
  methods: {
    ...mapActions({
      loading: "loading",
      _store: "_store"
    }),

    switchType: function(type) {
      this.active = type;
      this.active_type = "1";
    },

    get_lockCar: async function() {
      let cart_info = this.$store.state.cart.info;
      console.log("get_lockCar>>>>", cart_info);
      let cond = Struct.fromJavaScript({
        car_id: cart_info.id
      });

      let result = await this.$store.dispatch("cart/get_lockCar", {
        condition: cond
      });

      if (result.code === 200) {
      } else {
        alert(result.data);
      }
      return true;
    },
    // 物流
    get_logistics: async function() {
      let result = await this.$store.dispatch("cash/get_logistics", {
        condition: null
      });
      console.log("result>>>", result);
      if (result.code === 0) {
        alert(result.data);
        return false;
      }

      for (let i in result.data) {
        let d = result.data[i];
        let o = {
          id: i,
          title:
            d.remark != "" ? `${d.name.tw}<br>(${d.remark})` : `${d.name.tw}`,
          data: d
        };
        // 物流
        this.delivery.list.push(o);
      }
      return true;
    },
    // 付款方式
    get_payment: async function() {
      let result = await this.$store.dispatch("cash/get_payment", {
        condition: null
      });
      console.log("result>>>", result);
      if (result.code === 0) {
        alert(result.data);
        return false;
      }

      for (let i in result.data) {
        let d = result.data[i];
        let o = {
          id: i,
          title:
            d.remark != "" ? `${d.name.tw}<br>(${d.remark})` : `${d.name.tw}`,
          data: d
        };
        this.cash.list.push(o);
      }
      return true;
    },
    // 選擇取貨門市
    get_cvsStore: async function() {
      let data = this.delivery.list[this.delivery.selected].data;
      data.redirect = `${process.env.REDIRECT_URL}/cart/step2`;
      let cond = Struct.fromJavaScript(data);
      let resp = await this.$store.dispatch("order/get_cvsStore", {
        condition: cond
      });
      console.log("get_cvsStore>>>>>", resp);
      if (resp.code == 0) {
        alert(resp.data);
        return;
      } else {
        const div = document.createElement("div");
        div.innerHTML = resp.data;
        document.body.append(div);
        document.getElementById("__4dingForm").submit();
        // dx;
      }
    },

    get_cvsStoreInfo: async function() {
      let cond = Struct.fromJavaScript({
        RenderID: this.render_id
      });
      let resp = await this.$store.dispatch("order/get_cvsStoreInfo", {
        condition: cond
      });
      console.log("get_cvsStoreInfo>>>>>", resp);
      if (resp.code == 0) {
        alert(resp.data);
        return;
      } else {
        let o = {
          logistics_type: this.delivery.selected,
          payment_type: this.cash.selected,
          logistics: resp.data
        };
        this._store({ act: "order/update_order", data: o });
      }
    },

    toStep3: async function() {
      console.log("render id>>>", this.render_id);
      if (this.render_id == "") return;
      await this.get_cvsStoreInfo();
      this.$router.push("/cart/step3");
    }
  },
  mounted: async function() {
    this.loading(true);
    console.log(this.$route.query)
    // ssr 過來此頁面 不動作 監聽觸發
    if (this.$store.state.cart.info.state == 1) {
      await this.get_lockCar();
    }

    await this.get_logistics();
    await this.get_payment();
    this.loading(false);
  }
};
</script>
<style lang="scss" scoped>
</style>