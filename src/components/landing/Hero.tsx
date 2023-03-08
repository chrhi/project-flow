

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
     
    <div className="isolate  h-screen relative ">
    {/* <canvas id="canv" ref={canvasRef} width="32" height="32"></canvas> */}
    <div className='background-hero bg-gradient-to-r from-indigo-700 to-sky-400  '  />
        <Navbar />
      <main className='custom-hieght-navbar z-10    mx-auto max-w-7xl   sm:flex sm:justify-start sm:pl-8'>
        <div className="relative px-6 lg:px-0">
          <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-30  xl:py-48 ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              
            </div>
            <div className="text-start ">
             <h1 className="text-5xl  font-bold tracking-tight text-gray-900 sm:text-7xl mix-blend-color-burn ">
              Gestion de projet Sonatrach R&D
              guidée par PMBOK
              </h1>
           
             
           

              <p className="mt-6 text-lg pt-8 leading-8 text-gray-900">
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
          </div>
         
        </div>
      </main>
     
    </div>
    
  )
}

