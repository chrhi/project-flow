import { type NextPage } from "next";
import Background from "~/components/common/background";
import Hero from "~/components/landing-page/Hero";
import Nav from "~/components/landing-page/Nav";

const Page: NextPage = () => {

 
  return (
    <>
       <div className="z-10">
        <Nav />
        <Hero  />
       </div>
       <Background />
    </>
  );
};

export default Page;