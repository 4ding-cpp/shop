<template>
  <div class="product p-2">
    <img :src="data.image" class="card-img-top p-2" alt="..." />
    <div class="card-body">
      <b>{{data.name}}</b>
      <div class="offer">
        <span class="price">>NT{{data.price}}</span>
        NT{{data.offer}}
      </div>
      <div class="cart-button">
        <button type="button" class="w-100 btn btn-outline-primary btn-sm">加入購物車</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {
          image: "/images/prod01.jpg",
          name: "輕柔空氣感彩妝刷",
          price: "680",
          offer: "249"
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    // 初始
    ToSelect() {
      this.$emit("selected");
    },
    cartJoin(){
    }
  }
};
</script>
<style lang="scss" scoped>
.offer {
  float: left;
  font-size: 0.9em;
  color: #ff5353;
  line-height: 1.2;
}
.price {
  font-size: 0.8em;
  color: #aaa;
  text-decoration: line-through;
  line-height: 1.2;
}
</style>