import React from "react";
import BoardTitle from "./BoardTitle";
import "../sass/Board.scss";

const Board = ({ data }) => {
  return (
    <div className="board">
      <BoardTitle title={data.title} id={data.id} />
      <div>Card</div>
      <button>add</button>
    </div>
  );
};

export default Board;
