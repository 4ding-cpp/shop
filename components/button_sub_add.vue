<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <button
        style="min-width: 2.5rem"
        class="btn btn-decrement btn-outline-secondary"
        type="button"
        @click="add(-1)"
      >
        <strong>-</strong>
      </button>
    </div>
    <input
      type="text"
      inputmode="decimal"
      style="text-align: center"
      class="form-control"
      v-model="total"
      @change="change()"
    />
    <div class="input-group-append">
      <button
        style="min-width: 2.5rem"
        class="btn btn-increment btn-outline-secondary"
        type="button"
        @click="add(1)"
      >
        <strong>+</strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    count: {
      type: Number,
      default: function() {
        return 1;
      }
    },
    after_change:{
      type: Function,
      default: function(v) {
        return false;
      }
    },

  },
  data() {
    return {
      total: this.count
    };
  },
  watch: {
    //監聽值
    count(to, from) {
      this.total = to;
    }
  },
  methods: {
    // 初始
    add(value) {
      this.total = Number(this.total) + Number(value)
      this.change();

    },
    change() {
      this.$emit("update:count", Number(this.total));
      this.$emit("after_change",this.data)
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  height: 50px;
}
.nav-wrapper.list {
  background-color: white;
  border-bottom: 1px solid #ccc;
}
li {
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid #ccc;
  &:first-child {
    border-left: 0px solid;
  }
}
</style>