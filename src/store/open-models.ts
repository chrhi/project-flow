import { create } from 'zustand'


type OpenStakeHolderpopUpReducerType ={
    id : string,
    showModel: boolean,
    setShowModel : (input :boolean) => void,
    setId : (input:string) => void
}

export const OpenStakeHolderOpoUpShowCase = create<OpenStakeHolderpopUpReducerType>(

    (set) => ({
        id : "",
        showModel:false,
        setShowModel:(input :boolean) => set({showModel : input}),
        setId : (input : string) => set({id : input})
    }),
)