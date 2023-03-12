import { supabase } from "~/config/supbase"


export const UploadProjectDetails = async (
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
    { titre : title , NeedForOrganization , ProjectRequirements , ProductDescription , ThePojectDoesNotInclude , PreApprovedResources },
  ])
  if(error){
   throw new Error(error.message)
  } 
}



export const updateProjectDetails = async (
  title:string , 
  NeedForOrganization:string ,
  ProjectRequirements: string ,
  ProductDescription:string,
  ThePojectDoesNotInclude:string ,
  PreApprovedResources : string 
   ) => {
  const {  error } = await supabase.from('projectDetails').update({ title , NeedForOrganization , ProjectRequirements , ProductDescription , ThePojectDoesNotInclude , PreApprovedResources  }).eq('id', '16')
  if(error) throw new Error(error.message)
}

export const gatProjectDetails = async () => {
  const { data: projectDetails, error } = await supabase
.from('projectDetails')
.select('*')
if(error){
  throw new Error(error.message)
   
 } 
return projectDetails
 
}