import { supabase } from "~/config/supbase";


export async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if(error) throw new Error(error.message)
    return data.provider
  }