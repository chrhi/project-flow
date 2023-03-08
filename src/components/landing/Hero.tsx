import Image from 'next/image'
import platformImage from "~/images/platform.png"

import { Navbar } from './Navbar'



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export  function Hero() {

  //bg-gradient-to-r from-indigo-700 to-sky-500
  // const canvasRef = useRef<HTMLCanvasElement>(null)

  // useEffect(() => {
  //   runAnimations(canvasRef.current)
  // },[])
  
  return (
     <div className='w-full overflow-hidden '>
    <div className="isolate  h-screen relative ">
    {/* <canvas id="canv" ref={canvasRef} width="32" height="32"></canvas> */}
    <div className='background-hero  relative' >
    <div  className='light1 light  filter blur-xl animate-blob h-[100px] ' />
    <div  className=' light2 light  filter blur-xl animate-blob h-[200px] '   />
    <div className='light light3  filter blur-xl animate-blob h-[100px]'  />

   
          
    </div>
        <Navbar />
     
      <main className='custom-hieght-navbar z-10   w-full   mx-auto max-w-7xl   sm:flex sm:justify-start sm:pl-8 lg:pl-0'>

         <div className="relative px-6 lg:px-0 w-full">
          {/* <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-30  xl:py-48 flex  "> */}
          <div className="mx-auto  w-full flex  justify-between gap-x-2 ">
           
          
            <div className="text-start w-[58%]  py-32 sm:py-28 lg:py-32  xl:py-48 ">
                  <h1 className="text-5xl  font-bold tracking-tight text-gray-900 lg:text-7xl  mix-blend-darken ">
                     Gestion de projet <br />
                      Sonatrach R&D <br />
                     guidée par PMBOK <br />
                  </h1>

                  <p className="mt-6 text-md pt-8 leading-8 text-gray-900">
                     Découvrez la puissance de la gestion de projet guidée par PMBOK. Nos experts fournissent des résultats avec précision et confiance.
                     Découvrez la puissance de la gestion de projet guidée par PMBOK. Nos experts fournissent des résultats avec précision et confiance.
                  </p>
                 <div className="mt-10 flex items-center justify-start gap-x-6">
                    <a
                       href="#"
                       className="rounded-full  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                      commencer gratuitement
                      </a>
                      <a
                       href="#"
                       className="rounded-full  px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                       >
                        learn more
                        </a>
             
                  </div>
              </div>

              <div className="w-[40%] h-full  mt-8  ">
                 <Image

                   className="w-[48rem]  max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    src={platformImage}
                   alt="hero-image"
                  />
      </div>
            
          
            </div>
          
         
        </div>
        
      </main>
     
    </div>
    </div>
    
  )
}

