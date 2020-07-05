export default function grpcAxios(axios, method, metadata, req, callback) {

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

  let config = {
    responseType: 'arraybuffer',
    headers: {
      "content-type": "application/grpc-web+proto",
      "x-grpc-web": "1",
      ...metadata,
    }
  }
  return axios.$post(
    `https://shop.4ding.site/ding4.ShopRPC/${method}`,
    new Uint8Array(ib),
    config
  ).then(buff => {
    return callback(null, buff.slice(5));
  }).catch((err) => {
    return { err: err }
  });

}