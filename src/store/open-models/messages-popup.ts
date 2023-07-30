import { create } from 'zustand'


type OpenModelType ={
    id : string,
    isOpen: boolean,
    setIsOpen : (input :boolean) => void,
    setId : (input:string) => void
}

export const openInvitationModel = create<OpenModelType>(

    (set) => ({
        id : "",
        isOpen:false,
        setIsOpen:(input :boolean) => set({isOpen : input}),
        setId : (input : string) => set({id : input})
    }),
)
