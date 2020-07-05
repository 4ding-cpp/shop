
export default function grpcFetch(method, metadata, req, callback) {

  const bi = req.serializeBinary();
  const ib = new ArrayBuffer(bi.length + 5);
  new Uint8Array(ib, 0).set([
    bi.length / (256 * 256 * 256 * 256),
    bi.length / (256 * 256 * 256) % 256,
    bi.length / (256 * 256) % 256,
    bi.length / (256) % 256,
    bi.length % 256
  ])
  new Uint8Array(ib, 5).set(bi);

  return fetch(`https://shop.4ding.site/ding4.ShopRPC/${method}`, {
    method: "POST",
    headers: {
      "content-type": "application/grpc-web+proto",
      "x-grpc-web": "1",
      ...metadata,
    },

    body: new Uint8Array(ib),
  }).then(response => {
    //   response.headers.forEach(function(val, key) { console.log(key + ' -> ' + val); });
    return response.arrayBuffer();
  }).then(ab => {
    return callback(null, ab.slice(5));
  }).catch(function (err) {
    return { err: err }
  });
}