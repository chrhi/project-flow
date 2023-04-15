/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { AbdullahEffectButton, buttonVariantsAbdullah } from '../ui/buildingBlocks/AbdullahEffectButton'
import { useRouter } from 'next/router'
import { header_page_Reducer , PAGES } from '~/store/app-reducer/headerReducer'



export function PagesNav() {

  const current_page = header_page_Reducer(state => state.current_page)

  const set_current_page = header_page_Reducer(state => state.set_current_page)

  const router = useRouter()

 async function handleRouting (path : string , page : PAGES) {
  set_current_page({payload : page})
   await router.push(path)
  }

  const LIST = [
    {
      name : "Dashbord" , path : "/app" , page : PAGES.DASHBORD
    },
    {
      name : "Start up" , path : "/app/startup", page : PAGES.STARTUP
    },
    {
      name : "Planning" , path : "/app/planning" , page : PAGES.PLANNING
    },
    {
      name : "Executing" , path : "/app/executing" , page : PAGES.EXECUTING
    },
    {
      name : "Controlling" , path : "/app/controlling" , page : PAGES.CONTROLLING
    },
    {
      name : "Closing" , path : "/app/close" , page : PAGES.CLOSING
    },
    {
      name : " Docs " , path : "/app/docs" , page : PAGES.DOCS
    },
  ]

  return (
    <div className='w-[65%]  h-full flex justify-start items-center gap-x-6 '>
      {LIST.map(item => (
           <AbdullahEffectButton 
           key={item.name}
           onPromisClick={() => handleRouting(item.path , item.page)}
                className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm" })} ${current_page === item.page ? 'bg-blue-100 text-slate-900' : null}`}
           >
           {item.name}
           </AbdullahEffectButton>
      ))}
    </div>
  )
}

