import BedgetStatus from "./BedgetStatus";
import { Chain } from "./Chain";
import setup from "~/assets/Starting a business project-rafiki.png"
import planning from "~/assets/Office management-rafiki.png"
import executing from "~/assets/horse jumping-cuate.png"
import controlling from "~/assets/Control Panel-rafiki.png"
import closing from "~/assets/Coronavirus Border Closure-amico.png"
import {  PAGES } from '~/store/app-reducer/headerReducer'
import { Title } from "@tremor/react";
import { ScrollArea , ScrollBar} from "../ui/scroll-area";
import { IsPhaseLocked } from "~/utils/access/IsPhaseLocked";
import { getProjectCurrentPhaseAbdullah } from "~/lib/MetaData";
import RecentStakHolder from "./RecentStakHolder";
import { RecentStakeholdersNew } from "./recent-stakeholders";
  

const LISTA = [
    {name : "Pre-démarrage" , path : "/app/startup" , image : setup , page : PAGES.STARTUP},
    {name : "Planification" , path : "/app/planning" , image : planning , page : PAGES.PLANNING},
    {name : "Exécution" , path : "/app/executing" , image : executing , page : PAGES.EXECUTING},
    {name : "Contrôler" , path : "/app/controlling" , image : controlling , page : PAGES.CONTROLLING},
    {name : "Clôturer" , path : "/app/close" , image : closing , page : PAGES.CLOSING}
]
  export default function HomePage() {
  
  
  
    return (
  
      <div className="w-full max-w-7xl min-h-[600px] mt-[50px] h-fit lg:px-8 my-8 gap-y-4  flex flex-col  items-center">
       
       <div className="w-full h-[50px] flex items-center justify-start ">
          <p className=" text-xl md:text-2xl font-semibold ">Hi 👋 this is the dashboard and your personal space </p>
       </div>

       <div className="w-full hidden lg:flex  gap-x-4  mb-4 items-center  justify-center">
           
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

    <div className="w-full h-[50px] flex items-center justify-start ">
          <p className=" text-xl md:text-2xl font-semibold ">some stistscs you can find in here</p>
       </div>

       <div className="w-full h-[600px]  gap-x-4 justify-start mb-10  flex flex-col lg:flex-row">
                <div className="w-full lg:w-[65%] h-[80%] ">
                        <BedgetStatus />
                </div>
               <RecentStakeholdersNew />
       </div>
     
     
      </div>
    )
  }
  