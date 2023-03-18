import { supabase } from "~/config/supbase"


export const UploadProjectDetails = async (
  id : string, 
  title:string , 
  NeedForOrganization:string ,
  ProjectRequirements: string ,
  ProductDescription:string,
  ThePojectDoesNotInclude:string ,
  PreApprovedResources : string 
   ) => {

      const {  error } = await supabase
  .from('projectDetails')
  .insert([
    { abdullah : id , titre : title , NeedForOrganization , ProjectRequirements , ProductDescription , ThePojectDoesNotInclude , PreApprovedResources },
  ])
  if(error){
   throw new Error(error.message)
  } 
}



export const updateProjectDetails = async (
  id : string ,
  title:string , 
  NeedForOrganization:string ,
  ProjectRequirements: string ,
  ProductDescription:string,
  ThePojectDoesNotInclude:string ,
  PreApprovedResources : string 
   ) => {
  const {  error } = await supabase.from('projectDetails').update({ titre: title , NeedForOrganization , ProjectRequirements , ProductDescription , ThePojectDoesNotInclude , PreApprovedResources  }).eq('abdullah', id)
  if(error) throw new Error(error.message)
}

export const gatProjectDetails = async ( id : string ) => {
  const { data: projectDetails, error } = await supabase
.from('projectDetails')
.select('*')
.eq('abdullah', id)
if(error){
  throw new Error(error.message)
   
 } 
return projectDetails
 
}