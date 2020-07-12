<template>
  <div class="dropdown-menu" :class="{'show':active==true}" aria-labelledby="dropdownMenuLink">
    <div class="cart-content">
      <div class="cart_list">
        <div class="product_item" v-for="(item, key, index) in cart">
          <div class="float-left">
            <img :src="`${IMG_URL}${item.photo.src}`" alt />
          </div>
          <div class="product-name">
            <p class="title">
              <a href>{{item.name.tw}}</a>
            </p>
            <span class="price">
              NT${{ item.count * item.price }}元
              <span class="color-gray-text">*{{item.count}}</span>
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
    data: {
      active: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      active: this.active,
      cart: {},
      IMG_URL: process.env.IMG_URL
    };
  },
  watch: {
    "$store.state.cart.content": {
      handler(val) {
        // do stuff
        console.log("$store.state.cart.content",val);
      },
      deep: true
    }
  },
  mounted: async function() {
    await this.get_completeCar();
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      _store: "_store"
    }),
    // 初始
    total() {
      let money = 0;
      Object.keys(this.cart).forEach(k => {
        money += Number(this.cart[k].price) * Number(this.cart[k].count);
      });
      return money;
    },
    // 將目前購物車 送出取得可套用活動相關資訊
    async get_completeCar() {
      let data = {};
      let cart = JSON.parse(localStorage.getItem("cart"));
      let cart_info = this.$store.state.cart.info;

      if (cart == null || cart_info.id == null) return;
      let cond = Struct.fromJavaScript({
        commodity: _values(cart)
      });

      let result = await this.$store.dispatch("cart/get_completeCar", {
        app: this,
        token: this.$store.state.other.token,
        condition: cond
      });
      console.log("get_completeCar>>>>", result);
      if (result.code === 200) {
        cart_info = {
          state: 1,
          id: result.data.car_id
        };
        this.cart = result.data.commodity;
        this._store({ act: "cart/set_cart_info", data: cart_info });
        this._store({ act: "cart/set_cart", data: this.cart });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>