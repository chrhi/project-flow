import { ReactNode } from "react"

import Skeleton from 'react-loading-skeleton'
import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
  } from "@tremor/react";


export type ItemTable = {
    id : string
    properties : Array<string | ReactNode | any>
    callback : (id : string ) => void 
}

type Props ={
    title : string , 
    descripton : string , 
    headers : string[],
    body : ItemTable[] ,
    showHeaders? : boolean,
    Action? : boolean,
    wrap? : boolean ,
    PlusButton? : ReactNode,
    ActionName? : string,
    isLoading : boolean

}


export const NewAbdullahTable = ({title , descripton , headers , body , showHeaders = true ,wrap = true,PlusButton , Action = true , ActionName ="Delete" , isLoading}: Props) => {
  return (
    
<div className="relative overflow-x-auto  sm:rounded-lg  ">
    <Table className="mt-5">
    <TableHead >
        <TableRow className={`text-xs text-gray-700 uppercase bg-gray-50  `}>
        {headers?.map(item => (
                     <TableHeaderCell key={item}>
                       {isLoading ? <Skeleton />  : item   } 
                    </TableHeaderCell>
            ))}
        </TableRow>
      </TableHead>
      {
        isLoading && <TableBody>
           {["one","two","tree","four","five"].map(item => (
             <TableRow key={item}>
             {headers.map(item => (
                <TableCell key={item} scope="row" className={`px-6 py-4 font-medium text-gray-900 `}>
                      <Skeleton style={{width: "50%"}}  count={2} /> 
                </TableCell>
             ))}
           </TableRow>
           ))}
            
        </TableBody>
      }
      <TableBody>
        
        { !isLoading && body?.map((current , index) => (
                <TableRow key={index + 999} className="hover:bg-gray-200 transition-all duration-75">
                         {current.properties.map(item => (
                              <TableCell key={index + 45679684623} 
                               className={`px-6 py-4 font-medium text-gray-900 !whitespace-normal  `}>
                                  {isLoading ? <Skeleton />  : item   } 
                              </TableCell>
                          ))}
                        {Action &&   <TableCell className={`px-6 py-4 text-right `}>
                         <button onClick={() => current.callback(current?.id)} className="font-medium text-blue-600 hover:underline">{ActionName}</button>
                         </TableCell>}

                </TableRow>

        ))}
      </TableBody>
    </Table> 
    <div className="bg-white  my-2 col-span-6  text-right ">
          {PlusButton && PlusButton}
    </div>

</div>

  )
}

