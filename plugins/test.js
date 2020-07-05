import sql_pb from '@/assets/shoppb/sql_pb'

export default function ({ app , $axios }) {
  app.sqlpb = sql_pb
  // 伺服器AJAX用
  app.serverPOST = function (method, metadata, callback){
    let req = new sql_pb.Query();
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
        return response.arrayBuffer();
    }).then(ab => {
      return callback(null, ab.slice(5));
    });
  }

}