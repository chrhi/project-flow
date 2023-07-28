import type { Organization } from "@prisma/client";
import type { NextPage } from "next";
import { useState } from "react";
import { Header } from "~/components/header/Header";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { Loader2 } from "lucide-react";

import "@uploadthing/react/styles.css";
import toast from "react-hot-toast";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";


// Page component
const Page: NextPage = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [organization, setOrganization] = useState<Organization>({
    image : "/assets/avatar.png",
    Category : "",
    description : "",
    Leader : "",
    name : "",
    id :"",
  } as Organization );

  const [orgMembers , setOrgMembers] = useState<MemberOrg[]>([])

  const router = useRouter();

  const { isLoading } = api.organizationRouter.getOrgById.useQuery(
    {
      orgId: router.query.orgId as string,
    },
    {
      onSuccess: (data) => {
        if (!data) return;
        setOrganization({
          Category : data.Category  || "", 
          description : data.description || "", 
          image : data.image || "", 
          name : data.name || "", 
        } as Organization);
      },
      onError: () => setIsError(true),
    }
  );

  const {isLoading : isLoadingOrgMemebers} = api.userRouter.get_org_members.useQuery({id : router.query.orgId as string},{
    onSuccess : (data) => {
      
      setOrgMembers(data)
    }
  })

  const mutation = api.organizationRouter.updateOrganization.useMutation({
    onSuccess : () => {
      toast.success(`${organization.name} has been updated`)
    },
    onError : () => {
      toast.error("faild to upload an image")
    }
  })

  const handleSubmit = () => {

  if( !organization.name || !organization.description || !organization.Category) {
    toast.error(`${organization.name} ${organization.description} ${organization.Category}`)

    return
  }
 
    mutation.mutate({
  
      category : organization.Category ,
      description : organization.description ,
      name : organization.name ,
      organization_id : router.query.orgId as string
    })
  }

  return (
    <>
      <Header />
      <main className="w-full h-[calc(100vh-50px)] overflow-hidden overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        <div className="w-full h-[70px] flex justify-center items-start mt-4 flex-col px-8">
          <h1 className="text-xl font-semibold text-[#2F3349]">Update or modify your Organization</h1>
          <p className="text-md text-gray-500">Let's Get Started</p>
        </div>

        <div className='w-[90%] mx-auto lg:max-w-5xl border p-8 shadow-lg rounded-lg h-fit min-h-[300px] flex flex-col lg:flex-row my-4 bg-white'>
          <div className="w-full flex items-center flex-col justify-center gap-y-4 lg:w-[30%]">
            <Avatar className="w-[180px] h-[180px]">
              <AvatarImage src={organization.image || ""} alt="@abdullah" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
           
          </div>
          <div className="w-[70%] h-[300px] flex flex-col justify-center gap-y-2 items-start">
            <div className={`w-full h-[60px]`}>
              <Label>Organization name</Label>
              <Input 
                onChange={({target}) => setOrganization({...organization , name : target.value})}
                value={organization?.name ||""}/>
            </div>
            <div className={`w-full h-[60px]`}>
              <Label>Organization type</Label>
              <Select
               onValueChange={(value) => setOrganization({...organization , Category : value})} defaultValue="Agency"
              >
                <SelectTrigger className="w-full">
                  <SelectValue  placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="Agency">Agency</SelectItem>
                    <SelectItem value="Groupe">Groupe</SelectItem>
                    <SelectItem value="Company">Company</SelectItem>
                    <SelectItem value="Department">Department</SelectItem>
                    <SelectItem value="person">one person</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className={`w-full h-[60px]`}>
              <Label>Organization description</Label>
              <Textarea 
                 onChange={({target}) => setOrganization({...organization , description : target.value})}
                placeholder="Type here." 
                value={organization?.description || ""}
              />
            </div>
            <div className="w-full h-[70px] mt-4   flex items-end justify-end">
               <AbdullahButton 
                 isLoading={mutation.isLoading}
                 onClick={handleSubmit}
                 className={cn(buttonVariants({size : "sm"}))}>
              save
              </AbdullahButton>

          </div>
          </div>
        </div>
        {/* in here goes the team members */}
        <div className='w-[90%] mx-auto lg:max-w-5xl border p-8 shadow-lg rounded-lg h-fit min-h-[120px] flex flex-col  my-4 bg-white'>
            {isLoadingOrgMemebers ? <div className="w-full h-full flex justify-center items-center">  <Loader2 className='mr-2 h-4 w-4 animate-spin' /> </div>
            :
            <>
            <h3 className="text-xl font-semibold text-[#2F3349]" >memebers of this organization</h3>
            {
            orgMembers.map(item => 
            {
                return (
                  <div className="w-[100px] p-4 h-[100px] flex flex-col gap-y-2 "> 
               <Avatar className="w-[50px] h-[50px]">
              <AvatarImage src={item.image} alt="@abdullah" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>{item.name}</span>
               </div>
                )
            })}
            </>
            }

          </div>
      </main>
    </>
  );
};

export default Page;
