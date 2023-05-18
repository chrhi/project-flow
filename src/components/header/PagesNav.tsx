/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { AbdullahEffectButton, buttonVariantsAbdullah } from '../used/AbdullahEffectButton'
import { useRouter } from 'next/router'
import { getProjectCurrentPhaseAbdullah } from '~/lib/MetaData'
import { ErrorNoteReducer } from '~/store/app-reducer/errorReducer'
import { header_page_Reducer , PAGES } from '~/store/app-reducer/headerReducer'
import { IsPhaseLocked } from '~/utils/access/IsPhaseLocked'



export function PagesNav() {

  const current_page = header_page_Reducer(state => state.current_page)
  const set_current_page = header_page_Reducer(state => state.set_current_page)
  const set_access_error = ErrorNoteReducer(state => state.setIsOpen)
  
  const router = useRouter()

 async function handleRouting (path : string , page : PAGES , INDEX : number) {
   const available = IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : INDEX})
  //  if(page === PAGES.DOCS){
  //   set_current_page({payload : page})
  //   await router.push(path)
  //   return 
  //  }
  //  if(!available){
  //   set_access_error({payload : true})
  //   return 
  //  }
   set_current_page({payload : page})
   await router.push(path)

  }

  const LIST = [
    {
      name : "Tableau de bord" , path : "/app" , page : PAGES.DASHBORD
    },
    {
      name : "Pre-démarrage" , path : "/app/startup", page : PAGES.STARTUP
    },
    {
      name : "Planification" , path : "/app/planning" , page : PAGES.PLANNING
    },
    {
      name : "Exécution" , path : "/app/executing" , page : PAGES.EXECUTING
    },
    {
      name : "Contrôler" , path : "/app/controlling" , page : PAGES.CONTROLLING
    },
    {
      name : "Clôturer " , path : "/app/close" , page : PAGES.CLOSING
    },
    {
      name : "les documents " , path : "/app/docs" , page : PAGES.DOCS
    },
  ]

  return (
    <div className='w-[70%]  h-full hidden md:flex  justify-start items-center gap-x-6 '>
      {LIST.map((item , index ) => (
           <AbdullahEffectButton 
           key={item.name}
           onPromisClick={() => handleRouting(item.path , item.page , index - 1)}
                className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm" })} text-gray-500  ${current_page === item.page ? 'bg-blue-100 text-slate-900' : null}  font-poppins font-semibold `}
           >
           {item.name}
           </AbdullahEffectButton>
      ))}
    </div>
  )
}

