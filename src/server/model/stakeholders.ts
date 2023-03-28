import { BaseModel } from "./BaseModel";

class Stakeholders extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (
        name : string ,
        email : string ,
        phone : number ,
        role : string ,
        note : string ,
        levelOfInvolvement : string ,
        communicationNeeds : string ,
        communicationMethod : string ,
        timing : string ,
        pendingChanges  : string ,
        relationships : string ,
        stakeholderEngagementApproach : string ,

        project_id : string ,
        id : string 
        
        ){
            const { error } = await this.provider
            .from('stakeholders')
            .insert([
              { id , name , email , phone , role , note , levelOfInvolvement , communicationMethod : communicationMethod , communicationNeeds , timing ,   pendingChanges : pendingChanges , relationships , stakeholderEngagementApproach , project_id},
            ])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the document staus and procide that to the caller
    public async get (project_id : string ) {
        const { data: user, error } = await this.provider.from('stakeholders').select('*').eq("project_id" , project_id)
        if(error){
            throw new Error(error.message)
        }
        return user
    }

      // this method will update the document status
      public async update (
        name : string ,
        email : string ,
        phone : number ,
        role : string ,
        note : string ,
        levelOfInvolvement : string ,
        communicationNeeds : string ,
        communicationMethod : string ,
        timing : string ,
        pendingChanges  : string ,
        relationships : string ,
        stakeholderEngagementApproach : string ,

        
        id : string 
        
        ){
        const {  error } = await this.provider.from('stakeholders').update([ 
            { name ,email , phone , role , note , levelOfInvolvement,communicationNeeds , communicationMethod , timing , pendingChanges , relationships , stakeholderEngagementApproach }
        ]).eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
     // this method will delete the document status
     public async delete (

        id : string        
        ){
        const {  error } = await this.provider.from('stakeholders').delete().eq("id" , id)
  
       if(error){
          throw new Error(error.message)
        }
    }
    //get only one stakholder 
    public async getOne ({id }:{id : string }){
        const { data, error } = await this.provider.from('stakeholders').select('*').eq("id" , id)
        if(error){
            throw new Error(error.message)
        }
        return data
    }
}

export const stakeholdersTable = new Stakeholders()