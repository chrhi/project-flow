import { supabase } from "~/config/supbase"


export const uploadStakeHolder = async (
    name:string , 
    title : string ,
    role:string 
   ) => {

      const {  error } = await supabase
  .from('stakeholders')
  .insert([
    { title , name , role },
  ])
  if(error){
   throw new Error(error.message)
    
  } 
  
}
export const gatStakeHolders = async () => {
    const { data: stakeholders, error } = await supabase
  .from('stakeholders')
  .select('*')
  if(error){
    throw new Error(error.message)
     
   } 
  return stakeholders
   
}

export const gatOneStakeHolder = async ( id : string) => {
    const { data: stakeholder, error } = await supabase
  .from('stakeholders')
  .select('*')
  .eq('id', id)
  if(error){
    throw new Error(error.message)
     
   } 
  return stakeholder
   
}

export const updateStakeHolderById = async ( id : string , name:string , 
    title : string ,
    role:string ) => {
    const { error } = await supabase
  .from('stakeholders')
  .update({ name , title , role })
  .eq('id', id)
  if(error){
    throw new Error(error.message)
     
   } 
}

export const deleteSatakeHolder = async ( id : string ) => {
    const {  error } = await supabase
  .from('stakeholders')
  .delete()
  .eq('id', id)
  if(error){
    throw new Error(error.message)
   } 
}