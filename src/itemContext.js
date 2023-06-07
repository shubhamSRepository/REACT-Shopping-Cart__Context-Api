import { useState, createContext, useContext } from "react";

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

  /**we have transfered both the handlers from 'itemCard.js' so that all the things where we
   * are manipulating data using states can be at one place.
   * It makes easy to debug and increase readability.
   * Also now we don't have to pass 'setTotal' and 'setItem' in 'value' in 'itemContext.Provider'
   * as we are using 'setTotal' and 'setItem' in these handlers only.
   */
  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total > 0) {
      // setTotal(() => (total - price));

      /*both ways are correct. we can also "setTotal" the way we used "setState". we can set price like this also*/
      setTotal((prevState) => prevState - price);

      setItem(item - 1);
    }
  };

  const handleResetBtn = () => {
    setItem(0);
    setTotal(0);
  };

  return (
    <itemContext.Provider value={{ total, item, handleAdd, handleRemove, handleResetBtn}}>
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useValue };
export default CustomItemContext;
