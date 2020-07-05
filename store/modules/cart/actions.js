
export default {
  // State => 1.選購 2.鎖定 3.取消 6.完成訂單
  // 計算購物車內容 *包含活動及折價券*
  async get_completeCar(context, { app, token, condition = null }) {
    let metadata = { "x-4d-token": token };
    let method = "CompleteCar";
    let req = new app.carpb.Car();
    // if (condition !== null) req.addCommodity(condition)
    if (condition !== null) req.setSelf(condition)
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      const data = app.sqlpb.Response.deserializeBinary(resp);
      // todo:錯誤時候會跑兩次!?
      if (err !== null || data.getCode() != 0) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
      return { code: 200, data: data.getResult().toJavaScript() };
    });

    return product;
  },

  async get_findCar(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "FindCar";
    let req = new app.sqlpb.Query();
    // if (condition !== null) req.addCommodity(condition)
    if (condition !== null) req.addCondition(condition)
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      const data = app.sqlpb.Response.deserializeBinary(resp);
      // todo:錯誤時候會跑兩次!?
      if (err !== null || data.getCode() != 0) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
      return { code: 200, data: data.getResult().toJavaScript() };
    });

    return product;
  },
  // 鎖定購物車
  async get_lockCar(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "LockCar";
    let req = new app.carpb.Car();
    if (condition !== null) req.setSelf(condition)
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      const data = app.sqlpb.Response.deserializeBinary(resp);
      // todo:錯誤時候會跑兩次!?
      if (err !== null || data.getCode() != 0) {
        return { code: 0, data: data.getMessage() };
      }
      console.log("get_lockCar>>>>",data.getAffectRow())
      return { code: 200, data: data.getAffectRow() };
    });

    return product;
  }
}