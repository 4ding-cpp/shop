// https://vuex.vuejs.org/en/getters.html

export default {
  // 取menu 分類
  get_headerNav:state => {
    let res = [] 
    Object.keys(state.style).forEach(index=>{
      res = state.style[index].nav 
    })
    return res
  },
}
