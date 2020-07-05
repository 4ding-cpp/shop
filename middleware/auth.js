
import { mapActions } from "vuex";
export default function ({ app, route , store , redirect }) {
  // If the user is not authenticated
  // if (!store.state.authenticated) {
  //   return redirect('/login')
  // }
  // Object.keys(route.matched).forEach(index=>{
  //   console.log("7777777777777777",route.name ,route.matched[index] )
  // })
  console.log(app.$cookies.get('4dingtoken'))

}