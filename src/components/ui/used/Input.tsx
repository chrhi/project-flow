import React from 'react'

type PropsType = {
    lable : string ,
    value : string | number | readonly string[] | undefined ,
    onChange : React.ChangeEventHandler<HTMLInputElement> | undefined
}

export  const Input = ({lable , value , onChange}:PropsType) => {
  return (
    <div className="col-span-6 ">
       <label htmlFor={lable} className="block text-sm font-medium leading-6 text-gray-900">
           {lable}
        </label>
            <input
            onChange={onChange}
           
              type={lable}
              name={lable}
              id={lable + "id"}
              value={value}
          
              className="mt-2 block  transition  ease-in-out  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
    </div>
  )
}
