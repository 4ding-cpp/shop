<template>
  <div id="picText-type3" class="container">
     <!-- 標題 -->
    <div v-if="item.title" class="w-100 d-flex justify-content-center">
      <b>{{item.title.tw}}</b>
    </div>
    <section class="pt-5 pb-5">
      <div class="w-100 align-items-center d-flex column ">
        <div class="pb-3 col-md-8 h-100">
          <!-- <img class="w-100" v-for="( data , i ) in item.image" :src="IMG_URL+data.src" :alt="data.alt" /> -->
          <div class="images-pic" v-for="( data , i ) in item.image" :style="'background-image:url('+IMG_URL+data.src+');'"  />
        </div>
        <div class="text-left col-md-4 h-100">
          <p v-html="item.template.content"></p>
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
  mounted: async function() {
    console.log(this.item)
  }
};
</script>

<style lang="scss" scoped>
section > div:first-child {
  height: 300px;
}
</style>