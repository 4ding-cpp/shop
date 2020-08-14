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
              <button
                tag="button"
                @click="FBsignIn"
                class="w-100 btn btn-outline-primary btn-sm"
              >使用FACEBOOK登入</button>
            </div>
            <div class="col-md-12 p-3">
              <label class="w-100 text-center" for>登入電郵</label>
              <input
                class="w-100 form-control"
                :class="{'is-invalid': validation.hasError('login.account')}"
                v-model="login.account"
                type="text"
                name
                placeholder="請輸入電郵或是電話"
              />
            </div>
            <div class="col-md-12 p-3">
              <input class="w-100" v-model="form.password" type="text" name placeholder="請輸入密碼" />
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
            <AccountRegister
              :signCheck="signCheck"
              :fb_accesstoken.sync="fb_accesstoken"
              :FBLogin="FBLogin"
            />
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
      // email or phone
      login: {
        account: "",
      },
      // 註冊
      registered: {
        name: "",
        phone: "",
        email: "",
        password: "",
      },
      fb_accesstoken: "",
      //
      form: {
        name: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        fb_accesstoken: "",
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
    "login.account": function (value) {
      if (value.indexOf("@") > -1) {
        this.form.email = value;
        this.form.phone = "";
        return this.Validator.value(value)
          .required("請輸入電郵或是電話")
          .email("請確認電郵");
      } else {
        this.form.email = "";
        this.form.phone = value;
        return this.Validator.value(value)
          .required("請輸入電郵或是電話")
          .length(10);
      }
    },
    /**
     * 檢查密碼
     */
    "form.password": function (value) {
      return this.Validator.value(value).required("請確認密碼").length(10);
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
        return { res: success, message: this.validation.allErrors() };
      });
    },
    signIn: async function () {
      let err = await this.submit();
      if (!err.res) {
        alert("form error:\n" + err.message.join("\n"));
        return;
      }
      this.form.address = await this.signCheck();
      let o = { ...this.form, ...this.fb_accesstoken };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/signIn", {
        condition: cond,
      });
      console.log(result);
      if(result.code === 200) alert("登入成功")
    },

    /**
     * 檢查驗證
     */
    signCheck: async function () {
      // return "4654568489494"
      let resp = await grecaptcha
        .execute("6LebxbwZAAAAAJjTCvRT7eBHfrlaxnJVbaDz401q", {
          action: "signCheck",
        })
        .then(function (token) {
          console.log("token:",token)
          return token;
        }).catch((err)=>{
          console.log("err,",err)
          return ""
        });
      return resp;
    },
    FBinit: function () {
      FB.init({
        appId: "364143314072504",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v8.0",
      });
    },
    FBLogin: async function () {
      // this.fb_accesstoken = "AAA"+new Date().getTime();
      // return ;
      FB.login(
        (response) => {
          if (response.authResponse) {
            this.fb_accesstoken = response.authResponse.accessToken;
          } else {
            console.log("User cancelled login or did not fully authorize.");
          }
        },
        {
          scope: "email,user_likes",
          return_scopes: true,
        }
      );
    },
    FBsignIn: async function () {
      await this.FBLogin();
      this.registered.address = await this.signCheck();
      let o = { ...this.fb_accesstoken };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/signIn", {
        condition: cond,
      });
      if(result.code === 200) alert("登入成功")
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
    this.FBinit();
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