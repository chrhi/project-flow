import { Button, Fade, Tooltip } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { FormEvent, ReactNode } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import { type } from 'os';

type PropsType = {
    text  : string ,
    title : string ,
    className : string ,
    onClick : () => unknown | ((e : FormEvent) => void) ,
    visible? : boolean,
    icon? : boolean,
    loading ?: boolean ,
    type? : string ,
    muiIcon? : React.ReactNode 

}


export  const AbdullahButton = ({text , title , className , onClick , visible = true , icon  = false, muiIcon , loading = false , type ="button" } : PropsType) => {
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
      <LoadingButton 
      loading={loading}
      onClick={onClick}
      loadingPosition="start"
      startIcon={<SaveIcon />}
      disabled ={loading}
      className={` ${className} ${visible ? "" : "hidden"}`}
     
      >
       {text}
      </LoadingButton >  
    }
   </Tooltip>
  )
}

