<template>
  <button class="w-100 btn l-btn btn-facebook btn-sm" @click="FBLogin">使用FACEBOOK{{title}}xx</button>
</template>
<script>
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
export default {
  name: "",
  props: {
    // 父組件來源
    fb_accesstoken: {
      type: String,
      default: function () {
        return "";
      },
    },
    type: {
      type: String,
      default: function () {
        return "login";
      },
    },
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
      title: "",
      app_id: "",
      accesstoken: "",
    };
  },
  methods: {
    FBinit: function () {
      FB.init({
        appId: this.app_id,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v8.0",
      });
    },
    FBLogin: async function () {
      // this.fb_accesstoken = "AAA"+new Date().getTime();
      // return ;
      await FB.login(
        (response) => {
          if (response.authResponse) {
            this.accesstoken = response.authResponse.accessToken;
            this.$emit(
              "update:fb_accesstoken",
              response.authResponse.accessToken
            );
            this.FBsignIn();
          } else {
            console.log("User cancelled login or did not fully authorize.");
          }
        },
        {
          scope: "email",
          return_scopes: true,
        }
      );
    },
    FBsignIn: async function () {
      let address = await this.signCheck();
      let o = { address, fb_accesstoken:this.accesstoken };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/signFb", {
        condition: cond,
      });

      if (result.code === 200) {
        await this.$store.dispatch("account/whoAmI");
        this.$toast.success(`FB${this.title}成功`);
        this.$modal.hide("login");
      } else {
        this.$toast.success(`${result.data} FB${this.title}失敗`);
      }
    },
  },
  created: function () {
    this.title = this.type === "login" ? "登入" : "註冊";
    this.app_id = this.$store.state.other.config.facebook_sign.app_id;
    this.FBinit();
  },
};
</script>