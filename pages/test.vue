<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <paginate :pageCount="10" :containerClass="'pagination'" :clickHandler="clickCallback"></paginate>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";

// Vue.use(SimpleVueValidation);
export default {
  name: "",
  props: {},
  data: function () {
    // 資料
    return {
      email: "", //
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
    }),
    clickCallback: function (page) {
      console.log(page);
    },
    submit: function () {
      this.$validate().then(function (success) {
        if (success) {
          alert("Validation succeeded!");
        }
      });
    },
  },
  validators: {
    email: function (value) {
      return this.Validator.value(value).required().email();
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
  mounted: function () {
    //元素已掛載， el 被建立。
    this.loading(false);
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

<style lang="scss">
//
// Pagination (multiple pages)
// --------------------------------------------------
// .pagination {
//   display: inline-block;
//   padding-left: 0;
//   margin: 20px 0;
//   border-radius: 4px;

//   > li {
//     display: inline; // Remove list-style and block-level defaults
//     > a,
//     > span {
//       position: relative;
//       float: left;
//       padding: 6px 12px;
//       margin-left: -1px;
//       line-height: 1.42857143;
//       color: #337ab7;
//       text-decoration: none;
//       background-color: #fff;
//       border: 1px solid #ddd;
//       margin-left: -1px;
//     }
//     &:first-child {
//       > a,
//       > span {
//         margin-left: 0;
//         border-top-left-radius: 4px;
//       }
//     }
//     &:last-child {
//       > a,
//       > span {
//         border-bottom-left-radius: 4px;
//       }
//     }
//   }

//   > li > a,
//   > li > span {
//     &:hover,
//     &:focus {
//       z-index: 3;
//       color: #23527c;
//       background-color: #eee;
//       border-color: #ddd;
//     }
//   }

//   > .active > a,
//   > .active > span {
//     &,
//     &:hover,
//     &:focus {
//       z-index: 2;
//       color: #fff;
//       cursor: default;
//       background-color: #337ab7;
//       border-color: #337ab7;
//     }
//   }

//   > .disabled {
//     > span,
//     > span:hover,
//     > span:focus,
//     > a,
//     > a:hover,
//     > a:focus {
//       color: #fff;
//       background-color: #337ab7;
//       border-color: #337ab7;
//       cursor: point;
//     }
//   }
// }
</style>