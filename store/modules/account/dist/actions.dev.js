"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _password_pb = _interopRequireDefault(require("@/assets/shoppb/password_pb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// var fetch = require('node-fetch');
var _default = {
  /**
   * 登入
   * @param {*} context 
   * @param {*} param1 
   */
  signIn: function signIn(context, _ref) {
    var _ref$condition, condition, app, metadata, method, req, res;

    return regeneratorRuntime.async(function signIn$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$condition = _ref.condition, condition = _ref$condition === void 0 ? null : _ref$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "SignIn";
            req = new app.customerpb.Customer();
            if (condition !== null) req.setSelf(condition);
            _context.next = 8;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 8:
            res = _context.sent;
            if (res.code === 200) context.commit("set_token", {
              token: res.data,
              t: true
            });
            return _context.abrupt("return", res);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },

  /**
   * 註冊
   * @param {*} context 
   * @param {*} param1 
   */
  signUp: function signUp(context, _ref2) {
    var _ref2$condition, condition, app, metadata, method, req, res;

    return regeneratorRuntime.async(function signUp$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$condition = _ref2.condition, condition = _ref2$condition === void 0 ? null : _ref2$condition;
            app = this.app;
            console.log(this.app);
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "SignUp";
            req = new app.customerpb.Customer();
            if (condition !== null) req.setSelf(condition);
            _context2.next = 9;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 9:
            res = _context2.sent;
            if (res.code === 200) context.commit("set_token", {
              token: res.data,
              t: true
            });
            console.log("signUp", res);
            return _context2.abrupt("return", res);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  },

  /**
   * FB登入 / 註冊
   * @param {*} context 
   * @param {*} param1 
   */
  signFb: function signFb(context, _ref3) {
    var _ref3$condition, condition, app, metadata, method, req, res;

    return regeneratorRuntime.async(function signFb$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref3$condition = _ref3.condition, condition = _ref3$condition === void 0 ? null : _ref3$condition;
            app = this.app;
            console.log(this.app);
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "SignFb";
            req = new app.customerpb.Customer();
            if (condition !== null) req.setSelf(condition);
            _context3.next = 9;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 9:
            res = _context3.sent;
            if (res.code === 200) context.commit("set_token", {
              token: res.data,
              t: true
            });
            console.log("SignFb", res);
            return _context3.abrupt("return", res);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this);
  },

  /**
   * 初次新增對話內容(目前暫時沒有區分append)
   * @param {*} context 
   * @param {*} param1 
   */
  get_token: function get_token(context) {
    var app = this.app;
    var randStr = Math.floor(Math.random() * 100000000 + 1);
    var t = new Date().getTime();
    var token = app.MD5("".concat(randStr).concat(t));
    context.commit("set_token", {
      token: token,
      t: true
    });
    return {
      code: 200,
      data: {
        token: token
      }
    };
  },

  /**
   * 會員資料
   * @param {*} context 
   * @param {*} param1 
   */
  whoAmI: function whoAmI(context) {
    var app, metadata, method, req, res;
    return regeneratorRuntime.async(function whoAmI$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "WhoAmI";
            req = new app.sqlpb.Query(); // if (condition !== null) req.setSelf(condition)

            _context4.next = 6;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 6:
            res = _context4.sent;
            if (res.code === 200) context.commit("set_user", res.data[0]);
            return _context4.abrupt("return", res);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, null, this);
  },

  /**
   * 初次新增對話內容(目前暫時沒有區分append)
   * @param {*} context 
   * @param {*} param1 
   */
  logout: function logout(context) {
    var app;
    return regeneratorRuntime.async(function logout$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            app = this.app;
            context.commit("set_token", {
              token: "",
              t: false
            });
            _context5.next = 4;
            return regeneratorRuntime.awrap(app.store.dispatch("account/get_token"));

          case 4:
            context.commit("set_user", {});

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, null, this);
  },

  /**
   * 修改使用者資訊
   * @param {*} context 
   */
  changeInfo: function changeInfo(context, _ref4) {
    var _ref4$condition, condition, app, metadata, method, req, res;

    return regeneratorRuntime.async(function changeInfo$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref4$condition = _ref4.condition, condition = _ref4$condition === void 0 ? null : _ref4$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "ChangeInfo";
            req = new app.customerpb.Customer();
            if (condition !== null) req.setSelf(condition);
            _context6.next = 8;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 8:
            res = _context6.sent;
            return _context6.abrupt("return", res);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, null, this);
  },

  /**
   * 
   * @param {*} context 
   * @param {*} param1 
   */
  changePassword: function changePassword(context, _ref5) {
    var _ref5$condition, condition, app, metadata, method, req, res;

    return regeneratorRuntime.async(function changePassword$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _ref5$condition = _ref5.condition, condition = _ref5$condition === void 0 ? null : _ref5$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "ChangePassword";
            req = new _password_pb["default"].Password();
            if (condition !== null) req.setSelf(condition);
            _context7.next = 8;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 8:
            res = _context7.sent;
            return _context7.abrupt("return", res);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, null, this);
  }
};
exports["default"] = _default;