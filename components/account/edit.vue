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
            <label>xxxxxxxx</label>
          </td>
        </tr>
        <tr>
          <th>設定密碼</th>
          <td>
            <input type="password" value="66666" />
          </td>
        </tr>
        <tr>
          <th>密碼確認</th>
          <td>
            <input type="password" value="66666" />
          </td>
        </tr>
        <tr>
          <th>中文姓名</th>
          <td>
            <input type="text" value="test" />
            <label>
              <input type="radio" value="taiwan" /> 臺灣
            </label>
            <label class>
              <input type="radio" value="other" /> 其他
            </label>
          </td>
        </tr>
        <tr>
          <th class align="center">出生年月日</th>
          <td>
            西元
            <select>
              <option value>請選擇</option>
              <option value="2020">2020</option>
            </select> 年
            <select>
              <option value>請選擇</option>
              <option value="01">01</option>
              <option value="02">02</option>
            </select> 月
            <select>
              <option value>請選擇</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
            </select> 日
          </td>
        </tr>
        <tr>
          <th class align="center">出生年月日</th>
          <td>
            <select>
              <option value>縣市</option>
              <option value="2020">台中</option>
            </select> 
            <select>
              <option value>鄉鎮市區</option>
              <option value="01">A區</option>
            </select> 
            <input class="w-25" type="text" placeholder="郵遞區" />
            <input type="text" placeholder="地址" />
          </td>
        </tr>
        <tr>
          <th class align="center">電子報</th>
          <td>
            <label>
              <input type="checkbox" value="true" /> 訂閱電子報
            </label>
          </td>
        </tr>
        <tr>
          <td colspan="2" class>
            <!-- <button type="button">Submit</button> -->
            <button type="button" class="btn btn-outline-danger">Success</button>
          </td>
        </tr>
      </thead>
    </table>
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
      },
      user:{}
    };
  },
  watch: {
    //監聽值
    "$store.state.account.user"(to, from) {
      this.user = { ...to };
      console.log("user:",this.user)
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
    this.user = {...this.$store.state.account.user}
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