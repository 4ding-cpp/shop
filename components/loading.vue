<template>
  <div class="onloading" :class="{'active':$store.state.loading===true,'anim-opacity2':$store.state.loading===false }">
  <!-- <div class="onloading" :class="{'active':show===true,'anim-opacity2':show===false }"> -->
    <div class>
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: function() {
        return true;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    // 初始
    ToSelect() {
      this.$emit("selected");
    }
  }
};
</script>
<style lang="scss" scoped>
.onloading {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  z-index: 99;
  // display: none;
  &.active {
    display: block;
  }
  &.anim-opacity2{
    // z-index: 99;
  }
}

.onloading > div {
  color: #ccc;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
}
// 漸消
.anim-opacity2 {
  animation: 2s opacity2 0s;
  animation-fill-mode:forwards;
}
@keyframes opacity2 {
  0% {
    opacity: 1;
    z-index: 99;
  }
  100% {
    opacity: 0;
    z-index: -1;
    display: none;
    visibility: hidden;
  }
}
</style>