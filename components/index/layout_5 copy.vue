<template>
  <div class="container">
    <section class="pt-5 pb-5">
      <div class="w-100 align-items-center d-flex column-reverse">
        <div class="text-left col-md-4 h-100">
          <p v-html="item.content"></p>
        </div>
        <div class="pb-3 col-md-8 h-100">
          <div class="images-pic" v-for="( data , i ) in item.image" :style="'background-image:url('+IMG_URL+data.src+');'"  />
          <!-- <img class="w-100" v-for="( data , i ) in item.image" :src="IMG_URL+data.src" :alt="data.alt" /> -->
        </div>
      </div>
    </section>
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
        return {};
      }
    }
  },
  data() {
    return {
      _: this.item,
      IMG_URL:process.env.IMG_URL
    };
  },
};
</script>

<style lang="scss" scoped>
section > div:first-child {
  height: 300px;
}
</style>