import ActionBarButton from "./ActionBarButton/ActionBarButton";
import { useActions } from "../../hooks/useActions";

import "./ActionBar.scss";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <ActionBarButton
        onClick={() => moveCell(id, "up")}
        icon={"arrow-up"}
      />
      <ActionBarButton
        onClick={() => moveCell(id, "down")}
        icon={"arrow-down"}
      />
      <ActionBarButton
        onClick={() => deleteCell(id)}
        icon={"times"}
      />
    </div>
  );
};

export default ActionBar;
