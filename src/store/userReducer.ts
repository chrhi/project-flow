import { create } from 'zustand'
type Reducer ={
   name : string , 
   email : string ,
   set_email: (input : {name : string , email: string}) => void 
}

export const userReducer = create<Reducer>(

    (set) => ({
        name:"",
        email : "",
        set_email:(input :{name : string , email: string}) => set({name : input.name , email : input.email}),
    }),
)
