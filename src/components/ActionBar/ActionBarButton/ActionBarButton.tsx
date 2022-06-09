interface ActionBarButtonProps {
  onClick: () => void;
  icon: "arrow-up" | "arrow-down" | "times";
}

const ActionBarButton: React.FC<ActionBarButtonProps> = ({
  onClick,
  icon,
}) => {
  return (
    <button
      className="button is-primary is-small"
      onClick={onClick}
    >
      <span className="icon">
        <i className={`fas fa-${icon}`}></i>
      </span>
    </button>
  );
};

export default ActionBarButton;
