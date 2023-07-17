import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Reducer ={
   
    organizationName : string , 
    organizationId : string , 
    organizationImage : string,
    
    set_organization : (input : { 
        organizationName : string , 
        organizationId : string , 
        organizationImage : string,     
 }) => void ,

}

export const organizationReduer = create<Reducer ,[["zustand/persist",unknown]]>(
    persist(
    (set) => ({
      
        organizationName : "" , 
        organizationId : "" , 
        organizationImage : "",
        set_organization : (input : { 
            organizationName : string , 
            organizationId : string , 
            organizationImage : string,    
         }) => set({
            organizationName: input.organizationName ,
            organizationId : input.organizationId , 
            organizationImage : input.organizationImage , 
        }) 
       
    }),
    {
        name: 'app-project-storage-organizarion-user-9987667899364-informations', 
        storage: createJSONStorage(() => sessionStorage)
      }
    )
)
