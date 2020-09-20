
export default {
  // 商品列表
  async get_website(context, { token, condition = null }) {

    let app = this.app
    let metadata = { "x-4d-token": token };
    let method = "IndexWebsite";
    let req = new app.sqlpb.Query();
    if (condition !== null) req.addCondition(condition)
    // let product = await app.grpcFetch(method, metadata, req, (err, resp) => {
    let result = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      // todo:錯誤時候會跑兩次!?
      if (err !== null) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }

      const data = app.sqlpb.Response.deserializeBinary(resp.data);
      context.commit("set_style", data.getResult().toJavaScript());
      console.log("IndexWebsite:", data.getResult().toJavaScript() )
      return { code: 200, data: data.getResult().toJavaScript() };
    });
    return result;
  },

  /**
   * 拿到首頁資訊 整理資料
   * @param {*} context 
   * @param {*} param1 
   */
  async init_layout(context, { token, layout }) {
    let app = this.app
    let store = this.app.store

    let len = layout.length;
    for (let i = 0; i < len; i++) {
      let result = layout[i]
      // 只處理商品輪播 && 商品列表 
      if (result.type != 2) continue;

      // 收到商品ID 再送API 取商品詳細資訊
      if ((result.target).hasOwnProperty('items')) {
        let response = await store.dispatch("web/sortType2Items", {
          product: result.target.items,
        });
        layout[i].prod = response.data;
      }
    }
    context.commit("set_home_layout", layout);
    return layout
  },

  /**
   * 拿到首頁資訊 整理資料
   * @param {*} context 
   * @param {*} param1 
   */
  async init_menu(context, { token, menu }) {
    let app = this.app
    let store = this.app.store

    for (let i in menu) {
      let result = menu[i];

      // 商品分類
      if (
        !!result.target &&
        result.target.hasOwnProperty("class") &&
        result.target.class.length > 0
      ) {
        let tempClass = []; //
       
        for (let j in result.target.class) {
          let classId = result.target.class[j];
          let cond = new app.sqlpb.Condition();
          cond.setF("class_id").setV(classId);
          let resp = await store.dispatch("product/get_productClass", {
            app: app,
            token: token,
            condition: cond,
          });
          if (resp.code == 200) tempClass.push(resp.data.shift());
        }
        menu[i] = { ...menu[i], class: tempClass };
      }
      // 進行中活動 顯示在左側
      if (!!result.activity ){
        // console.log(result.activity)
      }
    }
    context.commit("set_menu", menu);
  },

  /**
   * TYPE=2  商品列表
   * 收到的是分類館(result.target.class)
   */
  async sortType2Class(context, { }) {

  },
  /**
   * TYPE=2  商品列表
   * 收到的是商品ID(result.target.items)
   */
  async sortType2Items(context, { product }) {
    let app = this.app
    let store = this.app.store

    let cond = new app.sqlpb.Condition();
    cond.setF('product_id').setO(5).setSList(product)
    let response = await store.dispatch("product/get_product", {
      app: app,
      token: store.state.account.token,
      condition: cond
    });
    return response;
  },
  /**
     * 
     * @param {*} context 
     * @param {*} param1 
     */
  async get_WebPage(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "FindWebPage";
    let req = new app.sqlpb.Query();
    if (condition !== null) req.addCondition(condition)
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      const data = app.sqlpb.Response.deserializeBinary(resp.data);
      // todo:錯誤時候會跑兩次!?
      if (err !== null || data.getCode() != 0) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
      return { code: 200, data: data.getResult().toJavaScript() };
    });

    return product;
  },
}