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
          // 檢查是否初始
          console.log("middleware auth");
          _context.next = 4;
          return regeneratorRuntime.awrap(store.dispatch("check_init"));

        case 4:
          _context.t0 = _context.sent;

          if (!(_context.t0 === false)) {
            _context.next = 9;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(store.dispatch("init"));

        case 8:
          store.dispatch("storage_init");

        case 9:
          ;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}