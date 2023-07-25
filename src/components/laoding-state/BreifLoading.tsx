import React from 'react'
import { Skeleton } from '../ui/skeleton'


function BreifLoading() {
  return (
    <>
            <div className="w-full p-4 gap-x-4 h-[60px]  overflow-hidden flex items-center justify-start">
                    <Skeleton className="h-[50px] w-[50px] rounded-full" />
                    <Skeleton className="h-4 w-[250px]" />
            </div>
            {/* here it is the dashboard */}
            <div className="w-[90%]  mx-auto h-[calc(100%-60px)] scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded overflow-y-auto bg-white rounded-lg p-4 shadow-md ">
                    <h2 className="text-xl my-4 font-bold  text-start text-gray-500">Brief</h2>
                   
                    <div className="w-full flex flex-col  gap-y-8  my-4 h-[100px]">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[250px]" />
                    </div>
                    <div className="w-full h-fit border-t pt-2 ">
                    <Skeleton className="h-[100px] w-full rounded-lg" />
                       <Skeleton className="h-4 w-full" />
                       <Skeleton className="h-4 w-full" />
                    </div>
                  
            </div>
    </>
  )
}

export default BreifLoading