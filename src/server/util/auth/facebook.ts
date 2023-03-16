import { supabase } from "~/config/supbase";


export async function signInWithFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
    if(error) throw new Error(error.message)
    return data.provider
}