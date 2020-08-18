<template>
  <iframe
    :src="`https://www.facebook.com/plugins/page.php?href=${url}&tabs=timeline&width=340&height=120&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`"
    width="340"
    height="140"
    style="border:none;overflow:hidden"
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
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
};
</script>