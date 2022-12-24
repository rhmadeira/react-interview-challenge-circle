import React, { useState } from "react";
import styles from "./App.module.css";
import "./App.css";

export default function App() {
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState([]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setList((prev) => [...prev, { x: clientX, y: clientY }]);
  };

  const handleUndo = () => {
    //event.stopPropagation();
    if (list.length === 0) return;
    setNewList((prev) => [...prev, list[list.length - 1]]);
    setList((prev) => prev.slice(0, prev.length - 1));
  };

  const handleRendo = () => {
    //event.stopPropagation();
    if (newList.length === 0) return;
    setList((prev) => [...prev, newList[newList.length - 1]]);
    setNewList((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <div>
      <div className={styles.buttons}>
        <button onClick={handleUndo} className={styles.button}>
          Undo
        </button>
        <button onClick={handleRendo} className={styles.button}>
          Rendo
        </button>
      </div>
      <div onClick={handleClick} className={styles.container}>
        {list.map((item, i) => {
          return (
            <span
              className={styles.circle}
              key={i}
              style={{ left: item.x, top: item.y }}
            />
          );
        })}
      </div>
    </div>
  );
}
