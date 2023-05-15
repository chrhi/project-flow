import type { FC } from 'react'

interface statusAbdullahProps {
  name : string , 
  color : string
}

const Status: FC<statusAbdullahProps> = ({color , name }) => {
  return <div className={` p-1 rounded-lg flex justify-center items-center ${color} `}>
    <h1 className='text-md font-semibold text-white'>{name} </h1>
  </div>
}

export default Status