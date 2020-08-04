<template>
  <footer class="footer">
    <div class="footer-link pt-3 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <a href>頁尾導覽列1</a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href>頁尾導覽列2</a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href>聯絡我們</a>
            <div>電話</div>
            <div>地址</div>
            <div>
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=120&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="100%"
              height="140px"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      footer: [],
    };
  },
  async created() {
    this.footer = this.get_footer();
    console.log(this.footer);
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
    }),
    ...mapGetters({
      get_footer: "web/get_footer",
    }),
    async test() {},
  },
};
</script>