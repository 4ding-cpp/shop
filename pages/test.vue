<template>
  <div id="page">
    <section class="content">
       <div class="layout-form">
    <div class="form-group" :class="{error: validation.hasError('email')}">
      <div class="label">* Email</div>
      <div class="content"><input type="text" class="form-control" v-model="email"/></div>
      <div class="message">{{ validation.firstError('email') }}</div>
    </div>
    <div class="form-group">
      <div class="actions">
        <button type="button" class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
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
    submit: function () {
        this.$validate()
          .then(function (success) {
            if (success) {
              alert('Validation succeeded!');
            }
          });
      }
  },
  validators: {
      email: function (value) {
        return this.Validator.value(value).required().email();
      }
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