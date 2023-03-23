import React from 'react'


type Props ={
    text : string ,
}

export  const FormHead = ({text}: Props) => {
  return (
    <div className="w-full h-[50px] flex items-center justify-start p-4 ">
    <h1 className="text-2xl font-bold text-start text-gray-900"> {text}</h1>
    </div>
  )
}

