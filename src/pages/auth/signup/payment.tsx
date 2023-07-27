import { type NextPage } from "next";
import { NotAuthHeader } from "~/components/header/NotAuthHeader";




const Page: NextPage = () => {

  return (
    <> 
    <NotAuthHeader />
      <main className=" w-full bg-white  custom-hieght-navbar  ">
      <div>
        <p>this is the payment page</p>
        <p>this is the payment page</p>
        <p>this is the payment page</p>
      </div>
      </main>
    </>
  );
};

export default Page;