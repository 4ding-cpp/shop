<template>
  <div class="container d-flex flex-wrap">
    <div v-for="( data , i ) in item.prod" class="card col-lg-3 col-md-3 col-xs-6 p-2">
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
     IMG_URL:process.env.IMG_URL
    };
  },
  created() {
    console.log("layout3:>>>>",this.item);
  }
};
</script>
