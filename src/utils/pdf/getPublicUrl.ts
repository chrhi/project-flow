import { supabase } from "~/config/supbase"



export const get_publicUrl =  (id:string) : string => {
    const path = `${id}/Charte.pdf`
    const {data } =  supabase.storage.from("documents").getPublicUrl ( path )
    const decodedUrl = decodeURI(data.publicUrl)
    return decodedUrl
}