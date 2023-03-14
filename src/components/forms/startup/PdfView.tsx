/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Button } from "@mui/material";
import { EditorState , convertToRaw , ContentState   } from "draft-js";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import draftToHtml from 'draftjs-to-html';


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const Editor = dynamic(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);



export const PdfView = () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const [editorState, setEditorState] = useState<EditorState | undefined>(EditorState.createEmpty());

  const onEditorStateChange =  (editorState :EditorState | undefined ) => {
    setEditorState(editorState);
  };

 


  useEffect(() => {
    async function loadData(){
   
      if(typeof(window) !== undefined){
        const htmlToDraft = (await import('html-to-draftjs')).default
        // Load HTML content into editor
        const htmlContent = ` <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>project charte abdullah</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" defer></script>
            <style>
            
            .pdf-box {
                max-width: 800px;
                margin: auto;
                padding: 20px;
              
              
                font-size: 16px;
                /* line-height: 24px; */
                /* font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; */
                color: #555;
            }
            .black-under__line{
                width: 100%;
                margin-top: 1.5rem;
                margin-bottom: 1rem;
                border-bottom: 5px solid black;
            }
            h3{
                font-size: 1.9rem;
            }
            h1{
                font-size: 1.5rem;
                font-weight: 700;
            }
            h2{
                font-size: 3rem;
                font-weight: 600;
            }
            .row{
                width: 100%;
                height: 20px;
                display: flex;
                align-items: center;
              
            }
            .textFiled__container{
                width: 100%;
                min-height: 50px;
                display: flex;
                flex-direction: column;
                margin-top: 20px;
        
            }
            .lable{
                width: 100%;
                height: 20px;
                display: flex;
                align-items: center;
            }
            .jalon{
                width: 100%;
                min-height: 100px;
                height: fit-content;
                display: flex;
                align-items: center;
               
            }
            .jalon__div1{
                width: 50%;
                height: 100%;
                display: flex ;
                flex-direction: column;
                justify-content: center;
                padding: 1rem;
            }
            .jalon__div2{
                width: 50%;
                height: 100%;
                padding: 1rem;
                background-color: #ebebeb;
            }
            </style>
        </head>
        
        <body>
            <div class="pdf-box">
                <div class="row mb-2">
                    <h1>Title de project : this is ajfnkdkskjfjkbshefbhwedsbhdbfhek fn zdm hebn  jadbednd ddjndf dhlfdnbdnjbhbhsdfdbckwkefnndfdsdnldvjmvcncmfjknm  nd fbdnm,snjdndjjndje fmdmfjndfnkjfdmwm  fnsknkjfeeefuran fjkdjweeijfjennfmde kwjdjjrjfgfhhhb nbhssyuutiyetyuyiytruureghigfh </h1>
                </div>
                <div class="row mt-4 mb-5">
                    <h2 >Charte du projet</h2>
                </div>
                <div class="row  mt-4 mb-4" style="margin-top: 1rem;">
                    <h3 >1- Details du projet</h3>
                </div>
                <div class="black-under__line"></div>
        
        
                <div class="textFiled__container">
                   <div class="lable">
                    <h3>Besoin de l'organisation / objectifs du projet</h3>
                   </div>
                   <div>
                    <p></p>
                   </div>
                </div>
        
        
                <div class="textFiled__container">
                    <div class="lable">
                     <h3>Exigences du projet</h3>
                    </div>
                    <div>
                     <p></p>
                    </div>
                 </div>
        
        
                 <div class="textFiled__container">
                    <div class="lable">
                     <h3>Description du produit / des livrables</h3>
                    </div>
                    <div>
                     <p></p>
                    </div>
                 </div>
        
                 <div class="textFiled__container">
                    <div class="lable">
                     <h3>Le projet n'inclut pas :</h3>
                    </div>
                    <div>
                     <p></p>
                    </div>
                 </div>
        
        
                 <div class="textFiled__container">
                    <div class="lable">
                     <h3>Ressources preapprouvees</h3>
                    </div>
                    <div>
                     <p></p>
                    </div>
                 </div>
               
                 <div class="row" style="margin-top: 1rem;">
                    <h3 >2-Liste des parties prenantes</h3>
                </div>
                <div class="black-under__line"></div>
                <table class="table table-striped ">
                    <thead>
                      <tr >
                        <th scope="col ">Nom</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Role / Responsability</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                  </table>
        
                  <!-- this is the part of the mailstones  -->
                  <div class="row  mt-4 mb-4" style="margin-top: 1rem;">
                    <h3 >3- Echeancier a jalons recapitulatif</h3>
                </div>
                <div class="black-under__line"></div>
        
                <div class=" jalon">
                    <!-- this is the div number 1 -->
                    <div class="jalon__div1">
                        <h4>jalon 1 : do something </h4>
                        <h4>Date : 22/04/2019</h4>
                    </div>
                    <!-- this is the div number 2 -->
                    <div class="jalon__div2">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci reprehenderit harum praesentium dolorum, tempore cumque omnis voluptate accusamus sunt eveniet sapiente illum, voluptatem doloribus, sequi eligendi ullam fugiat in?</p>
                    </div>
        
                </div>
        
                 <!-- this is the part number 4 -->
                 <div class="row" style="margin-top: 1rem;">
                    <h3 >4- Considerations relatives au projet</h3>
                </div>
                <div class="black-under__line"></div>
        
        
                <div class="textFiled__container">
                   <div class="lable">
                    <h3>Risques de haut niveau :</h3>
                   </div>
                   <div>
                    <p></p>
                   </div>
                </div>
        
        
                <div class="textFiled__container">
                    <div class="lable">
                     <h3>Criteres d'acceptation :</h3>
                    </div>
                    <div>
                     <p></p>
                    </div>
                 </div>
        
        
                 <div class="textFiled__container">
                    <div class="lable">
                     <h3>Hypotheses :</h3>
                    </div>
                    <div>
                     <p></p>
                    </div>
                 </div>
        
                 <div class="textFiled__container">
                    <div class="lable">
                     <h3>Contraintes : </h3>
                    </div>
                    <div>
                     <p></p>
                    </div>
                 </div>
        
        
                 <div class="textFiled__container">
                    <div class="lable">
                     <h3>Ressources preapprouvees</h3>
                    </div>
                    <div>
                     <p></p>
                    </div>
                 </div>
            </div>
        </body>
        </html>`;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const contentBlock = htmlToDraft(htmlContent);
        if (contentBlock) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
          const newEditorState = EditorState.createWithContent(contentState);
          setEditorState(newEditorState);
        }
    }
  }
  loadData().then(() => console.log("it works")).catch(() => console.log("error"))
},[])


  const [pdfExixts , setPdfExixts] = useState<boolean>(true)


  
  if(!pdfExixts){
    return (
        <div className='h-[70vh] w-[80%] overflow-y-auto bg-white flex justify-center items-center rounded-lg'>
            <Button className="!px-4 !text-lg !py-1.8 !text-white !normal-case !rounded-md !bg-gradient-to-r !from-indigo-600 !to-sky-500">
                create my project charter
            </Button>
        </div>
    )
  }

  return (
    <div className='h-[70vh] w-[80%] overflow-y-auto bg-white rounded-lg'>
          <Editor
  editorState={editorState}
  toolbarClassName={`!hidden`}
  wrapperClassName="bg-white"
  editorClassName={` !mt-0 p-2 bg-white min-h-full  lg:w-[70%] w-full mx-auto mb-4 `}
  onEditorStateChange={onEditorStateChange}
  readOnly
/>;
    </div>
  )
}

