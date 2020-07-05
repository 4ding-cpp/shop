/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */



export default {
  set_style(state, o) {
    state.style = o
  },
  set_home_layout(state, o) {
    state.home.layout = o
  },
}
