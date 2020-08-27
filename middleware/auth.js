
export default async function ({ app, route, store, redirect }) {
  // 檢查是否初始
  console.log("middleware auth")
  if (await store.dispatch("check_init") === false) {
    await store.dispatch("init")
    store.dispatch("storage_init")
  };
}