/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {useState} from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
export  const Second = () => {

  const [startDate , setStartDate] = useState<Date>(new Date())
  const [endDate , setEndDate] = useState<Date>(new Date())
   
  const handleSelect = (ranges:any) => {
  
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  return (
    <div className='w-full flex flex-col items-center p-4 h-[90vh]'>
      <div className='w-full h-[70px]'>
      <h1 className='text-xl font-bold text-gray-900 ' >project title </h1>
      <p  className='text-md  text-gray-500 ' >when should this project startes and ends</p>
      </div>

        <DateRangePicker className='mt-4'
          ranges={[selectionRange]} 
          minDate={new Date()} 
          onChange={handleSelect}
          months={3}
          // direction="horizontal"
          />
        <div className='w-full h-[100px] flex flex-col justify-center '>
        <label htmlFor="titre" className="block text-xl font-medium leading-6 text-gray-900">
           project budget
        </label>
        <input type="number" className="mt-2 block  transition  ease-in-out  w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
  )
}

