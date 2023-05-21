/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from "react";
import Switch from "react-switch";
import { getProjectCurrentPhaseAbdullah, getProjectMetaData, storeProjectCurrentPhaseAbdullah } from "~/lib/MetaData";
import { IsPhaseLocked, PHASES } from "~/utils/access/IsPhaseLocked";


type Props = {
    indexThisPhase : number 
}

function NextSwitch({indexThisPhase} : Props) {

    const [checked, setChecked] = useState(false);


    
  

    useEffect(() => {
        const isThisPhaseAvailable = IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : indexThisPhase})
        const isTheNextPhaseAvailable = IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : indexThisPhase + 1})
        if(isThisPhaseAvailable === isTheNextPhaseAvailable ) {
            setChecked(true)
        }else{
            setChecked(false)
        }
    } , [])

    const handleChange = (checkedParam : boolean) => {
        if(checked === true) return
       console.log(getProjectMetaData())
        //set this phase as completed then set the n + 1 phase 
     
      };

  return (
    <div className='w-[90%] h-[200px] p-4 rounded-lg border  flex flex-col justify-center items-center gap-y-8'>
        <p className="text-center text-gray-400 text-md ">
        Si vous avez terminé le travail pour cette phase, assurez-vous de basculer le bouton ci-dessous afin d'avoir accès à la phase suivante
        </p>
        <div className="w-full h-[50px] flex items-center justify-between px-2">
            <p>Phase terminée</p>
        <Switch
         checked={checked} 
        onChange={handleChange}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
        height={15}
        width={48}
        className="react-switch"
        id="material-switch"
        />
        </div>
    </div>
  )
}

export default NextSwitch