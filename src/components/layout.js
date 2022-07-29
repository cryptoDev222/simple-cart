import React, { useContext } from "react";
import styles from "./layout.module.css";
import { ItemContext } from "../context/itemContext";

function Layout({ children }) {
  const { connectWallet, account } = useContext(ItemContext);
  return (
    <div>
      <div className={styles.topBar}>
        <button
          className={`${styles.button} ${styles.mR24}`}
          onClick={connectWallet}
          disabled={account !== null}
        >
          <p>{account === null ? "connect" : account}</p>
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Layout;
