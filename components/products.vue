<template>
  <div class="card col-lg-3 col-md-3 col-xs-6 p-2">
    <div class="product">
      <nuxt-link
        tag="img"
        :src="IMG_URL+data.photox[0].src"
        class="card-img-top"
        :to="'/product/'+data.product_id"
      ></nuxt-link>
      <!-- <img :src="data.photo" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <div class="caption">
          <h5>{{data.name.tw}}</h5>
          <div class="originalPrice">NT{{data.price}}</div>
          <div class="cart-button">
            <a href>
              <i class="far fa-heart"></i>
            </a>
            <a href>
              <i class="fas fa-cart-plus"></i>
            </a>
          </div>
          <div class="text-danger">NT{{data.reduce}}</div>
        </div>
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
          is_display: true,
          name: { en: "B7PBHGIK", tw: "JYNSODBS" },
          photo: "/images/01.jpg",
          price: 9376,
          product_class_id: "9JqVAwVOTQ",
          product_id: "ZAEWkDzotw",
          product_link_id: "VF2eIAgAow",
          reduce: 0,
          status: 1
        };
      }
    }
  },
  data() {
    return {
     IMG_URL:process.env.IMG_URL
    };
  },
  methods: {
    // 初始
    ToSelect() {
      this.$emit("selected");
    }
  }
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