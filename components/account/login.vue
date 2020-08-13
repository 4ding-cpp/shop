<template>
  <div class>
    <div class="row">
      <div class="col-sm-12">
        <div class>
          <div>
            <ul class="nav nav-tabs nav-justified">
              <li class="nav-item" v-for="(item,i) in tab.list" @click="tab.selected=i">
                <a
                  class="nav-link"
                  :class="{'active':tab.selected==i}"
                  data-toggle="tab"
                  :href="`#tab${i}`"
                  role="tab"
                >{{item.name}}</a>
              </li>
            </ul>
          </div>
          <!-- 登入 -->
          <div v-if="tab.selected == 1" class="tab_content">
            <div class="col-md-12 p-3">
              <button tag="button" class="w-100 btn btn-outline-primary btn-sm">使用FACEBOOK登入</button>
            </div>
            <div class="col-md-12 p-3">
              <label class="w-100 text-center" for>登入電郵</label>
              <input class="w-100" v-model="form.email" type="text" name placeholder="電郵" />
            </div>
            <div class="col-md-12 p-3">
              <input class="w-100" v-model="form.password" type="text" name placeholder="密碼" />
            </div>
            <div class="col-md-12 p-3">
              <button tag="button" @click="signIn" class="w-100 btn btn-outline-primary btn-sm">登入</button>
            </div>
            <div class="col-md-12 p-3">
              <button
                tag="button"
                @click="tab.selected=0"
                class="w-100 btn btn-outline-primary btn-sm"
              >註冊帳號</button>
            </div>
          </div>
          <!-- 註冊 -->
          <div v-if="tab.selected == 0" class="tab_content">
            <div class="col-md-12 p-3">
              <button tag="button" class="w-100 btn btn-outline-primary btn-sm">使用FACEBOOK登入</button>
            </div>
            <div class="col-md-12 p-3">
              <label class="w-100 text-center" for>註冊電郵</label>
              <input class="w-100" v-model="form.name" type="text" name placeholder="用戶名" />
            </div>
            <div class="col-md-12 p-3">
              <input class="w-100" v-model="form.email" type="text" name placeholder="電郵" />
            </div>
            <div class="col-md-12 p-3">
              <input class="w-100" v-model="form.phone" type="text" name placeholder="電話" />
            </div>
            <div class="col-md-12 p-3">
              <input class="w-100" v-model="form.password" type="password" name placeholder="密碼" />
            </div>
            <div class="col-md-12 p-3">
              <button tag="button" @click="signUp" class="w-100 btn btn-outline-primary btn-sm">立即加入</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      tab: {
        selected: 0,
        list: [{ name: "註冊會員" }, { name: "會員登入" }],
      },
      form: {
        name: "gggg",
        phone: "0988123321",
        email: "" ,
        password: "password",
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
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      _store: "_store",
    }),
    signIn: async function () {
      await this.signCheck()
      let o = { ...this.form };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/signIn", {
        condition: cond,
      });
      console.log(result);
    },
    signUp:async function () {
      await this.signCheck()
      let o = { ...this.form };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/signUp", {
        condition: cond,
      });
      console.log(result);
    },
    /**
     * 檢查驗證
     */
    signCheck: async function () {
      this.form.address = await grecaptcha
        .execute("6LebxbwZAAAAAJjTCvRT7eBHfrlaxnJVbaDz401q", {
          action: "signCheck",
        })
        .then(function (token) {
          return token;
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