<template>
  <div class="modal fade" id="MemberLogin">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id>會員登入</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="text-center">歡迎回來</p>
          <button type="button" class="l-btn btn-facebook mr-2 w-100">
            FACEBOOK
            快速登入
          </button>
          <hr class="divider" />
          <button type="button" class="l-btn btn-line mr-2 w-100">LINE 快速登入</button>
          <hr class="divider" />
          <input class="form-control mb-3" type="text" placeholder="E-MAIL" />
          <input class="form-control mb-3" type="text" placeholder="密碼" />
          <button type="button" class="l-btn btn-user mr-2 w-100">會員登入</button>
          <div class="form-check w-100 mt-2">
            <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
            <label class="form-check-label check-label" for="defaultCheck1">保持登入</label>
          </div>
          <div class="login-footer row mt-3">
            <div class="col-xs-6 text-center">
              <a href>
                <i class="fa fa-key" aria-hidden="true"></i> 忘記密碼嗎？
              </a>
            </div>
            <div class="col-xs-6 text-center">
              <a href="#" class="nav-link">
                <i class="fa fa-user" aria-hidden="true"></i> 註冊新會員
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>