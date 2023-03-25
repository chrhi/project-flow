import { BaseModel } from "./BaseModel";

class Project extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (
        user_id : string,
        id : string ,
        stage : string
        
        ){
        const {  error } = await this.provider.from('project').insert([  {id , user_id , stage}])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the document staus and procide that to the caller
    public async get (user_id : string ) {
        const { data: user, error } = await this.provider.from('project').select('*').eq("user_id" , user_id)
        if(error){
            throw new Error(error.message)
        }
        return user
    }

      // this method will update the document status
      public async update (
        stage : string ,
        
        id : string 
        
        ){
        const {  error } = await this.provider.from('project').update([  { stage }]).eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
     // this method will delete the document status
     public async delete (

        id : string        
        ){
        const {  error } = await this.provider.from('project').delete().eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
}

export const projectTable = new Project()