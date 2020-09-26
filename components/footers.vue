<template>
  <footer class="footer">
    <div class="footer-link pt-3 pb-3">
      <div class="container">
        <div class="row">
          <section class="col-sm-6 col-md-3" v-for="(item, i) in footer">
            <hr v-if="item.title.tw !== 'fb_plug'" />
            <h5 v-if="item.title.tw === 'footer_contact'">聯絡資訊</h5>
            <h5 v-else-if="item.title.tw === 'fb_plug'">
              <PlugFb style="width: 100%" />
            </h5>
            <h5 v-else>{{ item.title.tw }}</h5>

            <ul v-if="item.layout">
              <template v-for="(o, j) in item.layout">
                <!-- 聯絡資訊 -->
                <li v-if="o.title.tw === 'page_contact'"></li>
                <!-- 另開連結 -->
                <li v-else-if="o.link">
                  <i class="fas fa-link"></i>
                  <a
                    :href="`${
                      !o.link.match(/^http?:\/\//i) ||
                      !o.link.match(/^https?:\/\//i)
                        ? `http://${o.link}`
                        : o.link
                    }`"
                    target="_blank"
                    >{{ o.title.tw }}</a
                  >
                </li>
                <!-- 自訂頁面 -->
                <li v-else-if="o.page">
                  <i class="fas fa-link"></i>
                  <nuxt-link tag="a" class :to="`/pages/${o.page}`">{{
                    o.title.tw
                  }}</nuxt-link>
                </li>
                <!--  -->
                <li v-else-if="o.title.tw">{{ o.title.tw }}</li>
              </template>
            </ul>
          </section>
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
      style: {
        config: {},
      },
    };
  },
  async created() {
    this.footer = this.get_footer();
    this.style.config = this.get_styleColor();
  },
  mounted: function () {
     $("footer h5").css(
      "color",
      this.style.config.footer_style.label
    );
    $("footer .footer-link").css(
      "background",
      this.style.config.footer_style.background
    );
    $("footer li ,footer li a").css(
      "color",
      this.style.config.footer_style.color
    );
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
    }),
    ...mapGetters({
      get_footer: "web/get_footer",
      get_styleColor: "web/get_styleColor",
    }),
    async test() {},
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 25px 0 100px;
}
.row {
  border-bottom: 1px solid #aaa;
}
.footer {
  & hr::after {
    position: absolute;
    top: 16px;
    width: 60px;
    content: "";
    border-top: 1px solid #000000;
  }
  & a {
    color: #929191;
    &:hover {
      color: #000000;
    }
  }
  & i {
    margin-right: 10px;
  }
  & h5 {
    margin: 20px 0;
    color: #818181;
    font-size: 13px;
    font-weight: 700;
  }
  & ul {
    list-style: none;
    margin-bottom: 15px;
    padding: 0;
    & li {
      font-size: 13px;
      font-weight: 700;
      line-height: 20px;
      padding: 5px 0 0;
      color: #929191;
    }
  }
}
</style>