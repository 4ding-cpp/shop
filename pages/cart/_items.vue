<template>
  <div id="page">
    <section class="content">
      <Step />
      <div class="container">
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
            <tr v-for="(item,i) in commodity">
              <td>
                <img :src="`${imgesUrl}${item.photo.src}`" alt width="80px" />
                <!-- <img src="/images/noprod.png" alt width="80px" /> -->
              </td>
              <td>{{item.name.tw}}</td>
              <td>{{item.normal}}</td>
              <td>NT${{item.price}}</td>
              <td>
                <ButtonSubAdd :data.sync="item" :count.sync="item.count" @after_change="add_cart" />
              </td>
              <td>{{ item.count * item.price }}</td>
              <td>
                <i @click="del_cart(i)" class="fas fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
          <thead v-if="commodity.length==0">
            <th class="text-center text-danger" colspan="7">無資料</th>
          </thead>
        </table>

        <!-- 小計 折價卷 -->
        <div class="row">
          <div class="col-lg-12 bord-top-dash p-2">
            <div class="cart-content-container">
              <div class="ecoupon-entry__content">
                <i class="fas fa-cart-plus"></i>
                <span class="ecoupon-entry__title">折價券</span>
              </div>
              <div class="ecoupon-entry__action">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div></div>
          <div class="total col-lg-6"></div>
          <div class="total col-lg-6">
            <div class="col-md-12 d-flex justify-content-between p-2">
              <div class="title">一般會員</div>
              <div class></div>
            </div>
            <div class="col-md-12 d-flex justify-content-between p-2">
              <div class>商品小計</div>
              <div class>NT$2666</div>
            </div>
            <div class="col-md-12 d-flex justify-content-between bord-top-dash p-2">
              <div class>共N項</div>
              <div class="total-money">NT$2666</div>
            </div>
            <div class="col-md-12">
              <nuxt-link tag="button" class="w-100 btn btn-outline-primary btn-sm" to="/cart/step2">下一步</nuxt-link>
            </div>
          </div>
        </div>
        <!-- 加購專區 先隱藏 -->
        <!-- <div class="purchase row">
          <div class="col-lg-12 col-md-12 col-xs-12 p-2 title">加購專區</div>
          <div v-for="item in purchase" class="card col-lg-3 col-md-3 col-xs-6 p-2">
            <Purchase />
          </div>
        </div> -->
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
      imgesUrl: '',
      commodity: [],
      activity: [],
      purchase: [
        {
          image: "/images/prod01.jpg",
          name: "輕柔空氣感彩妝刷",
          price: "680",
          offer: "249"
        }
      ],
      list: [
        {
          image: "/images/noprod.png",
          name: "歐美高衩深V透膚雕花連體衣",
          size: "S",
          price: "227",
          num: "1"
        },
        {
          image: "/images/noprod.png",
          name: "歐美高衩深V透膚雕花連體衣",
          size: "S",
          price: "227",
          num: "1"
        }
      ]
    };
  },
  async asyncData({ context, app, store, route }) {
    // todo:拉到store去
    let data = {imgesUrl:process.env.IMG_URL};

    return data;
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      _store: "_store"
    }),
    // 將目前購物車 送出取得可套用活動相關資訊
    async get_completeCar() {
      
      let data = {};
      let cart = JSON.parse(localStorage.getItem('cart'))
      let cart_info = this.$store.state.cart.info;

      if(cart == null || cart_info.id == null ) return ;
      let cond = Struct.fromJavaScript({
        commodity: _values(cart)
      });

      let result = await this.$store.dispatch("cart/get_completeCar", {
        app: this,
        token: this.$store.state.other.token,
        condition: cond
      });
      console.log("get_completeCar>>>>",result);
      if (result.code === 200) {
        cart_info.state = 1
        cart_info.id = result.data.car_id
        this._store({ act: "cart/set_cart_info", data: cart_info });
        this.commodity = result.data.commodity;
        this.activity = result.data.activity;
      }
    },
    // 更新購物車
    async add_cart(o) {
      await this._store({ act: "cart/set_one_cart", data: o });
      await this.get_completeCar()
    },
    async del_cart(i) {
      this._store({ act: "cart/del_cart", data: this.commodity[i] });
      this.commodity.splice(i, 1);
      await this.get_completeCar()
    },
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted:async function() {
    //元素已掛載， el 被建立。
    this.loading(false);
    await this.get_completeCar()
    // let a =await this.get_findCar({token:this.$store.state.other.token})
    // console.log(a)
  },
  beforeUpdate: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    //實體還可使用。
  },
  destroyed: function() {
    //實體銷毀。
  }
  //END--生命週期
};
</script>
<style lang="scss" scoped>
.cart-content-container {
  padding-left: 18px;
  padding-right: 4px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  &.ecoupon-entry__content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  &.ecoupon-entry__action {
    display: flex;
    padding: 16px;
    font-size: 16px;
    width: 20px;
    cursor: pointer;
  }
}
.total {
  color: #999;
  font-size: 0.8em;
  background: #e6e6e6;
  padding: 10px;
  & .title {
    font-size: 14px;
    color: #333;
    font-weight: bolder;
  }
  & .total-money {
    color: #ff5353;
    font-size: 18px;
    font-weight: bolder;
  }
}

.bord-top-dash {
  border-top: 1px dashed #a8a0a0;
}

p {
  font-size: 15px;
  color: #333;
  font-weight: bold;
  padding-bottom: 0;
  cursor: default;
}
.table td,
.table th {
  vertical-align: middle;
}
</style>