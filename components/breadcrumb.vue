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
      <li class="breadcrumb-item active" aria-current="page">{{data.prod}}</li>
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
    };
  }
};
</script>
<style lang="scss" scoped>
</style>