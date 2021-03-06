// https://vuex.vuejs.org/en/actions.html

export default {
    /**
     * SSR 模式 首次模式
     * @param {*} param0 
     * @param {*} param1 
     */
    async nuxtServerInit({ commit, dispatch, app }, { req }) {
        await dispatch("init");
    },
    /**
     * 初始化流程
     * @param {*} context 
     */
    async init(context) {
        let app = this.app
        let store = this.app.store
        let token = app.$cookies.get('4dingtoken');
   
        if (token == "" || token === undefined) {
            let resp = await store.dispatch("account/get_token");
            token = resp.data.token;
        } else {
            await store.commit('account/set_token', { token: token, t: false })
            let resp = await store.dispatch("account/whoAmI");
        }

        // config相關
        let conf = store.dispatch("other/appConf", {
            token: token,
        });
        // 我的最愛列表
        let favorte = store.dispatch("product/get_MyFavorite", {
            condition: null,
        });

        // 首頁相關
        let result = await store.dispatch("web/get_website", {
            token: token,
            condition: null
        });
      
        if ( result.data !== undefined && result.data.length !== 0) {
   
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
    /**
     * storage 內容設定置vuex內
     */
    storage_init(context) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (cart === null) return;
        context.commit("cart/set_cart", cart)
        let cart_info = JSON.parse(localStorage.getItem("cart_info"));
        if (cart_info === null) return;
        context.commit("cart/set_cart_info", cart_info );
    },
    /**
     * 檢查首次登入的資訊是否存在
     * @param {*} context 
     */
    async check_init(context) {
        let store = this.app.store.state
        switch (true) {
            case (store.account.token !== ""):
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
