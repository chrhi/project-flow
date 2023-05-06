import { BaseModel } from "./BaseModel";

class User extends BaseModel {
    

    constructor(){
        super()
    }

    // this method will create a new user
    public async create (id : string ,email : string , password : string ){
        const {  error } = await this.provider.from('user').insert([  {id , email , password , role : "PROJECT_MANAGER" }])
  
       if(error){
          throw new Error(error.message)
        }
    }

      // this method will create a new team member
      public async createTeamMember (id : string ,email : string , password : string , code : string ){
        const {  error } = await this.provider.from('user').insert([  {
             id ,
             email , password ,
             role : "TEAM_MEMBER" , 
             folowing :  code 
            }])
  
       if(error){
          throw new Error(error.message)
        }
    }

    // this method will get the user (email) and its hased password
    public async get (email : string ) {
        const { data: user, error } = await this.provider.from('user').select('*').eq("email" , email)
        if(error){
            throw new Error(error.message)
        }
        return user
    }

}

export const userTable = new User()