import { z } from "zod";
import { publicProcedure } from "../api/trpc";




export const updateUser = publicProcedure
.input(z.object({ 
  userId : z.string().uuid(),
  name: z.string() ,
  lastName : z.string(),
  phone : z.string(),
  zipCode : z.string(),
  location : z.string(),
  photo : z.string()
}) )
.mutation( async ({ input , ctx  }) => {

  return "not supported yet"

})