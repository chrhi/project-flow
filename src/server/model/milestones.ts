import { BaseModel } from "./BaseModel";

class Milestones extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (
        name : string ,
        project_id : string ,
        start_at : Date ,
        ends_at : Date,
        id : string 
        
        ){
        const {  error } = await this.provider.from('milestones').insert([  {id , name , start_at , ends_at , project_id }])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the document staus and procide that to the caller
    public async get (project_id : string ) {
        const { data, error } = await this.provider.from('milestones').select('*').eq("project_id" , project_id)
        if(error){
            throw new Error(error.message)
        }
        return data
    }

      // this method will update the document status
      public async update (
        name : string ,
      
        start_at : Date ,
        ends_at : Date,
        id : string  
        
        ){
        const {  error } = await this.provider.from('milestones').update([  { name , start_at , ends_at  }]).eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
     // this method will delete the document status
     public async delete (

        id : string        
        ){
        const {  error } = await this.provider.from('milestones').delete().eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
}

export const MilestonesTable = new Milestones()