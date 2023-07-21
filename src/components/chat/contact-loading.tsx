import type  { FC } from 'react'
import { Skeleton } from "~/components/ui/skeleton"




const ContactLoading: FC = ({}) => {

 
  
 
  return  (
        <>
         <div className="flex my-2  w-full items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                 <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
             </div>
         </div>
         <div className="flex my-2 w-full items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                 <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
             </div>
         </div>
         <div className="flex my-2 w-full items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                 <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
             </div>
         </div>
        </>
  )
}

export default ContactLoading