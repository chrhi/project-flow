import { Loader2 } from 'lucide-react';
import {loading_Reducer} from '~/store/app-reducer/loadingReducer'
import Image from "next/image"
import logo from "~/assets/logo.png"
export   function Loading() {

    const is_loading = loading_Reducer( state => state.is_loading)
    const isLoadingFully = loading_Reducer(state => state.fullWight)
    
  return (
    <div className={`${is_loading ? "absolute" : "hidden"} z-[30000]  bg-white ${isLoadingFully ? "" : "bg-opacity-60 "} h-full w-full flex justify-center items-center`}>
      {isLoadingFully ?
     <div>
          <div className="w-full h-24 flex justify-center flex-col items-center">
       <Image alt="logo" src={logo} width={80} height={80}  />
      
       </div>
       <div className='w-full h-24 flex items-center justify-center'>
         <Loader2 className='mr-2 h-8 w-8 font-bold text-blue-500  animate-spin' /> <h1 className='text-lg text-gray-600 '>loading the project status</h1>
        </div>
      </div>
       : 
       <Loader2 className='mr-2 h-12 w-12 font-bold text-blue-500  animate-spin' />
      }
      
    </div>
  )
}

