"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// var fetch = require('node-fetch');
var _default = {
  /**
   * config
   * @param {*} context 
   * @param {*} param1 
   */
  appConf: function appConf(context, _ref) {
    var _ref$token, token, app, metadata, method, req, res;

    return regeneratorRuntime.async(function appConf$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$token = _ref.token, token = _ref$token === void 0 ? null : _ref$token;
            app = this.app;
            console.log(this.app);
            metadata = {
              "x-4d-token": token
            };
            method = "AppConf";
            req = new app.sqlpb.Query();
            _context.next = 8;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 8:
            res = _context.sent;
            if (res.code === 200) context.commit("set_config", res.data);
            return _context.abrupt("return", res);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
};
exports["default"] = _default;