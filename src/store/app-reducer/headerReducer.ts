import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export enum PAGES {
    HOME,
    MYPROJECT,
    SETTINGS
}


type Reducer ={
    current_page: PAGES,
    set_current_page : (input :{ payload:PAGES}) => void
}

export const header_page_Reducer = create<Reducer ,[["zustand/persist",unknown]]>(
  persist(
    (set) => ({
      
      current_page: PAGES.HOME,
     
      set_current_page:(input :{ payload:PAGES}) => set({current_page : input.payload}),
      
     
    }),
    {
      name: 'app-status-storage-HOME-PAGE', 
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
