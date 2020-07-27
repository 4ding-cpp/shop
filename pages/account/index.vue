<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <div class="content col-md-12" style="min-height:500px">
          <!-- 數據總覽 -->
          <section class="data-analytics row pb-5 pt-5">
            <div class="col-md-2">
              <div class>
                會員等級
                <span class="pink"></span>
              </div>
              <div class>VIP會員</div>
            </div>
            <div class="col-md-3">
              <div class>消費累積金額</div>
              <div class>$ 5,332</div>
            </div>
            <div class="col-md-3">
              <div class>下階段升級差額</div>
              <div class>$ 10,000</div>
            </div>
            <div class="col-md-2">
              <div class>可用購物金</div>
              <div class>0</div>
            </div>
            <div class="col-md-2" style="border-right: 0;">
              <div class>可使用優惠卷</div>
              <div class>0張</div>
            </div>
          </section>
          <!-- 數據總覽 END -->
          <!-- TAB LIST -->
          <div class="row text-center pb-5">
            <ul class="nav nav-tabs col-md-12">
              <li class="nav-item" v-for="(item,i) in tab.list" @click="tab.selected=i">
                <a
                  class="nav-link"
                  :class="{'active':tab.selected==i}"
                  href="javascript: void(0)"
                >{{item.name}}</a>
              </li>
            </ul>
          </div>
          <!-- TAB LIST END -->
          <div class="row text-center">
            <RecordOrder />
          </div>
        </div>
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
      tab: {
        selected: 0,
        list: [
          { key: "order_record", name: "訂單記錄查詢" },
          { key: "favorte_list", name: "商品追蹤清單" },
          { key: "favorte_list", name: "優惠卷清單" },
          { key: "favorte_list", name: "優惠卷使用紀錄" },
          { key: "prod_record", name: "商品詢問紀錄" },
          { key: "acc_edit", name: "個人資料修改" },
        ],
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
    this.loading(true);
    this.loading(false);
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
<style lang="scss">
// 數據總覽
.data-analytics {
  & > div {
    border-right: #e8e8e8 1px solid;
    // display: inline-block;
    padding: 5px 35px;
    text-align: center;
    & > div:first-child {
      display: inline-block;
      text-align: center;
      color: #777777;
    }
    & > div:last-child {
      font-size: 22px;
      color: #e08f8a;
      margin-top: 8px;
    }
  }
}

li {
  flex: 1 1 auto;
}

.nav-tabs {
  border-bottom: 1px solid #000000;
}
.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  &:focus,
  &:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
    background-color: #e9b6b3;
    border-color: #e9b6b3;
    color: #fff;
  }
  &.active {
    color: #ffffff;
    background-color: #000;
    border-color: #000;
  }
}

table th,
table td {
  white-space: nowrap;
}
</style>