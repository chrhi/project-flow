import { type JWTPayload, type KeyLike, SignJWT } from "jose";



export const signJwt = async (payload : JWTPayload, secretKey : KeyLike | Uint8Array) => {
    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
     
      .sign(secretKey);
    return jwt;
  };