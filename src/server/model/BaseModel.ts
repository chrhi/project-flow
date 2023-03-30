import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "~/config/supbase";
export   class BaseModel {
    public provider : SupabaseClient<any, "public", any>

    constructor(){
        this.provider = supabase
    }

  

} 

export const baseModel = new BaseModel()