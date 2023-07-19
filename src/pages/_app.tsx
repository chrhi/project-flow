import { type AppType } from 'next/app';
import Providers from '~/components/layout/Providers';
import { api } from '~/utils/api';
import '~/styles/globals.css';
import { SessionProvider } from "next-auth/react"
import { organizationReduer } from '~/store/organization-reducer';
import { useRouter } from 'next/router';
import { storeOrganizationId } from '~/lib/data-in-cookies';

const MyApp: AppType = ({
  Component, 
  //@ts-ignore
  pageProps: { session, ...pageProps },
}) => {

  const setOrganozation = organizationReduer(state => state.set_organization)

  const router = useRouter()


  api.organizationRouter.getUserOrganization.useQuery(undefined,{
      onSuccess: (data) => {
            if(!data?.id || !data?.name ){
                  return
            }
            console.log("not in the if")
      setOrganozation({
         organizationId : data.id , 
         organizationImage : data?.id , 
         organizationName : data?.name
      })
      storeOrganizationId({org_id : data.id})
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
