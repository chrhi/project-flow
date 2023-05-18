/* eslint-disable @typescript-eslint/no-explicit-any */
import { type SupabaseClient, createClient } from '@supabase/supabase-js'


class Supabase {
    private  supabase! : SupabaseClient<any, "public", any>
    private SUPABASE_URL : string 
    private SUPABASE_KEY : string 

    constructor( SUPABASE_URL : string ,  SUPABASE_KEY : string ){
        this.SUPABASE_URL = SUPABASE_URL 
        this.SUPABASE_KEY = SUPABASE_KEY
       
    
    }

    public createClient ():SupabaseClient<any, "public", any>{
        this.supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY)
        return this.supabase 
    }

}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const SupabaseObject = new Supabase( supabaseUrl , SUPABASE_KEY)

export const supabase = SupabaseObject.createClient()