import React from 'react'

interface PropsType  extends React.HtmlHTMLAttributes<HTMLInputElement>  {
    lable : string ,
    value : string | number | readonly string[] | undefined ,
    onChange : React.ChangeEventHandler<HTMLInputElement> | undefined,
    lableClassName? : string ,
}



export  const Input = ({lable , value , onChange  , lableClassName, ...props}:PropsType) => {
  return (
    <div className="col-span-6 ">
       <label htmlFor={lable} className={`block text-sm font-medium leading-6 text-gray-900 ${lableClassName ? lableClassName : ""}`}>
           {lable}
        </label>
            <input
            {...props}
            onChange={onChange}
           
              type={lable}
              name={lable}
              id={lable + "id"}
              value={value}
          
              className="mt-1 block  transition  ease-in-out  w-full rounded-md text-gray-900 shadow-sm ring-1  ring-gray-300 placeholder:text-gray-400   focus:ring-orange-500 sm:py-1.5 sm:text-sm sm:leading-6"
            />
    </div>
  )
}
