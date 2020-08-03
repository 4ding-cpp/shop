// https://vuex.vuejs.org/en/actions.html

export default {
    async nuxtServerInit({ commit, dispatch, app }, { req }) {
        await dispatch("init");
    },
    async init(context) {
        let app =  this.app
        let store = this.app.store
        let token = app.$cookies.get('4dingtoken');
        if (token == "" || token === undefined) {
            token = "customer-test";
            token = (token) ? token : await store.dispatch("other/get_token");
        }
        await store.commit('other/set_token', token)
        // 首頁相關
        let result = await store.dispatch("web/get_website", {
            token: token,
            condition: null
        });
        if (result.data && result.data.length !== 0) {
            // 搜尋該分類的產品列表
            await store.dispatch("web/init_layout", {
                token: token,
                layout: result.data[0].layout,
            });
            // 搜尋該分類的產品列表
            await store.dispatch("web/init_menu", {
                token: token,
                menu: result.data[0].menu,
            });
        }
    },
    async check_init(context) {
        let store = this.app.store.state
        switch (true) {
          case (store.other.token !== ""):
            console.log("檢查判定非首次!")
            return true;
        }
        console.log("檢查判定首次!")
        return false;
      },
    loading(context, o) {
        context.commit("set_loading", o);
    },
    // 通用
    _store(context, o) {
        // 檢查包含以下參數
        switch (true) {
            case (!o.act): //動作
            case (o.data === undefined): //資料
                break;
            default:
                context.commit(o.act, o.data)
        }
    }
}
