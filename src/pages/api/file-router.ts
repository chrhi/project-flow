import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
 
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { authOptions } from "~/lib/auth";
 
const f = createUploadthing();
 

 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req, res }) => {
      // This code runs on your server before upload
 
      const session = await getServerSession(req , res , authOptions)
      // If you throw, the user will not be able to upload
      if (!session) throw new Error("Unauthorized");
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { ...session};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;