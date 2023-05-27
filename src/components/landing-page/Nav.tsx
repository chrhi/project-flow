import Link from "next/link";
import Image from "next/image";
import useScroll from "~/lib/hooks/use-scroll";
import clsx from "clsx";
import logo  from "~/assets/logo.png";
const transparentHeaderSegments = new Set(["metatags"]);

export default function Nav() {


  const scrolled = useScroll(80);


  return (
    <div
      className={clsx(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
        "border-b border-gray-200 bg-white"   : "" 
      })}
    >
      <div className="mx-auto w-full max-w-screen-xl px-5 md:px-20">
        <div className="flex h-16 items-center justify-between">
          <Link href={ "/"}>
            <Image
              src={logo}
              alt="project flow logo"
              width={834}
              height={236}
              className="w-10"
            />
          </Link>

          <div className="flex items-center space-x-6">
         
            <Link
              href={
                process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
                  ? "/auth/login"
                  : "/auth/login"
              }
              className="rounded-full border border-blue-500 bg-blue-500 px-5 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
