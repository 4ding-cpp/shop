<template>
  <div class="wrapper">
    <nav id="sidebar">
      <ul class="list-unstyled">
        <li v-for="(item,i) in menu">
          <!-- 自訂 -->
          <nuxt-link
            v-if="item.page"
            tag="a"
            class="dropdown-toggle"
            :to="`/pages/`"
          >{{item.title.tw}}</nuxt-link>
          <a
            v-else-if="item.class"
            :href="`#Submenu`+i"
            data-toggle="collapse"
            class="dropdown-toggle"
          >{{item.title.tw}}</a>
          <ul
            v-if="item.class"
            class="collapse list-unstyled"
            :class="{'show':true }"
            :id="`Submenu`+i"
          >
            <li v-for="(o,j) in item.class" :key="j" class="dropright">
              <nuxt-link tag="a" class="dropdown-toggle" :to="`/class/${o.class_id}`">{{o.name.tw}}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      class_list: [],
      menu: [],
    };
  },
  async created() {
    this.menu = this.get_headerMenu();
    console.log("menu:", this.menu);
    // for (let i in this.menu) {
    //   let result = this.menu[i];
    //   if (
    //     result.target.hasOwnProperty("class") &&
    //     result.target.class.length > 0
    //   ) {
    //     let tempClass = []; //
    //     for (let j in result.target.class) {
    //       let classId = result.target.class[j];
    //       let cond = new this.sqlpb.Condition();
    //       cond.setF("class_id").setV(classId);
    //       let resp = await this.get_productClass({
    //         app: this,
    //         token: this.$store.state.other.token,
    //         condition: cond,
    //       });
    //       if (resp.code == 200) tempClass.push(resp.data.shift());
    //     }
    //     this.menu[i] = { ...this.menu[i], target: tempClass };
    //   }
    // }
  },
  // 監聽,當路由發生變化的時候執行
  watch: {
    "$store.state.web.style"(status) {
      console.log("watch header");
      this.menu = this.get_headerMenu();
    },
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      get_productClass: "product/get_productClass",
    }),
    ...mapGetters({
      get_headerMenu: "web/get_headerMenu",
    }),
    async test() {},
  },
};
</script>
<style lang="scss" scoped>
.sidebar ul:first-child {
  border: 1px solid #ddd;
}
li {
  border-color: transparent;
  margin-bottom: 0px;
  border-bottom: 1px dashed #e9e9e9;
  padding: 10px;
}
.dropdown-toggle::after {
  position: absolute;
  right: 2rem;
  margin-top: 0.5rem;
}

.dropright {
  & .dropdown-toggle {
    margin-left: 2rem;
    &::after {
      position: absolute;
      left: 1rem;
      margin-top: 0.5rem;
    }
  }
}
</style>