import { type FC , useState } from 'react'
import { DateRangePicker, type DateRangePickerValue } from "@tremor/react";
import { fr } from "date-fns/locale";
import Skeleton from 'react-loading-skeleton';


interface NewTimePickerAbdullahProps {
  text : string, 
  isLoading : boolean
}

const NewTimePicker: FC<NewTimePickerAbdullahProps> = ({text , isLoading}) => {
    const [value, setValue] = useState<DateRangePickerValue>([
        new Date(2022, 1, 1),
        new Date(),
      ])
      
  return (
     <>
      {
        isLoading ? 
       
        <div className='col-span-6 flex flex-col items-start h-full gap-y-4 justify-center'>
          <Skeleton style={{width:"50%"}} />  
          <Skeleton  /> 
       </div>
       :
      
                <div className='col-span-6 flex flex-col items-start h-full gap-y-4 justify-center'>
                    <div className='w-full h-[20px] flex justify-start items-center'>
                    <p className="block text-sm font-medium leading-6 !font-poppins text-gray-700 truncate" >{text}</p>
                    </div>
                <DateRangePicker className="w-full h-[30px] mx-auto"  value={value}  onValueChange={setValue} locale={fr} dropdownPlaceholder="Seleccionar" />
               </div>
      }
        
   
    </>
  )
  
}

export default NewTimePicker