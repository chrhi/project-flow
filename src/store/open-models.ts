import { create } from 'zustand'


type OpenModelType ={
    id : string,
    showModel: boolean,
    setShowModel : (input :boolean) => void,
    setId : (input:string) => void
}

export const OpenStakeHolderOpoUpShowCase = create<OpenModelType>(

    (set) => ({
        id : "",
        showModel:false,
        setShowModel:(input :boolean) => set({showModel : input}),
        setId : (input : string) => set({id : input})
    }),
)


export const openTasksShowUp = create<OpenModelType>(

    (set) => ({
        id : "",
        showModel:false,
        setShowModel:(input :boolean ) => set({showModel : input}),
        setId : (input : string) => set({id : input})
    }),
)
