import { BaseModel } from "./BaseModel";

class Document extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (
        name : string ,
        status : boolean ,
        public_url : string ,
        project_id : string ,
        id : number 
        
        ){
        const {  error } = await this.provider.from('document').insert([  {id , name , public_url , status , project_id }])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the document staus and procide that to the caller
    public async get (project_id : string ) {
        const { data: user, error } = await this.provider.from('document').select('*').eq("project_id" , project_id)
        if(error){
            throw new Error(error.message)
        }
        return user
    }

      // this method will update the document status
      public async update (
        name : string ,
        status : boolean ,
        public_url : string ,
        
        id : number 
        
        ){
        const {  error } = await this.provider.from('document').update([  { name , public_url , status  }]).eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
     // this method will delete the document status
     public async delete (

        id : number        
        ){
        const {  error } = await this.provider.from('document').delete().eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
}

export const documentTable = new Document()