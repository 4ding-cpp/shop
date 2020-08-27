/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */



export default {
  // token
  set_token(state, o) {
    state.token = o.token
    // 紀錄更新時間
    state.token_time = (o.t === true) ? new Date().getTime() / 1000 : 0;
    this.$cookies.set("4dingtoken", o.token, {
      maxAge: 60 * 60 * 24 * 7
    })
  },
  set_user(state, o) {
    state.user = o
  },
  set_test(state, o) {
    state.test = o
  },
}
