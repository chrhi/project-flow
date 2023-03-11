
export type ParamsType = {
    title : string , 
    NeedForOrganization : string ,
    ProjectRequirements : string ,
    ProductDescription : string ,
    ThePojectDoesNotInclude : string ,
    PreApprovedResources : string 
}

export const PdfTemplates = (param:ParamsType) : string => {
  
    const template =  `
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>project charte abdullah</title>
        
        <style>
        
        .pdf-box {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }
        .black-under__line{
            width: 100%;
            border-bottom: 5px solid black;
        }
        h1{
            font-size: 2rem;
            font-weight: 500;
        }
        h2{
            font-size: 2.5rem;
            font-weight: 600;
        }
        .row{
            width: 100%;
            height: 20px;
            display: flex;
            align-items: center;
            padding: 1rem;
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
        
        </style>
    </head>
    
    <body>
        <div class="pdf-box">
            <div class="row">
                <h1>Title de project : ${param.title} </h1>
            </div>
            <div class="row">
                <h2 style="font-size: 2.2rem;">Charte du projet</h2>
            </div>
            <div class="row" style="margin-top: 1rem;">
                <h1 style="font-size: 2.2rem; ">1- Details du projet</h1>
            </div>
            <div class="black-under__line"></div>
    
    
            <div class="textFiled__container">
               <div class="lable">
                <h3>Besoin de l'organisation / objectifs du projet</h3>
               </div>
               <div>
                <p>${param.NeedForOrganization}</p>
               </div>
            </div>
    
    
            <div class="textFiled__container">
                <div class="lable">
                 <h3>Exigences du projet</h3>
                </div>
                <div>
                 <p>${param.ProjectRequirements}</p>
                </div>
             </div>
    
    
             <div class="textFiled__container">
                <div class="lable">
                 <h3>Description du produit / des livrables</h3>
                </div>
                <div>
                 <p>${param.ProductDescription}</p>
                </div>
             </div>
    
             <div class="textFiled__container">
                <div class="lable">
                 <h3>Le projet n'inclut pas :</h3>
                </div>
                <div>
                 <p>${param.ThePojectDoesNotInclude}</p>
                </div>
             </div>
    
    
             <div class="textFiled__container">
                <div class="lable">
                 <h3>Ressources preapprouvees</h3>
                </div>
                <div>
                 <p>${param.PreApprovedResources}</p>
                </div>
             </div>
        </div>
    </body>
    </html>
    `
    return template
}