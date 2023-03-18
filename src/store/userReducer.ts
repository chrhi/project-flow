import { create } from 'zustand'
type Reducer ={
   name : string , 
   email : string ,
   id: string ,
   set_email: (input : {name : string , email: string , id: string}) => void 
}

export const userReducer = create<Reducer>(

    (set) => ({
        name:"",
        email : "",
        id: "",
        set_email:(input :{name : string , email: string , id: string}) => set({name : input.name , email : input.email , id: input.id}),
    }),
)
