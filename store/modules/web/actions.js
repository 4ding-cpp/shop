
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
      console.log(data.getResult())
      context.commit("set_style", data.getResult().toJavaScript());
      return { code: 200, data: data.getResult().toJavaScript() };
    });
    return product;
  },

  /**
   * 首次登入拿到畫面
   * @param {*} context 
   * @param {*} param1 
   */
  async init_layout(context, { token , layout }) {
    let app = this.app
    let store = this.app.store
    let prod = {
      list: [],// 紀錄ID
      response: [],// 紀錄產品結果
    };
    let len = layout.length ;
    for (let i = 0; i < len; i++) {
      let result = layout[i]
      // 只處理商品輪播 && 商品列表 
      if (result.type != 2 && result.type != 3) continue;
      let find_index = (prod.list).indexOf(result.target.class)
      if (find_index < 0) {
        // 搜尋該分類的產品列表
        let cond = new app.sqlpb.Condition();
        cond.setO(10).setV(result.target.class);
        let response = await store.dispatch("product/get_product", {
          app: app,
          token: token,
          condition: cond
        });
       
        prod.list.push(result.target.class);
        prod.response.push(response.data)
        console.log(result,response)
        layout[i].prod = response.data;
        console.log("type:",result.type ,"prod",layout[i].prod)
      }else{
        layout[i].prod = prod.response[find_index];
        consola.log("type:",result.type ,"prod",layout)
      }
    }
    context.commit("set_home_layout", layout);
    return layout
  }
  
}