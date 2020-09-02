<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <!-- 麵包屑 -->

        <Breadcrumb :data="breadcrumb_info" />
      </div>
      <div class="container">
        <div class="row">
          <div class="sidebar col-md-2 pt-3 mb-4">
            <Sidebar />
          </div>
          <div class="content col-md-10" v-if="product_info.name">
            <div class="row pt-5 pb-5">
              <!-- 左側圖片導覽 -->
              <div class="col-md-6">
                <section class>
                  <CarouselProduct :lists="product_info.photox" />
                </section>
                <!-- 活動列表 -->
                <section class="active-block">
                  <h3>本商品適用活動</h3>
                  <div v-for="(item,i) in activity" class="d-flex">
                    <div class="active-item mb-3">活動</div>
                    <div>{{item.name.tw}}</div>
                  </div>
                </section>
              </div>
              <!-- 右側規格數量 -->
              <div class="col-md-6">
                <div class="product-name">
                  <div class="cart-button">
                    <a href="#">
                      <i
                        class="fas fa-heart fa-2x"
                        :class="{'no':favorte===false}"
                        @click="toggleFavorte"
                      ></i>
                    </a>
                  </div>

                  <h4>{{product_info.name.tw}}-{{specx}}</h4>
                  <div class="originalPrice">NT{{product_info.original}}</div>
                  <div class="offer">NT{{product_info.price}}</div>
                  <br />
                  <div>規格:</div>
                  <div class="row">
                    <div v-for="(o,id) in product_info.specx" class="col-md-4 p-2 mb-3">
                      <ButtonChoice
                        :title="specxName(o.itemx)"
                        :free="false"
                        :active="specx===o.sku"
                        @selected="specx=o.sku"
                      />
                    </div>
                  </div>
                </div>
                <div class="pt-5">
                  <div class="input-group">
                    <div class="col-md-12 mt-3">
                      <label for>數量:</label>
                      <div class="w-50">
                        <ButtonSubAdd :count.sync="count" />
                      </div>
                    </div>
                  </div>
                  <div class="input-group">
                    <div class="col-md-6 mt-3">
                      <button class="w-100 btn-block pick-btn l-btn" @click="cartJoin()">加入購物車</button>
                    </div>
                    <div class="col-md-6 mt-3">
                      <button class="w-100 checkout-btn l-btn" @click="toStep1();">立即結帳</button>
                    </div>
                  </div>
                  <div class="input-group">
                    <div class="col-md-12 mt-3">
                      <button class="btn btn-love" @click="addFavorite">
                        <i class="fas fa-heart"></i>&nbsp;加到最愛
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 規格說明 -->
            <ul class="nav nav-tabs" id="Tab" role="tablist">
              <li class="nav-item" v-for="(item,i) in product_info.block">
                <a
                  class="nav-link"
                  :class="{'active':i==0}"
                  data-toggle="tab"
                  :href="'#tab_'+i"
                  :aria-controls="'tab_'+i"
                >{{item.title.tw}}</a>
              </li>
            </ul>
            <div class="tab-content mb-5" id="TabContent">
              <div
                v-for="(item,i) in product_info.block"
                class="tab-pane fade"
                :class="{'active show':i==0}"
                :id="'tab_'+i"
                role="tabpanel"
                v-html="item.content"
              ></div>
            </div>
            <!-- 瀏覽器紀錄 -->
            <div class="history p-2">瀏覽紀錄</div>
            <div class="history-contect mb-5"></div>
            <ul class="nav nav-tabs" id="Tab" role="tablist">
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
            </ul>
            <div class="tab-content mb-2" id="TabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >AAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
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
import { Struct } from "google-protobuf/google/protobuf/struct_pb";

export default {
  data() {
    return {
      favorte: false,
      // Breadcrumb
      breadcrumb_info: {},
      product_info: {},
      activity: [],
      // 所選擇的產品資訊
      specx: "",
      count: 1,
      blockContent: [],
    };
  },
  async asyncData({ context, app, store, route, redirect }) {
    if (typeof route.params.id !== "string") redirect.go(-1);
    let data = {
      breadcrumb_info: {
        name: "熱門商品",
        key: "product",
        url: "/class/",
        prod: "",
      },
    };
    let result = await store.dispatch("product/browse_product", {
      app: app,
      token: store.state.account.token,
      condition: {
        id: route.params.id,
      },
    });
    console.log("p:",result)
    if (result.code === 200) {
      for (let i in result.data.block) {
        let item = result.data.block[i];
        // 取下方商品描述 規格等...
        let h = await app.$axios.get(item.url).then((resp) => {
          return resp.data;
        });
        result.data.block[i].content = h;
      }
      data.product_info = result.data;
      data.activity = data.product_info.activity;
      data.specx = (data.product_info.specx !== null)? data.product_info.specx[0].sku : "" ;
      data.breadcrumb_info.url += data.product_info.class_id;
      data.breadcrumb_info.prod = data.product_info.name.tw;
    }
    return data;
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },

  created() {},
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      get_template: "other/get_template",
      _store: "_store",
    }),
    // get 規格名稱
    specxName(data) {
      let name = "";
      data.forEach((element) => {
        name += element.tw;
      });
      return name;
    },
    getFavorite: async function () {
      let cond = new this.sqlpb.Condition();
      cond.setF("shell_id").setV(this.product_info.shell_id);
      let result = await this.$store.dispatch("product/get_MyFavorite", {
        condition: cond,
      });
      console.log("ss", result);
    },
    toggleFavorte: function () {
      if (this.favorte) {
        this.delFavorite();
      } else {
        this.addFavorite()
      }
    },
    /**
     * 取消
     */
    delFavorite: async function () {
      // let cond = new this.sqlpb.Condition();
      // cond.setF("shell_id").setV(id);
      let result = await this.$store.dispatch("product/del_MyFavorite", {
        condition: { id: this.product_info.shell_id },
      });
      console.log("del:", result);
      if (result.code == 200) {
        this.$toast.success("已取消我的最愛");
        this.favorte = false;
      } else {
        this.$toast.error(`取消失敗 ${result.data}`);
      }
    },
    /**
     * 新增我得最愛
     */
    addFavorite: async function () {
      let result = await this.$store.dispatch("product/set_MyFavorite", {
        condition: {
          id: this.product_info.shell_id,
          pid: this.product_info.product_id,
        },
      });
      console.log("addFavorite", result);
      if (result.code == 200) {
        this.$toast.success("已新增我的最愛");
        this.favorte = true;
      } else {
        this.$toast.error(`新增失敗 ${result.data}`);
      }
    },
    /**
     * 加入購物車
     */
    cartJoin: function () {
      let p = this.product_info;
      console.log(p)
      let data = {
        shell_id: p.shell_id,
        sku: this.specx,
        name: { tw: p.name.tw },
        price: p.price,
        photox: [
          {
            src:
              p.photox === null
                ? "/images/noprod.png"
                : `${p.photox[0].src}`,
          },
        ],
        amount: this.count,
      };
      this._store({ act: "cart/add_cart", data: data });
      this.$toast.success("加入到購物車");
    },
    toStep1: async function () {
      await this.cartJoin();
      this.$router.push("/cart/step1");
    },
    // getHTML: async function (url) {
    //   let html = await this.$axios.get(url).then((resp) => {
    //     return resp.data;
    //   });
    // },
  },
  mounted: async function () {
    //元素已掛載， el 被建立。
    this.loading(true);
    // this.getHTML("/static/template/RhHHoIldRg/");
    this.getFavorite();
    setTimeout(() => {
      this.loading(false);
    }, 2000);

    // this.get_template('/Csp7Vk3EPg/template/yXxbn5AMuA')
  },
};
</script>

<style lang="scss" scoped >
a .fa-heart {
  color: red;
  &:hover{
    color:#cccccc;
  }
  &.no {
    color: #cccccc;
    &:hover{
      color: red;
    }
  }
}
.shipping-item {
  height: auto;
}
#TabContent {
  border: 1px solid #e6e6e6;
  border-top: 0px solid #dee2e6;
  padding: 12px;
}
.active-block {
  box-sizing: border-box;
  width: 100%;
  float: left;
  margin-left: 0;
  margin-right: 0;
  border: 1px solid #d4d9de;
  border-top: 3px solid #4a4e5c;
  padding: 16px;
  margin-top: 30px;
  & h3 {
    font-size: 0.8em;
    line-height: 1.5;
    color: #4a4e5c;
    font-weight: normal;
  }
  & .active-item {
    font-size: 12px;
    line-height: 1;
    color: #ff2750;
    border: 1px solid #ff2750;
    padding: 4px;
    min-width: 72px;
    box-sizing: border-box;
    text-align: center;
    margin-right: 10px;
  }
}
</style>
