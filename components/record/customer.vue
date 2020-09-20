<template>
  <article class="customer-service">
    <section class="row pb-4 col-md-12">
      <h5 class="font-weight-bolder">
        <i class="fa-xs fas fa-edit"></i>&nbsp;填寫問題
      </h5>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>12313213</th>
            <th>訂購日期</th>
            <th>2020-20-20</th>
          </tr>
          <tr>
            <th>問題</th>
            <td colspan="3">
              <select v-model="tab.selected">
                <option v-for="(item,i) in tab.list" :value="item.key">{{item.name}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>問題內容</th>
            <td colspan="3">
              <textarea v-model="form.content" id cols="40" rows="5"></textarea>
            </td>
          </tr>
          <tr>
            <th colspan="4">
              <button type="button" @click="send" class="btn btn-outline-danger">確定</button>
            </th>
          </tr>
        </thead>
      </table>
    </section>
    <!-- 問題紀錄 -->
    <h5 class="font-weight-bolder">
      <i class="fa-xs fas fa-edit"></i>&nbsp;問題紀錄
    </h5>
    <section class>
      <ul class="nav nav-tabs justify-content-around" role="tablist">
        <li
          class="nav-item text-center"
          v-for="(item,i) in tab.list"
          @click="tab.selected=item.key;find_record()"
        >
          <a
            class="nav-link"
            :class="{'active':tab.selected==item.key}"
            data-toggle="tab"
            :href="`#tab${i}`"
            role="tab"
          >{{item.name}}</a>
        </li>
      </ul>

      <section class="tab-content">
        <section
          v-for="(item,i) in tab.list"
          class="tab-pane fade"
          :class="{'show active':tab.selected==item.key}"
          :id="`tab${i}`"
          role="tabpanel"
        >
          <table class="table" v-if="page.loading===false">
            <thead>
              <template v-for="(o,j) in list">
                <tr>
                  <th>詢問日期</th>
                  <td colspan="3">{{o.create_at}}</td>
                </tr>
                <tr>
                  <th>問題</th>
                  <td colspan="3">{{o.responder}}</td>
                </tr>
                <tr>
                  <th>客服回答</th>
                  <td colspan="3">
                    <p v-for="(obj,k) in o.dialogue">{{obj.message}}</p>
                  </td>
                </tr>
              </template>
              <tr>
                <td v-if="list.length === 0" class="text-center" colspan="4">無資料</td>
              </tr>
            </thead>
          </table>
          <Loading :data.sync="page" :top="false" v-if="page.loading" />
        </section>
      </section>
    </section>
  </article>
</template>
<script>
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
      _: this.data,
      form: {
        type: "",
        content: "6666",
      },
      // 頁簽相關
      page: {
        loading: true,
      },
      tab: {
        selected: 1,
        list: [
          { key: "1", name: "出貨進度", module: "" },
          { key: "2", name: "退款進度", module: "" },
          { key: "3", name: "商品瑕疵", module: "" },
          { key: "4", name: "商品疑問", module: "" },
          { key: "9", name: "其他", module: "" },
        ],
      },
      list: [],
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    /**
     * 找紀錄
     */
    find_record: async function () {
      this.page.loading = true;
      let o = {
        condition: [
          { f: "order_id", v: this.data.id },
          { f: "type", v: String(this.tab.selected) },
        ],
      };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("freeback/get_Freeback", {
        condition: cond,
      });
      this.list = [];
      if ((result.code == 200) & (result.data !== null))
        this.list = result.data;
      this.page.loading = false;
      return true;
    },
    /**
     *
     */
    send: async function () {
      let o = {
        order_id: this.data.id,
        type: Number(this.tab.selected),
        description: "question",
        dialogue: [{ message: this.form.content }],
      };
      let cond = Struct.fromJavaScript(o);
      await this.createFree(cond);
      await this.find_record();
    },
    createFree: async function (cond) {
      let result = await this.$store.dispatch("freeback/create_Freeback", {
        condition: cond,
        dialogue: null,
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
    await this.find_record();
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
.customer-service {
  padding: 30px;
  overflow-y: auto;
  height: 100%;
  max-height: 50vh;
  & table {
    margin-bottom: 0rem;
  }
  & th,
  td {
    vertical-align: middle;
    border-bottom: 2px solid #dee2e6;
  }
  & tr:first-child > td,
  tr:first-child > th {
    border-top: 0px solid #dee2e6;
  }
  & tr:last-child > td,
  tr:last-child > th {
    border-bottom: 0px solid #dee2e6;
  }
  & th {
    border-right: 2px solid #dee2e6;
    &:first-child {
      width: 19.8%;
    }
  }
  & .nav-item {
    width: 20%;
  }
}

.tab-content {
  border: 1px solid #e6e6e6;
  border-top: 0px solid #dee2e6;
  // padding: 12px;
  height: auto;
}
.onloading {
  position: relative;
  top: 10px;
}
.onloading > div {
  margin-top: 0px;
}
// li {
//   flex: 1 1 auto;
// }

// .nav-tabs {
//   border-bottom: 1px solid #000000;
// }
// .nav-tabs .nav-link {
//   border: 1px solid transparent;
//   border-top-left-radius: 0px;
//   border-top-right-radius: 0px;
//   &:focus,
//   &:hover {
//     border-color: #e9ecef #e9ecef #dee2e6;
//     background-color: #e9b6b3;
//     border-color: #e9b6b3;
//     color: #fff;
//   }
//   &.active {
//     color: #ffffff;
//     background-color: #000;
//     border-color: #000;
//   }
// }
</style>