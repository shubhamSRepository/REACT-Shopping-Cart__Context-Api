import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import ItemData from "../data/itemData"

function Items() {
  return (
    <div className={styles.wrapper}>

      {ItemData.map((item, index) => (
        <ItemCard
          id={item.id}
          name={item.name}
          price={item.price}
          key={index}
        />
      ))}

    </div>
  );
}

export default Items;
