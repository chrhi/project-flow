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

    const {isLoading } = api.projectRouter.get_project.useQuery({user_id : getUserMetadata()} , {
        onSuccess(data){
            if(!data?.currentPhase){
                toast.error("the project does not have a phase")
                return 
            }
            storeProjectCurrentPhaseAbdullah(data.currentPhase)
            if(getCurrentPhaseNumber(data?.currentPhase) === indexThisPhase ){
                setChecked(false)
                return
            }
            setChecked(true)
        },
        onError(){
            toast.error("something went wrong fetching the project phase")
            setChecked(false)
        }
    })

   const goNextMutation =  api.projectRouter.geoNextPhase.useMutation({
        onSuccess(data){
            if(!data.currentPhase){
                toast.error("the project does not have a phase")
                return 
            }

            toast.success("project phase successfully updated")
            storeProjectCurrentPhaseAbdullah(data.currentPhase)
            runFireworks()
        },
        onError(){
            toast.error("project phase update failed")
            setChecked(false)
        }
    })
    const handleChange =  () => {
        if(checked === true) return
       console.log(getProjectMetaData())
        //set this phase as completed then set the n + 1 phase 
        setChecked(true)
         goNextMutation.mutate({
            project_id : getProjectMetaData(),
            Phase :  PHASES[getCurrentPhaseNumber(getProjectCurrentPhaseAbdullah()) + 1] || "STARTUP"
        })
     
      };

  return (
    <div className='w-[90%] h-[200px] p-4 rounded-lg border  flex flex-col justify-center items-center gap-y-8'>
        <p className="text-center text-gray-400 text-md ">
        {/* Si vous avez terminé le travail pour cette phase, assurez-vous de basculer le bouton ci-dessous afin d'avoir accès à la phase suivante */}
        If you have completed the work for this phase, you must toggle the button below in order to gain access to the next phase
        </p>
        {
            isLoading ? <p>loading...</p> :
            <div className="w-full h-[50px] flex items-center justify-between px-2">
            <p>Phase terminée</p>
             <Switch checked={checked} onCheckedChange={handleChange} id="material-switch"/>
            </div>
        }
      
    </div>
  )
}

export default NextSwitch