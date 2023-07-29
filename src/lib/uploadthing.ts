import { generateReactHelpers } from "@uploadthing/react/hooks";

 
import type { OurFileRouter } from "~/pages/api/file-router";
 
export const {uploadFiles  } =
  generateReactHelpers<OurFileRouter>();

