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
    state.token = o
    this.$cookies.set("4dingtoken",o,{
      maxAge: 60 * 60 * 24 * 7
    })
  },
  set_test(state, o) {
    state.test = o
  },
}
