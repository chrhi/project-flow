

import {createTRPCRouter,} from "~/server/api/trpc";
import { create_project } from "./create-porject";
import { getProjectOfOrg } from "./gat-project-by-org-id";

  
  
export const newProjectRouter = createTRPCRouter({
   
    create_project,
    getProjectOfOrg
  
  });
  