import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "~/components/ui/dialog"
import { Label } from "~/components/ui/label"
import {algeriaStates} from "~/static/algeria-states"
import useLocalStorage from "~/hooks/use-local-storage"
import Select  from 'react-select';
import { MapPin } from "lucide-react"
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton"

export function SetPriyerTimePopUp() {

  const [isDialogOpen , setIsDialogOpen] = useState(false)

  const [wilaya , setWilaya] = useLocalStorage<{
    latitude : number , 
    longitude : number ,
    name : string
  }>("WILAYA_TIME" , {
    latitude :36.7667 ,
    longitude : 3.4667,
    name : "Boumerdes",
  })

    const [selectedWilaya , setSelectedWilaya] = useState({
      label : "",
      latitude : wilaya.latitude,
      longitude : wilaya.longitude
    })

    const [options , setOptions] =  useState<{label : string , value : string}[]>([])

    useEffect(() => {
      const prepare =  algeriaStates?.map(item => {
        return {
            label : item.name ,
            value : `${item.latitude}_${item.longitude}`
        }
      })
      setOptions(prepare)
    },[])

    const handleSubmit = () => {
      setWilaya({
        latitude : selectedWilaya.latitude , 
        longitude : selectedWilaya.longitude,
        name : selectedWilaya.label
      })
      setIsDialogOpen(false)
    }

  return (
    <Dialog open={isDialogOpen} onOpenChange = {(val) => setIsDialogOpen(val.valueOf())}>
      <DialogTrigger asChild>
        <button className={`${buttonVariants({variant : "ghost" , size : "sm"})} absolute right-0 top-0 rounded-[50%] p-0 `} >
           <MapPin className="w-4 h-4 text-[#2F3349]" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit current Wilaya</DialogTitle>
          <DialogDescription>
          Select the closest area to you so you can have an even better experience
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col h-full justify-between">
          <div className="w-full flex flex-col justify-start gap-y-4 ">
            <Label htmlFor="name" className="text-start">
              Wilayas of Algeria
            </Label>
            <Select
                      onChange={(e) => setSelectedWilaya({
                        label : e?.label || "" , 
                        latitude : Number(e?.value.split('_')[0]) || 0,
                        longitude : Number(e?.value.split('_')[1]) || 0

                      })}
                      placeholder={wilaya.name}
                      name="email adresses"
                      options={options}
                      className="basic-multi-select !w-full"
                      classNamePrefix="select"
                  />
          </div>
        
        </div>
        <DialogFooter>
          <AbdullahButton
          onClick={handleSubmit}
          >Save changes</AbdullahButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
