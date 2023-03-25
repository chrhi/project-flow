import { type NextPage } from "next";
import {  FormEvent, useRef , useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { Header } from "~/components/common/Header";



const Page: NextPage = () => {



  return (
    <>
     
      <Header  notAuth/>
      <main className=" w-full custom-hieght-navbar bg-gray-100 flex justify-center items-center  ">
        
      <div className="w-[50%] max-w-sm p-4 bg-white border shadow-xl border-gray-200 rounded-md  sm:p-6 md:p-8 ">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 ">Sign up </h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input
            
            type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="name@company.com" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input  
           
            type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">confirme your password</label>
            <input  
           
            type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " required />
        </div>
      
        <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        
        >Login to your account</button>
        <div className="text-sm font-medium text-gray-500 ">
            You have an account ? <Link href="/public/signup" className="text-orange-500 hover:underline ">log in</Link>
        </div>
    </form>
</div>

      </main>
    </>
  );
};

export default Page;