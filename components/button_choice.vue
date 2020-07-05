<template>
  <button type="button" @click="ToSelect()" class="shipping-item btn" :class="{'on-active':active}"  >
    <div class="shipping-label">
      <div>
        <span v-html="this.$options.filters.specxName(title)" ></span>
      </div>
      <div class="sub-label" v-if="free" >(已達免運門檻)</div>
      <i class="fas fa-check-circle pr-2" v-if="active"></i>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    title: {
      type: String,
      default: function() {
        return '';
      }
    },
    free: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
  },
  data() {
    return {
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
  methods: {
    // 初始
    ToSelect() {
      this.$emit("selected");
    }
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