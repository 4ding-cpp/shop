
import { mapActions } from "vuex";
export default async function ({ app, route, store, redirect }) {
  // If the user is not authenticated
  // if (!store.state.authenticated) {
  //   return redirect('/login')
  // }
  // Object.keys(route.matched).forEach(index=>{
  //   console.log("7777777777777777",route.name ,route.matched[index] )
  // })
  
  let token = app.$cookies.get('4dingtoken') ;
  if( token == "" || token === undefined ) {
    token = "customer-test";
    token = (token) ? token : await store.dispatch("other/get_token");
  }
  await store.commit('other/set_token', token)

  console.log("auth:",app.store.getState)
  // 首頁相關
  let result = await store.dispatch("web/get_website", {
    token: token,
    condition: null
  });
  if (result.data && result.data.length !== 0) {
    // 搜尋該分類的產品列表
    await store.dispatch("web/init_layout", {
      token: token ,
      layout: result.data[0].layout,
    });
    // 搜尋該分類的產品列表
    await store.dispatch("web/init_menu", {
      token: token ,
      menu: result.data[0].menu,
    });
  }

}