import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import BlurImage from "../common/blur-image";

import  Chart  from "~/components/icons/chart";
import   ThreeDots from "~/components/icons/three-dots";
import   QR from "~/components/icons/qr";
import  LoadingDots  from "~/components/icons/loading-dots";

import {
  DEFAULT_LINK_PROPS,
  FRAMER_MOTION_LIST_ITEM_VARIANTS,
  GOOGLE_FAVICON_URL,
} from "~/lib/constants";

export default function LinkCard({
  _key: key,
  url,

  setShowDefaultLink,
}: {
  _key: string;
  url: string;

  setShowDefaultLink?: (showDefaultLink: boolean) => void;
}) {
  

  const cardElem = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const [constrained, setConstrained] = useState(true);

  const [velocity, setVelocity] = useState<number>(0);


 

 
 


  return (
    <motion.li variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}>
   
      <motion.div
        animate={controls}
        drag="x"
        dragConstraints={constrained && { left: 0, right: 0 }}
        dragElastic={1}
        ref={cardElem}
        style={{ x }}
        onDrag={() => setVelocity(x.getVelocity())}
  
        whileTap={{ scale: 1.05 }}
        className="flex max-w-md cursor-grab items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg transition-[border-color] hover:border-black active:cursor-grabbing"
      >
        <div className="flex items-center space-x-3">
          {/* <BlurImage
            src={`"./"`}
            alt={"ah"}
            className="pointer-events-none h-10 w-10 rounded-full"
            width={20}
            height={20}
          /> */}
          <div>
            <div className="mb-1 flex items-center space-x-2">
              <a
                className="font-semibold text-blue-800"
                href={"/"}
                target="_blank"
                rel="noreferrer"
              >
               abdullah change it
              </a>
         
              <button
              
                className="group rounded-full bg-gray-100 p-1.5 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95"
              >
                <span className="sr-only">Copy</span>
                <QR className="text-gray-700 transition-all group-hover:text-blue-800" />
              </button>
              <Link
                href={`/stats/${encodeURI(key)}`}
                className="flex items-center space-x-1 rounded-md bg-gray-100 px-2 py-0.5 text-gray-700 transition-all duration-75 hover:scale-105 active:scale-95"
              >
                <Chart className="h-4 w-4" />
                <p className="text-sm">
                
                    <LoadingDots color="#71717A" />
                 
                  <span className="ml-1 hidden sm:inline-block">clicks</span>
                </p>
              </Link>
            </div>
            <p className="w-72 truncate text-sm text-gray-500">{url}</p>
          </div>
        </div>
        <button
          type="button"
        
          className="rounded-md px-1 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
        >
          <span className="sr-only">Edit</span>
          <ThreeDots className="h-5 w-5 text-gray-500" />
        </button>
      </motion.div>
    </motion.li>
  );
}
