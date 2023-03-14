/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Button } from "@mui/material";
import { EditorState  } from "draft-js";
import dynamic from "next/dynamic";
import { useState } from "react";

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

  const [pdfExixts , setPdfExixts] = useState<boolean>(false)

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

