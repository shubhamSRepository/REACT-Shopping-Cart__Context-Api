import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import itemContext from './itemContext';


function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (

    /*
     1. Here in 'itemContext.Provider' we are giving 'value' an object. The outer braces are indicating 'javascript' and inner braces are 
      indicating 'object'. As in object we have key-value pairs, here this object in 'value' is like
      {
         total:total,
         setTotal:setTotal
      }
      because we are using 'short hand' (when key and value names are same) is becomes like {total, setTotal}.
    2. We can use diferent names for keys in value, for ex-
      {
        sum:total,
        setSum:setTotal
      }
      but then we need to pass this object as it is. We cannot use 'short hand'.
    3. We can give string to 'value' as value="red".
      */
    <itemContext.Provider value={{ total, setTotal, item, setItem }}>
      <div className='App'>
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </itemContext.Provider>
  );
}
export default App;
