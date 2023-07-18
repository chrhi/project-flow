import { Pencil } from "lucide-react";
import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";
import { prisma } from "~/lib/prisma";
import { getSession } from "next-auth/react";
import {z} from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import { useRouter } from "next/router";

const validateSchema = z
    .object({
      FirstName: z.string().min(3),
      LastName: z.string().min(3),
      Username: z.string().min(3),
      title: z.string(),
      Phone: z.string(),
      Address: z.string(),
      city: z.string(),
      state : z.string(),
      Country : z.string(),
      Zipcode : z.string()
    })

type FormData = z.infer<typeof validateSchema>




export async function getServerSideProps(ctx: any) {

    const session = await getSession(ctx)

    // const data = await prisma.user.findUnique({
    //   where :{
    //         id : session?.user.id
    //   }
    // })

    
     
    
      return { props: { data :{
        name :"test"
      } } }
}
//@ts-ignore
const Page: NextPage = ({ data }) => {

  const router = useRouter()

  const{
            register,
            handleSubmit,
            formState :{errors}
          }  = useForm<FormData>({
           resolver : zodResolver(validateSchema)
       })

      

  return (
    <> 
    <Header />
  
    <main className="   flex flex-col h-fit min-h-full w-full gap-y-4 p-4 bg-white ">
          {/* this is the title of the web site */}
          <div className="w-[80%] h-[50px] mx-auto max-w-2xl">
              <h1 className="text-2xl font-semibold text-center text-gray-900">Complete your profile to join your agency workspace </h1>
          </div>
          
          {/* this is the profile form */}

          <div className="w-[80%] flex items-center gap-x-4 h-[100px] mx-auto max-w-2xl">
              <div className="w-[20%] gap-y-2 flex flex-col h-full items-center">
                    <Avatar className="w-24 h-24 shadow-lg ">
                           <AvatarImage src={data?.image || "/assets/avatar.png"} />
                           <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <AbdullahButton className="w-10 h-10 rounded-[50%]  z-[99]">
                                  <Pencil size={32} color="#ffffff" strokeWidth={3} />
                   </AbdullahButton>
               </div>
               <div className="w-[80%] flex h-full flex-col">
                      <div className="w-full h-[50%] gap-x-1 flex items-center">
                              <div className="flex w-[50%] h-full items-center gap-x-1">
                                    <Label>First name</Label>
                                    <Input 
                                    defaultValue={data?.name }
                                    {...register("FirstName")}
                                    className="w-[60%] ml-auto" />
                              </div>
                              <div className="flex w-[50%] h-full items-center gap-x-1">
                                    <Label>Last name</Label>
                                    <Input
                                     defaultValue={data?.LastName || ""}
                                    {...register("LastName")}
                                    className="w-[60%] ml-auto" />
                              </div>
                      </div>
                      <div className="w-full h-[50%]  gap-x-1 flex items-center">
                              <div className="flex w-[50%] h-full items-center gap-x-1">
                                    <Label>UserName :</Label>
                                    <Input 
                                       defaultValue={data?.UserName || ""}
                                     {...register("Username")}
                                    className="w-[60%] ml-auto" />
                              </div>
                              <div className="flex w-[50%] h-full items-center gap-x-1">
                                    <Label>Email ID :</Label>
                                    <Input 
                                    disabled
                                    value={data?.Email}
                                    className="w-[60%] ml-auto" />
                              </div>
                      </div>
               </div> 
          </div>
              {/* this is the divided section */}
          <div className="w-full flex  items-center  h-[40px] max-w-2xl mx-auto mt-8 justify-between ">
                                  <p className="font-semibold ">OTHER INFORMATION</p>
                                  <div className="w-[70%]  border-b h-[5px]" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] max-w-2xl mx-auto   ">
                                    <Label>job title :</Label>
                                    <Input 
                                        {...register("title")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] max-w-2xl mx-auto   ">
                                    <Label>Phone :</Label>
                                    <Input
                                    {...register("Phone")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] max-w-2xl mx-auto   ">
                                    <Label>Address :</Label>
                                    <Input 
                                        {...register("Address")}
                                    className="w-[80%] ml-auto" />
          </div>

         
          <div className="w-[80%] flex  items-center jutify-between h-[40px] max-w-2xl mx-auto   ">
                                    <Label>city :</Label>
                                    <Input 
                                        {...register("city")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-betweenh-[40px] max-w-2xl mx-auto   ">
                                    <Label>state :</Label>
                                    <Input
                                        {...register("state")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] max-w-2xl mx-auto   ">
                                    <Label>Country  :</Label>
                                    <Input 
                                    {...register("Country")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] max-w-2xl mx-auto   ">
                                    <Label>Zip code  :</Label>
                                    <Input
                                        {...register("Zipcode")}
                                    className="w-[80%] ml-auto" />
          </div>

             {/* this is the divided section */}
          <div className="w-full flex  items-center  h-[40px] max-w-2xl mx-auto mt-8 justify-between ">
                                  <p className="font-semibold ">ORGANIZATIONS </p>
                                  <div className="w-[70%]  border-b h-[5px]" />
          </div>


          
          <div className="w-[80%] flex items-center my-8 gap-x-4 h-[100px] mx-auto max-w-2xl">
              <div className="w-[20%] gap-y-2 flex flex-col h-full items-center">
                    <Avatar className="w-28 h-28 shadow-lg ">
                           <AvatarImage src="data:image/png;base64,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" />
                           <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <AbdullahButton className="w-10 h-10 rounded-[50%]  z-[99]">
                                  <Pencil size={32} color="#ffffff" strokeWidth={3} />
                   </AbdullahButton>
               </div>
               <div className="w-[80%] flex h-full gap-y-2 items-center flex-col">
                       <div className="w-full flex  items-center jutify-between h-[40px] max-w-2xl mx-auto   ">
                                    <Label>Agency name  </Label>
                                    <Input className="w-[80%] ml-auto" />
                      </div>
                      <div className="w-full flex  items-center jutify-between h-[40px] max-w-2xl mx-auto   ">
                              <Label>Category </Label>
                              <Input className="w-[80%] ml-auto" />
                       </div>
                       <div className="w-full flex  items-center  h-[40px] max-w-2xl mx-auto mt-8 justify-end ">
                                <AbdullahButton
                                onClick={() => router.push("/app/user/organization-add")}
                                className={cn(buttonVariants({variant :"secondary" , size :"sm"}))}>add new oorganization</AbdullahButton>
                      </div>
               </div> 
          </div>
          <div className="w-full flex  items-center   h-[40px] max-w-2xl mx-auto mt-8 justify-between ">
                                
                                  <div className="w-[100%]  border-b h-[5px]" />
          </div>

          <div className="w-full flex  items-start   h-[40px] max-w-2xl mx-auto mt-8 justify-end  ">
                                <AbdullahButton className={cn(buttonVariants({variant :"primary" }))}>save</AbdullahButton>
        </div>


         
      </main>
    
    </>
  );
};

export default Page;