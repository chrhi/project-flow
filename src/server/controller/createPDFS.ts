import { supabase } from "~/config/supbase"
import {generatePdf} from "../util/generatePDF"
import { ParamsType } from "../util/templatesPdf/DetailsTemplates"
import { PdfTemplates } from "../util/templatesPdf/DetailsTemplates"

export const createPDFS = async  () => {
    const { data: projectDetails, error } = await supabase
    .from('projectDetails')
    .select('*')
    if(error ) throw new Error(error.message)
    if(projectDetails?.length === 0) throw new Error("there is no data")
    const { data: ConsiderationsProject, error:error2 } = await supabase
     .from('ConsiderationsProject')
     .select('*')
     if(error2 ) throw new Error(error2.message)
     const { data: stakeholders, error:error3 } = await supabase
     .from('stakeholders')
     .select('*')
     if(error3 ) throw new Error(error3.message)
    //after getting the data from the details table we assigned it to dataDetails vaiable
    const dataDetails : ParamsType = {
     title : projectDetails[0]?.titre as string  ,
     NeedForOrganization : projectDetails[0]?.NeedForOrganization as string ,
     ProductDescription : projectDetails[0]?.ProductDescription as string ,
     PreApprovedResources : projectDetails[0]?.PreApprovedResources as string ,
     ProjectRequirements :  projectDetails[0]?.ProjectRequirements as string ,
     ThePojectDoesNotInclude : projectDetails[0]?.ThePojectDoesNotInclude as string ,
     Hypotheses : ConsiderationsProject[0]?.Hypotheses as string ,
     AcceptanceCriteria : ConsiderationsProject[0]?.AcceptanceCriteria as string ,
     Constraints : ConsiderationsProject[0]?.Constraints as string ,
     HighLevelRisks : ConsiderationsProject[0]?.HighLevelRisks as string ,
     stakeHolders : stakeholders
     
    }

  
    //we get the buffer from the template and the data
    const PdfAsString = PdfTemplates(dataDetails)
    const buffer = await generatePdf(PdfAsString )
    const { error : error1} = await supabase.storage
    .from("documents")
    .upload("detailsPdf.pdf" , buffer )
    if(error1)   throw new Error(error1.message)
}