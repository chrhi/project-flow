/* eslint-disable @typescript-eslint/no-misused-promises */
import type { FC } from 'react'
import { DocsReducerSideBar , NAVS } from '~/store/app-reducer/DocsReducerSideBar'
import { useRouter } from 'next/router'

const LISTA = [
    { name : "Integrations" , page : NAVS.ONE  , path : "/app/docs/"} , 
    { name : "Stakholders" , page : NAVS.TWO , path : "/app/docs/stakholders" } , 
    { name : "Scope" , page : NAVS.THREE , path : "/app/docs/perimeter" } ,
    { name : "TimeTable" , page : NAVS.FOUR , path : "/app/docs/timeTable"  } ,
    { name : "Costs" , page : NAVS.FIVE , path : "/app/docs/costs" } ,
    { name : "Quality" , page : NAVS.SIX , path : "/app/docs/quality" } ,
    {name : "Resources" , page : NAVS.SEVEN , path : "/app/docs/resources"} , 
    {name : "Supplies" , page : NAVS.NIGHT  , path : "/app/docs/supplies" } , 
    {name : "Risks" , page : NAVS.TEN  , path : "/app/docs/risks" } , 
    {name : "Communications" , page : NAVS.ELEVEN , path : "/app/docs/communications" }
]

const DocsSideBar: FC = ({}) => {

    const router = useRouter()

    const set_current_page = DocsReducerSideBar(state => state.set_current_page)

    const current_page =  DocsReducerSideBar(state => state.current_page)

    const Navigate = async  (page : NAVS , path : string ) => {
        set_current_page({payload : page})
        await router.push(path)
    }


  return <div 
  className='w-[20rem] h-full fixed left-0  top-[50px] flex flex-col  items-end pt-12 bottom-0 p-4 '>
        <div className='w-[80%]  h-[70px] mb-4 flex  pl-4  flex-col items-start '>
            <h1 className='text-2xl  text-gray-900 '>My documents </h1>
            <p className='text-lg  text-gray-700 ' >generate and create pdfs </p>
        </div>
      
        {LISTA.map(item => (
             <button
                onClick={() =>  Navigate(item.page , item.path)}
                key={item.name}
                className={`w-[80%] rounded-lg  h-[45px]   pl-4  flex justify-start items-center ${current_page === item.page ? "bg-blue-500 text-white" : ""   }`}>
             {item.name}
         </button>
        ))}
  </div>
}

export default DocsSideBar