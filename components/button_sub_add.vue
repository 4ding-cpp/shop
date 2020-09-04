<template>
  <div class="input-group align-items-center justify-content-center">
    <div class="input-group-prepend" style="height:25px">
      <button class="btn btn-sm btn-decrement btn-outline-secondary" type="button" @click="add(-1)">
        <strong>-</strong>
      </button>
    </div>
    <input
      type="text"
      inputmode="decimal"
      class="form-control count"
      :class="{'full':this.type === 'full'}"
      v-model="total"
      @change="change()"
    />
    <div class="input-group-append" style="height:25px">
      <button class="btn btn-sm btn-increment btn-outline-secondary" type="button" @click="add(1)">
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
      default: function () {
        return {};
      },
    },
    type: {
      type: String,
      default: function () {
        return "";
      },
    },
    count: {
      type: Number,
      default: function () {
        return 1;
      },
    },
    after_change: {
      type: Function,
      default: function (v) {
        return false;
      },
    },
  },
  data() {
    return {
      total: this.count,
    };
  },
  watch: {
    //監聽值
    count(to, from) {
      this.total = to;
    },
  },
  methods: {
    // 初始
    add(value) {
      this.total = Number(this.total) + Number(value);
      this.change();
    },
    change() {
      this.$emit("update:count", Number(this.total));
      this.$emit("after_change", this.data);
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  line-height: 0;
  min-width: 1.5rem;
  border: 1px solid #898989;
  color: #ced4da;
}
// 左右按鈕
.input-group-prepend,
.input-group-append {
  height: 25px;
  padding: 0px 4px;
}

input.count {
  text-align: center;
  flex: 0.5 1 auto !important;
  height: 25px !important;
  border: 1px solid #898989;
  &.full {
    width: calc(100% - 70px);
  }
}
</style>