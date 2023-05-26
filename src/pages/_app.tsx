import { type AppType } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { api } from '~/utils/api';
import 'react-toastify/dist/ReactToastify.css';
import '~/styles/globals.css';
import { Loading } from '~/components/common/Loading';
import 'react-toastify/dist/ReactToastify.css';
import 'reactflow/dist/style.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { ReactFlowProvider } from 'reactflow';
import { AccessPopUp } from '~/components/common/AccessPopUp';
import  { Toaster } from 'react-hot-toast';


const MyApp: AppType = ({ Component, pageProps }) => {


  return (
    <div className="w-full h-fit relative">
      <NextNProgress options={{ showSpinner: false }} />
      <Loading />
      <AccessPopUp />
      <Toaster
       position="top-right"
       reverseOrder={false}
      /> 
    
      <ReactFlowProvider>
        <Component {...pageProps} />
      </ReactFlowProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
