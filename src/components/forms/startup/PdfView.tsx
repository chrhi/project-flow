/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */


type Propstype ={
    titre:string , 
    NeedForOrganization:string,
    ProjectRequirements:string,
    ProductDescription:string,
    ThePojectDoesNotInclude:string , 
    PreApprovedResources : string,
  
  }





export const PdfView = ({titre , NeedForOrganization , ProjectRequirements , ProductDescription , ThePojectDoesNotInclude , PreApprovedResources} :Propstype) => {
 

  return (
    <div className='h-[70vh] w-[80%] overflow-y-auto bg-white rounded-lg p-8'>
     <h2 className="text-2xl font-semibold text-gray-900">Title de project :{titre}</h2>
     <h1 className="text-4xl font-bold text-blue-600 my-4">Charte du projet</h1>
     <div className="border-[3px] border-black border-solid" />
     <h2 className="text-2xl font-semibold my-4 text-gray-900">Besoin de l'organisation / objectifs du projet</h2>
     <p className="text-lg text-gray-600 ">{NeedForOrganization}</p>

     <h2 className="text-2xl font-semibold my-4 text-gray-900">Exigences du projet</h2>
     <p className="text-lg text-gray-600 ">{ProjectRequirements}</p>

     <h2 className="text-2xl font-semibold my-4 text-gray-900">Le projet n'inclut pas</h2>
     <p className="text-lg text-gray-600 ">{ProductDescription}</p>

     <h2 className="text-2xl font-semibold my-4 text-gray-900">Ressources preapprouvees</h2>
     <p className="text-lg text-gray-600 ">{ThePojectDoesNotInclude}</p>

     <h2 className="text-2xl font-semibold my-4 text-gray-900">Besoin de l'organisation / objectifs du projet</h2>
     <p className="text-lg text-gray-600 ">{PreApprovedResources}</p>
    </div>
  )
}

