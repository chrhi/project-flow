import { type NextPage } from "next";
import { FormEvent } from "react";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/ui/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import AddIcon from '@mui/icons-material/Add';
import { AbdullahTable } from "~/components/ui/used/AbdullahTable";
import { AbdullahButton } from "~/components/ui/buildingBlocks/AbdullahButton";


const Page: NextPage = () => {

    const onSubmit = (event : FormEvent) => {
        console.log("form submited")
    }
    const [didGetData , setDidGetData] = useState<boolean>(false)

  return (
    <>
    
      <Header />
      <main className=" scrollbar-hide  flex w-full bg-gray-50 ">
       <Sidebar />
       <FormContainer>
      <FormHead text="👉 manage your cost" />
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
       <div className="col-span-6">
       <AbdullahTable 
          Action = {false}
          title="Périmètre"
          descripton=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={[
            {callback : () => console.log("hi there"),
            properties : ["Améliorer la Fiabilité par l’automatisation du système de control et le remplacement de tous les instruments obsolète par d’autres de technologie récente " , `- Minimiser le nombre de pannes de 90%.
            - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel. 
            - Maitrise accrue des paramètres de process.
            - Produit à chauffer On-Spec
            `, `- Directeur Maintenance
            - Directeur Exploitation
            - Chef de division Sécurité
            - Directeur Régional
            `  ]
            },
            {callback : () => console.log("hi there"),
            properties : ["Améliorer la Fiabilité par l’automatisation du système de control et le remplacement de tous les instruments obsolète par d’autres de technologie récente " , `- Minimiser le nombre de pannes de 90%.
            - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel. 
            - Maitrise accrue des paramètres de process.
            - Produit à chauffer On-Spec
            `, `- Directeur Maintenance
            - Directeur Exploitation
            - Chef de division Sécurité
            - Directeur Régional
            `  ]
            
            },
          
         ]}
         />
          <div className="bg-white  my-1 col-span-6  flex items-center justify-between  text-right ">
            <h3 className="text-gray-900 text-md ml-4 text-start">add something to this table</h3>
            <AbdullahButton  
            
             
              onClick={() => console.log("hi there")}
            
             
              className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
             />
        </div>

        {/* this is the second table */}
        <AbdullahTable 
          Action = {false}
          title="Echéancier"
          descripton=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={[
            {callback : () => console.log("hi there"),
            properties : ["Améliorer la Fiabilité par l’automatisation du système de control et le remplacement de tous les instruments obsolète par d’autres de technologie récente " , `- Minimiser le nombre de pannes de 90%.
            - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel. 
            - Maitrise accrue des paramètres de process.
            - Produit à chauffer On-Spec
            `, `- Directeur Maintenance
            - Directeur Exploitation
            - Chef de division Sécurité
            - Directeur Régional
            `  ]
            },
            {callback : () => console.log("hi there"),
            properties : ["Améliorer la Fiabilité par l’automatisation du système de control et le remplacement de tous les instruments obsolète par d’autres de technologie récente " , `- Minimiser le nombre de pannes de 90%.
            - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel. 
            - Maitrise accrue des paramètres de process.
            - Produit à chauffer On-Spec
            `, `- Directeur Maintenance
            - Directeur Exploitation
            - Chef de division Sécurité
            - Directeur Régional
            `  ]
            
            },
          
         ]}
         />
          <div className="bg-white  my-1 col-span-6  flex items-center justify-between  text-right ">
            <h3 className="text-gray-900 text-md ml-4 text-start">add something to this table</h3>
            <AbdullahButton  
              
              
              onClick={() => console.log("hi there")}
             
              className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
             />
        </div>

        {/* and this is hte other table */}
        <AbdullahTable 
          Action = {false}
          title="Coût"
          descripton=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={[
            {callback : () => console.log("hi there"),
            properties : ["Améliorer la Fiabilité par l’automatisation du système de control et le remplacement de tous les instruments obsolète par d’autres de technologie récente " , `- Minimiser le nombre de pannes de 90%.
            - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel. 
            - Maitrise accrue des paramètres de process.
            - Produit à chauffer On-Spec
            `, `- Directeur Maintenance
            - Directeur Exploitation
            - Chef de division Sécurité
            - Directeur Régional
            `  ]
            },
            {callback : () => console.log("hi there"),
            properties : ["Améliorer la Fiabilité par l’automatisation du système de control et le remplacement de tous les instruments obsolète par d’autres de technologie récente " , `- Minimiser le nombre de pannes de 90%.
            - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel. 
            - Maitrise accrue des paramètres de process.
            - Produit à chauffer On-Spec
            `, `- Directeur Maintenance
            - Directeur Exploitation
            - Chef de division Sécurité
            - Directeur Régional
            `  ]
            
            },
          
         ]}
         />
          <div className="bg-white  my-1 col-span-6  flex items-center justify-between  text-right ">
            <h3 className="text-gray-900 text-md ml-4 text-start">add something to this table</h3>
            <AbdullahButton  
          
           
              onClick={() => console.log("hi there")}
             
              className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
             />
        </div>
       </div>
        </div>
      </div>
      <div className="bg-white px-4 py-3 text-right sm:px-6">
        {
          didGetData ?
           <button
        //    onClick={ (e : FormEvent) => habdleUpdate(e)}
           type="submit"
           className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
           >
            mise à jour
          </button> 
          :
          <button
          type="submit"
       
          className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
         enregistrer & continuer
        </button>
        }
       </div>
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;