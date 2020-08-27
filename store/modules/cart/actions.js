
export default {
  // State => 1.選購 2.鎖定 3.取消 6.完成訂單
  // 計算購物車內容 *包含活動及折價券*
  async get_completeCar(context, { app, token, condition = null }) {
    let metadata = { "x-4d-token": token };
    let method = "CompleteCar";
    let req = new app.carpb.Car();
    // if (condition !== null) req.addCommodity(condition)
    if (condition !== null) req.setSelf(condition)
    let resp = await app.grpcAxios(app.$axios, method, metadata, req);

    return resp;
  },

}