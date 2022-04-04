import React from "react";

const OpenCell = ({ count, hasMine }) => (
  <div className="Cell__cover Cell__cover--opened">
    {!hasMine && <span className={`Cell__number${count}`}>{count}</span>}
    {hasMine && <span className="Cell__bomb">b</span>}
  </div>
);

const ClosedCell = () => <div className="Cell__cover" />;
const FlagCell = () => <div className="Cell__flag" />;

const Cell = ({
  id,
  count,
  hasMine,
  isOpen,
  hasFlag,
  onOpen,
  onFlagToggle,
}) => (
  <td
    className="Cell"
    onClick={() => onOpen(id)}
    onContextMenu={(e) => {
      e.preventDefault();
      onFlagToggle(id);
    }}
  >
    {!isOpen && !hasFlag && <ClosedCell />}
    {!isOpen && hasFlag && <FlagCell />}
    {isOpen && <OpenCell hasMine={hasMine} count={count} />}
  </td>
);

export default Cell;
