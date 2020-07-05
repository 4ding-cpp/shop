
export default {
  // 金物流方式
  async get_external(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "FindExternal";
    let req = new app.sqlpb.Query();
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
  // 金物流方式
  async get_payment(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "FindPayment";
    let req = new app.sqlpb.Query();
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
  // 金物流方式
  async get_logistics(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "FindLogistics";
    let req = new app.sqlpb.Query();
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
}