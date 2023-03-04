import { useState , useRef , useEffect} from 'react'
import { runAnimations } from './hooks/animations'  
import { Navbar } from './Navbar'



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export  function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  //bg-gradient-to-r from-indigo-700 to-sky-500
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    runAnimations(canvasRef.current)
  },[])
  return (
    <div className="isolate  h-screen relative  ">
    <canvas id="canv" ref={canvasRef} width="32" height="32"></canvas>
        <Navbar />
      <main className='custom-hieght-navbar z-10 '>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-36">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Gestion de projet Sonatrach R&D
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-900">
              Découvrez la puissance de la gestion de projet guidée par PMBOK. Nos experts fournissent des résultats avec précision et confiance.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 commencer gratuitement
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                Apprendre encore plus <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </main>
     
    </div>
  )
}

