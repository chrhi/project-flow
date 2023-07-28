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

// Page component
const Page: NextPage = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [organization, setOrganization] = useState<Organization>({} as Organization );

  const router = useRouter();

  const { isLoading } = api.organizationRouter.getOrgById.useQuery(
    {
      orgId: router.query.orgId as string,
    },
    {
      onSuccess: (data) => {
        if (!data) return;
        setOrganization(data);
      },
      onError: () => setIsError(true),
    }
  );

  return (
    <>
      <Header />
      <main className="w-full h-[calc(100vh-50px)] overflow-hidden overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        <div className="w-full h-[70px] flex justify-center items-start mt-4 flex-col px-8">
          <h1 className="text-xl font-semibold text-[#2F3349]">Update or modify your Organization</h1>
          <p className="text-md text-gray-500">Let's Get Started</p>
        </div>
        <div className='w-[90%] mx-auto lg:max-w-5xl border p-8 shadow-lg rounded-lg h-fit min-h-[300px] flex flex-col lg:flex-row my-4 bg-white'>
          <div className="w-full flex items-start justify-start lg:w-[30%]">
            <Avatar className="w-[200px] h-[200px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-[70%] h-[200px] flex flex-col justify-center gap-y-4 items-start">
            <div className={`w-full h-[60px]`}>
              <Label>Organization name</Label>
              <Input />
            </div>
            <div className={`w-full h-[60px]`}>
              <Label>Organization type</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Agency</SelectItem>
                    <SelectItem value="banana">Groupe</SelectItem>
                    <SelectItem value="blueberry">Company</SelectItem>
                    <SelectItem value="grapes">Department</SelectItem>
                    <SelectItem value="pineapple">one person</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className={`w-full h-[60px]`}>
              <Label>Organization description</Label>
              <Textarea placeholder="Type here." />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
