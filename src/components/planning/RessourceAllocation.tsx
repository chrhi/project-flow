import React from 'react'
import { Paper } from '../ui/Paper'
import { FormContainer } from '../ui/used/FormContainer'
import { FormHead } from '../ui/used/FormHead'
import { AbdullahTable } from '../ui/used/AbdullahTable'

export const RessourceAllocation = () => {
  return (
    <FormContainer>
        <FormHead  text='👉🏻 in here manage all the ressources' />
        <Paper>
        <AbdullahTable 
        title='👉🏻 ressources '
         descripton='this is just a test and we will see abdout it'
         headers={["name" , "avalablility" , "asigned taks"]}
         body={[{callback: () => console.log("hello there") , properties :["abdullah" , "now" , "there is not"]}]}
         />
        </Paper>
    </FormContainer>
  )
}

 