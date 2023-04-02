import {useState} from 'react'

export const SearchBar = () => {
    const [input , setInput ] = useState("")
  return (
    <div className='w-[60%] mr-[15%] h-8  items-center   bg-white flex justify-between border border-gray-300 px-1 rounded-lg'>
        <input
         value={input}
         placeholder='search ...'
         onChange={({target }) => setInput(target.value)} 
         className='bg-white rounded-xl w-[70%] mr-[30%] h-full  text-gray-800 border-none focus:outline-none px-2' 
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className="w-6 h-6 text-gray-300 ">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

    </div>
  )
}

 