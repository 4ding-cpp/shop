"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  // 建立訂單
  create_Order: function create_Order(context, _ref) {
    var _ref$condition, condition, app, metadata, method, req, product;

    return regeneratorRuntime.async(function create_Order$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$condition = _ref.condition, condition = _ref$condition === void 0 ? null : _ref$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "CreateOrder";
            req = new app.orderpb.Order();
            if (condition !== null) req.setSelf(condition); // console.log("create_Order>>>",req.getConditionList())

            _context.next = 8;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req, function (err, resp) {
              console.log("create_Order 3>>>>>", resp);
              var data = app.sqlpb.Response.deserializeBinary(resp.data);
              console.log("create_Order 2>>>>>", data.getCode(), data.getInsertId(), data.getAffectRow()); // todo:錯誤時候會跑兩次!?

              if (err !== null || data.getCode() != 0) {
                return {
                  code: 0,
                  data: "[".concat(data.getCode(), "] ").concat(data.getMessage(), " ")
                };
              }

              return {
                code: 200,
                data: data.getInsertId()
              };
            }));

          case 8:
            product = _context.sent;
            return _context.abrupt("return", product);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },

  /**
   * 建立訂單
   * @param {*} context 
   * @param {*} param1 
   */
  complete_Order: function complete_Order(context, _ref2) {
    var _ref2$condition, condition, app, metadata, method, req, product;

    return regeneratorRuntime.async(function complete_Order$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$condition = _ref2.condition, condition = _ref2$condition === void 0 ? null : _ref2$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "CompleteOrder";
            req = new app.orderpb.Order();
            if (condition !== null) req.setSelf(condition);
            _context2.next = 8;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req, function (err, resp) {
              var data = app.sqlpb.Response.deserializeBinary(resp.data); // todo:錯誤時候會跑兩次!?

              if (err !== null || data.getCode() != 0) {
                return {
                  code: 0,
                  data: "[".concat(data.getCode(), "] ").concat(data.getMessage(), " ")
                };
              }

              return {
                code: 200,
                data: data.getResult().toJavaScript()
              };
            }));

          case 8:
            product = _context2.sent;
            return _context2.abrupt("return", product);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  },

  /**
   * 消費紀錄
   * @param {*} context 
   * @param {*} param1 
   */
  find_Order: function find_Order(context, _ref3) {
    var _ref3$condition, condition, _ref3$pageLimit, pageLimit, app, metadata, method, req, product;

    return regeneratorRuntime.async(function find_Order$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref3$condition = _ref3.condition, condition = _ref3$condition === void 0 ? null : _ref3$condition, _ref3$pageLimit = _ref3.pageLimit, pageLimit = _ref3$pageLimit === void 0 ? null : _ref3$pageLimit;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "FindOrder";
            req = new app.sqlpb.Query();
            if (condition !== null) req.addCondition(condition);

            if (pageLimit !== null) {
              req.setPageLimit(pageLimit);
              console.log("pageLimit:", req.toObject());
            }

            _context3.next = 9;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req, function (err, resp) {
              var data = app.sqlpb.Response.deserializeBinary(resp.data); // todo:錯誤時候會跑兩次!?

              if (err !== null || data.getCode() != 0) {
                return {
                  code: 0,
                  data: "[".concat(data.getCode(), "] ").concat(data.getMessage(), " ")
                };
              }

              return {
                code: 200,
                data: data.getResult().toJavaScript(),
                limit: data.getPagelimit().toObject()
              };
            }));

          case 9:
            product = _context3.sent;
            return _context3.abrupt("return", product);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this);
  },

  /**
   * 優惠卷清單
   * @param {*} context 
   * @param {*} param1 
   */
  find_Coupon: function find_Coupon(context, _ref4) {
    var condition, pageLimit, app, metadata, method, req, product;
    return regeneratorRuntime.async(function find_Coupon$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            condition = _ref4.condition, pageLimit = _ref4.pageLimit;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "FindCoupon";
            req = new app.sqlpb.Query();
            if (condition !== null) req.addCondition(condition);
            if (pageLimit !== null) req.setPageLimit(pageLimit);
            _context4.next = 9;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req, function (err, resp) {
              var data = app.sqlpb.Response.deserializeBinary(resp.data); // todo:錯誤時候會跑兩次!?

              if (err !== null || data.getCode() != 0) {
                return {
                  code: 0,
                  data: "[".concat(data.getCode(), "] ").concat(data.getMessage(), " ")
                };
              }

              return {
                code: 200,
                data: data.getResult().toJavaScript(),
                limit: data.getPagelimit().toObject()
              };
            }));

          case 9:
            product = _context4.sent;
            return _context4.abrupt("return", product);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, this);
  },
  // 取得超商門市資訊
  get_cvsStoreInfo: function get_cvsStoreInfo(context, _ref5) {
    var _ref5$condition, condition, app, metadata, method, req, product;

    return regeneratorRuntime.async(function get_cvsStoreInfo$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref5$condition = _ref5.condition, condition = _ref5$condition === void 0 ? null : _ref5$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "GetCVSStore";
            req = new app.orderpb.Logistics();
            if (condition !== null) req.setSelf(condition);
            _context5.next = 8;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req, function (err, resp) {
              var data = app.sqlpb.Response.deserializeBinary(resp.data); // todo:錯誤時候會跑兩次!?

              if (err !== null || data.getCode() !== 0) {
                return {
                  code: 0,
                  data: "[".concat(data.getCode(), "] ").concat(data.getMessage(), " ")
                };
              }

              return {
                code: 200,
                data: data.getResult().toJavaScript()
              };
            }));

          case 8:
            product = _context5.sent;
            return _context5.abrupt("return", product);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, null, this);
  },
  // 選擇超商門市
  get_cvsStore: function get_cvsStore(context, _ref6) {
    var _ref6$condition, condition, app, metadata, method, req, product;

    return regeneratorRuntime.async(function get_cvsStore$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref6$condition = _ref6.condition, condition = _ref6$condition === void 0 ? null : _ref6$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "ChooseCVSStore";
            req = new app.adpb.Adapter();
            if (condition !== null) req.setSelf(condition);
            _context6.next = 8;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req, function (err, resp) {
              var data = app.sqlpb.Response.deserializeBinary(resp.data); // todo:錯誤時候會跑兩次!?

              if (err !== null || data.getCode() != 0) {
                return {
                  code: 0,
                  data: "[".concat(data.getCode(), "] ").concat(data.getMessage(), " ")
                };
              }

              return {
                code: 200,
                data: data.getResult().toJavaScript()
              };
            }));

          case 8:
            product = _context6.sent;
            return _context6.abrupt("return", product);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, null, this);
  }
};
exports["default"] = _default;