// https://vuex.vuejs.org/en/actions.html

export default {
    async nuxtServerInit({ commit , dispatch, app }, { req }) {
        // let token = this.$cookies.get("4dingtoken");
    //     let token = "customer-test" ;
    //     token = (token)? token : await dispatch("other/get_token");
    //     commit("other/set_token",token)
    //     // 首頁相關
    //     let result = await dispatch("web/get_website", {
    //         token: token,
    //         condition: null
    //     });
    //   if (result.data && result.data.length !== 0) {
    //     // 搜尋該分類的產品列表
    //     let res = await dispatch("ssr/init_layout", {
    //       layout: result.data[0].layout , 
    //     });
    //   }
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
