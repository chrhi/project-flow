
import { Skeleton } from "~/components/ui/skeleton"
 



const NoteElementLoading = () => {

   

  return <div
  
    className={`w-[95%] mx-auto cursor-pointer my-4 hover:bg-gray-50 rounded-lg p-3  h-[50px] flex items-center gap-x-2 bg-white`}>
  <Skeleton className="h-12 w-12 rounded-xl" />
    <div className='max-w-[90%]  w-[90%] flex flex-col items-start justify-center'>
       <Skeleton className="h-12 w-full ml-auto" />
      
    </div>
  </div>
}

export default NoteElementLoading