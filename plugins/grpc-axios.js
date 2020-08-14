
import sqlpb from '@/assets/shoppb/sql_pb'
/**
 * 預設grpc 回傳處理
 * @param {*} err 
 * @param {*} resp 
 */
async function gRPC_callback(err, resp) {
  let store = $nuxt.$store;
  let nowTime = new Date().getTime() / 1000;
  let lastTime = store.state.account.token_time;

  // 檢查錯誤 grpc-status
  if (err !== null) {
    // token過期 自動重新更新
    if (err['grpc-status'] == 16 && nowTime - lastTime > 600) {
      await store.dispatch("account/get_token")
      await store.dispatch("account/whoAmI")
    }
    return { code: 0, data: `[${err['grpc-status']}] ${err['grpc-message']} ` };
  }
  const data = sqlpb.Response.deserializeBinary(resp.data);
  // 檢查getCode
  if (data.getCode() != 0) {
    return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
  }
  let res = data.getResult() ;
console.log("Res:",res,res.getAffectRow())
  return { code: 200, data: (res === undefined)? res.getAffectRow() : res.toJavaScript() };
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