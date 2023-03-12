import {supabase} from '~/config/supbase'



export const createUserWithEmailAndPassword = async (email:string , password:string ) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password:password
  }
  )
  if(error){
    console.error(error)
    return
  }
 return data.user
}

export const singInWithEmailAndPassword  = async (email:string , password:string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
  if(error) throw new Error(error.message)
  if(data?.session){
    return data.user
  }

}

export const logout = async () => {
const { error } = await supabase.auth.signOut()
if(error) throw new Error(error.message)
// window?.location.reload()
}


export const getCurrentUser = async () => {
    const { data: { user } ,error } = await supabase.auth.getUser()
    if(error) throw new Error(error.message)
    return  user
}