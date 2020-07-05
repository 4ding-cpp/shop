<template>
  <div class="container">
    <div class="step d-flex justify-content-center">
      <div class="step-item">
        <nuxt-link tag="div"  class="step-text" to="/cart/step1">
          <div class="text-center">Step1</div>
          <div>購物車</div>
        </nuxt-link>
      </div>
      <i class="fas fa-arrow-right"></i>
      <div class="step-item">
        <nuxt-link tag="div"  class="step-text" to="/cart/step2">
          <div class="text-center">Step2</div>
          <div>填寫資料</div>
        </nuxt-link>
      </div>
      <i class="fas fa-arrow-right"></i>
      <div class="step-item">
        <nuxt-link tag="div"  class="step-text" to="/cart/step3">
          <div class="text-center">Step3</div>
          <div>確認訂單</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
</style>