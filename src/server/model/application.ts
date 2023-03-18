import { supabase } from "~/config/supbase"



export const hasProjectStarted = async (id : string ) => {
    const { data, error } = await supabase
  .from('app')
  .select('*' )
  .eq("abdullah" , id)
  if(error ) throw new Error(error.message)
  return data
}

//id of the project



export const pdfStatus = async (id : string ) => {
    const { data: app, error } = await supabase
    .from('app')
    .select('has_pdf_exist')
    .eq("abdullah" , id)
    if(error ) throw new Error(error.message)
    return app[0]
}


export const updatePdfStatus = async (value:boolean , id : string) => {
    const { error } = await supabase
    .from('app')
    .update({ has_pdf_exist: value })
    .eq('abdullah', id)
    if(error ) throw new Error(error.message) 
}


//upload or create the project status 
export const uploadProjectStatus = async (
    id : string ,
  
     ) => {
    const {  error } = await supabase.from('app')
    .insert({  has_the_project_started : true , has_pdf_exist : false , current_stage : "démarrage" , abdullah : id 
    })
   
    if(error) throw new Error(error.message)
  }
  