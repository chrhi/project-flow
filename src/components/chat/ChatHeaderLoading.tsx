import type { FC } from 'react'
import Skeleton from 'react-loading-skeleton'



const ChatHeaderLoading: FC = ({}) => {
  return <div className='flex sm:items-center justify-between py-3 h-[50px]   border-b-2 border-gray-200'>
  <div className='relative flex items-center space-x-4 p-4'>
    <div className='relative'>
      <div className='relative w-8 sm:w-8 h-8 sm:h-8'>
        <Skeleton className="h-8 w-8 rounded-full" /> 
      </div>
    </div>

    <div className='flex flex-col leading-tight'>
      <div className='text-md flex items-center'>
        <span className='text-gray-700 mr-3 font-semibold'>
            <Skeleton className="h-4 w-[250px]" />
        </span>
      </div>

      <span className='text-xs text-gray-600'>
        <Skeleton className="h-2 w-[200px]" />
      </span>
    </div>
  </div>
</div>
}

export default ChatHeaderLoading