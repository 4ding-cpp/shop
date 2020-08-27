"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * product module.
 */
var _default = {
  // 設定產品列表
  set_product_list: function set_product_list(state, o) {
    state.list = o;
  },

  /**
   * 
   * @param {*} state 
   * @param {*} o 
   */
  set_favorite: function set_favorite(state, o) {
    state.favorte = o;
  }
};
exports["default"] = _default;