/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var sql_pb = require('./sql_pb.js')

var customer_pb = require('./customer_pb.js')

var car_pb = require('./car_pb.js')

var order_pb = require('./order_pb.js')
const proto = {};
proto.ding4 = require('./customer.rpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.CustomerRPCClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.CustomerRPCPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_SignUp = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/SignUp',
  grpc.web.MethodType.UNARY,
  customer_pb.Customer,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_SignUp = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/SignUp',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SignUp,
      callback);
};


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/SignUp',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SignUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_SignIn = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/SignIn',
  grpc.web.MethodType.UNARY,
  customer_pb.Customer,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/SignIn',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SignIn,
      callback);
};


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/SignIn',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_IndexBase = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/IndexBase',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_IndexBase = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.indexBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/IndexBase',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_IndexBase,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.indexBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/IndexBase',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_IndexBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_IndexItem = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/IndexItem',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_IndexItem = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.indexItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/IndexItem',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_IndexItem,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.indexItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/IndexItem',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_IndexItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_IndexLayout = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/IndexLayout',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_IndexLayout = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.indexLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/IndexLayout',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_IndexLayout,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.indexLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/IndexLayout',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_IndexLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_FindProductClass = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/FindProductClass',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_FindProductClass = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.findProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindProductClass,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.findProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_FindProductF = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/FindProductF',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_FindProductF = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.findProductF =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindProductF,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.findProductF =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindProductF);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_FindProductSpec = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/FindProductSpec',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_FindProductSpec = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.findProductSpec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindProductSpec,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.findProductSpec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindProductSpec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_FindProductStack = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/FindProductStack',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_FindProductStack = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.findProductStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindProductStack,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.findProductStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindProductStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_FindSpecStack = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/FindSpecStack',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_FindSpecStack = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.findSpecStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindSpecStack,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.findSpecStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindSpecStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_MyCar = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/MyCar',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_MyCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.myCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/MyCar',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_MyCar,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.myCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/MyCar',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_MyCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_DeleteCar = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/DeleteCar',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_DeleteCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.deleteCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_DeleteCar,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.deleteCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_DeleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_CompleteCar = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/CompleteCar',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_CompleteCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.completeCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_CompleteCar,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.completeCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_CompleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_AppendCommodity = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/AppendCommodity',
  grpc.web.MethodType.UNARY,
  car_pb.Commodity,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_AppendCommodity = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.appendCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_AppendCommodity,
      callback);
};


/**
 * @param {!proto.ding4.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.appendCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_AppendCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_SubtractCommodity = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/SubtractCommodity',
  grpc.web.MethodType.UNARY,
  car_pb.Commodity,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_SubtractCommodity = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.subtractCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SubtractCommodity,
      callback);
};


/**
 * @param {!proto.ding4.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.subtractCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SubtractCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_AppendDiscount = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/AppendDiscount',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_AppendDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.appendDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_AppendDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.appendDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_AppendDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_SubtractDiscount = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/SubtractDiscount',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_SubtractDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.subtractDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SubtractDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.subtractDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SubtractDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_CreateOrder = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/CreateOrder',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_CreateOrder,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_PaymentOrder = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/PaymentOrder',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_PaymentOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.paymentOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_PaymentOrder,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.paymentOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_PaymentOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_SignOrder = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/SignOrder',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_SignOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.signOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/SignOrder',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SignOrder,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.signOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/SignOrder',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_SignOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_CustomerRPC_FindOrder = new grpc.web.MethodDescriptor(
  '/ding4.CustomerRPC/FindOrder',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_CustomerRPC_FindOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.CustomerRPCClient.prototype.findOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.CustomerRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindOrder,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.CustomerRPCPromiseClient.prototype.findOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.CustomerRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_CustomerRPC_FindOrder);
};


module.exports = proto.ding4;

