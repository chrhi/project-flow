import type { NextApiRequest } from "next";

function getBaseUrl(ctx?: { req: NextApiRequest }): string {
  if (typeof window !== "undefined") {
    // Check if window object is available (client-side)
    return window.location.origin;
  }
  // For server-side rendering, use the incoming request object to get the base URL
  if (ctx && ctx.req) {
    const { protocol, host } = ctx.req.headers;
    return `${protocol}://${host}`;
  }
  // Default fallback if no context or request is available
  return "https://your-server-url.com";
}
