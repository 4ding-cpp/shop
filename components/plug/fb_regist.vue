<template>
  <button class="w-100 btn l-btn btn-facebook btn-sm" @click="FBsignIn">使用FACEBOOK註冊xx</button>
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
    signCheck: {
      type: Function,
      default: function(){
        return ;
      }
    }
  },
  data: function () {
    // 資料
    return {
      app_id:"" ,
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
      FB.login(
        (response) => {
          if (response.authResponse) {
            console.log("FB",response)
            this.accesstoken = response.authResponse.accessToken;
             this.$emit("update:fb_accesstoken",  response.authResponse.accessToken);
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
      let o = { ...this.accesstoken };
      let cond = Struct.fromJavaScript(o);
      let result = await this.$store.dispatch("account/signIn", {
        condition: cond,
      });

      if (result.code === 200) {
        await this.$store.dispatch("account/whoAmI");
        this.$toast.success("FB登入成功");
        this.$modal.hide("login");
      } else {
        this.$toast.success(`${result.data} FB登入失敗`);
      }
    },
  },
  created: function () {
    this.app_id = this.$store.state.other.config.facebook_sign.app_id
    this.FBinit()
  },
};
</script>