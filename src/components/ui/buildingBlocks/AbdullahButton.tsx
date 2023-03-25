import { Button, Fade, SvgIconTypeMap, Toolbar, Tooltip } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { StringArraySupportOption } from 'prettier'
import React, { ReactNode } from 'react'

type PropsType = {
    text  : string ,
    title : string ,
    className : string ,
    onClick : () => unknown,
    visible? : boolean,
    icon? : boolean,
   
    muiIcon? : React.ReactNode 

}


export  const AbdullahButton = ({text , title , className , onClick , visible = true , icon  = false, muiIcon} : PropsType) => {
  return (
    <Tooltip
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
    title={title}
    >
   {
   icon ? 
       <Button
       startIcon={muiIcon}
       onClick={onClick}
       className={`!py-2 !px-4 !rounded-lg !normal-case  ${className} ${visible ? "" : "hidden"}`}
       >
        {text}
       </Button>  
      :
      <Button
      onClick={onClick}
      className={`!py-2 !px-4 !rounded-lg !normal-case  ${className} ${visible ? "" : "hidden"}`}
      >
       {text}
      </Button>  
    }
   </Tooltip>
  )
}

