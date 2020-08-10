export default {
    /**
     * 
     * @param {*} context 
     * @param {*} param1 
     */
    async get_Freeback(context, { condition = null }) {
      let app = this.app
      let metadata = { "x-4d-token": app.store.state.other.token };
      let method = "FindFreeback";
      let req = new app.sqlpb.Query();
      if (condition !== null) req.setSelf(condition)
      let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
        const data = app.sqlpb.Response.deserializeBinary(resp);
        if (err !== null || data.getCode() != 0) {
          return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
        }
        return { code: 200, data: data.getResult().toJavaScript() };
      });
  
      return product;
    },
    /**
     * 初次新增
     * @param {*} context 
     * @param {*} param1 
     */
    async create_Freeback(context, { condition = null }) {
      let app = this.app
      let metadata = { "x-4d-token": app.store.state.other.token };
      let method = "CreateFreeback";
      let req = new app.freebackpb.Freeback();
      if (condition !== null) req.setSelf(condition)

      let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
        const data = app.sqlpb.Response.deserializeBinary(resp);
        if (err !== null || data.getCode() != 0) {
          return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
        }
        return { code: 200, data: data.getResult().toJavaScript() };
      });
  
      return product;
    },
    /**
     * 已create 新增
     * @param {*} context 
     * @param {*} param1 
     */
    async append_Freeback(context, { condition = null }) {
      let app = this.app
      let metadata = { "x-4d-token": app.store.state.other.token };
      let method = "AppendFreeback";
      let req = new app.freebackpb.Dialogue();
      if (condition !== null) req.setSelf(condition)
      let product = await app.grpcAxios(app.$axios, method, metadata, req, (err, resp) => {
        const data = app.sqlpb.Response.deserializeBinary(resp);
        if (err !== null || data.getCode() != 0) {
          return { code: 0, data: `[${data.getCode()}] ${data.getMessage()} ` };
        }
        return { code: 200, data: data.getResult().toJavaScript() };
      });
  
      return product;
    },
}