<template>
  <div class="card col-lg-3 col-md-3 col-xs-6 p-2">
    <div class="product">
      <nuxt-link
        tag="img"
        v-if="data.photox != null"
        :src="IMG_URL + data.photox[0].src"
        class="card-img-top"
        :to="'/products/' + data.urn"
      ></nuxt-link>
      <nuxt-link
        tag="img"
        v-else
        src="/images/noprod.png"
        class="card-img-top"
        :to="'/products/' + data.urn"
      ></nuxt-link>
      <!-- <img :src="data.photo" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <div class="caption">
          <nuxt-link
            tag="h4"
            v-if="data.activity !== null"
            :to="'/products/' + data.urn"
            class="text-center"
            >【{{ data.activity[0].name.tw }}】</nuxt-link
          >
          <nuxt-link
            tag="h4"
            class="text-center"
            :to="'/products/' + data.urn"
            >{{ data.name.tw }}</nuxt-link
          >
          <nuxt-link
            tag="section"
            class="d-flex justify-content-center"
            :to="'/products/' + data.urn"
          >
            <span class="price">NT${{ data.price }}</span>
            <span class="originalPrice">${{ data.original }}</span>
          </nuxt-link>
          <!-- <section class="d-flex justify-content-center ">
            <div class="text-danger">NT${{data.price}}</div>
            <div class="originalPrice">${{data.original}}</div>
          </section>-->
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
      default: function () {
        return {
          is_display: true,
          name: { en: "B7PBHGIK", tw: "JYNSODBS" },
          photo: "/images/01.jpg",
          price: 9376,
          product_class_id: "9JqVAwVOTQ",
          product_id: "ZAEWkDzotw",
          product_link_id: "VF2eIAgAow",
          reduce: 0,
          status: 1,
        };
      },
    },
  },
  data() {
    return {
      IMG_URL: process.env.IMG_URL,
    };
  },
  methods: {
    // 初始
    ToSelect() {
      this.$emit("selected");
    },
  },
  created() {},
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
img {
  cursor: pointer;
}
.caption {
  cursor: pointer;
  & h4 {
    // height: 42px;
    line-height: 21px;
    overflow: hidden;
    margin: 0;
    margin-top: 7px;
    margin-bottom: 7px;
    font-size: 1.1em;
    font-weight: 400;
  }
  & span.price {
    color: #232323;
  }
}
</style>