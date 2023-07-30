import { Pencil } from "lucide-react";
import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";
import {z} from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {type  ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { toast } from "react-hot-toast";
import { uploadFiles } from "~/lib/uploadthing";


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





const Page: NextPage = () => {

  const router = useRouter()

  const {data : session} = useSession()

  const [isRouterLoading , setIsRouterLoading] = useState<boolean>(false)

  const [userOrganizations , setUserOrganization] = useState<Organization[]>([])

  const inputRefrence = useRef<HTMLInputElement>(null)

  const [selectedFile, setSelectedFile] = useState<File | null | undefined>(null);

  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const [user , setUser] = useState<FormData>({
      FirstName: "",
      LastName: "",
      Username: "",
      title: "",
      Phone: "",
      Address: "",
      city:"",
      state : "",
      Country : "",
      Zipcode : ""
  })

  api.userRouter.getUser.useQuery(undefined , {
    onSuccess :(data) => {
      if(!data) return
      setUser({
        Address : data.Address || "", 
        city : data.city  || "", 
        Country : data.Country  || "", 
        FirstName : data.name || "",
        title : data.jobTitle  || "",  
        LastName : data.LastName  || "", 
        Phone : data.Phone  || "",  
        state : data.state  || "",  
        Username : data.UserName  || "",  
        Zipcode : data.ZipCode  || "", 
      })
    }
  })

  const mutation = api.userRouter.updateUser.useMutation({
    onSuccess : () => {
      toast.success("success")
    },
    onError :() => {
      toast.error("there is an error")
    }
  })



  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file from the input element
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file); // Update the state with the selected image file
      const previewUrl = URL.createObjectURL(file); // Create a temporary URL for the selected image
      setImagePreviewUrl(previewUrl); // Update the state with the preview URL
     
    } else {
      // If the selected file is not an image, you can display an error message or perform other actions
      toast.error('Please select a valid image file.')
    }
    setSelectedFile(file); // Update the state with the selected file
  };

  const{
            register,
            handleSubmit,
            formState :{errors}
          }  = useForm<FormData>({
           resolver : zodResolver(validateSchema)
       })
  
 useEffect(() => {
        if (Object.keys(errors).length) {
          for (const [_key, value] of Object.entries(errors)) {
            value
            toast.error((value as { message: string }).message)
          }
        }
      }, [errors])
    
   

  const {isLoading} = api.organizationRouter.getUserOrganization.useQuery(undefined , {
    onSuccess :(data) => {
      if(!data || data.length === 0){
        return
      }
      //@ts-ignore
      setUserOrganization(data )
    }
  })

  const handleGoToOrgPage = async (orgId : string ) => {
    setIsRouterLoading(true) 
    await router.push(`/app/user/organization/${orgId}`)
    setIsRouterLoading(false) 
  }

  // this is the submit method

  const onSubmit = async  (data: FormData) => {

  
    try{
      const [res] = await uploadFiles({endpoint :"imageUploader", files : [selectedFile as File]})  
      setImageUrl(res?.fileUrl || "")

      mutation.mutate({
        Address : data.Address , 
        city : data.city ,
        Country : data.Country ,
        image : res?.fileUrl || "https://utfs.io/f/42d711e0-daec-4d6f-9b66-b620a7beb058_thumb_cropped_1242x1222_znZZBoePprOsBnCH3FoZXN2m3DruXhFA.jpg",
        jobTitle : data.title , 
        LastName : data.LastName , 
        Phone : data.Phone , 
        state : data.state , 
        UserName : data.Username , 
        ZipCode : data.Zipcode 
       })
      
     }catch(err){
      console.log(err)
    }
 
   
  }

  

      

  return (
    <> 
    <Header />
  
    <main className="   flex flex-col h-fit min-h-full w-full gap-y-4 p-4 bg-white ">
          {/* this is the title of the web site */}
          <div className="w-[80%] h-[50px] mx-auto max-w-2xl">
              <h1 className="text-2xl font-semibold text-center text-[#2F3349]">Complete your profile to join your agency workspace </h1>
          </div>
          
          {/* this is the profile form */}
     <form onSubmit={handleSubmit(onSubmit)} id="abdullah-profile-photo" >
          <div className="w-[80%] flex items-center gap-x-4 h-[100px] mx-auto max-w-2xl">
              <div className="w-[20%] gap-y-2 flex flex-col h-full items-center">
                    <Avatar className="w-24 h-24 shadow-lg ">
                           <AvatarImage src={imagePreviewUrl || session?.user?.image  || "/assets/avatar.png"} />
                           <AvatarFallback>CN</AvatarFallback>
                    </Avatar>             
                    <AbdullahButton 
                        onClick={() => inputRefrence?.current?.click()}
                        className="w-10 h-10 rounded-[50%] z-[99]">
                      <Pencil size={32} color="#ffffff" strokeWidth={3} />
                          <input
                             ref={inputRefrence}
                             className={cn(
                                       buttonVariants({ variant: "secondary", size: "sm" }),
                                       "outline-none hidden w-[0.1rem] h-[0.1rem] -z-[999] bg-white border-none"
                              )}
                             type='file'
                             onChange={handleFileChange}
                           />
                    </AbdullahButton>
               </div>
               <div className="w-[80%] flex h-full flex-col">
                      <div className="w-full h-[50%] gap-x-1 flex items-center">
                              <div className="flex w-[50%] h-full items-center gap-x-1">
                                    <Label>First name</Label>
                                    <Input 
                                    defaultValue={session?.user?.name || "" }
                                    {...register("FirstName")}
                                    className="w-[60%] ml-auto" />
                              </div>
                              <div className="flex w-[50%] h-full items-center gap-x-1">
                                    <Label>Last name</Label>
                                    <Input
                                     defaultValue={session?.user?.lastName || ""}
                                    {...register("LastName")}
                                    className="w-[60%] ml-auto" />
                              </div>
                      </div>
                      <div className="w-full h-[50%]  gap-x-1 flex items-center">
                              <div className="flex w-[50%] h-full items-center gap-x-1">
                                    <Label>UserName :</Label>
                                    <Input 
                                       defaultValue={user.Username|| ""}
                                     {...register("Username")}
                                    className="w-[60%] ml-auto" />
                              </div>
                              <div className="flex w-[50%] h-full items-center gap-x-1">
                                    <Label>Email ID :</Label>
                                    <Input 
                                    disabled
                                    value={session?.user?.email || ""}
                                    className="w-[60%] ml-auto" />
                              </div>
                      </div>
               </div> 
          </div>
              {/* this is the divided section */}
          <div className="w-full flex  items-center  h-[40px] max-w-2xl mx-auto mt-8 justify-between ">
                                  <p className="font-semibold text-[#2F3349] ">OTHER INFORMATION</p>
                                  <div className="w-[70%]  border-b h-[5px]" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] my-2 max-w-2xl mx-auto   ">
                                    <Label>job title :</Label>
                                    <Input 
                                        defaultValue={user.title|| ""}
                                        {...register("title")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] my-2 max-w-2xl mx-auto   ">
                                    <Label>Phone :</Label>
                                    <Input
                                      defaultValue={user.Phone|| ""}
                                    {...register("Phone")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] my-2 max-w-2xl mx-auto   ">
                                    <Label>Address :</Label>
                                    <Input 
                                       defaultValue={user.Address|| ""}
                                        {...register("Address")}
                                    className="w-[80%] ml-auto" />
          </div>

         
          <div className="w-[80%] flex  items-center jutify-between h-[40px] my-2 max-w-2xl mx-auto   ">
                                    <Label>city :</Label>
                                    <Input 
                                        defaultValue={user.city|| ""}
                                        {...register("city")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-betweenh-[40px] my-2 max-w-2xl mx-auto   ">
                                    <Label>state :</Label>
                                    <Input
                                         defaultValue={user.state|| ""}
                                        {...register("state")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px] my-2 max-w-2xl mx-auto   ">
                                    <Label>Country  :</Label>
                                    <Input 
                                       defaultValue={user.Country|| ""}
                                    {...register("Country")}
                                    className="w-[80%] ml-auto" />
          </div>
          <div className="w-[80%] flex  items-center jutify-between h-[40px]  max-w-2xl mx-auto   ">
                                    <Label>Zip code  :</Label>
                                    <Input
                                         defaultValue={user.Zipcode|| ""}
                                        {...register("Zipcode")}
                                    className="w-[80%] ml-auto" />
          </div>
          
  </form>
             {/* this is the divided section */}
          <div className="w-full flex  items-center  h-[40px] max-w-2xl mx-auto mt-8 justify-between ">
                                  <p className="font-semibold text-[#2F3349]">ORGANIZATIONS </p>
                                  <div className="w-[70%]  border-b h-[5px]" />
          </div>

        {
          userOrganizations.map(item => (
               
             <div
             onClick={async () => await handleGoToOrgPage(item.id)}
             className="w-[80%] flex items-center my-8 gap-x-4 h-[100px] mx-auto max-w-2xl">
                <div className="w-[20%]  hover:border rounded-lg  hover:shadow-md hover:cursor-pointer  max-w-[200px] gap-y-2 flex flex-col min-h-full h-fit p-2 items-center">
                    <Avatar className="w-28 h-28 shadow-lg ">
                      {/* @ts-ignore */}
                       <AvatarImage src={item?.image || "/assets/avatar.png"} />
                       <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                   <span>{item.name}</span>
                </div>
             </div>
          ))
        }
         
          <div className="w-full flex  items-center   h-[40px] max-w-2xl mx-auto mt-8 justify-between ">
                                
                                  <div className="w-[100%]  border-b h-[5px]" />
          </div>

          <div className="w-full flex  items-start   h-[40px] max-w-2xl mx-auto mt-8 justify-end  ">
               <AbdullahButton 
                  form="abdullah-profile-photo"
                  className={cn(buttonVariants({variant :"primary" }))}>save</AbdullahButton>
          </div>


         
      </main>
    
    </>
  );
};

export default Page;