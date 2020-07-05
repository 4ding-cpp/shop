/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */



export default {
  // 設定購物車內容
  set_order(state, o) {
    state.content = o
  },
  // 設定某一筆購物車
  update_order(state, o) {
    Object.keys(o).map(function(k, i) {
      var value = o[k];
      state.content[`${k}`] = value
  });
    
  },
  
}
