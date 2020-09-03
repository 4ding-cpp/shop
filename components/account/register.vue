<template>
  <div class>
    <div class="col-md-12 p-3">
      <PlugFbLogin :signCheck="signCheck" type="signUp" />
    </div>
    <div class="col-md-12 p-3">
      <label class="w-100 text-center" for>註冊電郵</label>
      <input
        class="w-100 form-control"
        :class="{'is-invalid': validation.hasError('registered.name')}"
        v-model="registered.name"
        type="text"
        name
        placeholder="用戶名"
      />
      <div class="text-danger">{{ validation.firstError('registered.name') }}</div>
    </div>
    <div class="col-md-12 p-3">
      <input
        class="w-100 form-control"
        :class="{'is-invalid': validation.hasError('registered.email')}"
        v-model="registered.email"
        type="text"
        name
        placeholder="電郵"
      />
      <div class="text-danger">{{ validation.firstError('registered.email') }}</div>
    </div>
    <div class="col-md-12 p-3">
      <input
        class="w-100 form-control"
        :class="{'is-invalid': validation.hasError('registered.phone')}"
        v-model="registered.phone"
        type="text"
        name
        placeholder="電話"
      />
      <div class="text-danger">{{ validation.firstError('registered.phone') }}</div>
    </div>
    <div class="col-md-12 p-3">
      <input
        class="w-100 form-control"
        :class="{'is-invalid': validation.hasError('registered.password')}"
        v-model="registered.password"
        type="password"
        @keyup.enter="signUp"
        placeholder="密碼"
      />
      <div class="text-danger">{{ validation.firstError('registered.password') }}</div>
    </div>
    <div class="col-md-12 p-3">
      <button tag="button" @click="signUp" class="w-100 btn btn-outline-primary btn-sm">立即加入</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
export default {
  name: "",
  props: {
    signCheck: {
      type: Function,
      default: function () {
        return;
      },
    },
  },
  data: function () {
    // 資料
    return {
      // 註冊
      registered: {
        name: "",
        phone: "0922222222",
        email: "xx@gmail.com",
        password: "",
        address: "",
      },
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  validators: {
    /**
     * 檢查登入是輸入電郵或是電話
     */
    "registered.phone": function (value) {
      return this.Validator.value(value).required("請輸入電話").length(10);
    },
    "registered.email": function (value) {
      return this.Validator.value(value)
        .required("請輸入電郵")
        .email("請確認電郵");
    },
    "registered.password": function (value) {
      return this.Validator.value(value).required("請輸入密碼").length(8);
    },
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      _store: "_store",
    }),
    // 檢查表單
    submit: async function () {
      return this.$validate().then((success, e) => {
        console.log(this.validation.allErrors());
        return { res: success, message: this.validation.allErrors() };
      });
    },

    signUp: async function () {
      let err = await this.submit();
      if (!err.res) {
        alert("registered error:\n" + err.message.join("\n"));
        return;
      }
      this.registered.address = await this.signCheck();
      let o = { ...this.registered };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/signUp", {
        condition: cond,
      });
      if (result.code === 200) {
        await this.$store.dispatch("account/whoAmI");
        this.$toast.success("註冊成功");
        this.$modal.hide("login");
      } else {
        this.$toast.success(`${result.data} 註冊失敗!!`);
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
  mounted: async function () {
    //元素已掛載， el 被建立。
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
.tab_content {
  padding: 20px;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li > a {
  border-radius: 0;
  background-color: #fbfbfb;
  border-color: transparent #ddd #ddd transparent;
  margin-right: 0;
  padding: 20px 15px;
  color: #333;
  background: #9c9c9c;
  &.active {
    border-bottom: 0px;
    background: #fbfbfb;
  }
}
</style>