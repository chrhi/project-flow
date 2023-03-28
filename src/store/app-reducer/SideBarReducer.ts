import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export enum NAVS {
    STARTUP,
    DOCUMENT,
    STAKEHOLDER,
    SECONDFORM,
    APPLICATION,
    SETUP,
    TABLE,
    MILESTONES
}


type Reducer ={
    current_page: NAVS,
    set_current_page : (input :{ payload:NAVS}) => void
}

export const sidebar_Reducer = create<Reducer ,[["zustand/persist",unknown]]>(
  persist(
    (set) => ({
      
      current_page: NAVS.SETUP,
      set_current_page:(input :{ payload:NAVS}) => set({current_page : input.payload}),
      
    }),
    {
      name: 'app-status-storage-sidebar-PAGE',     
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
