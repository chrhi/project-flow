import { z } from "zod";
import { protectedProcedure } from "../api/trpc";




export const updateUser = protectedProcedure
.input(z.object({ 
  Address : z.string(),
  city : z.string(),
  Country :z.string(),
  image :z.string(),
  LastName : z.string(),
  jobTitle : z.string(),
  Phone : z.string(),
  state : z.string(),
  UserName : z.string(),
  ZipCode : z.string(),
}) )
.mutation( async ({ input , ctx  }) => {

 // get the current user 

 const user = await ctx.prisma.user.findFirst({
  where :{
    id : ctx.session.user.id
  }
 })

 const updatedData = await ctx.prisma.user.update({
  where :{
    id : ctx.session.user.id
  },
  data :{
    Address : input.Address || user?.Address,
    city : input.city || user?.city,
    Country : input.Country || user?.Country,
    image : input.image || user?.image,
    LastName : input.LastName || user?.LastName,
    jobTitle : input.jobTitle || user?.jobTitle,
    Phone : input.Phone || user?.Phone,
    state : input.state || user?.state,
    UserName : input.UserName || user?.UserName,
    ZipCode : input.ZipCode || user?.ZipCode,
  }
 })

 return updatedData

})