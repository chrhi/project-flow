import  { useEffect, useState } from "react";
import { api } from "~/utils/api";
import { getProjectCurrentPhaseAbdullah, getProjectMetaData, getUserMetadata, storeProjectCurrentPhaseAbdullah } from "~/lib/MetaData";
import { CanSwitch, IsPhaseLocked, PHASES, getCurrentPhaseNumber } from "~/utils/access/IsPhaseLocked";
import { Switch } from "~/components/ui/switch"
import toast from "react-hot-toast"
import { runFireworks } from "~/utils/runFireworks";
type Props = {
    indexThisPhase : number 
}

function NextSwitch({indexThisPhase} : Props) {

    const [checked, setChecked] = useState(false);

  

    const handleChange =  () => {
        if(checked === true) return
       console.log(getProjectMetaData())
      
      };

  return (
    <div className='w-[90%] h-[150px] mx-auto p-4 rounded-lg border  flex flex-col dark:bg-neutral-900 bg-white justify-center items-center gap-y-4'>
        <p className="text-center text-gray-400 dark:text-white text-md ">
        {/* Si vous avez terminé le travail pour cette phase, assurez-vous de basculer le bouton ci-dessous afin d'avoir accès à la phase suivante */}
        Finissez cette phase et basculez le bouton pour pouvoir passer à la suivante
        </p>
        {
            false ? <p>loading...</p> :
            <div className="w-full h-[40px] flex items-center  dark:text-white justify-center gap-x-4 px-2">
            <p className="text-center text-gray-700 dark:text-white text-md ">Phase terminée</p>
             <Switch checked={checked} onCheckedChange={handleChange} id="material-switch"/>
            </div>
        }
      
    </div>
  )
}

export default NextSwitch