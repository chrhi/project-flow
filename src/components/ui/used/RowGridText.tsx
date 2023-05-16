import React from 'react'


type Props ={
    text : string ,
}

export  const RowGridText = ({text}: Props) => {
  return (
    <div className="col-span-6 lg:col-span-12 gap-6">
    <h1 className="text-2xl  text-start text-gray-900 font-poppins "> {text}</h1>
    </div>
  )
}

