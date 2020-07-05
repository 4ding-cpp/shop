<template>
  <div id="page">

    {{dd}}
    <br />
    <ul>
      <li v-for="(o,i) in list" >{{ o }}</li>
    </ul>
    xx
    <br />
    <button type="button" @click="test()" class="btn btn-primary">Sign in</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      token: "",
      dd: "666",
      buffer: {},
      list: []
    };
  },
  created() {
    this.loading(false);
  },
   async asyncData({ context, app, store }) {
    //  console.log(app.$axios)
   
    //  let a  = await app.grpcAxios(app.$axios);
    //  console.log('a',a)
  },
  async fetch({ store, $axios, app }) {

    // store.commit('other/set_test', 66666)
    // let metadata = { "x-4d-token": store.state.other.token };
    // let method = "MyCar";
    // let q = new app.sqlpb.Query();

    // const bi = q.serializeBinary();
    // const ib = new ArrayBuffer(bi.length + 5);
    // new Uint8Array(ib, 0).set([
    //   bi.length / (256 * 256 * 256 * 256),
    //   (bi.length / (256 * 256 * 256)) % 256,
    //   (bi.length / (256 * 256)) % 256,
    //   (bi.length / 256) % 256,
    //   bi.length % 256
    // ]);
    // new Uint8Array(ib, 5).set(bi);
    // console.log("ib>>>", ib);
    // fetch(`https://shop.4ding.site/ding4.ShopRPC/${method}`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/grpc-web+proto",
    //     "x-grpc-web": "1",
    //     ...metadata
    //   },
    //   body: new Uint8Array(ib)
    // })
    //   .then(response => {
    //     return response.arrayBuffer();
    //   })
    //   .then(ab => {
    //     console.log("12123123");
    //     let ba = ab.slice(5);
    //     console.log(">>", ba);
    //     console.log(">>>", app.sqlpb.Response);

    //     const resp = app.sqlpb.Response.deserializeBinary(ba);
    //     console.log(resp.getResult().toJavaScript());
    //     store.commit('other/set_token', resp.getResult().toJavaScript())
    //   });

    // await app.fetch(method,metadata,(err, ba) => {
    //     // const resp = app.sqlpb.Response.deserializeBinary(ba);
    //     // // this.list = resp.getResult().toJavaScript()
    //     //  store.commit('other/set_test', resp.getResult().toJavaScript())
    // })

    // let rpc = app.aa ;
    // let c = new app.cc.Customer();
    // rpc.signIn(c, { "x-4d-token": store.state.other.token }, (err, resp) => {
    //     console.log(err);
    //     console.log(resp.getResult().toJavaScript());
    //   });

  },
  methods: {
    ...mapActions({
      loading: "loading",
       get_website: "web/get_website",

    }),
    test: function() {
    },
    onSubmit: function() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function(response) {
      console.log("Verify: " + response);
    },
    onExpired: function() {
      console.log("Expired");
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    }
  }
};
</script>

<style>
</style>
