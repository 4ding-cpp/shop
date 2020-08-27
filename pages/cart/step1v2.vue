<template>
  <div id="page">
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
                    <i class="fas"></i>
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
          </div>
          <!-- 右側 -->
          <div class="col-md-10">
            <div
              data-translate-keys="cart-content"
              class="circle-head"
              data-translate-html="true"
            >購物車內容</div>
            <table class="table">
              <thead>
                <th>圖片</th>
                <th>名稱</th>
                <th>規格</th>
                <th>單價</th>
                <th width="18%">數量</th>
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
                  <td>{{item.shell_id }}</td>
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
              </tbody>
              <thead v-if="goods.length==0">
                <th class="text-center text-danger" colspan="7">無資料</th>
              </thead>
            </table>
          </div>
        </section>
      </div>
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
      //統計 運費 , 總金額
      total: {
        fee_logistics: 0,
        money: 0,
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
  watch: {},
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      _store: "_store",
    }),
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
    async get_completeCar() {
      let data = {};
      let cart = this.$store.state.cart.content;
      let cart_info = this.$store.state.cart.info;
      let buy = _values(cart).map((res) => {
        return {
          amount: res.amount,
          shell_id: res.shell_id,
          sku: res.sku,
        };
      });

      if (cart == null || cart_info.id == null) return;
      let cond = Struct.fromJavaScript({ buy: buy });

      let result = await this.$store.dispatch("cart/get_completeCar", {
        app: this,
        token: this.$store.state.account.token,
        condition: cond,
      });

      if (result.code === 200) {
        cart_info = { state: 1, id: result.data.car_id };
        console.log(result);
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
    // 更新購物車
    async add_cart(o) {
      await this._store({ act: "cart/set_one_cart", data: o });
      await this.get_completeCar();
    },
    async del_cart(i) {
      console.log(this.goods[i]);
      this._store({ act: "cart/del_cart", data: this.goods[i] });
      this.goods.splice(i, 1);
      await this.get_completeCar();
    },
  },
  //BEGIN--生命週期
  beforeCreate: function () {
    //實體初始化
  },
  created: function () {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
  },
  beforeMount: function () {
    //執行元素掛載之前。
  },
  mounted: async function () {
    //元素已掛載， el 被建立。
    this.loading(true);
    await this.get_completeCar();
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
i.fa-trash-alt {
  cursor: pointer;
  &:hover {
    color: #6c757d;
  }
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
}

.circle-head::before {
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