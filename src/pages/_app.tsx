import { type AppType } from 'next/app';
import Providers from '~/components/layout/Providers';
import { api } from '~/utils/api';
import '~/styles/globals.css';
import { SessionProvider } from "next-auth/react"

import { useRouter } from 'next/router';
import { storeOrgName, storeOrganizationId } from '~/lib/data-in-cookies';
import AuthWrapper from '~/components/layout/AutoLogoutProvider';

const MyApp: AppType = ({
  Component, 
  //@ts-ignore
  pageProps: { session, ...pageProps },
}) => {

  

  const router = useRouter()


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
         <AuthWrapper>
          <Providers>
             <Component {...pageProps} />
          </Providers> 
          </AuthWrapper>
      </SessionProvider>
 
  );
};

export default api.withTRPC(MyApp);
