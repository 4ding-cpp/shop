// var fetch = require('node-fetch');

export default {

  /**
   * 登入
   * @param {*} context 
   * @param {*} param1 
   */
  async signIn(context, { condition = null }) {
    let app = this.app
    console.log(this.app)
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "SignIn";
    let req = new app.customerpb.Customer();
    if (condition !== null) req.setSelf(condition)

    let res = await app.grpcAxios(app.$axios, method, metadata, req);
    // console.log(res)
    return res;
  },
  /**
   * 註冊
   * @param {*} context 
   * @param {*} param1 
   */
  async signUp(context, { condition = null }) {
    let app = this.app
    console.log(this.app)
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "SignUp";
    let req = new app.customerpb.Customer();
    if (condition !== null) req.setSelf(condition)

    let res = await app.grpcAxios(app.$axios, method, metadata, req);
    console.log("signUp", res)
    return res;
  },
  /**
   * 初次新增對話內容(目前暫時沒有區分append)
   * @param {*} context 
   * @param {*} param1 
   */
  async get_token(context) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "Guest";
    let req = new app.customerpb.Customer();
    let res = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      // 檢查錯誤 grpc-status
      if (err !== null) return { code: 0, data: `[${err['grpc-status']}] ${err['grpc-message']} ` };

      const data = app.sqlpb.Response.deserializeBinary(resp.data);
      // 檢查getCode
      if (data.getCode() != 0) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
      return { code: 200, data: data.getResult().toJavaScript() };
    });
    if (res.code === 200) context.commit("set_token", { token: res.data.token, t: true })

    return res;
  },
  /**
   * 初次新增對話內容(目前暫時沒有區分append)
   * @param {*} context 
   * @param {*} param1 
   */
  async whoAmI(context) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "WhoAmI";
    let req = new app.sqlpb.Query();
    // if (condition !== null) req.setSelf(condition)
    let res = await app.grpcAxios(app.$axios, method, metadata, req);
    if (res.code === 200) context.commit("set_user", res.data[0]);
    return res;
  },

  /**
   * 初次新增對話內容(目前暫時沒有區分append)
   * @param {*} context 
   * @param {*} param1 
   */
  async logout(context) {
    context.commit("set_token", {token:"",t:false});
    context.commit("set_user", {});
  },
}