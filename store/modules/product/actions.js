
// import { Struct } from "google-protobuf/google/protobuf/struct_pb";

export default {
  example() {
    // product_id=123
    let aa = new app.sqlpb.Condition();
    aa.setF('product_id')
    aa.setV("123")
    sqlpb.addCondition(aa)

    // 複數條件
    let obj = {
      condition: [
        { f: 'product_id', v: 'ZAEWkDzotw' },
        { f: 'product_name', v: 'ZAEWkDzotw' },
        { f: 'product_bb', v: 'ZAEWkDzotw' },
      ]
    }
    let a = Struct.fromJavaScript(obj)
    let sqlpb = new app.sqlpb.Query();
    sqlpb.setSelf(a)

    // product_id like 123
    aa.setF('product_id')
    aa.setO(6)
    aa.setV("123")
    sqlpb.addCondition(aa)

    // product_id IN
    aa.setF('product_id')
    aa.setO(5)
    aa.setS(['asd', 'asda'])
    sqlpb.addCondition(aa)

  },
  /**
   * 取商品細項 + 瀏覽紀錄
   * @param {*} context 
   * @param {*} param1 
   */
  async browse_product(context, { app, token, condition = null }) {

    let metadata = { "x-4d-token": token };
    let method = "BrowseProductGoods";
    let req = new app.prodpb.ProductGoods();
    if (condition.urn !== null) req.setUrn(condition.urn)
    let product = await app.grpcAxios(app.$axios, method, metadata, req);
    return product;

  },
  /**
   * 商品列表
   * @param {*} context 
   * @param {*} param1 
   */
  async get_product(context, { app, token, condition = null }) {

    let metadata = { "x-4d-token": token };
    let method = "FindProductGoods";
    let req = new app.sqlpb.Query();
    if (condition !== null) req.addCondition(condition)
    let product = await app.grpcAxios(app.$axios, method, metadata, req);
    console.log("FindProductGoods:",product)
    return product;

  },
  /**
   * 商品分類列表
   * @param {*} context 
   * @param {*} param1 
   */
  async get_productClass(context, { app, token, condition = null }) {
    let metadata = { "x-4d-token": token };
    let method = "FindProductClass";
    let req = new app.sqlpb.Query();
    if (condition !== null) req.addCondition(condition)
    let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
      // todo:錯誤時候會跑兩次!?
      if (err !== null) {
        return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
      }
      const data = app.sqlpb.Response.deserializeBinary(resp.data);
      return { code: 200, data: data.getResult().toJavaScript() };
    });

    return product;

  },
  /**
     * 取我的最愛
     * @param {*} context 
     * @param {*} param1 
     */
  async get_MyFavorite(context, { condition = null }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "FindFavorite";
    let req = new app.sqlpb.Query();
    let ArrayID = [0] ;
    if (condition !== null) req.addCondition(condition)
    let list = await app.grpcAxios(app.$axios, method, metadata, req);
    if (list.code === 200) {
      ArrayID = (list.data).filter(function (element, index, arr) {
        return arr.indexOf(element) === index;
      });
      ArrayID.push("0")
    }

    context.commit("set_favorite", ArrayID)
    return {...list,data:ArrayID};

  },

  /**
   * 新增我的最愛
   * @param {*} context 
   * @param {*} param1 
   */
  async set_MyFavorite(context, { condition = { id: null, pid: null } }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "AddProductFavorite";
    let req = new app.prodpb.ProductGoods();
    if (condition.id !== null) req.setShellId(condition.id)
    if (condition.pid !== null) req.setProductId(condition.pid)
    let list = await app.grpcAxios(app.$axios, method, metadata, req);

    return list;
  },

  /**
   * 刪除我的最愛
   * @param {*} context 
   * @param {*} param1 
   */
  async del_MyFavorite(context, { condition = { id: null, pid: null } }) {
    let app = this.app
    let metadata = { "x-4d-token": app.store.state.account.token };
    let method = "DelProductFavorite";
    let req = new app.prodpb.ProductGoods();
    if (condition.id !== null) req.setShellId(condition.id)
    if (condition.pid !== null) req.setProductId(condition.pid)
    let list = await app.grpcAxios(app.$axios, method, metadata, req);

    return list;
  },
}