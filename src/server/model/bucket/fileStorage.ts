import { BaseModel } from "../BaseModel"

class FileStorage extends BaseModel {
    constructor(){
        super()
    }

    async updloadDocumant   ({name , project_id , buffer } : {name : string , project_id : string , buffer : ArrayBufferLike}) {
            const { error : error1} = await this.provider.storage
                        .from("documents")
                        .upload(`${project_id}/${name}.pdf` , buffer , { contentType: "application/pdf" } )
                        if(error1)   throw new Error(error1.message)
                      
    }

    async renoveFile   ({name , project_id  } : {name : string , project_id : string }) {
        const { error : error1} = await this.provider.storage
                    .from("documents")
                    .remove([`${project_id}/${name}.pdf`])
                    if(error1)   throw new Error(error1.message)
                  
}
}

export const storage = new FileStorage()