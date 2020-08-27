"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// https://vuex.vuejs.org/en/actions.html
var _default = {
  /**
   * SSR 模式 首次模式
   * @param {*} param0 
   * @param {*} param1 
   */
  nuxtServerInit: function nuxtServerInit(_ref, _ref2) {
    var commit, dispatch, app, req;
    return regeneratorRuntime.async(function nuxtServerInit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, dispatch = _ref.dispatch, app = _ref.app;
            req = _ref2.req;
            _context.next = 4;
            return regeneratorRuntime.awrap(dispatch("init"));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },

  /**
   * 初始化流程
   * @param {*} context 
   */
  init: function init(context) {
    var app, store, token, resp, _resp, conf, favorte, result;

    return regeneratorRuntime.async(function init$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = this.app;
            store = this.app.store;
            token = app.$cookies.get('4dingtoken');
            console.log("cookie:", token);

            if (!(token == "" || token === undefined)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 7;
            return regeneratorRuntime.awrap(store.dispatch("account/get_token"));

          case 7:
            resp = _context2.sent;
            token = resp.data.token;
            _context2.next = 17;
            break;

          case 11:
            _context2.next = 13;
            return regeneratorRuntime.awrap(store.commit('account/set_token', {
              token: token,
              t: false
            }));

          case 13:
            _context2.next = 15;
            return regeneratorRuntime.awrap(store.dispatch("account/whoAmI"));

          case 15:
            _resp = _context2.sent;
            console.log(">>>>身分檢查判定:", _resp);

          case 17:
            _context2.next = 19;
            return regeneratorRuntime.awrap(store.dispatch("other/appConf", {
              token: token
            }));

          case 19:
            conf = _context2.sent;
            console.log("appConf>>", conf); // 我的最愛列表

            _context2.next = 23;
            return regeneratorRuntime.awrap(store.dispatch("product/get_MyFavorite", {
              condition: null
            }));

          case 23:
            favorte = _context2.sent;
            console.log("favorte>>", favorte); // 首頁相關

            _context2.next = 27;
            return regeneratorRuntime.awrap(store.dispatch("web/get_website", {
              token: token,
              condition: null
            }));

          case 27:
            result = _context2.sent;
            console.log(">>", _typeof(null), result.data);

            if (!(result.data !== undefined && result.data.length !== 0)) {
              _context2.next = 34;
              break;
            }

            _context2.next = 32;
            return regeneratorRuntime.awrap(store.dispatch("web/init_layout", {
              token: token,
              layout: result.data[0].layout
            }));

          case 32:
            _context2.next = 34;
            return regeneratorRuntime.awrap(store.dispatch("web/init_menu", {
              token: token,
              menu: result.data[0].menu
            }));

          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  },

  /**
   * storage 內容設定置vuex內
   */
  storage_init: function storage_init(context) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) return;
    context.commit("cart/set_cart", cart);
    var cart_info = JSON.parse(localStorage.getItem("cart_info"));
    if (cart_info === null) return;
    context.commit("cart/set_cart_info", cart_info);
  },

  /**
   * 檢查首次登入的資訊是否存在
   * @param {*} context 
   */
  check_init: function check_init(context) {
    var store;
    return regeneratorRuntime.async(function check_init$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            store = this.app.store.state;
            _context3.t0 = true;
            _context3.next = _context3.t0 === (store.account.token !== "") ? 4 : 6;
            break;

          case 4:
            console.log("檢查判定非首次!");
            return _context3.abrupt("return", true);

          case 6:
            console.log("檢查判定首次!");
            return _context3.abrupt("return", false);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this);
  },
  loading: function loading(context, o) {
    context.commit("set_loading", o);
  },
  // 通用
  _store: function _store(context, o) {
    // 檢查包含以下參數
    switch (true) {
      case !o.act: //動作

      case o.data === undefined:
        //資料
        break;

      default:
        context.commit(o.act, o.data);
    }
  }
};
exports["default"] = _default;