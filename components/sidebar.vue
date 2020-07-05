<template>
  <div class="wrapper">
    <nav id="sidebar">
      <ul class="list-unstyled components">
        <p>全部商品</p>
        <li class v-for="(item,i) in class_list">
          <nuxt-link tag="a" class="dropdown-toggle" :to="`/class/${item.class_id}`">{{item.name.tw}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      class_list: [],
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
  async mounted() {
    let cond = new this.sqlpb.Condition();
    let result = await this.get_productClass({
      app: this,
      token: this.$store.state.other.token,
      condition: null
    });
    this.class_list = result.data;
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      get_productClass: "product/get_productClass"
    }),
    async test() {}
  }
};
</script>
<style lang="scss" scoped>
li {
  border-color: transparent;
  margin-bottom: 0px;
  border-bottom: 1px dashed #e9e9e9;
  padding: 10px;
}
</style>