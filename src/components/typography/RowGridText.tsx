import React from 'react'


type Props ={
    text : string ,
    text2? : string,
    small?: boolean,
    smallText2? : boolean
}

export  const RowGridText = ({text , small , text2 , smallText2 }: Props) => {
  return (
    <div className="col-span-6 lg:col-span-12 mt-4 gap-6">
    <h1 className={`${small ? "text-md  text-start text-neutral-700 font-poppins" : "text-2xl  text-start text-gray-900 font-poppins"} dark:text-white`}> {text}</h1>
    {text2 && 
       <h1 className={`${smallText2 ? "text-md  text-start text-neutral-700 font-poppins" : "text-2xl  text-start text-gray-900 font-poppins"} dark:text-white`}> {text2}</h1>
    }
    </div>
  )
}

