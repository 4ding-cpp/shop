<template>
  <div class="dropdown-menu" :class="{'show':active==true}" aria-labelledby="dropdownMenuLink">
    <div class="cart-content">
      <div class="cart_list" v-if="cart.length > 0" >
        <div class="product_item" v-for="(item, key, index) in cart">
          <div class="float-left">
            <img :src="`${IMG_URL}${item.photox[0].src}`" alt />
          </div>
          <div class="product-name">
            <p class="title">
              <a href>{{item.name.tw}}</a>
            </p>
            <span class="price">
              NT${{ item.price }}元
              <span class="color-gray-text">*{{item.amount}}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="color-gray-text text-right mb-2">
        總計:
        <span class="price">{{total()}}</span>
      </div>
      <div class="buttons">
        <nuxt-link tag="a" class="btn btn-primary btn-block btn-cart" :to="`/cart/step1`">立即結帳</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import _values from "lodash/values";

export default {
  props: {
    count: {
      active: [Number, String],
      default: function () {
        return 0;
      },
    },
    data: {
      active: Boolean,
      default: function () {
        return false;
      },
    },
  },
  data() {
    return {
      active: this.active,
      cart: {},
      IMG_URL: process.env.IMG_URL,
    };
  },
  watch: {
    "$store.state.cart.content": {
      handler(val) {
        this.cart = Object.assign({}, val);
      },
      deep: true,
    },
  },
  mounted: async function () {
  
    this.cart = this.$store.state.cart.content;
    let list = ["/cart/step1", "/order/complete"];
    if (!list.includes(this.$route.path)) {
      // await this.get_completeCar();
    }
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
    total() {
      let money = 0;
      let amount = 0;
      Object.keys(this.cart).forEach((k) => {
        amount += Number(this.cart[k].amount);
        money += Number(this.cart[k].price) * Number(this.cart[k].amount);
      });
      this.$emit("update:count", amount);
      return money;
    },
    // 將目前購物車 送出取得可套用活動相關資訊
    get_completeCar: async function () {
      let data = {};
      let cart = this.$store.state.cart.content;
      let cart_info = this.$store.state.cart.info;
      if (cart == "" || cart_info.id == "") return;

      let cond = Struct.fromJavaScript({
        commodity: _values(cart),
      });

      let result = await this.$store.dispatch("cart/get_completeCar", {
        app: this,
        token: this.$store.state.account.token,
        condition: cond,
      });

      if (result.code === 200) {
        cart_info = {
          state: 1,
          id: result.data.car_id,
        };
        this.cart = result.data.commodity;
        let data = {};
        for (let i in this.cart) {
          data[`${this.cart[i].shell_id }-${this.cart[i].sku}`] = this.cart[i];
        }

        this._store({ act: "cart/set_cart_info", data: cart_info });
        this._store({ act: "cart/set_cart", data: data });
      }
    },
    
  },
};
</script>
<style lang="scss" scoped>
</style>