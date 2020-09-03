// var fetch = require('node-fetch');

export default {
 
  /**
   * config
   * @param {*} context 
   * @param {*} param1 
   */
  async appConf(context, { token = null }) {
    let app = this.app
    console.log(this.app)
    let metadata = { "x-4d-token": token };
    let method = "AppConf";
    let req = new app.sqlpb.Query();
    let res = await app.grpcAxios(app.$axios, method, metadata, req);
    if(res.code === 200) context.commit("set_config", res.data)
    return res;
  },
  
}