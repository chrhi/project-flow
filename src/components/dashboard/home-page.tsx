import BedgetStatus from "./BedgetStatus";
import { Chain } from "./Chain";
import setup from "~/assets/Starting a business project-rafiki.png"
import planning from "~/assets/Office management-rafiki.png"
import executing from "~/assets/horse jumping-cuate.png"
import controlling from "~/assets/Control Panel-rafiki.png"
import closing from "~/assets/Coronavirus Border Closure-amico.png"
import {  PAGES } from '~/store/app-reducer/headerReducer'
  

const LISTA = [
    {name : "Pre-démarrage" , path : "/" , image : setup , page : PAGES.STARTUP},
    {name : "Planification" , path : "/" , image : planning , page : PAGES.PLANNING},
    {name : "Exécution" , path : "/" , image : executing , page : PAGES.EXECUTING},
    {name : "Contrôler" , path : "/" , image : controlling , page : PAGES.CONTROLLING},
    {name : "Clôturer" , path : "/" , image : closing , page : PAGES.CLOSING}
]
  export default function HomePage() {
  
  
  
    return (
  
      <div className="w-full min-h-[600px] h-fit  flex flex-col p-8 items-center">
       <div className="w-full h-[600px]  gap-x-8 justify-center   flex ">
                <div className="w-[65%] h-[80%] ">
                        <BedgetStatus />
                </div>
                <div className="w-[20%] h-full duration-500 transform hover:-translate-y-1 hover:shadow-2xl bg-white rounded-lg">

                </div>
       </div>
       <div className="w-full flex gap-x-4 items-center justify-center">
            
            {/* LISTA.map((item , index) => {  <Chain  available = {true , thisPhaseIndex : index})}  PAGE ={item.page} image={closing}  path={item.path}  name={item.name} /> } )
              */}
              {LISTA.map(item => {
                return (
                  <Chain
                    PAGE={item.page}
                    available={true}
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
  