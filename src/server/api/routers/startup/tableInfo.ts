/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { tableInfoTable } from "~/server/model/tableInfo";

export const tableInfoRouter = createTRPCRouter({
  getAllInfo: publicProcedure
    .input(z.object({ project_id: z.string() }))
    .query(async({ input }) => {
     const data = await tableInfoTable.get(input.project_id).catch(error => { 
        throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
        return {
            data
        }
    }),

    postNewInfo : publicProcedure
    .input(z.object({
        objectifs : z.string() , 
        type :  z.string() ,
        seccessCriteria :  z.string() , 
        approval :  z.string() ,
        project_id :  z.string() ,
        id :  z.string()
    }))
    .mutation(async ({input}) => {
        await tableInfoTable.create(input.objectifs , input.type , input.seccessCriteria , input.approval , input.project_id , input.id).catch(error => { 
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
    }),
    deleteOneInfo : publicProcedure
    .input(z.object({
        id : z.string()
    }))
    .mutation(async ({input}) => {
        await tableInfoTable.delete(input.id).catch(error => { 
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
    })
});
