<template>
  <button class="w-100 btn l-btn btn-facebook btn-sm" @click="FBLogin">使用FACEBOOK登入xx</button>
</template>
<script>
export default {
  name: "",
  props: {
    // 父組件來源
    url: {
      type: String,
      default: function () {
        return "https://www.facebook.com/facebook";
      },
    },
  },
  data: function () {
    // 資料
    return {
      app_id:"" ,
      fb_accesstoken: "",
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
  },
  created: function () {
    this.app_id = this.$store.state.other.config.facebook_sign.app_id
    this.FBinit()
  },
};
</script>