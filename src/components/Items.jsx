import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  return (
    <div className={styles.wrapper}>
      <ItemCard name="Apple" price={100} />
      <ItemCard name="Banana" price={60} />
      <ItemCard name="Mango" price={120} />
      <ItemCard name="Grapes" price={80} />
    </div>
  );
}

export default Items;
