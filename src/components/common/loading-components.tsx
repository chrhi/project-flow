import React from 'react'
import { Loader2 } from 'lucide-react';

function LoadingComponents() {
  return (
    <div className='w-full bg-white h-full flex justify-center items-center min-h-[400px] '>
        <Loader2 className='mr-2 h-12 w-12 font-bold text-blue-500  animate-spin' />
    </div>
  )
}

export default LoadingComponents