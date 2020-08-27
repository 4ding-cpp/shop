// https://vuex.vuejs.org/en/getters.html

export default {
  /**
   * 取上方nav 分類
   */
  get_headerNav: state => {
    let res = []
    if (state.style === null) return res
    Object.keys(state.style).forEach(index => {
      res = state.style[index].nav
      // res = state.nav 
    })
    return res
  },
  /**
   * 取上方menu 分類
   */
  get_headerMenu: state => {
    return  state.menu
  },
  /**
   * 取下方footer 分類
   */
  get_footer: state => {
    let res = []
    if (state.style === null) return res
    Object.keys(state.style).forEach(index => {
      res = state.style[index].footer
    })
    return res
  },

}
