import type { FC , ReactNode} from 'react'
import NextNProgress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '~/components/common/Loading';
import 'react-toastify/dist/ReactToastify.css';
import 'reactflow/dist/style.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { ReactFlowProvider } from 'reactflow';
import { AccessPopUp } from '~/components/common/AccessPopUp';
import  { Toaster } from 'react-hot-toast';


interface ProvidersAbdullahProps {
  children : ReactNode
}

const Providers: FC<ProvidersAbdullahProps> = ({children}) => {
  return     <div className="w-full h-fit relative scrollbar-hide ">
     <NextNProgress options={{ showSpinner: false }} />
      <Loading />
      <AccessPopUp />
      <Toaster
       position="top-right"
       reverseOrder={false}
      />
    <ReactFlowProvider>
          {children}
    </ReactFlowProvider> 
   
  </div>
}

export default Providers