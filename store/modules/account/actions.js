// var fetch = require('node-fetch');
import passwordpb from '@/assets/shoppb/password_pb'

export default {

  /**
   * 登入
   * @param {*} context 
   * @param {*} param1 
   */
  async signIn(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "SignIn";
    let req = new app.customerpb.Customer();
    if (condition !== null) req.setSelf(condition)

    let res = await app.grpcAxios(app.$axios, method, metadata, req);
    if(res.code === 200) context.commit("set_token", { token: res.data, t: true })
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
  get_token(context) {
    let app = this.app
    let randStr = Math.floor((Math.random() * 100000000) + 1);
    let t = new Date().getTime();
    let token = app.MD5(`${randStr}${t}`)
    context.commit("set_token", { token: token, t: true })
    return { code: 200, data: { token: token } };
  },
  /**
   * 會員資料
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
    let app = this.app
    context.commit("set_token", { token: "", t: false })
    await app.store.dispatch("account/get_token")
    context.commit("set_user", {});
  },
  /**
   * 修改使用者資訊
   * @param {*} context 
   */
  async changeInfo(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "ChangeInfo";
    let req = new app.customerpb.Customer();
    if (condition !== null) req.setSelf(condition)
    let res = await app.grpcAxios(app.$axios, method, metadata, req);
    // if (res.code === 200) context.commit("set_user", res.data[0]);
    return res;
  },
  /**
   * 
   * @param {*} context 
   * @param {*} param1 
   */
  async changePassword(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "ChangePassword";
    let req = new passwordpb.Password();
    if (condition !== null) req.setSelf(condition)
    let res = await app.grpcAxios(app.$axios, method, metadata, req);
    // if (res.code === 200) context.commit("set_user", res.data[0]);
    return res;
  },
}