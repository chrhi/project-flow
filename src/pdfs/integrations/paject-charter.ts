export const getProjectCharter = () => {
    return (
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins:ital,wght@0,100;0,500;0,600;0,700;0,800;0,900;1,900&family=Qwitcher+Grypen:wght@700&family=Rubik:wght@500&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<body>
    <style>
        *{
            font-family: 'Dancing Script', cursive !important;
font-family: 'Poppins', sans-serif !important;
font-family: 'Qwitcher Grypen', cursive;
font-family: 'Rubik', sans-serif;
        }
    </style>
    <main class="w-[800px] mx-auto flex flex-col items-start  p-[20px] ">
       <h1 class="my-4 text-xl font-bold text-start text-black">LA CHARTE DU PROJET</h1>
       <div class="border-2 border-blue-500 w-full "></div>
       <h1 class="text-lg text-black text-start font-bold my-1">Intitulé de projet :  <span class="text-lg text-gray-700 font-normal ">Revamping des systèmes de contrôle et ré-instrumentation de 19 fours des modules MPP2, MPP3 et MPP4 à Hassi R’Mel.</span></h1>
       <div class="w-full flex items-center h-[25px] justify-between ">
        <h1 class="text-lg text-black text-start font-bold my-1"> Sponsor de projet :<span class="text-lg text-gray-500 font-normal ">SONATRACH DP </span></h1>
        <h1 class="text-lg text-black text-start font-bold my-1">Date :  <span class="text-lg text-gray-500 font-normal ">03/11/2019 </span></h1>
       </div>
       <div class="w-full flex items-center h-[25px] justify-between my-1">
        <h1 class="text-lg text-black text-start font-bold my-2"> Chef de projet :  <span class="text-lg text-gray-500 font-normal ">KHITER Mohamed Seghir</span></h1>
        <h1 class="text-lg text-black text-start font-bold my-2">Client :   <span class="text-lg text-gray-500 font-normal ">Direction Exploitation</span></h1>
       </div>
       <div class="w-full flex  min-h-[50px]  flex-col my-4 ">
            <h1 class="text-xl text-start text-black font-bold ">Objectif et opportunité de projet :  </h1>
            <p class="text-lg text-start text-gray-700 my-2">
                fractionnement du GPL du condensât. La température des fours dépend de : le débit de fuel gaz qui alimente les brûleurs ainsi que le débit du condensât à chauffer.
Les fours actuels disposent d’un système de régulation à séquence à relais câblé :
-l’allumage des pilotes et bruleurs se fait manuellement à l’aide d’une torche allumée par l’opérateur dans une zone ATEX.
- la pièce de rechange des fours est jugé obsolète ce qui pose un sérieux problème de maintenance.
- le circuit de vidange (vide-vite) ne dispose pas de vannes automatique qui devraient être actionnées à distance en cas d’incident. 
Ce projet a pour but d’augmenter la fiabilité, la disponibilité, la maintenabilité et renforcer la sécurité des fours.

            </p>
       </div>
       <!-- this is very important  -->
       <div class="w-full flex  min-h-[50px]  flex-col my-4 ">
        <h1 class="text-xl text-start text-black font-bold ">
            Exigences à haut niveau :
              </h1>
        <p class="text-lg text-start text-gray-700 my-2">
            Exigences de service exploitation : 
            -	Automatisation du contrôle et visualisation directe et instantanée de l’état des fours.
            -	Réduction des perturbations du process.
            Exigences de service maintenance : 
            -	Amélioration de la maintenabilité pour réduire le temps d’arrêt et l’indisponibilité des fours.
            Exigences de service sécurité : 
            -	Levée des réserves des assureurs et application des recommandations HAZOP.
            -	Se conformer avec les dernières normes et standards en vigueur.
            
        </p>
   </div>
   <!-- this is the very important -->
      <!-- this is very important  -->
      <div class="w-full flex  min-h-[50px]  flex-col my-4 ">
        <h1 class="text-xl text-start text-black font-bold ">
            Risques à haut niveau :
              </h1>
        <p class="text-lg text-start text-gray-700 my-2">
            Risques management : 
            -	Type de structure organisationnelle fonctionnelle centralisé.        
            Risques techniques : 
            -	Usines en production lors du revamping : il faut avoir l’accord du direction Exploitation pour l’arrêt de la production lors des travaux à chaud.
            -	Extension du périmètre lors l’exécution vu le vieillissement des Fours. 
            -	Travaux à froid s’exécuteront en parallèle avec les travaux de révision de l’usine (travaux à proximité)  
            Risques financiers :           
            -	Incertitude de l’estimation du budget.
            -	Echéancier serré.
            Risques externes :         
            -	Conditions climatiques sévères (vent de sable, canicule). 
            -	Formalité de dédouanement longue.
            -	Inflation.
            -	Changement de la réglementation.                   
        </p>
   </div>
   <h1 class="text-xl text-start text-black font-bold ">Périmètre</h1>
<div class="relative overflow-x-auto my-2">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Objectifs du Projet
                </th>
                <th scope="col" class="px-6 py-3">
                    Critères du succès
                </th>
                <th scope="col" class="px-6 py-3">
                    Approbation
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <td class="px-6 py-4">
                    Avoir une précision et stabilité des paramètres de process (température et débit) 
Control des paramètres en line depuis la salle de contrôle 

</td>
                <td class="px-6 py-4">
                    - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel permet de faire des actions rapides et efficaces. 
                    - Maitrise accrue des paramètres de process.
                    - Produit à chauffer On-Spec
                    
                </td>
                <td class="px-6 py-4">
                    - Directeur Maintenance
                    - Directeur Exploitation
                    - Chef de division Sécurité
                    - Directeur Régional
                    
                    
                </td>
              
            </tr>
           
          
        </tbody>
    </table>
</div>

<h1 class="text-xl text-start text-black font-bold ">Echéancier</h1>
<div class="relative overflow-x-auto my-2">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Objectifs du Projet
                </th>
                <th scope="col" class="px-6 py-3">
                    Critères du succès
                </th>
                <th scope="col" class="px-6 py-3">
                    Approbation
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <td class="px-6 py-4">
                    Avoir une précision et stabilité des paramètres de process (température et débit) 
Control des paramètres en line depuis la salle de contrôle 

</td>
                <td class="px-6 py-4">
                    - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel permet de faire des actions rapides et efficaces. 
                    - Maitrise accrue des paramètres de process.
                    - Produit à chauffer On-Spec
                    
                </td>
                <td class="px-6 py-4">
                    - Directeur Maintenance
                    - Directeur Exploitation
                    - Chef de division Sécurité
                    - Directeur Régional
                    
                    
                </td>
              
            </tr>
           
          
        </tbody>
    </table>
</div>


<h1 class="text-xl text-start text-black font-bold ">Qualité</h1>
<div class="relative overflow-x-auto my-2">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Objectifs du Projet
                </th>
                <th scope="col" class="px-6 py-3">
                    Critères du succès
                </th>
                <th scope="col" class="px-6 py-3">
                    Approbation
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <td class="px-6 py-4">
                    Avoir une précision et stabilité des paramètres de process (température et débit) 
Control des paramètres en line depuis la salle de contrôle 

</td>
                <td class="px-6 py-4">
                    - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel permet de faire des actions rapides et efficaces. 
                    - Maitrise accrue des paramètres de process.
                    - Produit à chauffer On-Spec
                    
                </td>
                <td class="px-6 py-4">
                    - Directeur Maintenance
                    - Directeur Exploitation
                    - Chef de division Sécurité
                    - Directeur Régional
                    
                    
                </td>
              
            </tr>
           
          
        </tbody>
    </table>
</div>

<h1 class="text-xl text-start text-black font-bold ">Sécurité</h1>
<div class="relative overflow-x-auto my-2">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Objectifs du Projet
                </th>
                <th scope="col" class="px-6 py-3">
                    Critères du succès
                </th>
                <th scope="col" class="px-6 py-3">
                    Approbation
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <td class="px-6 py-4">
                    Avoir une précision et stabilité des paramètres de process (température et débit) 
Control des paramètres en line depuis la salle de contrôle 

</td>
                <td class="px-6 py-4">
                    - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel permet de faire des actions rapides et efficaces. 
                    - Maitrise accrue des paramètres de process.
                    - Produit à chauffer On-Spec
                    
                </td>
                <td class="px-6 py-4">
                    - Directeur Maintenance
                    - Directeur Exploitation
                    - Chef de division Sécurité
                    - Directeur Régional
                    
                    
                </td>
              
            </tr>
           
          
        </tbody>
    </table>
</div>


<h1 class="text-xl text-start text-black font-bold ">Ressource </h1>
 <div class="relative overflow-x-auto my-2">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Objectifs du Projet
                </th>
                <th scope="col" class="px-6 py-3">
                    Critères du succès
                </th>
                <th scope="col" class="px-6 py-3">
                    Approbation
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <td class="px-6 py-4">
                    Avoir une précision et stabilité des paramètres de process (température et débit) 
Control des paramètres en line depuis la salle de contrôle 

</td>
                <td class="px-6 py-4">
                    - control des paramètres de fonctionnement des fours en salle de contrôle en temps réel permet de faire des actions rapides et efficaces. 
                    - Maitrise accrue des paramètres de process.
                    - Produit à chauffer On-Spec
                    
                </td>
                <td class="px-6 py-4">
                    - Directeur Maintenance
                    - Directeur Exploitation
                    - Chef de division Sécurité
                    - Directeur Régional
                    
                    
                </td>
              
            </tr>
           
          
        </tbody>
    </table>
</div>

<h1 class="text-xl text-start text-black font-bold ">Principaux Jalons </h1>
<div class="relative w-full overflow-x-auto my-2">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Principaux Jalons
                </th>
                <th scope="col" class="px-6 py-3">
                    Dates
                </th>
               
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <td class="px-6 py-4">
                    Appel d'offre
</td>
                <td class="px-6 py-4">
                    -02/2020
                    
                </td>
              
              
            </tr>
           
          
        </tbody>
    </table>
</div>

<div class="w-full h-[50px] flex items-center justify-between my-4 pr-4 border ">
    <h1 class="text-lg text-black text-start  my-1">Budget Estimé   </h1> <h2 class="text-lg text-gray-700 font-normal "> 11 ± 2  Million Euro  </h2>
</div>

<h1 class="text-xl text-start text-black font-bold ">Parties prenantes </h1>
<div class="relative w-full overflow-x-auto my-2">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Parties prenantes
                </th>
                <th scope="col" class="px-6 py-3">
                    Rôle
                </th>
               
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <td class="px-6 py-4">
                    Le Chef de projet 
                </td>
                <td class="px-6 py-4">
                    Manage le Projet
                    
                </td>
            </tr>
            <tr class="bg-white border-b ">
                <td class="px-6 py-4">
                    L’Equipe projet 
                </td>
                <td class="px-6 py-4">
                    Planifie, gère, exécute et contrôle les travaux de Projet 
                    
                </td>
            </tr>
           
          
        </tbody>
    </table>
</div>
<div class="w-full h-[50px] flex items-center justify-between my-4 pr-4 border ">
    <h1 class="text-lg text-black text-start  my-1">Autorité du chef de projet  </h1> <h2 class="text-lg text-gray-700 font-normal "> Peu voire Aucune  </h2>
</div>
<div class="w-full h-[50px] flex items-center justify-between my-4 pr-4 border  ">
    <h1 class="text-lg text-black text-start  my-1">Décision du Staff  </h1> <h2 class="text-lg text-gray-700 font-normal "> Projet Accordé   </h2>
</div>
<div class="w-full flex  min-h-[50px]  flex-col my-4 ">
    <h1 class="text-xl text-start text-black font-bold ">
        Gestion des conflits : 
          </h1>
    <p class="text-lg text-start text-gray-700 my-2">
        -	Gestions des conflits de façon constructive.
        -	Communication ouverte et efficace.
        -	Charte d’équipe.
-	Application des cinq techniques de gestion des conflits.                         
    </p>
</div>
<div class="border-2 border-blue-500 w-full  "></div>
<div class="w-full h-[50px] flex flex-col my-2 ">
    <div class="w-full h-[25px] flex items-center justify-between my-4 pr-4>
  
    
        <h2  class="text-lg text-black text-start font-bold" >     Nom du chef de projet </h2>
  
        <h2  class="text-lg text-black text-start font-bold  ">    Nom du directeur Régional </h2>
    </div>
    <div class="w-full h-[25px] flex items-center justify-between my-4 pr-4>
        <h1 class="text-lg text-gray-700 font-normal">  KHITER Mohamed Seghir    </h1> <h2 class="text-lg text-gray-700 font-normal ">    BAALI Mohamed Rédha                        </h2>
    </div>
</div>

<div class="w-full h-[100px] ">
   
</div>

    </main>
</body>
</html>
        `
    )
}