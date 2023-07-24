import { type AppType } from 'next/app';
import Providers from '~/components/layout/Providers';
import { api } from '~/utils/api';
import '~/styles/globals.css';
import '~/styles/editor.css'
import { SessionProvider } from "next-auth/react"
import { storeOrgName, storeOrganizationId } from '~/lib/data-in-cookies';


const MyApp: AppType = ({
  Component, 
  //@ts-ignore
  pageProps: { session, ...pageProps },
}) => {

  



  api.organizationRouter.getUserSelectedOrg.useQuery(undefined,{
      onSuccess: (data) => {

        if(!data || !data.id || !data.name){
          return 
        }
      storeOrgName({org_name : data.name})
      storeOrganizationId({org_id : data?.id})
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
