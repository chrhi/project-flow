import { z } from "zod";
import { gatOneStakeHolder , gatStakeHolders , updateStakeHolderById , uploadStakeHolder , deleteSatakeHolder } from "~/server/model/stakeholders";
import { createTRPCRouter, publicProcedure  } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";


//update delete get post

export const stakeholdersRouter = createTRPCRouter({
  getStakeholders: publicProcedure.query(async () => {
      const data = await gatStakeHolders().catch(error => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
      })
      return {
       data
      }
    }),
  getOneStakeHolder :  publicProcedure.input(z.object({ id: z.string() })).query( async ({ input }) => {
    const data = await gatOneStakeHolder(input.id).catch(error => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
    return {
      data
    };
    }),
    uploadStakeHolder : publicProcedure
    .input(z.object({
         title: z.string(),
         name: z.string(),
         role: z.string(),
     }))
    .mutation( async  ({ input }) => {
      await uploadStakeHolder(input.title , input.name , input.role)
      .catch(error =>{ 
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
  }),
  updateStakeHolder : publicProcedure
  .input(z.object({
       id: z.string(),
       title: z.string(),
       name: z.string(),
       role: z.string(),
   }))
  .mutation( async  ({ input }) => {
    await updateStakeHolderById( input.id ,input.title , input.name , input.role)
    .catch(error =>{ 
       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
       throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
  })
}),
deleteStakeHolder : publicProcedure
.input(z.object({
     id: z.string(),
 }))
.mutation( async  ({ input }) => {
  await deleteSatakeHolder( input.id )
  .catch(error =>{ 
     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
     throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
})
}),
     
})