import { BaseModel } from "./BaseModel";

class  ProjectDetails extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (
        projectObjectOpportunity : string ,
        projectDescription : boolean ,
        highLevelRequirement : string ,
        hightLevelRisks : string,
        project_id : string 
        
        ){
        const {  error } = await this.provider.from('projectDetails').insert([
              {id :  project_id , projectObjectOpportunity , projectDescription , highLevelRequirement , hightLevelRisks }
            ])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the document staus and procide that to the caller
    public async get (project_id : string ) {
        const { data, error } = await this.provider.from('projectDetails').select('*').eq("id" , project_id)
        if(error){
            throw new Error(error.message)
        }
        return data
    }

      // this method will update the document status
      public async update (
        projectObjectOpportunity : string ,
        projectDescription : boolean ,
        highLevelRequirement : string ,
        hightLevelRisks : string,
        project_id : string 
        
        ){
        const {  error } = await this.provider.from('projectDetails').update([ 
             { name , projectObjectOpportunity , projectDescription , highLevelRequirement , hightLevelRisks   }]).eq("id" , project_id)
  
       if(error){
          throw new Error(error.message)
        }
    }
     // this method will delete the document status
     public async delete (

        project_id : string        
        ){
        const {  error } = await this.provider.from('projectDetails').delete().eq("id" , project_id)
  
       if(error){
          throw new Error(error.message)
        }
    }
}

export const projectDetailsTable = new ProjectDetails()