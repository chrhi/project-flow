import { Loader2 } from 'lucide-react'
import React from 'react'

type Props =  {
    className? : string
}

function LaodingLayout({className}:Props) {
  return (
    <div className='w-full h-full flex justify-center items-center'>
         <Loader2 className={`h-8  w-8 animate-spin text-blue-500  ${className ? className : ""}`} />
    </div>
  )
}

export default LaodingLayout