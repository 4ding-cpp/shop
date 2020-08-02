// https://vuex.vuejs.org/en/getters.html

export default {
  // 取上方nav 分類
  get_headerNav:state => {
    let res = [] 
    Object.keys(state.style).forEach(index=>{
      res = state.style[index].nav 
      // res = state.nav 
    })
    return res
  },
  // 取上方menu 分類
  get_headerMenu:state => {
    let res = [] 
    Object.keys(state.style).forEach(index=>{
      res = state.menu 
    })
    return res
  },
}
