/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRouter } from "next/router";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useEffect } from "react";

const Editor = dynamic(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

export  function TextEditor() {

  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const [editorState, setEditorState] = useState<EditorState | undefined>(EditorState.createEmpty());
 
  const onEditorStateChange =  (editorState :EditorState | undefined ) => {
    setEditorState(editorState);
  };
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
      />
    </div>
  );
}

