import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";

function Navbar() {

  const { item, total, handleResetBtn } = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button onClick={handleResetBtn}>
        <h2>Reset</h2>
      </button>
    </div>
  );
}

export default Navbar;
