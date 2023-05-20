/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {  baseModel } from "~/server/model/BaseModel";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { stakeholdersTable } from "~/server/model/stakeholders";

export const stakHolderRouter = createTRPCRouter({
  updateStakeHolderFully: publicProcedure
    .input(
      z.object({ 
        name: z.string(),
        contact: z.string(),
        role: z.string(),
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      // todo
    }),

  deleteStakholder: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await stakeholdersTable
        .delete(input.id)
        .catch((error) => {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: error,
          });
        });
    }),

  createStackholder: publicProcedure
    .input(
      z.object({
        name: z.string(),
        contact: z.string(),
        role: z.string(),
        id: z.string(),
        project_id: z.string(),
        impact: z.string(),
        Investment: z.string(),
        type: z.string(),
        expectations : z.string() , 
        requirements : z.string()
      })
    )
    .mutation(async ({ input }) => {
      const {id,name,contact,impact,role, project_id, Investment, type,expectations,requirements, } = input;
      
      const { error } = await baseModel.provider
        .from('stakeholder')
        .insert([
          { id,name,contact, role, project_id, Investment, type, expectations, requirements , impact  }
        ]);
    
      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }
    }),

  getOnlyOneStackHolder: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const data = await stakeholdersTable
        .getOne({ id: input.id })
        .catch((error) => {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: error,
          });
        });

      return {
        name: data[0]?.name,
        email: data[0]?.email,
        phone: data[0]?.phone,
        role: data[0]?.role,
        note: data[0]?.note,
        levelOfInvolvement: data[0]?.levelOfInvolvement,
        communicationNeeds: data[0]?.communicationNeeds,
        communicationMethod: data[0]?.communicationMethod,
        timing: data[0]?.timing,
        pendingChanges: data[0]?.pendingChanges,
        relationships: data[0]?.relationships,
        stakeholderEngagementApproach: data[0]?.stakeholderEngagementApproach,
        id: data[0]?.id,
        project_id: data[0]?.project_id,
      };
    }),

  getAllStackHolders: publicProcedure
    .input(z.object({ project_id: z.string() }))
    .query(async ({ input }) => {
      const data = await stakeholdersTable
        .get(input.project_id)
        .catch((error) => {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: error,
          });
        });
      return data;
    }),
});