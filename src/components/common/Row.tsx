import { IconButton } from '@mui/material'
import ConfirmDeleteRow from '../ui/popup/ConfirmDeleteRow'

type RowType = {
  name : string , 
  title : string , 
  role : string
}

export  const Row = ({name , title , role} : RowType) => {
  return (
    <div className='bg-white w-[90%] mx-auto flex items-center justify-evenly p-4 shadow gap-x-4 border-b   hover:shadow-2xl    transition duration-500 transform hover:-translate-y-1
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
            <IconButton   className='py-2 px-4 flex items-center w-[50px]  text-black rounded-lg cursor-pointer font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
</svg>

            </IconButton>
           <ConfirmDeleteRow />
        </div>
    </div>
  )
}

