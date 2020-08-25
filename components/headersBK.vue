<template>
  <header class="fixed-top">
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
        <div class="d-flex flex-column">
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
    let list = this.get_headerNav();
    this.nav = list !== null ? list : this.nav;
    console.log(this.nav);
    this.user = this.$store.state.account.user;
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
.logo {
  height: 50px;
}
.nav-wrapper.list {
  background-color: white;
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