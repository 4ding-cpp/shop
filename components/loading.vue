<template>
  <div
    class="onloading"
    :class="{'active':data.loading===true,'anim-opacity2':data.loading===false}"
    :style="{height:height}"
  >
  {{autoheight}}
    <!-- <div class="onloading" :class="{'active':show===true,'anim-opacity2':show===false }"> -->
    <!-- <div class="onloading" :class="{'active':show===true,'anim-opacity2':show===false }"> -->
    <div :class="{'top':top===true}">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return this.$store.state.act;
      },
    },
    top: {
      type: Boolean,
      default: function () {
        return true;
      },
    },
  },
  data() {
    return {
      height:'100%',

    };
  },
  watch: {
  },
  computed: {
    autoheight(){
      if(this.$store.state.act.loading === false || document.getElementById("page") === null ) return  ;
      this.height =  document.getElementById("page").offsetHeight + 'px' ;
    }
  },
  methods: {
    // 初始
    ToSelect() {
      this.$emit("selected");
    },
  },
};
</script>
<style lang="scss" scoped>
.onloading {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  // background: red ;
  z-index: 99;
  // display: none;
  &.active {
    display: block;
  }
  &.anim-opacity2 {
    // z-index: 99;
  }
}

.onloading > div {
  color: #ccc;
  display: flex;
  justify-content: center;
  padding-top: 5px;

  &.top {
    margin-top: 20vh;
  }
}
// 漸消
.anim-opacity2 {
  animation: 2s opacity2 0s;
  animation-fill-mode: forwards;
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