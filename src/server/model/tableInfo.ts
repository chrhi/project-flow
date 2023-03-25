import { BaseModel } from "./BaseModel";

class TableInfo extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (
        objectifs : string , 
        type : string ,
        seccessCriteria : string , 
        approval : string ,
        project_id : string ,
        id : string 
        
        ){
        const {  error } = await this.provider.from('tableInfo').insert([ 
             {id , objectifs , type , seccessCriteria , approval ,  project_id }])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the document staus and procide that to the caller
    public async get (project_id : string ) {
        const { data: user, error } = await this.provider.from('tableInfo').select('*').eq("project_id" , project_id)
        if(error){
            throw new Error(error.message)
        }
        return user
    }

      // this method will update the document status
      public async update (
        objectifs : string , 
        type : string ,
        seccessCriteria : string , 
        approval : string ,
      
        id : string 

        
      
        
        ){
        const {  error } = await this.provider.from('tableInfo').update([ 
            { objectifs , type , seccessCriteria , approval }
        ]).eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
     // this method will delete the document status
     public async delete (

        id : string        
        ){
        const {  error } = await this.provider.from('tableInfo').delete().eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
}

export const tableInfoTable = new TableInfo()