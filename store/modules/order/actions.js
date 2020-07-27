
export default {
  // 建立訂單
  async create_Order(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "CreateOrder";
    let req = new app.orderpb.Order();
    if (condition !== null) req.setSelf(condition)
    // console.log("create_Order>>>",req.getConditionList())
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      console.log("create_Order 3>>>>>", resp)
      const data = app.sqlpb.Response.deserializeBinary(resp);
      console.log("create_Order 2>>>>>",data.getCode(),data.getInsertId(),data.getAffectRow())
      // todo:錯誤時候會跑兩次!?
      if (err !== null || data.getCode() != 0) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
      return { code: 200, data: data.getInsertId() };
    });

    return product;
  },

  /**
   * 建立訂單
   * @param {*} context 
   * @param {*} param1 
   */
  async complete_Order(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "CompleteOrder";
    let req = new app.orderpb.Order();
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
  /**
   * 消費紀錄
   * @param {*} context 
   * @param {*} param1 
   */
  async find_Order(context, { condition , pageLimit }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "FindOrder";
    let req = new app.sqlpb.Query();
    if (condition !== null) req.addCondition(condition)
    if (pageLimit !== null){ 
      req.setPageLimit(pageLimit)
      console.log("pageLimit:",req.toObject())
    }
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      const data = app.sqlpb.Response.deserializeBinary(resp);
      // todo:錯誤時候會跑兩次!?
      if (err !== null || data.getCode() != 0) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
      return { code: 200, data: data.getResult().toJavaScript(),limit:data.getPagelimit().toObject() };
    });

    return product;
  },

  // 取得超商門市資訊
  async get_cvsStoreInfo(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "GetCVSStore";

    let req = new app.orderpb.Logistics();
    if (condition !== null) req.setSelf(condition)
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      const data = app.sqlpb.Response.deserializeBinary(resp);
      // todo:錯誤時候會跑兩次!?
      if (err !== null || data.getCode() !== 0) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
      return { code: 200, data: data.getResult().toJavaScript() };
    });

    return product;
  },
  // 選擇超商門市
  async get_cvsStore(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.other.token };
    let method = "ChooseCVSStore";
    let req = new app.adpb.Adapter();
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

}