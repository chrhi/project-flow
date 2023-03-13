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


export  function TextEditor() {

 

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const [editorState, setEditorState] = useState<EditorState | undefined>(EditorState.createEmpty());
 
  const onEditorStateChange =  (editorState :EditorState | undefined ) => {
    setEditorState(editorState);
  };
  return (
    <div className="bg-white  min-h-[500px] h-fit w-full">

      <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={onEditorStateChange}
/>;
    </div>
  );
}

