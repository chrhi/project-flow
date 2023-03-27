import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
type Reducer ={
   
   email : string ,
   id: string ,
   project_id : string ,
   set_project_id : (input : { project_id : string }) => void ,
   set_user: (input : { email: string , id: string}) => void 
}

export const userReducer = create<Reducer ,[["zustand/persist",unknown]]>(
    persist(
    (set) => ({
      
        email : "",
        id: "",
        project_id : "" ,
        set_project_id : (input :{ project_id: string}) => set({ project_id: input.project_id}) ,
        set_user:(input :{ email: string , id: string}) => set({  email : input.email , id: input.id}),
    }),
    {
        name: 'app-projext-storage-HOME-user-needed-informations', 
        storage: createJSONStorage(() => sessionStorage)
      }
    )
)
