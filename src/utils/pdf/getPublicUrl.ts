import { supabase } from "~/lib/supbase"



export const get_publicUrl =  (path:string) : string => {

    const {data } =  supabase.storage.from("documents").getPublicUrl ( path )
    const decodedUrl = decodeURI(data.publicUrl)
    return decodedUrl
}