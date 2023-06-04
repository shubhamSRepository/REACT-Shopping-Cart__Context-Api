import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import itemContext from "../itemContext";

function ItemCard({ name, price }) {

  const value = useContext(itemContext);

  const handleAdd = () => {
    value.setTotal(value.total + price);
    value.setItem(value.item + 1);
  };

  const handleRemove = () => {

    if (value.total > 0) {

      // value.setTotal(() => (value.total - price));

      /*both ways are correct. we can also "setTotal" the way we used "setState". we can set price like this also*/
      value.setTotal((prevState) => prevState - price);

      value.setItem(value.item - 1);
    }

  };


  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
