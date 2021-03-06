"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  // State => 1.選購 2.鎖定 3.取消 6.完成訂單
  // 計算購物車內容 *包含活動及折價券*
  get_completeCar: function get_completeCar(context, _ref) {
    var app, token, _ref$condition, condition, metadata, method, req, resp;

    return regeneratorRuntime.async(function get_completeCar$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = _ref.app, token = _ref.token, _ref$condition = _ref.condition, condition = _ref$condition === void 0 ? null : _ref$condition;
            metadata = {
              "x-4d-token": token
            };
            method = "CompleteCar";
            req = new app.carpb.Car(); // if (condition !== null) req.addCommodity(condition)

            if (condition !== null) req.setSelf(condition);
            _context.next = 7;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 7:
            resp = _context.sent;
            return _context.abrupt("return", resp);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;