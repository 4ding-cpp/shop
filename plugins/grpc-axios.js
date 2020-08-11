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
  return axios.post(
    `https://4ding.store/ding4.ShopRPC/${method}`,
    new Uint8Array(ib),
    config
  ).then(response => {
    console.log({...response,data:response.data.slice(5)});
    return callback(null, response.data.slice(5));
  }).catch((err) => {
    return { err: err }
  });

}