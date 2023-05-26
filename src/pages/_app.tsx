import { type AppType } from 'next/app';
import Providers from '~/components/layout/Providers';
import { api } from '~/utils/api';
import '~/styles/globals.css';


const MyApp: AppType = ({ Component, pageProps }) => {


  return (
   <Providers>
      <Component {...pageProps} />
   </Providers>     
  );
};

export default api.withTRPC(MyApp);
