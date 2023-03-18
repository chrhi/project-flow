import { supabase } from "~/config/supbase"


export const UploadConsiderationsProject = async (
    id : string ,
    HighLevelRisks: string,
    AcceptanceCriteria: string,
    Hypotheses: string,
    Constraints: string, 
   ) => {

      const {  error } = await supabase
  .from('ConsiderationsProject')
  .insert([
    { HighLevelRisks, AcceptanceCriteria , Hypotheses , Constraints , abdullah : id },
  ])
  if(error){
   throw new Error(error.message)
    
  } 
  
}

export const updateConsiderationsProject = async (
  id : string ,
  HighLevelRisks: string,
  AcceptanceCriteria: string,
  Hypotheses: string,
  Constraints: string, 
 ) => {


const {  error } = await supabase.from('projectDetails')
.update({ HighLevelRisks ,AcceptanceCriteria : AcceptanceCriteria , Hypotheses ,  Constraints }).eq('abdullah', id)
if(error){
 throw new Error(error.message)
  
} 

}

export const gatConsiderationsProject = async ( id : string) => {
  const { data: ConsiderationsProject, error } = await supabase
.from('ConsiderationsProject')
.select('*')
.eq('abdullah', id)
if(error){
  throw new Error(error.message)
   
 } 
return ConsiderationsProject
 
}