import { FC } from 'react'
import { DocsReducerSideBar , NAVS } from '~/store/app-reducer/DocsReducerSideBar'

const LISTA = [
    { name : "Integrations" , page : NAVS.ONE } , 
    { name : "Stakholders" , page : NAVS.TWO } , 
    { name : "Perimeter" , page : NAVS.THREE } ,
    { name : "TimeTable" , page : NAVS.FOUR } ,
    { name : "Costs" , page : NAVS.FIVE } ,
    { name : "Quality" , page : NAVS.SIX } ,
    {name : "Resources" , page : NAVS.SEVEN } , 
    {name : "Integration" , page : NAVS.EIGHT },
    {name : "Supplies" , page : NAVS.NIGHT } , 
    {name : "Risks" , page : NAVS.TEN } , 
    {name : "Communications" , page : NAVS.ELEVEN}
]

const DocsSideBar: FC = ({}) => {

    const set_current_page = DocsReducerSideBar(state => state.set_current_page)

    const current_page =  DocsReducerSideBar(state => state.current_page)

    const Navigate = (page : NAVS) => {
        set_current_page({payload : page})
    }


  return <div 
  className='w-[20rem] h-full fixed left-0  top-[50px] flex flex-col  items-end pt-12 bottom-0 p-4 '>
        <div className='w-fit h-[70px] mb-4 flex flex-col  '>
            <h1 className='text-2xl  text-gray-900 '>My documents </h1>
            <p className='text-lg  text-gray-700 ' >generate and create pdfs </p>
        </div>
      
        {LISTA.map(item => (
             <button
                onClick={() => Navigate(item.page)}
                key={item.name}
                className={`w-[80%] rounded-lg  h-[45px]   pl-4  flex justify-start items-center ${current_page === item.page ? "bg-blue-500 text-white" : ""   }`}>
             {item.name}
         </button>
        ))}
  </div>
}

export default DocsSideBar