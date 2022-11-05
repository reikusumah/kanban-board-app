import React from "react";
import BoardTitle from "./BoardTitle";
import "../sass/Board.scss";
import menu from "../assets/menu.svg";

const Board = ({ data }) => {
  return (
    <div className="board">
      <div className="board__title">
        <BoardTitle title={data.title} id={data.id} />
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div>Card</div>
      <button>add</button>
    </div>
  );
};

export default Board;
