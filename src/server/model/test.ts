import { supabase } from "~/config/supbase"


export const create_flow = async (
    workspace_id :string , 
    title : string ,
    brief : string ,
    status :boolean ,
    icon_url :string ,
    starts_at : string ,
    ends_at : string , 
    members : [string]) => {

      const { data, error } = await supabase
  .from('flow')
  .insert([
    { workspace_id,title , brief , status , icon_url , starts_at , ends_at , members },
  ])
  if(error){
    console.error(error)
    return
  } 
  
}