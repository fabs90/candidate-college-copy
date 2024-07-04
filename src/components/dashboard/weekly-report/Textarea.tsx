import { SetStateAction } from "react";
import dynamic from "next/dynamic";

// This line dynamically imports the Froala Editor component,
// and sets it to not load on the server (ssr: false)
const FroalaEditorComponent = dynamic(() => import("react-froala-wysiwyg"), {
  ssr: false,
});

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

export default function Textarea({
  className,
  value,
  setValue,
}: {
  setValue: React.Dispatch<SetStateAction<string>>;
  value: string;
  className: string;
}) {
  return (
    <div className={`${className} w-full relative`}>
      <label className="text-white font-medium block" htmlFor="eigth-driver">
        Your Report <span className="text-danger">*</span>
      </label>
      <div id="eigth-driver" className="mt-2">
        <FroalaEditorComponent
          tag="textarea"
          config={{
            listAdvancedTypes: true,
            toolbarButtons: [
              "undo",
              "formatOL",
              "redo",
              "|",
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "outdent",
              "indent",
              "clearFormatting",
              "insertTable",
              "html",
            ],
          }}
          onModelChange={(e: any) => setValue(e)}
        />
      </div>
    </div>
  );
}
