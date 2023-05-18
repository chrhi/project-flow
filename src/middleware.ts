// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify, type JWTPayload } from 'jose';

// Function to verify the JWT token
async function verify(token: string, secret: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  // Run some checks on the returned payload, perhaps you expect some specific values

  // If it's all good, return it, or perhaps just return a boolean
  return payload;
}

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
  const auth = req.cookies.get('abdullah-access-token')?.value;

  const { pathname } = req.nextUrl;

  // Protect the app route
  if (pathname.startsWith('/app')) {
    // If we don't have the cookie, it means the user didn't sign in yet
    if (auth === undefined) {
      req.nextUrl.pathname = '/';
      return NextResponse.redirect(req.nextUrl);
    }

    // If the token is valid, let them go. If not, this will throw an error, which will be handled in the catch block
    try {
      await verify(auth, process.env.JWT_SECRET_KEY_SUPABASE!);
      
      console.log('The token is working');
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = '/';
      return NextResponse.redirect(req.nextUrl);
    }
  }

  // Redirect user if they are authenticated
  if (pathname.startsWith('/auth') || pathname.endsWith('/')) {
    if (auth) {
      // If the token is valid, redirect them to the app. If not, continue
      try {
        await verify(auth, process.env.JWT_SECRET_KEY_SUPABASE!);
        req.nextUrl.pathname = '/app';
        return NextResponse.redirect(req.nextUrl);
      } catch (error) {
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  // If none of the conditions are met, just continue
  return NextResponse.next();
}


// export default async function middleware() {
//   //todo
// }