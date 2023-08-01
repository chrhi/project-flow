import type { NextPage } from "next";
import Link from "next/link";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { signIn } from "next-auth/react";
import { cn } from "~/lib/utils";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Input } from "~/components/ui/input";

const validateSchema = z.object({
  password: z.string().min(6),
  email: z.string().email(),
});

type FormData = z.infer<typeof validateSchema>;

const Page: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(validateSchema)
  });

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    signIn("credentials", {
      email: data.email,
      password: data.password,
    }).catch(error => {
      setIsLoading(false);
      console.log(error);
      toast.error("email or password are not correct");
    });
  };

  const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');
  const [isInputClicked, setIsInputClicked] = useState<boolean>(false);

  const togglePassword = () => {
    setPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  };

  return (
    <>
      <main className="w-full h-[calc(100vh)] bg-white flex justify-center items-center">
        <div className="md:w-[50%] w-0 h-full bg-[#2563EB] ">
          <div className="h-[60px] w-full flex gap-x-3 p-4 items-center">
            <Image src="/svg/logowhite.svg" width={35} height={35} alt="My logo" />
            <p className="text-white font-medium text-lg ">ProjectFlow</p>
          </div>
          <div className="w-full h-[calc(100%-60px)] flex p-4 justify-center items-center">
            <Image src="/assets/authBanner1.c7c634cd.png" width={700} height={700} alt="My SVG" />
          </div>
        </div>
        <div className="w-full md:w-[50%] bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-[95%] md:w-[60%] mx-auto p-2" action="#">
            <div className="h-[50px] md:hidden w-full flex gap-x-2 items-center">
              <Image src="/logo.png" width={50} height={50} alt="My logo" />
              <p className="text-gray-900 font-medium text-3xl ">ProjectFlow</p>
            </div>
            <div className="w-full h-[50px] mb-2 flex flex-col gap-y-2">
              <h5 className="text-2xl font-semibold text-gray-900">Sign In to your Account</h5>
              <p className="text-md text-gray-500">Welcome back! please enter your detail</p>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
              <Input
                {...register("email")}
                type="email" name="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1 px-4 h-[50px]" placeholder="name@company.com" />
              <p className='mt-1 text-sm text-red-600'>{errors.email?.message}</p>
            </div>
            <div className={`  flex flex-col gap-y-2 justify-center    relative w-full  h-[60px] `}>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            
                <Input
                  onClick={() => setIsInputClicked(true)}
                 
                  {...register('password')}
                  type={passwordType} name="password" id="password" placeholder="••••••••" className="border border-gray-300 focus:outline-none focus:ring-0 focus:border-slate-400 w-full h-[50px] p-3 bg-white" />
                <button
                  onClick={togglePassword}
                  type="button"
                  className="w-4 h-4 absolute right-[20px] top-[46%] text-gray-500">
                  <Eye />
                </button>
            
              <p className='mt-1 text-sm text-red-600'>{errors.password?.message}</p>
            </div>
            <AbdullahButton
              isLoading={isLoading}
              type="submit"
              className={buttonVariants({ size: 'lg', variant: 'rukia' })}
            >
              Login to your account
            </AbdullahButton>
            <div className="text-sm font-medium text-gray-500">
              Don't have an account? <Link href="/auth/signup" className="text-blue-500 hover:underline ml-2">sign up.</Link>
            </div>
          </form>
          <div className="relative mt-4 w-[95%] md:w-[60%] mx-auto">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <AbdullahButton
            onClick={() => signIn("github")}
            className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), "w-[95%] md:w-[60%] mx-auto p-4 mt-4 flex justify-center gap-x-6")}
          >
            <Image src="/assets/github.png" alt="github" width={20} height={20} />
            continue with github
          </AbdullahButton>
        </div>
      </main>
    </>
  );
};

export default Page;
