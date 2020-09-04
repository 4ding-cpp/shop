<template>
  <div class="select-control">
    <select class="form-control">
      <option v-for="(item,i) in opt" :value="item.value">{{item.title}}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    opt: {
      type: Array,
      default: function () {
        return [{ title: "請選擇", value: "0" }];
      },
    },
  },
};
</script>
<style lang="scss" scoped >
select {
  height: 25px;
  border: 1px solid #898989;
  font-size: smaller;
  padding: 0 20px;
}
</style>