import React, { useContext, useState } from "react";
import { DataContext } from "../context/store";

const BoardTitle = ({ id, title }) => {
  const { changeTitle } = useContext(DataContext);
  const [text, setText] = useState(title);
  const [open, setOpen] = useState(false);

  const openInput = () => {
    setOpen(true);
  };

  const closeInput = () => {
    setOpen(false);
    changeTitle(id, text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="board-title">
      {open ? (
        <form onSubmit={closeInput}>
          <input
            type="text"
            value={text}
            onBlur={closeInput}
            onChange={handleChange}
            autoFocus
          />
        </form>
      ) : (
        <h3 onClick={openInput}>{title}</h3>
      )}
    </div>
  );
};

export default BoardTitle;
