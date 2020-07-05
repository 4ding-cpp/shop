<template>
  <header class="fixed-top">
    <div class="nav-wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <nuxt-link tag="a" class="navbar-brand" to="/">首頁</nuxt-link>
        <div class="navbar-collapse justify-content-end collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link tag="a" class="nav-link" to="/test">test</nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">登入會員</a>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a
                  class="nav-link"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <!-- <nuxt-link tag="a"  class="nav-link" to="/cart/123">購物車</nuxt-link> -->
                  購物車
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
                      <nuxt-link tag="a" class="btn btn-primary btn-block btn-cart" :to="`/cart/step1`">立即結帳</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
    <div class="nav-wrapper list">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <li class="nav-item" v-for="(item,i) in menu">
              <nuxt-link tag="a" class="nav-link" :to="`/class/${item.target.class}`">{{item.title}}</nuxt-link>
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
      menu: [],
      left: [
        { title: "優勢特色", link: "/home" },
        { title: "系統簡介", link: "/introduction" },
        { title: "計畫費用", link: "/cost" },
        { title: "常見問題", link: "/question" }
      ],
      right: [
        { title: "開通帳號", link: "/registered" }
        // { title: "登入", link: "/login" }
      ]
    };
  },
  // 監聽,當路由發生變化的時候執行
  watch: {
    "$store.state.web.style"(status) {
      console.log("watch header")
      this.menu = this.get_headers();
    }
  },
  methods: {
    ...mapGetters({
      get_headers: "web/get_headers"
    })
  },
  created() {
    this.menu = this.get_headers();
  }
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