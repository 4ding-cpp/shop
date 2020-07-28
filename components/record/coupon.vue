<template>
  <div class="table-responsive">
    <Loading :data.sync="page" />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>優惠卷名稱</th>
          <th>獲得金額</th>
          <th>開始期限</th>
          <th>截止期限</th>
          <th>狀態</th>
          <th>活動備註</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in list  ">
          <td>{{ item.create_at }}</td>
          <td>{{ item.order_id }}</td>
          <td>{{ item.payment_type }}</td>
          <td>{{ item.payment_state }}</td>
          <td>{{ item.state }}</td>
          <td>{{ item.amount }}</td>
        </tr>
      </tbody>
    </table>
    <section class="content">
      <div class="container">
        <paginate
          :page-count="page.total"
          :containerClass="'pagination'"
          :prev-text="'<'"
          :next-text="'>'"
          :click-handler="clickCallback"
        ></paginate>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
export default {
  name: "",
  props: {},
  data: function () {
    // 資料
    return {
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
    /**
     * clickCallback
     */
    clickCallback: async function (pageNum) {
      console.log("clickCallback", pageNum);
      this.page.now = pageNum;
      this.find_list();
    },
    /**
     * 找訂單
     */
    find_list: async function () {
      this.page.loading = true;
      let pageLimit = new this.sqlpb.PageLimit();
      pageLimit.setPageIndex(this.page.now).setPageSize(this.page.size);
      let Condition = new this.sqlpb.Condition();

      let result = await this.$store.dispatch("order/find_Order", {
        condition: null,
        pageLimit: pageLimit,
      });
      this.page.loading = false;
      console.log(page);
      if (result.code === 0) {
        alert(result.data);
        return false;
      } else {
        this.page.total = parseInt(result.limit.length / result.limit.pageSize);
        this.list = result.data;
      }
      return true;
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
  mounted: function () {
    //元素已掛載， el 被建立。
    this.find_list();
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
.table-responsive {
  height: 100vh;
  overflow-y: hidden;
}
</style>