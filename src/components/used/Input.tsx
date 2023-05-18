import React from 'react'
import Skeleton from 'react-loading-skeleton';

interface PropsType  extends React.HtmlHTMLAttributes<HTMLInputElement>  {
    lable : string ,
    value : string | number | readonly string[] | undefined ,
    onChange : React.ChangeEventHandler<HTMLInputElement> | undefined,
    lableClassName? : string ,
    isLoading? : boolean
}



export  const Input = ({lable , value , onChange  , lableClassName , isLoading , ...PropsType}:PropsType) => {
  return (
   <>
      {
        isLoading ?  
       <div className="col-span-6 ">
          <Skeleton style={{width : "50%"}} />
          <Skeleton  />
       </div> 
          : 
        <div  className='col-span-6'>
           <label htmlFor={lable} className={`block text-sm font-medium leading-6 text-gray-900 ${lableClassName ? lableClassName : ""}`}>
             {lable}
           </label>
           <input {...PropsType} onChange={onChange} type={lable}  name={lable} id={lable + "id"} value={value}
             className="px-4 py-1.5 rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full"
           />
        </div>
      }
   </>
  )
}
