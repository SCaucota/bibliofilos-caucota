import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Counter from '../../common/Counter/Counter'
import Button from '../../common/Button/Button';
import './cart.css';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

  const {cart, total, deleteProduct, emptyCart, formatPrice} = useContext(CartContext)

  return (
    <>
      
      {cart.length !== 0 ? (
        <>
          <h1>Carrito de compras</h1>
          <div className='cartContainer'>
            <div className='productsCartContainer'>
              {cart.map(product => (
                <div className='singleProductCartContainer' key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h2>{product.title}</h2>
                    <p>C/u ${formatPrice(product.price)}</p>
                    <Counter stock={product.stock} prod={product} counterType={'cart'} />
                  </div>
                  <h2>${formatPrice(product.price * product.quantity)}</h2>
                  <button onClick={() => deleteProduct(product.id)} className='deleteIcon'><DeleteIcon/></button>
                </div>
              ))}
            </div>
            <div className='totalButtonsContainer'>
              <h2>Total: ${formatPrice(total)}</h2>
              <Button btnText={'Vaciar Carrito'} action={() => {emptyCart()}} />
              <Button btnText={'Comprar'} route={'/checkout'} />
            </div>
          </div>
        </>
      ) : (
        <div className='emptyCartContainer'>
          <h2>Tu carrito está vacío</h2>
          <p>Regresa y navega en nuestro mar de libros</p>
          <Button btnText={'Volver al inicio'} route={'/'}/>
        </div>
      )}
    </>
  )
}

export default Cart