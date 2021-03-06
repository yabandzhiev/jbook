import { Fragment } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import AddCell from "../AddCell/AddCell";
import CellListItem from "../CellListItem/CellListItem";

import "./CellList.scss";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
