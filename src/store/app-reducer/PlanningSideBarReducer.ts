import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export enum NAVS {
    SCOPE,
    COMUNICATION,
    MONEY,
    HUMANS,
    APPLICATION
}


type Reducer ={
    current_page: NAVS,
    set_current_page : (input :{ payload:NAVS}) => void
}

export const PlanningSideBarReducer = create<Reducer ,[["zustand/persist",unknown]]>(
  persist(
    (set) => ({
      
      current_page: NAVS.SCOPE,
      set_current_page:(input :{ payload:NAVS}) => set({current_page : input.payload}),
      
    }),
    {
      name: 'app-status-storage-PLANNING-sidebar-PAGE',     
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
