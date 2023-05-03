import { FC } from 'react'



const DocsSideBar: FC = ({}) => {
  return <div 
  className='w-[16rem] h-full fixed left-0  top-[50px] bottom-0 p-4 bg-white'>
        <button className='w-full rounded-lg h-[40px] bg-blue-200 '>
            Documentation
        </button>
        <button className='w-full rounded-lg  h-[40px]  '>
            Designer
        </button>
        <button className='w-full rounded-lg  h-[40px]  '>
            project charter 
        </button>
        <button className='w-full rounded-lg  h-[40px]  '>
            salah blil
        </button>
  </div>
}

export default DocsSideBar