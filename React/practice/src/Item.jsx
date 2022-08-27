import { useState } from 'react';
import AddItems from './AddItems.jsx';
import Basket from './Basket.jsx';

const Item = () => {

   const [itemName, setItemName] = useState("");
   const [items, setItems] = useState([]);

    const newItem = ({ target }) => {
        setItemName(target.value)
    }

   const submitForm = (event) => {
        event.preventDefault();
   }

    const handleAdd = () => { 
        setItems(items => [...items, itemName]);
    }

    return(
       <>
           <AddItems submitHandler={submitForm} newItem={newItem} handleAdd={handleAdd} />
            <Basket items={items}/> 
       </>
   )
}
export default Item;