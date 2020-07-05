// var fetch = require('node-fetch');

export default {
  /**
   * 首次登入拿到畫面
   * @param {*} context 
   * @param {*} param1 
   */
  async init_layout(context, { layout }) {
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
          token: store.state.other.token,
          condition: cond
        });
        prod.list.push(result.target.class);
        prod.response.push(response.data)
        layout[i].prod = response.data;
      }else{
        layout[i].prod = prod.response[find_index];
      }
    }

    return layout
  }

}