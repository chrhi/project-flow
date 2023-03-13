import { supabase } from "~/config/supbase"


export const UploadConsiderationsProject = async (
    HighLevelRisks: string,
    AcceptanceCriteria: string,
    Hypotheses: string,
    Constraints: string, 
   ) => {

      const {  error } = await supabase
  .from('ConsiderationsProject')
  .insert([
    { HighLevelRisks, AcceptanceCriteria , Hypotheses , Constraints  },
  ])
  if(error){
   throw new Error(error.message)
    
  } 
  
}

export const updateConsiderationsProject = async (
  HighLevelRisks: string,
  AcceptanceCriteria: string,
  Hypotheses: string,
  Constraints: string, 
 ) => {


const {  error } = await supabase.from('projectDetails')
.update({ HighLevelRisks , AcceptanceCriteria , Hypotheses ,  Constraints }).eq('id', '16')
if(error){
 throw new Error(error.message)
  
} 

}

export const gatConsiderationsProject = async () => {
  const { data: ConsiderationsProject, error } = await supabase
.from('ConsiderationsProject')
.select('*')
if(error){
  throw new Error(error.message)
   
 } 
return ConsiderationsProject
 
}