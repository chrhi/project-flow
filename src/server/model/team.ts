import { BaseModel } from "./BaseModel";

class Team extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (
        name : string,
        id : string ,
        email : string,
        phone : string ,
        address : string ,
        note : string ,
        skills  : string ,
        availability : string ,
        performancehistory  : string[] ,
        tasks : string[],
        meet : string[],
        project_id : string
        
        ){
        const {  error } = await this.provider.from('team').insert([ 
             {id , name , email , phone , address , note , skills , availability , performancehistory , tasks , meet , project_id }
            ])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the document staus and procide that to the caller
    public async get (project_id : string ) {
        const { data, error } = await this.provider.from('team').select('*').eq("project_id" , project_id)
        if(error){
            throw new Error(error.message)
        }
        return data
    }

      // this method will update the document status
      public async update (
        name : string,
        id : string ,
        email : string,
        phone : string ,
        address : string ,
        note : string ,
        skills  : string ,
        availability : string ,
        performancehistory  : string[] ,
        tasks : string[],
        meet : string[],
        
        
        ){
        const {  error } = await this.provider.from('team').update([ 
             { name , email , phone , address , note , skills , availability , performancehistory , tasks , meet  }
            ]).eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
     // this method will delete the document status
     public async delete (

        id : string        
        ){
        const {  error } = await this.provider.from('team').delete().eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
    //get only one team mumber 
    public async getOne ({id } : {id : string }){
        const { data , error } = await this.provider.from('team').select('*').eq("id" , id)
        if(error){
            throw new Error(error.message)
        }
        return data
    }
}

export const teamTable = new Team()