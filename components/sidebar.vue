<template>
  <div class="wrapper">
    <!--  -->
    <nav id="sidebar">
      <ul class="list-unstyled">
        <template v-for="(item,i) in menu">
          <!-- 所有商品 -->
          <li v-if="item.title.tw === 'all_product'">
            <nuxt-link tag="a" class :to="`/products/class/?prod=所有商品`">所有商品</nuxt-link>
          </li>
          <!-- 聯絡資訊 -->
          <li v-if="item.title.tw === 'page_contact'">
            <nuxt-link tag="a" class :to="`/pages/contact`">聯絡資訊</nuxt-link>
          </li>
          <!-- 自訂 -->
          <li v-if="item.page">
            <nuxt-link tag="a" class="dropdown-toggle-right" :to="`/pages/${item.page}`">{{item.title.tw}}</nuxt-link>
          </li>
          <!-- 另開連結 -->
          <li v-if="item.link">
            <a
              :href="`${(!(item.link).match(/^http?:\/\//i) || !(item.link).match(/^https?:\/\//i))? `http://${item.link}` :  item.link}`"
              target="_blank"
            >{{item.title.tw}}</a>
          </li>
          <!-- 產品明細 -->
          <li v-if="item.class">
            <a :href="`#Submenu`+i" data-toggle="collapse" aria-expanded="false">
              {{item.title.tw}}
              <i class="fas float-right"></i>
            </a>
            <ul v-if="item.class" class="collapse list-unstyled" :id="`Submenu`+i">
              <li v-for="(o,j) in item.class" :key="j" class="dropright">
                <nuxt-link tag="a" class="dropdown-toggle-right" :to="`/products/class/${o.class_id}?prod=${o.name.tw}`">
                  <i class="fas float-left"></i>
                  {{o.name.tw}}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      menu: [],
      // todo 點選某一個menu
      selected: {
        hash: "",
      },
    };
  },
  async created() {
    this.menu = this.get_headerMenu();
  },
  // 監聽,當路由發生變化的時候執行
  watch: {
    "$store.state.web.style"(status) {
      this.menu = this.get_headerMenu();
    },
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
    }),
    ...mapGetters({
      get_headerMenu: "web/get_headerMenu",
    }),
    async test() {},
  },
};
</script>
<style lang="scss" scoped>
i {
  line-height: 1.4;
}

.sidebar ul:first-child {
  border: 1px solid #ddd;
}
li {
  border-color: transparent;
  margin-bottom: 0px;
  border-bottom: 1px dashed #e9e9e9;
  padding: 10px;
  & > ul > li:last-child {
    border-bottom: 0px;
  }
}
.dropdown-toggle-right::after {
  position: absolute;
  right: 2rem;
  margin-top: 0.5rem;
}

.dropright {
  & .dropdown-toggle-right {
    margin-left: 1rem;
    &::after {
      position: absolute;
      left: 1rem;
      margin-top: 0.5rem;
    }
    & .fas:before {
      content: "\f054";
      float: right;
    }
  }
}



[data-toggle="collapse"] .fas:before {
  content: "\f054";
  float: right;
  transition: all 0.5s;
  transform: rotate(90deg);
}

[aria-expanded="true"] .fas:before {
  content: "\f054";
  transition: all 0.5s;
  transform: rotate(-90deg);
}
</style>