<template>
  <div class="table-responsive">
    {{user}}
    <!-- <Loading :data.sync="page" /> -->
    <table class="table">
      <thead>
        <tr>
          <th>中文姓名</th>
          <td>
            <input
              class="w-25 form-control"
              :class="{'is-invalid': validation.hasError('user.name')}"
              type="text"
              v-model="user.name"
            />
            <div class="text-danger">{{ validation.firstError('user.name') }}</div>
          </td>
        </tr>
        <tr>
          <th>電子郵件</th>
          <td>
            <input
              class="w-25 form-control"
              :class="{'is-invalid': validation.hasError('user.email')}"
              type="text"
              v-model="user.email"
            />
            <div class="text-danger">{{ validation.firstError('user.email') }}</div>
          </td>
        </tr>
        <tr>
          <th>電話</th>
          <td>
            <input
              class="w-25 form-control"
              :class="{'is-invalid': validation.hasError('user.phone')}"
              type="text"
              v-model="user.phone"
            />
            <div class="text-danger">{{ validation.firstError('user.phone') }}</div>
          </td>
        </tr>
        <tr>
          <th>舊密碼</th>
          <td>
            <input
              type="password"
              class="w-25 form-control"
              :class="{'is-invalid': validation.hasError('password.old_p')}"
              v-model="password.old_p"
            />
            <div class="text-danger">{{ validation.firstError('password.old_p') }}</div>
          </td>
        </tr>
        <tr>
          <th>新密碼</th>
          <td>
            <input
              type="password"
              class="w-25 form-control"
              :class="{'is-invalid': validation.hasError('password.new_p')}"
              v-model="password.new_p"
            />
            <div class="text-danger">{{ validation.firstError('password.new_p') }}</div>
          </td>
        </tr>
        <tr>
          <th>新密碼確認</th>
          <td>
            <input
              class="w-25 form-control"
              :class="{'is-invalid': validation.hasError('repeat')}"
              type="password"
              v-model="repeat"
            />
            <div class="text-danger">{{ validation.firstError('repeat') }}</div>
          </td>
        </tr>

        <tr>
          <th class align="center">出生年月日</th>
          <td>
            <date-picker v-model="timer"></date-picker>
          </td>
        </tr>
        <tr>
          <th class align="center">姓別</th>
          <td>
            <select v-model="user.sex">
              <option value="1">未設定</option>
              <option value="2">男</option>
              <option value="3">女</option>
            </select>
          </td>
        </tr>
        <tr>
          <th class align="center">地址</th>
          <td class="form-inline">
            <div class="w-25 pr-2">
              <input
                class="w-100 form-control"
                :class="{'is-invalid': validation.hasError('user.zip_code')}"
                maxlength="3"
                type="text"
                v-model="user.zip_code"
                placeholder="郵遞區"
              />
            </div>
            <div class="w-75">
              <input class="w-100 form-control" type="text" placeholder="地址" v-model="user.address" />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" class>
            <!-- <button type="button">Submit</button> -->
            <button type="button" @click="changeInfo" class="btn btn-outline-danger">確認修改</button>
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
      timer: new Date(),
      user: {},
      password: {
        old_p: "",
        new_p: "",
        submitted: false,
      },
      repeat: "",
    };
  },
  watch: {
    //監聽值
    "$store.state.account.user"(to, from) {
      this.user = { ...to };
    },
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  validators: {
    /**
     * 檢查登入是輸入電郵或是電話
     */
    "user.name": function (value) {
      return this.Validator.value(value).required("請輸入姓名");
    },
    "user.phone": function (value) {
      return this.Validator.value(value).required("請輸入電話").length(10);
    },
    "user.email": function (value) {
      return this.Validator.value(value)
        .required("請輸入電郵")
        .email("請確認電郵");
    },
    "user.zip_code": function (value) {
      return this.Validator.value(value).length(3);
    },
    "password.old_p": function (value) {
      return Validator.value(value).length(8);
    },
    "password.new_p": function (value) {
      return Validator.value(value).length(8);
    },
    "repeat, password.new_p": function (repeat, password) {
      if (this.validation.isTouched("repeat")) {
        return Validator.value(repeat).match(password, "與新密碼不同");
      }
    },
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      _store: "_store",
    }),
    /**
     * 檢查表單
     */
    submit: async function () {
      return this.$validate().then((success, e) => {
        return { res: success, message: this.validation.allErrors() };
      });
    },
    changeInfo: async function () {
      let err = await this.submit();
      if (!err.res) {
        alert(err.message.join("\n"));
        return;
      }
      const date = new Date(this.timer);
      const dateTimeFormat = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year },
      ] = dateTimeFormat.formatToParts(date);

      let o = {
        ...this.user,
        ...Number(this.user.sex),
        birthday: `${year}-${month}-${day}`,
      };

      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/changeInfo", {
        condition: cond,
      });
      if (result.code === 200 && result.data === 1) {
        await this.$store.dispatch("account/whoAmI");
        this.$toast.success("修改資料成功");
      } else {
        this.$toast.success(`修改資料失敗`);
      }

      // 有輸入
      if (
        this.password.new_p !== "" &&
        this.repeat !== "" &&
        this.password.old_p !== ""
      ) {
        await this.changePassword();
      }
    },

    changePassword: async function () {
      let o = {
        old_p: this.password.old_p,
        new_p: this.password.new_p,
      };

      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/changePassword", {
        condition: cond,
      });
      if (result.code === 200 && result.data === 1) {
        this.$toast.success("修改密碼成功");
      } else {
        this.$toast.success(`修改密碼失敗`);
      }
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
    this.user = { ...this.$store.state.account.user };
    this.timer = new Date(this.user.birthday);
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