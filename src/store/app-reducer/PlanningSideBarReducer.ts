import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export enum NAVS {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NIGHT,
  TEN,
  A,
  ELEVEN
}


type Reducer ={
    current_page: NAVS,
    set_current_page : (input :{ payload:NAVS}) => void
}

export const PlanningSideBarReducer = create<Reducer ,[["zustand/persist",unknown]]>(
  persist(
    (set) => ({
      
      current_page: NAVS.ONE,
      set_current_page:(input :{ payload:NAVS}) => set({current_page : input.payload}),
      
    }),
    {
      name: 'app-status-storage-PLANNING-sidebar-PAGE',     
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
