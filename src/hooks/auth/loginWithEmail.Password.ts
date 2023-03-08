import { supabase } from "~/config/supbase"



export const singInWithEmailAndPassword  = async (email:string , password:string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if(error){
      throw new Error(error.message)
    }
    //if we have a user then set the cookie
    if(data?.session){
      return data.user
    }
  
  }
  