import React, { useContext, useEffect, useState } from 'react'
import './counter.css'
import Button from '../Button/Button';
import { CartContext } from '../../context/CartContext';

const Counter = ({stock, prod, counterType}) => {
  const {addProduct, updateQuantity, cart} = useContext(CartContext)
  const [value, setValue] = useState(1);

  const cartProduct = cart.find(item => item.id === prod.id)
  const quantityInCart = cartProduct ? cartProduct.quantity : 0;
  const maxAvailable = stock - quantityInCart;

  useEffect(() => {
    if (prod.quantity) {
      setValue(prod.quantity);
    }
  }, [prod.quantity]);

  const increment = () => {
    if(value <= (counterType === 'cart' ? stock : maxAvailable)) {
      const newValue = value + 1
      setValue(newValue);
      if(prod.quantity) updateQuantity(prod.id, newValue)
    }
  };

  const decrement = () => {
    if(value > 1){
      const newValue = value - 1
      setValue(newValue);
      if(prod.quantity) updateQuantity(prod.id, newValue)
    }
  };

  return (
    <div className='counterButtonContainer'>
        <div className='counterContainer'>
          <button onClick={decrement} className='btnCounter'>-</button>
          <h4>{value}</h4>
          <button onClick={increment} className='btnCounter' disabled={value >= (counterType === 'cart' ? stock : maxAvailable)}>+</button>
        </div>
        {
          !prod.quantity ? 
            <Button btnText={'Agregar Al Carrito'} action={() => addProduct(prod, value)} disabled={value > maxAvailable}/>
          : null
        }
        
    </div>
  )
}

export default Counter