import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "~/config/supbase";
export abstract  class BaseModel {
    protected provider : SupabaseClient<any, "public", any>

    constructor(){
        this.provider = supabase
    }

  

} 