"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = grpcAxios;

var _sql_pb = _interopRequireDefault(require("@/assets/shoppb/sql_pb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 預設grpc 回傳處理
 * @param {*} err 
 * @param {*} resp 
 */
function gRPC_callback(err, resp) {
  var store, nowTime, lastTime, data, res;
  return regeneratorRuntime.async(function gRPC_callback$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = $nuxt.$store;
          nowTime = new Date().getTime() / 1000;
          lastTime = store.state.account.token_time;
          console.log(err); // 檢查錯誤 grpc-status

          if (!(err !== null)) {
            _context.next = 13;
            break;
          }

          if (!(err['grpc-status'] == 16 && nowTime - lastTime > 600)) {
            _context.next = 12;
            break;
          }

          alert("e04");
          _context.next = 9;
          return regeneratorRuntime.awrap(store.dispatch("account/get_token"));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(store.dispatch("account/whoAmI"));

        case 11:
          location.reload();

        case 12:
          return _context.abrupt("return", {
            code: 0,
            data: "[".concat(err['grpc-status'], "] ").concat(err['grpc-message'], " ")
          });

        case 13:
          data = _sql_pb["default"].Response.deserializeBinary(resp.data); // 檢查getCode

          if (!(data.getCode() != 0)) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", {
            code: 0,
            data: "[".concat(data.getCode(), "] ").concat(data.getMessage(), " ")
          });

        case 16:
          res = data.getResult();
          return _context.abrupt("return", {
            code: 200,
            data: res === undefined ? data.getAffectRow() : res.toJavaScript(),
            insert: data.getInsertId(),
            update: data.getAffectRow()
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}

function grpcAxios(axios, method, metadata, req) {
  var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gRPC_callback;
  var bi = req.serializeBinary();
  var ib = new ArrayBuffer(bi.length + 5);
  new Uint8Array(ib, 0).set([bi.length / (256 * 256 * 256 * 256), bi.length / (256 * 256 * 256) % 256, bi.length / (256 * 256) % 256, bi.length / 256 % 256, bi.length % 256]);
  new Uint8Array(ib, 5).set(bi);
  var config = {
    responseType: 'arraybuffer',
    headers: _objectSpread({
      "content-type": "application/grpc-web+proto",
      "x-grpc-web": "1"
    }, metadata)
  };
  return axios.post("/ding4.ShopRPC/".concat(method), new Uint8Array(ib), config).then(function (response, err) {
    err = response.headers["grpc-status"] ? response.headers : null;
    return callback(err, _objectSpread({}, response, {
      data: response.data.slice(5)
    }));
  })["catch"](function (err) {
    return {
      err: err
    };
  });
}