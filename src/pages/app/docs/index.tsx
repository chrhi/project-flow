import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import DocsSideBar from "~/components/docsComponents/DocsSideBar";
import { DocumentBuilder } from "~/components/docsComponents/DocumentBuilder";
import { api } from "~/utils/api";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getProjectMetaData, getUserMetadata } from "~/lib/MetaData";
import { redis } from "~/lib/upstash";
import Head from "~/components/common/Head";

const Page: NextPage = () => {
  
  const [isProject , setIsProject] = useState("loading")
  
 
  return (
    <>
     <Head />
      <Header />
      <main className=" custopn-page-height overflow-y-auto  flex w-full justify-center items-center bg-gray-50 ">
        <DocsSideBar  />
       <div
        className=" ml-[20rem] w-[80%] h-full p-8 "
       >
       {/* build the pdf builder component */}
       <DocumentBuilder
        title=" La charte du projet  "
         description="Document qui autorise et définit les objectifs, le périmètre et les parties prenantes du projet." />
       <DocumentBuilder
        title="Journal de hypotheses "
         description="Le Journal de hypothèses est un document qui enregistre les suppositions importantes faites dans le cadre d'un projet, permettant de suivre et de gérer les risques potentiels liés à ces hypothèses." />

       <DocumentBuilder
           title="Plan management du projet "
           description="Le plan de management du projet: Document définissant l'exécution, suivi et contrôle du projet, incluant les plans subsidiiaires et fournissant une feuille de route globale" />
        
       <DocumentBuilder
           title="Livrables"
           description="Les livrables : Les produits, résultats ou services tangibles et vérifiables produits à la fin d'une phase ou d'un projet." />
        
        
     
        
       <DocumentBuilder
           title="Donnees des performance d'execution "
           description=" Les informations quantitatives et qualitatives collectées pendant l'exécution d'un projet pour évaluer les performances, telles que les mesures de coûts, de délais, de qualité et de satisfaction des parties prenantes" />
        
        
       <DocumentBuilder
           title="Journal des points a traiter"
           description="Un document utilisé pour enregistrer et suivre les questions, problèmes ou points qui nécessitent une attention particulière ou une résolution dans le cadre d'un projet. Il permet de consigner de manière systématique les points soulevés, leur statut, les responsables et les actions entreprises pour les traiter."
        />

       <DocumentBuilder
           title="domande de changment"
           description="Une requête formelle soumise dans le cadre d'un projet pour demander une modification du périmètre, des objectifs, des ressources, du calendrier ou d'autres aspects du projet. La demande de changement est évaluée et gérée conformément aux processus de contrôle des changements du projet."
        />
        <DocumentBuilder
           title="mise a jour du plan de managment"
           description=" Révision et ajustement du plan du projet pour refléter les changements, assurer l'alignement avec les objectifs actuels et optimiser la gestion."
        />
        <DocumentBuilder
           title="mise a jour des actifs organisationnels "
           description="Actualisation des ressources, processus, outils et connaissances de l'organisation pour les adapter aux besoins changeants des projets et améliorer les performances en matière de gestion de projet."
        />
        <DocumentBuilder
           title="Registre des retours d'experience "
           description="Un document qui enregistre les leçons apprises, les bonnes pratiques, les erreurs et les expériences précédentes dans le but d'améliorer la gestion des projets futurs. Il permet de capitaliser sur les connaissances acquises et de faciliter le partage d'informations au sein de l'organisation"
        />
         <DocumentBuilder
           title="Mise a jour du plan de management du projet "
           description="Processus de révision et d'ajustement du plan de management initial afin de tenir compte des changements survenus dans le projet, garantissant ainsi la pertinence et l'efficacité continues du plan dans la gestion du projet."
         />
       
       
       
       </div>
      </main>
    </>
  );
};

export default Page;