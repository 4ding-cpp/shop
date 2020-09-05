"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://vuex.vuejs.org/en/getters.html
var _default = {
  /**
   * 取上方nav 分類
   */
  get_headerNav: function get_headerNav(state) {
    var res = [];
    if (state.style === null) return res;
    Object.keys(state.style).forEach(function (index) {
      res = state.style[index].nav; // res = state.nav 
    });
    return res;
  },

  /**
   * 取上方menu 分類
   */
  get_headerMenu: function get_headerMenu(state) {
    return state.menu;
  },

  /**
   * 取下方footer 分類
   */
  get_footer: function get_footer(state) {
    var res = [];
    if (state.style === null) return res;
    Object.keys(state.style).forEach(function (index) {
      res = state.style[index].footer;
    });
    return res;
  },

  /**
   * 
   */
  get_styleColor: function get_styleColor(state) {
    var res = {};
    if (state.style === null) return res;
    Object.keys(state.style).forEach(function (index) {
      res = _objectSpread({}, state.style[index].style_color, {
        logo: state.style[index].logo,
        style: state.style[index].style
      });
    });
    return res;
  }
};
exports["default"] = _default;