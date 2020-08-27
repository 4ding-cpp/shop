"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { Struct } from "google-protobuf/google/protobuf/struct_pb";
var _default = {
  example: function example() {
    // product_id=123
    var aa = new app.sqlpb.Condition();
    aa.setF('product_id');
    aa.setV("123");
    sqlpb.addCondition(aa); // 複數條件

    var obj = {
      condition: [{
        f: 'product_id',
        v: 'ZAEWkDzotw'
      }, {
        f: 'product_name',
        v: 'ZAEWkDzotw'
      }, {
        f: 'product_bb',
        v: 'ZAEWkDzotw'
      }]
    };
    var a = Struct.fromJavaScript(obj);
    var sqlpb = new app.sqlpb.Query();
    sqlpb.setSelf(a); // product_id like 123

    aa.setF('product_id');
    aa.setO(6);
    aa.setV("123");
    sqlpb.addCondition(aa); // product_id IN

    aa.setF('product_id');
    aa.setO(5);
    aa.setS(['asd', 'asda']);
    sqlpb.addCondition(aa);
  },

  /**
   * 取商品細項 + 瀏覽紀錄
   * @param {*} context 
   * @param {*} param1 
   */
  browse_product: function browse_product(context, _ref) {
    var app, token, _ref$condition, condition, metadata, method, req, product;

    return regeneratorRuntime.async(function browse_product$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = _ref.app, token = _ref.token, _ref$condition = _ref.condition, condition = _ref$condition === void 0 ? null : _ref$condition;
            metadata = {
              "x-4d-token": token
            };
            method = "BrowseProductGoods";
            req = new app.prodpb.ProductGoods();
            if (condition.id !== null) req.setShellId(condition.id);
            _context.next = 7;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 7:
            product = _context.sent;
            return _context.abrupt("return", product);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  },

  /**
   * 商品列表
   * @param {*} context 
   * @param {*} param1 
   */
  get_product: function get_product(context, _ref2) {
    var app, token, _ref2$condition, condition, metadata, method, req, product;

    return regeneratorRuntime.async(function get_product$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = _ref2.app, token = _ref2.token, _ref2$condition = _ref2.condition, condition = _ref2$condition === void 0 ? null : _ref2$condition;
            metadata = {
              "x-4d-token": token
            };
            method = "FindProductGoods";
            req = new app.sqlpb.Query();
            if (condition !== null) req.addCondition(condition);
            _context2.next = 7;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 7:
            product = _context2.sent;
            return _context2.abrupt("return", product);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    });
  },

  /**
   * 商品分類列表
   * @param {*} context 
   * @param {*} param1 
   */
  get_productClass: function get_productClass(context, _ref3) {
    var app, token, _ref3$condition, condition, metadata, method, req, product;

    return regeneratorRuntime.async(function get_productClass$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            app = _ref3.app, token = _ref3.token, _ref3$condition = _ref3.condition, condition = _ref3$condition === void 0 ? null : _ref3$condition;
            metadata = {
              "x-4d-token": token
            };
            method = "FindProductClass";
            req = new app.sqlpb.Query();
            if (condition !== null) req.addCondition(condition);
            _context3.next = 7;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req, function (err, resp) {
              // todo:錯誤時候會跑兩次!?
              if (err !== null) {
                return {
                  code: 0,
                  data: "[".concat(data.getCode(), "] ").concat(data.getMessage(), " ")
                };
              }

              var data = app.sqlpb.Response.deserializeBinary(resp.data);
              return {
                code: 200,
                data: data.getResult().toJavaScript()
              };
            }));

          case 7:
            product = _context3.sent;
            return _context3.abrupt("return", product);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    });
  },

  /**
     * 取我的最愛
     * @param {*} context 
     * @param {*} param1 
     */
  get_MyFavorite: function get_MyFavorite(context, _ref4) {
    var _ref4$condition, condition, app, metadata, method, req, ArrayID, list;

    return regeneratorRuntime.async(function get_MyFavorite$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref4$condition = _ref4.condition, condition = _ref4$condition === void 0 ? null : _ref4$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "FindFavorite";
            req = new app.sqlpb.Query();
            ArrayID = [0];
            if (condition !== null) req.addCondition(condition);
            _context4.next = 9;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 9:
            list = _context4.sent;

            if (list.code === 200) {
              ArrayID = list.data.filter(function (element, index, arr) {
                return arr.indexOf(element) === index;
              });
              ArrayID.push("0");
              console.log("ArrayID", ArrayID);
            }

            context.commit("set_favorite", ArrayID);
            return _context4.abrupt("return", _objectSpread({}, list, {
              data: ArrayID
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, this);
  },

  /**
   * 新增我的最愛
   * @param {*} context 
   * @param {*} param1 
   */
  set_MyFavorite: function set_MyFavorite(context, _ref5) {
    var _ref5$condition, condition, app, metadata, method, req, list;

    return regeneratorRuntime.async(function set_MyFavorite$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref5$condition = _ref5.condition, condition = _ref5$condition === void 0 ? {
              id: null,
              pid: null
            } : _ref5$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "AddProductFavorite";
            req = new app.prodpb.ProductGoods();
            if (condition.id !== null) req.setShellId(condition.id);
            if (condition.pid !== null) req.setProductId(condition.pid);
            _context5.next = 9;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 9:
            list = _context5.sent;
            return _context5.abrupt("return", list);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, this);
  },

  /**
   * 刪除我的最愛
   * @param {*} context 
   * @param {*} param1 
   */
  del_MyFavorite: function del_MyFavorite(context, _ref6) {
    var _ref6$condition, condition, app, metadata, method, req, list;

    return regeneratorRuntime.async(function del_MyFavorite$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref6$condition = _ref6.condition, condition = _ref6$condition === void 0 ? {
              id: null,
              pid: null
            } : _ref6$condition;
            app = this.app;
            metadata = {
              "x-4d-token": app.store.state.account.token
            };
            method = "DelProductFavorite";
            req = new app.prodpb.ProductGoods();
            if (condition.id !== null) req.setShellId(condition.id);
            if (condition.pid !== null) req.setProductId(condition.pid);
            _context6.next = 9;
            return regeneratorRuntime.awrap(app.grpcAxios(app.$axios, method, metadata, req));

          case 9:
            list = _context6.sent;
            return _context6.abrupt("return", list);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, null, this);
  }
};
exports["default"] = _default;