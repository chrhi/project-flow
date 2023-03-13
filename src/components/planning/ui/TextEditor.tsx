/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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


type TextEditorType = {
  enabled :boolean | undefined
}

export  function TextEditor({enabled} : TextEditorType) {

 

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const [editorState, setEditorState] = useState<EditorState | undefined>(EditorState.createEmpty());
 
  const onEditorStateChange =  (editorState :EditorState | undefined ) => {
    setEditorState(editorState);
  };
  return (
    <div className="bg-white  min-h-[500px] h-fit w-full">

      <Editor
  editorState={editorState}
  toolbarClassName={` !sticky !top-0 !z-50 !justify-center !mx-auto !shadow-lg !rounded-lg ${enabled ? "!flex" : "!hidden"}`}
  wrapperClassName="bg-white"
  editorClassName={` ${enabled ? "!mt-2" : "!mt-0"} p-2 bg-white min-h-full  lg:w-[60%] w-full mx-auto mb-4 `}
  onEditorStateChange={onEditorStateChange}
  readOnly={!enabled}
/>;
    </div>
  );
}

