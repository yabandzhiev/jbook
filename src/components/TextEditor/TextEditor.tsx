import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState, useRef } from "react";
import { Cell } from "../../store";
import { useActions } from "../../hooks/useActions";
import "./TextEditor.scss";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({
  cell,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("# Header");
  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };
    document.addEventListener("click", listener, {
      capture: true,
    });

    return () => {
      document.removeEventListener("click", listener, {
        capture: true,
      });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || "")}
        />
      </div>
    );
  }
  return (
    <div
      className="text-editor card"
      onClick={() => setEditing(true)}
    >
      <div className="card-content">
        <MDEditor.Markdown
          source={cell.content || "Click to edit"}
        />
      </div>
    </div>
  );
};

export default TextEditor;
