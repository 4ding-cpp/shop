<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5>註冊新帳號</h5>
    </div>
    <div class="modal-body">
      <p class="text-center">加入會員享受輕鬆購物</p>
      <button type="button" class="l-btn btn-facebook mr-2 w-100">
        FACEBOOK
        快速註冊
      </button>
      <hr class="divider" />
      <button type="button" class="l-btn btn-line mr-2 w-100">LINE 快速註冊</button>
      <hr class="divider" />
      <input class="form-control mb-3" type="text" placeholder="姓名" />
      <input class="form-control mb-3" type="text" placeholder="年/月/日" />
      <input class="form-control mb-3" type="text" placeholder="E-MAIL" />
      <input class="form-control mb-3" type="text" placeholder="密碼" />
      <input class="form-control mb-3" type="text" placeholder="確認密碼" />
      <button type="button" class="l-btn btn-user mr-2 w-100">加入會員</button>
      <div class="form-check w-100 mt-2">
        <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
        <label class="form-check-label check-label" for="defaultCheck1">不訂閱店家優惠</label>
      </div>
      <div class="mt-3">
        <div class="text-center">
          <i class="fa fa-user" aria-hidden="true"></i>已經有會員了?
          <a href>已註冊請點此</a>
          <p>
            註冊表示同意
            <a href>商店服務條款</a> 與
            <a href>會員責任規範及個資聲明</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "common",
  data() {
    return {
      ip: "xx",
      dd: "666",
      buffer: {}
    };
  },
  created() {

  },

  methods: {}
};
</script>

<style>
</style>
