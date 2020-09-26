<template>
  <div class="w-100 d-flex justify-content-center flex-md-column align-items-md-center" >
     <img
        src="/images/no_carts.png"
      ></img>
      <p>你的購物車沒有商品</p>
      <nuxt-link
        tag="button"
        class="l-btn w-25"
        to="/products/class/?prod=所有商品"
      >現在就去逛逛</nuxt-link>

  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
button {
  background: #ff00d2;
}
</style>