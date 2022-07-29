import React, { useContext } from "react";
import Item from "./components/item";
import styles from "./dashboard.module.css";
import { ItemContext } from "./context/itemContext";
import Layout from "./components/layout";

function DashBoard() {
  const { itemA, itemB, itemC, itemD, resetItem } = useContext(ItemContext);

  return (
    <Layout>
      <div className={styles.root}>
        <Item name="A" count={itemA} />
        <Item name="B" count={itemB} />
        <Item name="C" count={itemC} />
        <Item name="D" count={itemD} />
      </div>
      <button className={styles.button} onClick={resetItem}>
        Reset
      </button>
    </Layout>
  );
}

export default DashBoard;
