"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _callee;

function _callee(_ref) {
  var app, route, store, redirect;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app = _ref.app, route = _ref.route, store = _ref.store, redirect = _ref.redirect;
          // 檢查是否登入
          if (store.state.account.user.name === undefined) redirect("/");

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}