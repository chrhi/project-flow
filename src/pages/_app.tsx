import { type AppType } from 'next/app';
import Providers from '~/components/layout/Providers';
import { api } from '~/utils/api';
import '~/styles/globals.css';
import { SessionProvider } from "next-auth/react"
import { organizationReduer } from '~/store/organization-reducer';


const MyApp: AppType = ({
  Component, 
  //@ts-ignore
  pageProps: { session, ...pageProps },
}) => {

  const setOrganozation = organizationReduer(state => state.set_organization)


  api.organizationRouter.getUserOrganization.useQuery(undefined,{
      onSuccess: (data) => {
            if(!data?.id || !data?.name ){
                  return
            }
      setOrganozation({
         organizationId : data.id , 
         organizationImage : data?.id , 
         organizationName : data?.name
      })
  }
})

 

  return (
    <SessionProvider session={session}>
        <Providers>
           <Component {...pageProps} />
        </Providers> 
    </SessionProvider>
     
  );
};

export default api.withTRPC(MyApp);
