import { supabase } from "~/config/supbase"



export const hasProjectStarted = async () => {
    const { data: app, error } = await supabase
  .from('app')
  .select('has_the_project_started')
  if(error ) throw new Error(error.message)
  return app 
}

//id of the project

export const updteProjectStatus = async (value : boolean) => {
    const { error } = await supabase
    .from('app')
    .update({ has_the_project_started: value })
    .eq('id', 'someValue')
    if(error ) throw new Error(error.message)

}

export const pdfStatus = async () => {
    const { data: app, error } = await supabase
    .from('app')
    .select('has_pdf_exist')
    if(error ) throw new Error(error.message)
    return app[0]
}


export const updatePdfStatus = async (value:boolean) => {
    const { error } = await supabase
    .from('app')
    .update({ has_pdf_exist: value })
    .eq('id', '1234567890')
    if(error ) throw new Error(error.message) 
}

export const saveHtmlFormat = async  (html : string ) => {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const charterJson : JSON = JSON.parse(html)
    const { error } = await supabase
    .from('app')
    .update({ charterJson  })
    .eq('id', '1234567890')
    if(error ) throw new Error(error.message) 
}
