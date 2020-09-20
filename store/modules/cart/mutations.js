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
    if(!content[`${o.shell_id }-${o.sku}`] ){
      content[`${o.shell_id }-${o.sku}`] = o
    }else{
      content[`${o.shell_id }-${o.sku}`].amount +=  Number(o.amount) ;
    }
    state.content = content 
    localStorage.setItem('cart',JSON.stringify(state.content))
  },
  // 設定某一筆購物車
  set_one_cart(state, o) {
    state.content[`${o.shell_id }-${o.sku}`] = o
    localStorage.setItem('cart',JSON.stringify(state.content))
  },
  // 新增一筆購物車
  del_cart(state, o) {
    // state.content.push(o)

    let key = `${o.shell_id }-${o.sku}` ;
    let clone = {...state.content};
    if(clone[`${o.shell_id }-${o.sku}`]){
      delete clone[key] ;
      state.content = clone ;
    }
    localStorage.setItem('cart',JSON.stringify(state.content))
  },
}
