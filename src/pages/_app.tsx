import { type AppType } from 'next/app';
import Providers from '~/components/layout/Providers';
import { api } from '~/utils/api';
import '~/styles/globals.css';
import { SessionProvider } from "next-auth/react"


const MyApp: AppType = ({
  Component, 
  //@ts-ignore
  pageProps: { session, ...pageProps },
}) => {



 

  return (
    <SessionProvider session={session}>
        <Providers>
           <Component {...pageProps} />
        </Providers> 
    </SessionProvider>
     
  );
};

export default api.withTRPC(MyApp);
