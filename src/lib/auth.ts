import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter} from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from "bcrypt"
import { type GetServerSidePropsContext } from "next";

import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";


function getCredintionals(){
    const GITHUB_ID  = process.env.GITHUB_ID
    const GITHUB_SERCRET = process.env.GITHUB_SERCRET

    if(!GITHUB_ID || GITHUB_ID.length === 0){
        throw new Error("git hub id is not provided")
    }
    if(!GITHUB_SERCRET || GITHUB_SERCRET.length === 0){
        throw new Error("git hub id is not provided")
    }
    return {
        GITHUB_ID , 
        GITHUB_SERCRET
    }
}

export const authOptions : NextAuthOptions = {
 //@ts-ignore
  adapter : PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    
    GithubProvider({
      clientId: getCredintionals().GITHUB_ID,
      clientSecret: getCredintionals().GITHUB_SERCRET,
      httpOptions: {
        timeout: 40000,
      },
    }),
    CredentialsProvider({
        name: "Credentials",
        
        credentials: {
          email: { label: "email", type: "text", placeholder: "test@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {

          console.log(credentials?.email)
          console.log(credentials?.password)
            const user = await prisma.user.findFirstOrThrow({
                where:{
                  email : credentials?.email
                }
              }).catch(error => {
                console.log(error)
                throw new Error(" email is not currect")
              })
              if(!user.password) throw new Error("user dont have password")
           //   see if user password is currect
              
              const response = await bcrypt.compare(credentials?.password as string, user?.password).catch(errpr => {
                throw new Error(" password is not currect")
              })
    
             if (response) {
                  // Any object returned will be saved in `user` property of the JWT
                return user
             } else {
                  // If you return null then an error will be displayed advising the user to check their details.
                return null
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
             }
           
        }
      })
  ],
  debug  : true , 
  session:{
    strategy:"jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60, 
   },
   pages:{
    signIn : "/",
    error :"/"
  },
  callbacks:{
    redirect() {
        return '/app'
    },
    async signIn({ user, account, profile, email, credentials }) {

      
      const notification = await prisma.notifications.findFirst({
        where :{
          userId :  user.id
        }
      })

      if(!notification){
        await prisma.notifications.create({
          data :{
            userId :  user?.id 
          }
        })
        return true
      }
     return true
    
    },
    session({token , session}) {
      if(token){
        session.user.id = token.id ,
        session.user.email = token.email ,
        session.user.name = token.name ,
        session.user.image = token.picture
        session.user.role  = token.role,
        session.user.firstName = token.firstName
        session.user.lastName  = token.lastName,
        session.user.role = token.role
      }

      return session
    },
    //@ts-ignore
    async jwt({token , user }) {
      const dbUser = await prisma.user.findUnique({
        where : {
          email : token.email as string
        }
      }) 
  
      if(!dbUser) return token
      return {
        ...token ,
        id : dbUser.id , 
        email : dbUser.email , 
        name : dbUser.name , 
        picture : dbUser.image , 
        firstName : dbUser.name , 
        lastName : dbUser.LastName , 
        role : dbUser.role , 
        userName : dbUser.UserName , 
      }
    }
    
  },

  

}

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
