/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Separator } from '../ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import {  Badge  } from "@tremor/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreVertical } from "lucide-react";

function CustomNode({ data }) {
  return (
    <Card className='border border-blue-500 max-w-[300px] !px-1 bg-white ' >
     
      
         <CardHeader  className='!p-2'>

            <div className='w-full flex gap-x-2 items-start'>
            <CardTitle className='!leading-6 '>{data.title} </CardTitle>
             {/* <CardDescription>
                       {data.description}
             </CardDescription> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button variant="ghost" className="h-8 w-4 flex items-center justify-center p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreVertical className="h-4 w-4" />
                   </Button>
                </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
           
                  <DropdownMenuSeparator />
                  <DropdownMenuItem >voir les détails</DropdownMenuItem>
                  <DropdownMenuItem >supprimer</DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>

            </div>
             
            
         </CardHeader>
         <CardContent className='w-full'>
               
      <Handle type="target" position={Position.Top} className="!w-3 !h-3 !rounded-xl !bg-blue-500" />
      <Handle type="source" position={Position.Bottom} className="!w-3 !h-3 !rounded-xl !bg-blue-500" />
      {/* <Badge color='yellow' className='rounded-lg h-4 px-1 '>{data.cost} €</Badge> */}
          </CardContent> 

    </Card>
  );
}

export default memo(CustomNode);