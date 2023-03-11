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
    //after getting the data from the details table we assigned it to dataDetails vaiable
    const dataDetails : ParamsType = {
     title : projectDetails[0]?.titre as string  ,
     NeedForOrganization : projectDetails[0]?.NeedForOrganization as string ,
     ProductDescription : projectDetails[0]?.ProductDescription as string ,
     PreApprovedResources : projectDetails[0]?.PreApprovedResources as string ,
     ProjectRequirements :  projectDetails[0]?.ProjectRequirements as string ,
     ThePojectDoesNotInclude : projectDetails[0]?.ThePojectDoesNotInclude as string 
    }

    console.log("this is from the pdf data project")
    console.log(dataDetails)
    console.log(projectDetails)
    //we get the buffer from the template and the data
    const PdfAsString = PdfTemplates(dataDetails)
    const buffer = await generatePdf(PdfAsString )
    const { error : error1} = await supabase.storage
    .from("documents")
    .upload("detailsPdf.pdf" , buffer )
    if(error1)   throw new Error(error1.message)
}