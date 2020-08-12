// var fetch = require('node-fetch');

export default {

  /**
   * 初次新增對話內容(目前暫時沒有區分append)
   * @param {*} context 
   * @param {*} param1 
   */
  async singIn(context, { condition = null }) {
    let app = this.app
    console.log(this.app)
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "SignIn";
    let req = new app.customerpb.Customer();
    if (condition !== null) req.setSelf(condition)
    console.log(req.toObject())
    let res = await app.grpcAxios(app.$axios, method, metadata, req);

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
    // if (condition !== null) req.setSelf(condition)
    let res = await app.grpcAxios(app.$axios, method, metadata, req);
    if(res.code === 200)  context.commit("set_token", res.data.token)
    return res;
  },
}