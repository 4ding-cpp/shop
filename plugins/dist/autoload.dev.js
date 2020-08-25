"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _simpleVueValidator = _interopRequireDefault(require("simple-vue-validator"));

var _md = _interopRequireDefault(require("./md5"));

var _sql_pb = _interopRequireDefault(require("@/assets/shoppb/sql_pb"));

var _car_pb = _interopRequireDefault(require("@/assets/shoppb/car_pb"));

var _order_pb = _interopRequireDefault(require("@/assets/shoppb/order_pb"));

var _customer_pb = _interopRequireDefault(require("@/assets/shoppb/customer_pb"));

var _grpcAxios = _interopRequireDefault(require("@/plugins/grpc-axios"));

var _grpcFetch = _interopRequireDefault(require("@/plugins/grpc-fetch"));

var _vueJsModal = _interopRequireDefault(require("vue-js-modal"));

var _vuejsPaginate = _interopRequireDefault(require("vuejs-paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('plugins autoload');
_vue["default"].prototype.Validator = window.Validator = _simpleVueValidator["default"].Validator;

_simpleVueValidator["default"].extendTemplates({
  length: '長度必須等於{0} '
});

_vue["default"].use(_simpleVueValidator["default"]); // MD5 


_vue["default"].prototype.MD5 = _md["default"]; // use grpc

_vue["default"].prototype.sqlpb = _sql_pb["default"];
_vue["default"].prototype.carpb = _car_pb["default"];
_vue["default"].prototype.orderpb = _order_pb["default"];
_vue["default"].prototype.customerpb = _customer_pb["default"];
_vue["default"].prototype.grpcAxios = _grpcAxios["default"];
_vue["default"].prototype.grpcFetch = _grpcFetch["default"];

_vue["default"].use(_vueJsModal["default"]);

_vue["default"].component('paginate', _vuejsPaginate["default"]);