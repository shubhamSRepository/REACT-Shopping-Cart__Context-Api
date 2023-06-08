import { useState, createContext, useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

/**Now due to 'custom context provider' and 'custom hook' we have all our things in one place.
 * Here we add state and sent it to 'itemProvider', all things can be done from here.
 */

/** 'useValue' is 'custom hook' which we have created to avoid repition of code to import 'itemContext'
 * and 'useContext' in every other file
 */
function useValue() {
  const value = useContext(itemContext);
  return value;
}

/*Custom Provider */
/*Custom Provider make use of default provider */
function CustomItemContext({ children }) {
  /*Elements inside a component becomes children of component and can be accesed through 'props.children'
   * Similarly we have used children of 'CustomItemContext' from App.js here,
   */

  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  /**we have transfered both the handlers from 'itemCard.js' so that all the things where we
   * are manipulating data using states can be at one place.
   * It makes easy to debug and increase readability.
   * Also now we don't have to pass 'setTotal' and 'setItem' in 'value' in 'itemContext.Provider'
   * as we are using 'setTotal' and 'setItem' in these handlers only.
   */
  const handleAdd = (product) => {
    const index = cart.findIndex((item) => item.id === product.id); //if it does not find any id then index = -1

    if (index === -1) {
      setCart([...cart, { ...product, qty: 1 }]);
      // setTotal(total + product.price);
    } else {
      cart[index].qty++;
      setCart(cart);

    }
    setTotal(total + product.price);
    setItem(item + 1);
  };


  const handleRemove = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      alert("This item is not in your cart");
    }

    if (cart[index].qty == 1) {
      setCart(cart.filter((item, i) => i !== index));
    }
    else {
      cart[index].qty--;
      setCart(cart);
    }
    setTotal(total - product.price);
    setItem(item - 1);

  };



  const clear = () => {
    setItem(0);
    setTotal(0);
    setCart([]);
  };

  const toggle = () => {
    setShowCart(!showCart);
  };

  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, clear, toggle, cart, setCart }}
    >
      {showCart ? <CartModal /> : null}
      {/*we can also write above condition as {showCart && <CartModel/>} */}

      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useValue };
export default CustomItemContext;
