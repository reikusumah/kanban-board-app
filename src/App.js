import React, { useContext } from "react";
import Header from "./components/Header";
import "./App.scss";
import { DataContext } from "./context/store";
import Board from "./components/Board";

const App = () => {
  const { store } = useContext(DataContext);
  return (
    <div className="App">
      <Header />
      <div className="container">
        {store.listIds.map((id) => {
          const data = store.lists[id];
          return <Board key={id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default App;
