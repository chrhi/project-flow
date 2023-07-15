import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
type Reducer ={
   selectedOrganization : Organization | null,
   organizations : Organization[] | null,

  setWorkingOrganization : (input :Organization ) => void ,

  setOrganizations : (input :Organization[] ) => void ,
}

export const organizationReducer = create<Reducer ,[["zustand/persist",unknown]]>(
    persist(
    (set) => ({
        selectedOrganization : null , 
        organizations : null , 
        
  setWorkingOrganization : (input :Organization ) => set({selectedOrganization : input}) ,

  setOrganizations : (input :Organization[] ) => set({organizations : input}) ,
        
    }),
    {
        name: 'qhhwjdsudw-organizations-kye-mdnsjke-dndsjde', 
        storage: createJSONStorage(() => sessionStorage)
      }
    )
)
