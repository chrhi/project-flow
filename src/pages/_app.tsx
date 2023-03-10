import { type AppType } from "next/app";
import NextNProgress from 'nextjs-progressbar'
import { api } from "~/utils/api";
import 'react-toastify/dist/ReactToastify.css';
import 'react-clock/dist/Clock.css';
import "~/styles/globals.css";
import { supabase } from "~/config/supbase";
import { Loading } from "~/components/common/Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: AppType = ({ Component, pageProps }) => {

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
      // delete cookies on sign out
      const expires = new Date(0).toUTCString()
      document.cookie = `abdullah-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
      document.cookie = `abdullah-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
    } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
      if(session){
      document.cookie = `abdullah-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
      document.cookie = `abdullah-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
      }
    }
  })

  
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
