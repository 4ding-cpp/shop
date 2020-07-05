<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">
          <i class="fas fa-house-user"></i>
        </a>
      </li>
      <li class="breadcrumb-item">
        <nuxt-link tag="a" class="" :to="data.url">{{data.name}}</nuxt-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">{{$route.params.id}}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {
          name: "熱門商品xx",
          url:"/"
        };
      }
    }
  },
  data() {
    return {
      _:this.data,
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
  }
};
</script>
<style lang="scss" scoped>
</style>