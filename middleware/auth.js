
import { mapActions } from "vuex";
export default async function ({ app, route, store, redirect }) {
  // 檢查是否初始
  if(await store.dispatch("check_init") === false)  {
    await store.dispatch("init")
  } ;
  

}