// https://vuex.vuejs.org/en/mutations.html

export default {
    set_product_list(state, o) {
        state.prodcut.list = o
    },
    // 語系
    set_language(state, o) {
        state.lang = o
    },
    // 設定query資料
    set_query(state, o) {
        state.query.push(o)
    },
    // 清除query資料
    clear_query(state, o) {
        state.query = [];
    },
    // token
    set_loading(state, o) {
        state.loading = o
    },
}
