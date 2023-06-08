import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal() {
  const { toggle, cart, clear, total } = useValue();

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={clear}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item, index) => (

          <div key={index} className={styles.cartCard}>
            <h2>{item.name}</h2>
            <h3>{item.qty}</h3>
            <h3> &#x20B9;{item.qty * item.price}</h3>
          </div>
        ))}

      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}> &#x20B9;{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
