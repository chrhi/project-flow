import { Button, Fade, Toolbar, Tooltip } from '@mui/material'
import { StringArraySupportOption } from 'prettier'
import React, { ReactNode } from 'react'

type PropsType = {
    text  : string ,
    title : string ,
    className : string ,
    onClick : () => unknown,
    visible? : boolean,

}


export  const AbdullahButton = ({text , title , className , onClick , visible = true} : PropsType) => {
  return (
    <Tooltip
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
    title={title}
    >
   <Button
   onClick={onClick}
   className={`!py-2 !px-4 !rounded-lg !normal-case  ${className} ${visible ? "" : "hidden"}`}
   >
    {text}
   </Button>
   </Tooltip>
  )
}

