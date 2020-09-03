<template>
  <img
    height="1"
    width="1"
    style="display:none"
    :src="`https://www.facebook.com/tr?id=${app_id}&ev=PageView&noscript=1`"
  />
</template>
<script>
export default {
  name: "",
  props: {
    // 父組件來源
  },
  data() {
    return {
      app_id: "123",
    };
  },
  created: async function () {
    this.app_id = this.$store.state.other.config.facebook_pixel.app_id;
  },
  mounted: async function () {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", this.app_id);
    fbq("track", "PageView");
  },
};
</script>