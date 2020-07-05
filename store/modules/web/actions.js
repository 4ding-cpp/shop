
export default {
  // 商品列表
  async get_website(context, {  token, condition = null }) {

    let app = this.app
    let metadata = { "x-4d-token": token };
    let method = "IndexWebsite";
    let req = new app.sqlpb.Query();
    if (condition !== null) req.addCondition(condition)
    // let product = await app.grpcFetch(method, metadata, req, (err, resp) => {
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      // todo:錯誤時候會跑兩次!?
      if (err !== null) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
     
      const data = app.sqlpb.Response.deserializeBinary(resp);
      context.commit("set_style", data.getResult().toJavaScript());
      return { code: 200, data: data.getResult().toJavaScript() };
    });
    return product;
  },


  
}