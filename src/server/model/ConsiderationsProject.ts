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