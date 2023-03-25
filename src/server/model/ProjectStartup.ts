import { BaseModel } from "./BaseModel";

class ProjectStartup extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (
        project_id : string,
        
        title : string,
        sponsor : string , 
        projectManager : string , 
        client : string , 
        dateToStart : string ,
        dateToEnd : string , 
        projectManagerAuthority : string , 
        staffDecision : string , 
        conflitManagment : string , 
        regionalDirector : string , 
        estimatedBudget : number 
        
        ){
        const {  error } = await this.provider.from('projectStartup').insert([ 
             {id : project_id , title , sponsor , projectManager , client , dateToStart , dateToEnd , projectManagerAuthority , staffDecision , conflitManagment , regionalDirector , estimatedBudget}])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the document staus and procide that to the caller
    public async get (project_id : string ) {
        const { data, error } = await this.provider.from('projectStartup').select('*').eq("id" , project_id)
        if(error){
            throw new Error(error.message)
        }
        return data
    }

      // this method will update the document status
      public async update (
        project_id : string,
        title : string,
        sponsor : string , 
        projectManager : string , 
        client : string , 
        dateToStart : string ,
        dateToEnd : string , 
        projectManagerAuthority : string , 
        staffDecision : string , 
        conflitManagment : string , 
        regionalDirector : string , 
        estimatedBudget : number 
        ){
        const {  error } = await this.provider.from('projectStartup').update([
              { title ,  sponsor , projectManager , client , dateToStart , dateToEnd , projectManagerAuthority , staffDecision , conflitManagment , regionalDirector , estimatedBudget}]).eq("id" , project_id)
  
       if(error){
          throw new Error(error.message)
        }
    }
     // this method will delete the document status
     public async delete (

        project_id : string        
        ){
        const {  error } = await this.provider.from('projectStartup').delete().eq("id" , project_id)
  
       if(error){
          throw new Error(error.message)
        }
    }
}

export const projectStartupTable = new ProjectStartup()