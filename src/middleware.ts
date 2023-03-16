// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';

async function verify(token: string, secret: string): Promise<JWTPayload> {
  const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
  // run some checks on the returned payload, perhaps you expect some specific values

  // if its all good, return it, or perhaps just return a boolean
  return payload;
}

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
    const  auth = req.cookies.get('abdullah-access-token')?.value

  

    const {pathname} = req.nextUrl;
  //protect the app route
    if (pathname.startsWith("/app")) {
      //if we don't have the cookie means users didn't sign in yet
      if (auth === undefined) {
        req.nextUrl.pathname = "/auth";
       
        return NextResponse.redirect(req.nextUrl);
      }
      //if the token is valid then lett him go if not this will throw an error so it will be handled in the catch block
      try{
        await verify(auth, process.env.JWT_SECRET_KEY_SUPABASE!);
      
        console.log("the token is working")
        return NextResponse.next();

      }catch(error){
        req.nextUrl.pathname = "/auth";
       
        return NextResponse.redirect(req.nextUrl);
      }     
    }
    // redirect user if they are authenticated
    if (pathname.startsWith("/auth") || pathname.endsWith("/") ) {
      if (auth) {
    //if the token is valid then lett him go if not this will throw an error so it will be handled in the catch block
      try{
        await verify(auth, process.env.JWT_SECRET_KEY_SUPABASE!);
      
        req.nextUrl.pathname = "/app";
       
        return NextResponse.redirect(req.nextUrl);
      }catch(error){
        return NextResponse.next();   
      }
        }
           return NextResponse.next();   
    }
  // if none of the conditions are matte then just continue
    return NextResponse.next();
  }


