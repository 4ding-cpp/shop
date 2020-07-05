<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <!-- 麵包屑 -->
        <Breadcrumb :data="page_info" />
      </div>
      <div class="container">
        <div class="row">
          <div class="sidebar col-md-2 pt-3 mb-4">
            <Sidebar />
          </div>
          <div class="content col-md-10" v-if="product_info.name">
            <div class="row pt-5 pb-5">
              <div class="col-md-6">
                <section class>
                  <div id="carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div
                        v-for="(item, key, index) in list"
                        class="carousel-item"
                        :class="{'active':carousel==key}"
                      >
                        <img :src="`${item.image}`" class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <ol class="carousel-indicators">
                      <li
                        v-for="(item, key, index) in list"
                        data-target="#carousel"
                        :data-slide-to="index"
                        :class="{'active':carousel==key}"
                        :style="`background-image: url(${item.image})`"
                        @click="carousel=key"
                      ></li>
                    </ol>
                    <!-- <li
                        v-for="(item, key, index) in product_info.photox"
                        data-target="#carousel"
                        :data-slide-to="index"
                        :class="{'active':carousel==key}"
                        :style="`background-image: url(https://assets.4ding.site${item})`"
                        @click="carousel=key"
                      ></li>
                    </ol>
                    <div class="carousel-inner">
                      <div
                        v-for="(item, key, index) in product_info.photox"
                        class="carousel-item"
                        :class="{'active':carousel==key}"
                      >
                        <img :src="`https://assets.4ding.site${item}`" class="d-block w-100" alt="..." />
                      </div>
                    </div>-->
                  </div>
                </section>
              </div>
              <div class="col-md-6">
                <div class="product-name">
                  <div class="cart-button">
                    <a href>
                      <i class="far fa-heart"></i>
                    </a>
                  </div>

                  <h4>{{product_info.name.tw}}</h4>
                  <div class="originalPrice">NT{{product_info.price}}</div>
                  <div class="offer">NT{{product_info.reduce}}</div>
                  <br />
                  <div>規格:</div>
                  <div class="row">
                    <div v-for="(o,id) in product_info.specx" class="col-md-4 p-2 mb-3">
                      <ButtonChoice
                        :title="specxName(o.itemx)"
                        :free="false"
                        :active="specx===id"
                        @selected="specx=id"
                      />
                    </div>
                  </div>
                </div>
                <div class="pt-5">
                  <label for>數量:</label>
                  <div class="w-50">
                    <ButtonSubAdd :count.sync="count" />
                  </div>
                  <div class="input-group">
                    <button class="col-md-5 l-btn pick-btn btn-block mt-3" @click="cartJoin()">加入購物車</button>
                    <!-- <nuxt-link
                      tag="button"
                      class="col-md-5 l-btn pick-btn btn-block mt-3"
                      :to="`/cart/${product_info.product_id}`"
                    >加入購物車</nuxt-link>-->
                    <nuxt-link
                      tag="button"
                      class="col-md-5 l-btn checkout-btn mt-3 ml-3"
                      :to="`/cart/${product_info.product_id}`"
                    >立即結帳</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- 規格說明 -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" v-for="(item,i) in product_info.link.block">
                <a
                  class="nav-link"
                  :class="{'active':i==0}"
                  data-toggle="tab"
                  :href="'#tab_'+i"
                  :aria-controls="'tab_'+i"
                >{{item.title.tw}}</a>
              </li>
            </ul>
            <div class="tab-content mb-5" id="myTabContent">
              <div
                v-for="(item,i) in product_info.link.block"
                class="tab-pane fade"
                :class="{'active show':i==0}"
                :id="'tab_'+i"
                role="tabpanel"
              >{{item.title.tw}}</div>
            </div>
            <!-- 瀏覽器紀錄 -->
            <div class="history p-2">瀏覽紀錄</div>
            <div class="history-contect mb-5"></div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >本分類熱銷</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >全站方式</a>
              </li>
            </ul>
            <div class="tab-content mb-2" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >AAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >SSSSSSSSSSSSSSSSSSSSSSSSS</div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat">
        <i class="fas fa-comments"></i>
      </div>
    </section>

    <Footers />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      page_info: {},
      carousel: 0,
      product_info: {},
      // 所選擇的產品資訊
      specx: "",
      count: 1,
      list: [
        { image: "/images/prod01.jpg" },
        { image: "/images/prod02.jpg" },
        { image: "/images/prod03.jpg" },
        { image: "/images/prod04.jpg" },
        { image: "/images/prod05.jpg" },
        { image: "/images/prod04.jpg" },
        { image: "/images/prod05.jpg" },
        { image: "/images/prod06.jpg" }
      ]
    };
  },
  async asyncData({ context, app, store, route, redirect }) {
    if (typeof route.params.id !== "string") redirect.go(-1);
    let data = {
      page_info: { name: "熱門商品", key: "product", url: "/class/" }
    };


    let cond = new app.sqlpb.Condition();
    cond.setF("product_id").setV(route.params.id);
    let result = await store.dispatch("product/get_product", {
      app: app,
      token: store.state.other.token,
      condition: cond
    });
    if (result.code === 200 && result.data.length > 0) {
      data.product_info = result.data.shift();  
      data.specx = Object.keys(data.product_info.specx)[0];
      data.page_info.url += data.product_info.link.class_id;
    }
   
    return data;
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },

  created() {

    console.log("~~~",this.product_info.link)
    
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      get_template:"other/get_template",
      _store: "_store"
    }),
    // get 規格名稱
    specxName(data) {
      let name = "";
      data.forEach(element => {
        name += element.tw;
      });
      return name;
    },
    cartJoin() {
      let data = {
        normal: this.product_info.product_id,
        sku: this.specx,
        count: this.count
      };
      this._store({ act: "cart/add_cart", data: data });
    },

  },
  mounted: async function() {
    //元素已掛載， el 被建立。
    this.loading(false);
    // this.get_template('/Csp7Vk3EPg/template/yXxbn5AMuA')
  }
};
</script>

<style lang="scss" scoped >
.carousel-indicators {
  // top: 100%;
  position: relative;
  margin-right: 0px;
  margin-left: 0px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  height: 100px;
  & li {
    // background-image: url(/images/prod01.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 60px;
    height: 60px;
  }
}
.shipping-item {
  height: auto;
}
#myTabContent {
  border: 1px solid #e6e6e6;
  border-top: 0px solid #dee2e6;
  padding: 12px;
}
</style>
