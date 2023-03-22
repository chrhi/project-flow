import React from 'react'

type PropsType = {
    lable : string ,
    value : string | number | readonly string[] | undefined ,
    onChange : React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}

export  const TextField = ({lable , value , onChange}:PropsType) => {
  return (
    <div className="col-span-6 ">
       <label htmlFor={lable} className="block text-sm font-medium leading-6 text-gray-900">
           {lable}
        </label>
        <textarea 
            onChange={onChange}
             
              name={lable}
              id={lable + "id"}
              value={value}
              className="mt-1 block  transition  ease-in-out  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
              placeholder={lable}
              rows={3}
            />
    </div>
  )
}