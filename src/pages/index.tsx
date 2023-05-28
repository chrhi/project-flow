import { type NextPage } from "next";
import Background from "~/components/common/background";
import Hero from "~/components/landing-page/Hero";
import Nav from "~/components/landing-page/Nav";
import Demo from "~/components/landing-page/demo";
import GlobeClient from "~/components/landing-page/glob-client";
import Logos from "~/components/landing-page/logs";
import Stats from "~/components/landing-page/stats";
import Head from "~/components/common/Head";

const Page: NextPage = () => {

 
  return (
    <>
      <Head />
       <div className="z-10 bg-white">
        <Nav />
        <Hero  />
        <Demo />
        <Logos />
        <GlobeClient markers={[]}/>
        <Stats />
       </div>
       <Background />
      </>
  );
};

export default Page;