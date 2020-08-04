<template>
  <footer class="footer">
    <div class="footer-link pt-3 pb-3">
      <div class="container">
        <div class="row">
          <section class="col-sm-6 col-md-3" v-for="(item,i) in footer">
            <h5 v-if="item.title.tw === 'footer_contact' " >聯絡資訊</h5>
            <h5 v-else >{{item.title.tw}}</h5>
            <ul>
              <template v-for="(o,j) in item.layout">
                <!-- 聯絡資訊 -->
                <li v-if="o.title.tw === 'page_contact'">
                  
                </li>
                <!-- 另開連結 -->
                <li v-else-if="o.link">
                  <i class="fas fa-link"></i>
                  <a
                    :href="`${(!(o.link).match(/^http?:\/\//i) || !(o.link).match(/^https?:\/\//i))? `http://${o.link}` :  o.link}`"
                    target="_blank"
                  >{{o.title.tw}}</a>
                </li>
                <!-- 自訂頁面 -->
                <li v-else-if="o.page">
                  <i class="fas fa-link"></i>
                  <nuxt-link tag="a" class :to="`/pages/${o.page}`">{{o.title.tw}}</nuxt-link>
                </li>
                <!--  -->
                <li v-else-if="o.title.tw">
                  <i class="fas fa-caret-right"></i>
                  {{o.title.tw}}
                </li>
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
<style lang="scss" scoped>
.footer {
  & i {
    margin-right: 10px;
  }
  & h5 {
    margin: 20px 0;
    color: #565656;
    font-size: 1.1em;
    font-weight: 300;
  }
  & ul {
    border-top: 1px solid #aaa;
    list-style: none;
    margin-bottom: 15px;
    padding: 0;
    & li {
      font-size: 13px;
      line-height: 20px;
      padding: 5px 0 0;
      color: #929191;
    }
  }
}
</style>