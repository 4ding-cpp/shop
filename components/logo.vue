<template>
  <nuxt-link tag="img" class="logo" :style="img_style" :src="style.logo.src" to="/"></nuxt-link>
</template>
<script>
export default {
  name: "",
  props: {
    config: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data: function () {
    // 資料
    return {
      style: this.config, //追蹤 store用
      img_style: {},
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
  },
  //BEGIN--生命週期
  beforeCreate: function () {
    //實體初始化
  },
  created: function () {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    this.img_style = { ...this.style.logo_style };
    Object.keys(this.style.logo_style).map((key, i) => {
      let k = key.replace("_", "-");
      this.img_style[k] = this.style.logo_style[key];
    });
    // 類型 1 or 2 logo在上
    if(this.style.style == 1 || this.style.style == 2){
      this.img_style['left'] = '50%' ;
    }
  },
  beforeMount: function () {
    //執行元素掛載之前。
  },
  mounted: function () {
    //元素已掛載， el 被建立。
  },
  beforeUpdate: function () {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function () {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function () {
    //實體還可使用。
  },
  destroyed: function () {
    //實體銷毀。
  },
  //END--生命週期
};
</script>
<style lang="scss" scoped>
.logo {
  height: 50px;
  position: fixed;
  top: 0px;
  cursor: pointer;
  left: 10%;
}
</style>