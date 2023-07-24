import { createNextPageApiHandler } from "uploadthing/next-legacy";
 
import { ourFileRouter } from "~/pages/api/file-router";
 
const handler = createNextPageApiHandler({
  router: ourFileRouter,
});
 
export default handler;