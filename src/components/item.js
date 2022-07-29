import React, { useContext } from "react";
import styles from "./item.module.css";
import { ItemContext } from "../context/itemContext";

function Item({ name, count }) {
  const { setItem } = useContext(ItemContext);
  return (
    <div className={styles.item}>
      <h2>ITEM-{name}</h2>
      <h1>{count}</h1>
      <button className={styles.button} onClick={() => setItem(name, 1)}>
        Increment
      </button>
      <button className={styles.button} onClick={() => setItem(name, -1)}>
        Decrement
      </button>
      <button className={styles.button} onClick={() => setItem(name, 0)}>
        Delete
      </button>
    </div>
  );
}

export default Item;
