<template>
  <div class="table-responsive">
    {{user}}
    <!-- <Loading :data.sync="page" /> -->
    <table class="table">
      <thead>
        <tr>
          <th>所在地</th>
          <td>
            <label>
              <input type="radio" value="taiwan" /> 臺灣
            </label>
            <label class>
              <input type="radio" value="other" /> 其他
            </label>
          </td>
        </tr>
        <tr>
          <th>電子郵件</th>
          <td>
            <label>{{user.email}}</label>
          </td>
        </tr>
        <tr>
          <th>舊密碼</th>
          <td>
            <input type="text" v-model="user.password" />
          </td>
        </tr>
        <tr>
          <th>設定密碼</th>
          <td>
            <input type="password" value="" />
          </td>
        </tr>
        <tr>
          <th>密碼確認</th>
          <td>
            <input type="password" value="" />
          </td>
        </tr>
        <tr>
          <th>中文姓名</th>
          <td>
            <input type="text" v-model="user.name" />
          </td>
        </tr>
        <tr>
          <th class align="center">出生年月日</th>
          <td>
            {{time1}}
            <date-picker v-model="time1" valuetype="format"></date-picker>
          </td>
        </tr>
        <tr>
          <th class align="center">姓別</th>
          <td>
            <select v-model="user.sex" >
              <option value="1">未設定</option>
              <option value="2">男</option>
              <option value="3">女</option>
            </select>
          </td>
        </tr>
        <tr>
          <th class align="center">地址</th>
          <td>
            <input class="w-25" type="text" v-model="user.zip_code" placeholder="郵遞區" />
            <input type="text" placeholder="地址" v-model="user.address" />
          </td>
        </tr>
        <tr>
          <td colspan="2" class>
            <!-- <button type="button">Submit</button> -->
            <button type="button" @click="changeInfo" class="btn btn-outline-danger">Success</button>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "",
  props: {},
  components: { DatePicker },
  data: function () {
    // 資料
    return {
      list: [],
      // 頁簽相關
      page: {
        loading: true,
      },
      time1: new Date(),
      user: {},
    };
  },
  watch: {
    //監聽值
    "$store.state.account.user"(to, from) {
      this.user = { ...to };
      console.log("user:", this.user);
    },
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
    changeInfo:async function () {
      let o = { ...this.user,...Number(this.user.sex) };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/changeInfo", {
        condition: cond,
      });
      console.log("changInfo>>",result);
    }
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
    this.user = { ...this.$store.state.account.user };
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
table {
  width: 100%;
  font-size: 13px;
  color: #666;
  margin-bottom: 40px;
  border: #eae8e8 1px solid;
  & th {
    background: #f4cccc;
  }
  & td:nth-child(2),
  & th:nth-child(2) {
    text-align: left;
    width: 70%;
    background: #fff;
  }
}
</style>