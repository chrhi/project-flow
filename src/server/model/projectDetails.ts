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