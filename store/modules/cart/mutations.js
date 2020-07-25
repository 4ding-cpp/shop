/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */



export default {
  // 設定購物車內容
  set_cart_info(state, o) {
    state.info = o
    localStorage.setItem('cart_info',JSON.stringify(state.info))
  },
  // 設定購物車內容
  set_cart(state, o) {
    state.content = o
    localStorage.setItem('cart',JSON.stringify(state.content))
  },
  // 新增一筆購物車
  add_cart(state, o) {
    let content = state.content 
    state.content = {}
    if(!content[`${o.normal}-${o.sku}`] ){
      content[`${o.normal}-${o.sku}`] = o
    }else{
      content[`${o.normal}-${o.sku}`].count +=  Number(o.count) ;
    }
    state.content = content 
    localStorage.setItem('cart',JSON.stringify(state.content))
  },
  // 設定某一筆購物車
  set_one_cart(state, o) {
    state.content[`${o.normal}-${o.sku}`] = o
    localStorage.setItem('cart',JSON.stringify(state.content))
  },
  // 新增一筆購物車
  del_cart(state, o) {
    // state.content.push(o)
    if(state.content[`${o.normal}-${o.sku}`]){
      delete state.content[`${o.normal}-${o.sku}`] ;
    }
    localStorage.setItem('cart',JSON.stringify(state.content))
  },
}
