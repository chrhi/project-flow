import { buttonVariantsAbdullah } from '../used/AbdullahEffectButton'
import { useRouter } from 'next/router'
import { Button } from '../ui/button'
import { use_is_current_page } from '~/utils/navigation-helper'
import { cn } from '~/lib/utils'


export function PagesNav() {

  
  const router = useRouter()



  const LIST = [
    {
      name : "Home" , path : "/app" 
    },
    {
      name : "Chat" , path : "/app/chat"
    },
    {
      name : "Projects" , path : "/app/project" 
    },
    // {
    //   name : "Tasks" , path : "/app/tasks" 
    // },
    // {
    //   name : "Brain" , path : "/app/brain" 
    // },
    // {
    //   name : "Invoices " , path : "/app/map" 
    // }
  ]

  return (
    <div className='w-[70%]  h-full hidden lg:flex  justify-start items-center gap-x-6 '>
      {LIST.map((item , index ) => {
          return (
            <Button 
                   onClick={async () => await router.push(item.path)}
                   variant="ghost"
                   key={item.name}
                   className={cn(buttonVariantsAbdullah({variant :'ghost' , size:"sm" }) , ` text-gray-500 dark:text-gray-100 ${use_is_current_page(item.path) ? ' text-slate-900 dark:text-white' : null}  font-semibold text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-800 dark:active:bg-stone-700`)} > 
                   {item.name}
           </Button>
          )
      }
      )}
    </div>
  )
}

