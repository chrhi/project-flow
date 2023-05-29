import BedgetStatus from "./BedgetStatus";
import { Chain } from "./Chain";
import setup from "~/assets/Starting a business project-rafiki.png"
import planning from "~/assets/Office management-rafiki.png"
import executing from "~/assets/horse jumping-cuate.png"
import controlling from "~/assets/Control Panel-rafiki.png"
import closing from "~/assets/Coronavirus Border Closure-amico.png"
import {  PAGES } from '~/store/app-reducer/headerReducer'
import { Title } from "@tremor/react";
import { ScrollArea } from "../ui/scroll-area";
import { IsPhaseLocked } from "~/utils/access/IsPhaseLocked";
import { getProjectCurrentPhaseAbdullah } from "~/lib/MetaData";
  

const LISTA = [
    {name : "Pre-démarrage" , path : "/app/startup" , image : setup , page : PAGES.STARTUP},
    {name : "Planification" , path : "/app/planning" , image : planning , page : PAGES.PLANNING},
    {name : "Exécution" , path : "/app/executing" , image : executing , page : PAGES.EXECUTING},
    {name : "Contrôler" , path : "/app/controlling" , image : controlling , page : PAGES.CONTROLLING},
    {name : "Clôturer" , path : "/app/close" , image : closing , page : PAGES.CLOSING}
]
  export default function HomePage() {
  
  
  
    return (
  
      <div className="w-full max-w-7xl min-h-[600px] mt-[50px] h-fit sm:px-8 my-8 gap-y-4  flex flex-col  items-center">
       
       <div className="w-full h-[50px] flex items-center justify-start ">
          <p className="text-2xl font-semibold ">Hi 👋 this is the dashboard and your personal space </p>
       </div>

       <div className="w-full h-[600px]  gap-x-4 justify-start   flex ">
                <div className="w-[65%] h-[80%] ">
                        <BedgetStatus />
                </div>
                <div className="w-[25%] h-full duration-500 flex flex-col p-4   bg-white rounded-lg">
                <Title> Dangers stakeholders </Title>
                <ScrollArea className="mt-4 ">
                    <div className="w-full h-[40px] flex justify-start gap-x-4 px-4">
                          <div className="rounded-[50%] bg-green-500 w-12 h-12 " />
                          <p className="text-lg font-semibold ">Abdullah jsk</p>
                    </div>
                    <div className="w-full h-[40px] flex justify-start gap-x-4 px-4">
                          <div className="rounded-[50%] bg-yellow-500 w-12 h-12 " />
                          <p className="text-lg font-semibold ">Saidi achraf</p>
                    </div>
                    <div className="w-full h-[40px] flex justify-start gap-x-4 px-4">
                          <div className="rounded-[50%] bg-blue-500 w-12 h-12 " />
                          <p className="text-lg font-semibold ">Blil salah eddin</p>
                    </div>
                </ScrollArea>
                </div>
       </div>
       <div className="w-full h-[50px] flex items-center justify-start ">
          <p className="text-2xl font-semibold ">📙 Here you can navigate to the phase you want </p>
       </div>
       <div className="w-full flex  gap-x-4 h-60 mb-4 items-center justify-start">
            
              {LISTA.map((item , index) => {
                return (
                  <Chain
                    PAGE={item.page}
                    available={IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : index})}
                    image={item.image}
                    name={item.name}
                    path={item.path}
                  />
                )
              })}
       </div>
      </div>
    )
  }
  