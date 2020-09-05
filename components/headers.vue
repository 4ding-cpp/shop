<template>
  <header class="header fixed-top" :style="style.header">
    <!-- 上方menu -->
    <div class="nav-wrapper list border-bottom-0" :style="style.menu">
      <nav class="navbar navbar-expand-lg navbar-light container h-100 p-0">
        <div class="container">
          <button
            class="navbar-toggler collapsed"
            style="z-index:10"
            type="button"
            data-toggle="collapse"
            data-target="#MenuDropdown"
            aria-controls="MenuDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse justify-content-end collapse" id="MenuDropdown">
            <ul class="navbar-nav">
              <li class="nav-item p-0">
                <nuxt-link tag="a" class="nav-link" to="/test">
                  <span v-if="!user.name">尚未登入!!</span>
                  <span v-if="user.name">歡迎回來,{{user.name}}!!</span>
                </nuxt-link>
              </li>
              <li class="nav-item p-0">
                <div class="dropdown">
                  <a
                    class="nav-link"
                    role="button"
                    id="memberMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="far fa-user"></i>
                  </a>

                  <div class="dropdown-menu" aria-labelledby="memberMenu">
                    <div class="cart-content">
                      <div class="buttons mb-2" @click="login">
                        <a class="btn btn-primary btn-block btn-cart">會員登入</a>
                      </div>
                      <div class="buttons" v-if="user.name">
                        <nuxt-link
                          tag="a"
                          class="btn btn-primary btn-block btn-cart"
                          to="/account/"
                        >訂單查詢</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item p-0">
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
                    <i class="fas fa-shopping-cart"></i>
                    <span class="badge badge-primary badge-pill">{{cart_total}}</span>
                  </a>
                  <DropCart :active.sync="active" :count.sync="cart_total" />
                </div>
              </li>
              <li class="nav-item p-0">
                <div class="dropdown">
                  <a class="nav-link" role="button">
                    <i class="fas fa-search"></i>
                  </a>
                </div>
              </li>
              <li class="nav-item p-0" @click="logout">
                <a class="nav-link" href="#">
                  <i class="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- 下方nav -->
    <div class="nav-wrapper list">
      <nav class="navbar navbar-expand-lg navbar-light container p-0">
        <Logo :config="style.config" />
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
        <div class="navbar-collapse collapse" :style="style.nav" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(item,i) in nav">
              <nuxt-link
                v-if="item.title.tw === 'all_product' "
                tag="a"
                class="nav-link"
                :to="`/class/?prod=所有商品`"
              >所有商品</nuxt-link>
              <nuxt-link
                v-if="item.title.tw === 'page_contact' "
                tag="a"
                class="nav-link"
                :to="`/pages/contact`"
              >聯絡我們</nuxt-link>
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
              <a
                v-else-if="item.link"
                class="nav-link"
                :target="(item.is_blank)?'_blank':''"
                :href="`https://${item.link}`"
              >{{item.title.tw}}</a>
            </li>
          </ul>
        </div>
        <modal name="login" width="500px" height="auto">
          <AccountLogin />
        </modal>
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
      user: {},
      style: {
        config: {},
        menu: {},
        nav: {},
        header: {},
      },
    };
  },
  // 監聽,當路由發生變化的時候執行
  watch: {
    "$store.state.web.style"(status) {
      console.log("watch header");
      this.nav = this.get_headerNav();
      console.log(this.nav);
    },
    "$store.state.account.user"(to, from) {
      this.user = { ...to };
    },
  },
  methods: {
    ...mapGetters({
      get_headerNav: "web/get_headerNav",
      get_styleColor: "web/get_styleColor",
    }),
    toggleShow() {
      this.active = !this.active;
    },
    login: function () {
      this.$modal.show("login");
    },
    logout: function () {
      this.$store.dispatch("account/logout");
      this.$toast.success(`登出成功`);
      this.$router.push("/");
    },
  },
  created() {
    // nav 內容
    let list = this.get_headerNav();
    this.nav = list !== null ? list : this.nav;
    this.style.config = this.get_styleColor();
    this.user = this.$store.state.account.user;
  },
  mounted: function () {
    // 樣式
    
    this.style.header = {
      background: this.style.config.header_style.background,
    };
    switch (this.style.config.style) {
      case 1: // LOGO上 nav下(中)
        this.style.menu = { height: this.style.config.logo_style.height };
        this.style.nav = { "justify-content": "center" };
        break;
      case 2: // LOGO上 nav下(左)
        this.style.menu = { height: this.style.config.logo_style.height };
        this.style.nav = { "justify-content": "flex-start" };
        break;
      case 3: // LOGO左 nav右
        this.style.nav = { "justify-content": "flex-end" };
        break;
      case 4: // LOGO左 nav左
        this.style.nav = { position: "relative", left: "15%" };
        break;
      default:
    }
    $("header.header a").css("color", this.style.config.header_style.color);
  },
};
</script>
<style lang="scss" scoped>
a.btn {
  color: white;
  &:hover {
    color: white;
  }
}

.nav-wrapper.list {
  border-bottom: 1px solid #ccc;
}
li {
  color: #7c7c7c;
  font-size: 1em;
  font-weight: 700;
  font-size: 1.1em;
  padding-left: 10px;
  padding-right: 10px;
  // border-left: 1px solid #ccc;
  &:first-child {
    // border-left: 0px solid;
  }
}
</style>