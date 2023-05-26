import type {  FC , ReactNode } from 'react'
import Head from '../common/Head'
import { Header } from '../header/Header'

interface AppLayoutAbdullahProps {
  children : ReactNode
}

const AppLayout: FC<AppLayoutAbdullahProps> = ({children}) => {
 return (
    <>
    <Head />
    <Header />
    <main className=" custopn-page-height  flex flex-col overflow-x-hidden  justify-center w-full  items-center bg-stone-50 ">
    {children}
    </main>
    </>
      
 )
}

export default AppLayout