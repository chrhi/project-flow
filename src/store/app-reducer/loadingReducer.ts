import { create } from 'zustand'
type Reducer ={
    is_loading: boolean,
    set_isLoading : (input :boolean) => void
}

export const loading_Reducer = create<Reducer>(

    (set) => ({
        is_loading:false,
        set_isLoading:(input :boolean) => set({is_loading : input}),
    }),
)
