
export default async function ({ app, route, store, redirect }) {
  // 檢查是否登入
  if(store.state.account.user.name === undefined) redirect("/")

}