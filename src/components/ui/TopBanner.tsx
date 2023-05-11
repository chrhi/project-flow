

export default function TopBanner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-blue-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
       
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
       
        
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white">
       
         
          Abdullah is presently engrossed in the development of the website, kindly refrain from clicking any buttons at this time.
        </p>
       
      </div>
   
    </div>
  )
}
