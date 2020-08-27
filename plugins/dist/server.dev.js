"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _sql_pb = _interopRequireDefault(require("@/assets/shoppb/sql_pb"));

var _car_pb = _interopRequireDefault(require("@/assets/shoppb/car_pb"));

var _order_pb = _interopRequireDefault(require("@/assets/shoppb/order_pb"));

var _adapter_pb = _interopRequireDefault(require("@/assets/shoppb/adapter_pb"));

var _productGoods_pb = _interopRequireDefault(require("@/assets/shoppb/product-goods_pb"));

var _freeback_pb = _interopRequireDefault(require("@/assets/shoppb/freeback_pb"));

var _customer_pb = _interopRequireDefault(require("@/assets/shoppb/customer_pb"));

var _md = _interopRequireDefault(require("./md5"));

var _grpcFetch = _interopRequireDefault(require("@/plugins/grpc-fetch"));

var _grpcAxios = _interopRequireDefault(require("@/plugins/grpc-axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(_ref) {
  var app = _ref.app,
      $axios = _ref.$axios;
  app.MD5 = _md["default"];
  app.sqlpb = _sql_pb["default"];
  app.carpb = _car_pb["default"];
  app.orderpb = _order_pb["default"];
  app.adpb = _adapter_pb["default"];
  app.prodpb = _productGoods_pb["default"];
  app.freebackpb = _freeback_pb["default"];
  app.customerpb = _customer_pb["default"]; // 伺服器AJAX用

  app.grpcFetch = _grpcFetch["default"];
  app.grpcAxios = _grpcAxios["default"];
}