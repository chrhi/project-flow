import { type AppType } from "next/app";
import NextNProgress from 'nextjs-progressbar'
import { api } from "~/utils/api";
import 'react-toastify/dist/ReactToastify.css';
import 'react-clock/dist/Clock.css';
import "~/styles/globals.css";
import { supabase } from "~/config/supbase";
import { Loading } from "~/components/common/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import {userReducer} from "~/store/userReducer"



const MyApp: AppType = ({ Component, pageProps }) => {

  const set_isLoading = loading_Reducer(state => state.set_isLoading)

  const set_user = userReducer(state => state.set_email)
  //TODO ADD handle setting user informations to the application

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
      // delete cookies on sign out
      const expires = new Date(0).toUTCString()
      document.cookie = `abdullah-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
      document.cookie = `abdullah-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
      window.location.reload()
    } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
      if(session){
      document.cookie = `abdullah-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
      document.cookie = `abdullah-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
      window.location.reload()
      }
    }
  })

  useEffect(() => {
    async function getInisialRefrences (){
      set_isLoading(true)
     const {data , error} = await  supabase.auth.getSession()
     if(error) {
      set_isLoading(false)
      toast("some things wents wrong ",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
     }
     set_user({
      id : data.session?.user.id as string , 
      name : data.session?.user.user_metadata?.name as string ,
      email :data.session?.user.user_metadata?.email as string,
    
     })
     console.log("this is the the data we get from the server : '''''")
     console.log(data)
    }
    getInisialRefrences().then(()=>{
      set_isLoading(false)
      console.log("every thing went good")
    }).catch(() =>{ 
      set_isLoading(false)
      console.error("there was an error in the _app.tsx file")})
  } , [set_isLoading , set_user])

  
  return(
    <div className="w-full h-fit relative">
       <NextNProgress options={{ showSpinner: false }} />
       <Loading />
       <ToastContainer theme="dark" />
       <Component {...pageProps} />
    </div>
    )
};

export default api.withTRPC(MyApp);
