
import sqlpb from '@/assets/shoppb/sql_pb'
/**
 * 預設grpc 回傳處理
 * @param {*} err 
 * @param {*} resp 
 */
function gRPC_callback(err, resp) {

  // 檢查錯誤 grpc-status
  if (err !== null) {
    return { code: 0, data: `[${err['grpc-status']}] ${err['grpc-message']} ` };
  }
  const data = sqlpb.Response.deserializeBinary(resp.data);
  // 檢查getCode
  if (data.getCode() != 0) {
    return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
  }
  return { code: 200, data: data.getResult().toJavaScript() };
}

export default function grpcAxios(axios, method, metadata, req, callback = gRPC_callback) {

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
  ).then((response, err) => {
    err = (response.headers["grpc-status"]) ? response.headers : null;
    return callback(err, { ...response, data: response.data.slice(5) });
  }).catch((err) => {
    return { err: err }
  });

}