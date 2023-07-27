/*
 * Import necessary dependencies and components.
 * Abdullah Chahri created this NotAuthHeader component.
 * Email: mahdi.chahri55@gmail.com
 */
import Image from "next/image";


export const NotAuthHeader = () => {
  return (
    /*
     * Main container for the NotAuthHeader component.
     * Abdullah Chahri created this header for not authenticated pages.
     * Email: mahdi.chahri55@gmail.com
     */
    <div className={`w-full !z-[50] h-14 sticky top-0 flex justify-start px-4 items-center bg-white`}>
      <div className="w-[5%] h-full flex justify-start items-center">
        <Image alt="logo" src={"/logo.png"} width={35} height={35} />
      </div>
    </div>
  );
};
