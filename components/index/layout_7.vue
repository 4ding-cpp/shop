<template>
  <div class="container d-flex flex-wrap">
    <div   v-for="( data , i ) in item.image" class="card col-lg-3 col-md-3 col-xs-6 p-2">
      <div class="product">
        <div class="card-img-top images-pic" :style="'background-image:url('+IMG_URL+data.src+');'"  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    // 父組件來源
    item: {
      type: Object,
      default: function() {
        return {
        };
      }
    }
  },
  data() {
    return {
      _: this.item,
      IMG_URL:process.env.IMG_URL
    };
  },
  created() {

  }
};
</script>
<style lang="scss" scoped>
.product {
  height: 300px;
}
</style>