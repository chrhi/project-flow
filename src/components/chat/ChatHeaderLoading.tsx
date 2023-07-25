import type { FC } from 'react'
import Skeleton from 'react-loading-skeleton'



const ChatHeaderLoading: FC = ({}) => {
  return <div className='flex sm:items-center justify-between  h-[50px]   border-b-2 border-gray-200'>
  <div className='relative flex items-center h-full space-x-4 p-4'>
  
     
        <Skeleton className="h-10 w-10  rounded-full" /> 
   
 

    <div className='flex flex-col leading-tight'>
      <div className='text-md flex items-center'>
        <span className='text-gray-700 mr-3 font-semibold'>
            <Skeleton className="h-4 w-[200px]" />
        </span>
      </div>

      <span className='text-xs text-gray-600'>
        <Skeleton className="h-4 w-[120px]" />
      </span>
    </div>
  </div>
</div>
}

export default ChatHeaderLoading