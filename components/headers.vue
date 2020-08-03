<template>
  <header class="fixed-top">
    <div class="nav-wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <nuxt-link tag="a" class="navbar-brand" to="/">首頁</nuxt-link>
          <div class="navbar-collapse justify-content-end collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link tag="a" class="nav-link" to="/test">test</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link tag="a" class="nav-link" to="/account/">訂單查詢</nuxt-link>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <a
                    class="nav-link"
                    role="button"
                    id="dropdownMenuLink"
                    @click="toggleShow()"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <!-- <nuxt-link tag="a"  class="nav-link" to="/cart/123">購物車</nuxt-link> -->
                    購物車
                    <span class="badge badge-primary badge-pill">{{cart_total}}</span>
                  </a>
                  <DropCart :active.sync="active"  :count.sync="cart_total" />
                  <!-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <div class="cart-content">
                      <div class="cart_list">
                        <div class="product_item">
                          <div class="float-left">
                            <img src="/images/noprod.png" alt />
                          </div>
                          <div class="product-name">
                            <p class="title">
                              <a href="/products/mb-041">MB-041 奧本水洗式電動鼻毛刀</a>
                            </p>
                            <span class="price">
                              NT$489元
                              <span class="color-gray-text">*1</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="color-gray-text text-right mb-2">
                        總計:
                        <span class="price">489</span>
                      </div>
                      <div class="buttons">
                        <nuxt-link
                          tag="a"
                          class="btn btn-primary btn-block btn-cart"
                          :to="`/cart/step1`"
                        >立即結帳</nuxt-link>
                      </div>
                    </div>
                  </div>-->
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">登入會員</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="nav-wrapper list">
      <nav class="navbar navbar-expand-lg navbar-light bg-light container">
        <!-- <a class="navbar-brand" href="/">LOGO</a> -->
        <img src="/images/icon/logo.png" class="logo" alt />
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-center collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(item,i) in nav">
              <nuxt-link
                v-if="item.title.tw === 'all_product' "
                tag="a"
                class="nav-link"
                :to="`/class/?prod=所有商品`"
              >所有商品</nuxt-link>
              <nuxt-link
                v-else-if="item.target.class"
                tag="a"
                class="nav-link"
                :to="`/class/${item.target.class[0]}?prod=${item.title.tw}`"
              >{{item.title.tw}}</nuxt-link>
              <nuxt-link
                v-else-if="item.page"
                tag="a"
                class="nav-link"
                :to="`/pages/${item.page}`"
              >{{item.title.tw}}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      active: false,
      nav: [],
      cart_total: 0, //購物車數量
    };
  },
  // 監聽,當路由發生變化的時候執行
  watch: {
    "$store.state.web.style"(status) {
      console.log("watch header");
      this.nav = this.get_headerNav();
    },
    // "$store.state.cart.content": {
    //   handler(val) {
    //     this.cart_total = 0 ;
    //     for (let i in val) {
    //       this.cart_total += Number(val[i].count)
    //     }
    //   },
    //   deep: true,
    // },
  },
  methods: {
    ...mapGetters({
      get_headerNav: "web/get_headerNav",
    }),
    toggleShow() {
      this.active = !this.active;
    },
  },
  created() {
    this.nav = this.get_headerNav();
  },
};
</script>
<style lang="scss" scoped>
.logo {
  height: 50px;
}
.nav-wrapper.list {
  background-color: white;
  border-bottom: 1px solid #ccc;
}
li {
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid #ccc;
  &:first-child {
    border-left: 0px solid;
  }
}
</style>