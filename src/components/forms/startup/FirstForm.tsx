/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";




export const FirstForm = () => {
 




  return (
    <FormContainer>
      <FormHead text="👉remplir les informations nécessaires du projet" />
      <Form  onSubmit={(e) => console.log(e)}>
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
        
        </div>
      </div>
    
       </Form>
  </FormContainer>
  )
}

