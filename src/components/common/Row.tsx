import {  type RefetchOptions, type  RefetchQueryFilters } from '@tanstack/react-query'
import { UpdateRow } from '../forms/startup/UpdateRow'
import ConfirmDeleteRow from '../ui/popup/ConfirmDeleteRow'


type RowType = {
  name : string , 
  title : string , 
  role : string , 
  id: string ,
  refetch : <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined)  => any
}

export  const Row = ({name , title , role , id , refetch} : RowType) => {
  return (
    <div className='bg-white w-full mx-auto flex items-center justify-evenly p-4 shadow gap-x-4 
    '>
         <div className='w-[20%]'>
            <p className='text-gray-900 font-bold text-start'>{name}</p>
      </div>
      <div className='w-[20%]'>
            <p className='text-start text-gray-900  font-bold'>{title}</p>
      </div>
   
      <div className='w-[30%]'>
            <p className='text-start text-gray-900  font-bold' >{role}</p>
      </div>
        <div className='w-[20%] gap-x-4 flex  '>
           <UpdateRow refetch={refetch} name={name }  title={title} role={role} id={id} />
           <ConfirmDeleteRow />
        </div>
    </div>
  )
}

