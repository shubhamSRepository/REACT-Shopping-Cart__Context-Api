import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";

function Navbar() {

  const { item, total, clear, toggle } = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
     
      <button onClick={toggle}>
        <h2>Cart</h2>
      </button>

      <button onClick={clear}>
        <h2>Reset</h2>
      </button>
    </div>
  );
}

export default Navbar;
