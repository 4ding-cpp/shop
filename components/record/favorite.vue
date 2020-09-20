<template>
  <div class="table-responsive">
    <Loading :data.sync="page" />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>商品</th>
          <th>名稱</th>
          <th>特價</th>
          <th>原價</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="list.length===0">
          <td class="align-middle" colspan="5" >無資料</td>
        </tr>
        <tr v-for="(item,i) in list  ">
          <td>
            <img :src="`${imgesUrl}${item.photox[0].src}`" alt width="40px" />
          </td>
          <td class="align-middle">{{ item.name.tw }}</td>
          <td class="align-middle">{{ item.price }}</td>
          <td class="align-middle">{{ item.original }}</td>
          <td class="align-middle">
            <nuxt-link tag="span" class :to="`/product/${item.urn}`">查看</nuxt-link>|
            <span href="" @click="delFavorite(item.shell_id)" >刪除</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <section class="content">
      <div class="container">
        <paginate
          :page-count="page.total"
          :containerClass="'pagination'"
          :prev-text="'<'"
          :next-text="'>'"
          :click-handler="clickCallback"
        ></paginate>
      </div>
    </section> -->
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
export default {
  name: "",
  props: {
    // 父組件來源
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data: function () {
    // 資料
    return {
      imgesUrl: process.env.IMG_URL,
      plist: [],
      list: [],
      // 頁簽相關
      page: {
        loading: true,
        total: 0,
        now: 1,
        size: 10,
      },
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
    ...mapActions({
      loading: "loading",
      _store: "_store",
    }),
    freeback(id) {
      this.$modal.show("drag_RecordCustomer");
      // this.$modal.show("example-resizable");

      this.$emit("update:data", { id: id });
    },
    /**
     * clickCallback
     */
    clickCallback: async function (pageNum) {
      this.page.now = pageNum;
      this.getFavorite();
    },
    getFavorite: async function () {
      // let cond = new this.sqlpb.Condition();
      // cond.setF("shell_id").setV(this.product_info.shell_id);
      let result = await this.$store.dispatch("product/get_MyFavorite", {
        condition: null,
      });
      return result;
    },
    getProduct: async function () {
      let cond = null;
      cond = new this.sqlpb.Condition();
      cond.setF("shell_id").setO(5).setSList(this.plist);

      let result = await this.$store.dispatch("product/get_product", {
        app: this,
        token: this.$store.state.account.token,
        condition: cond,
      });
      if(result.code === 0) return ;
      this.list = result.data
    },
    delFavorite: async function (id) {
      // let cond = new this.sqlpb.Condition();
      // cond.setF("shell_id").setV(id);
      let result = await this.$store.dispatch("product/del_MyFavorite", {
        condition: {id:id},
      });
    },
  },
  //BEGIN--生命週期
  beforeCreate: function () {
    //實體初始化
  },
  created: function () {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
  },
  beforeMount: function () {
    //執行元素掛載之前。
  },
  mounted: async function () {
    //元素已掛載， el 被建立。
    
    let resp = await this.getFavorite();
    if (resp.code === 200) {
      this.plist = resp.data;
      await this.getProduct();
    }
    this.page.loading = false ;
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
span {
  cursor: pointer;
  &:hover {
    color: red;
  }
}
.table-responsive {
  height: 100vh;
  overflow-y: hidden;
}
</style>