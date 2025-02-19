import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Counter from '../Counter/Counter'
import Button from '../Button/Button'

const Cart = () => {

  const {cart, total, deleteProduct, emptyCart} = useContext(CartContext)

  return (
    <>
      {cart.length !== 0 ? (
        <>
          <h1>Carrito de compras</h1>
          {cart.map(product => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <h5>{product.title}</h5>
                <Counter stock={product.stock} prod={product} counterType={'cart'} />
                <p>C/u ${product.price}</p>
                <h3>${product.price * product.quantity}</h3>
                <Button btnText={'Eliminar'} action={() => {deleteProduct(product.id)}} />
              </div>
            </div>
          ))}
          <h4>Total: ${total}</h4>
          <Button btnText={'Vaciar Carrito'} action={() => {emptyCart()}} />
          <Button btnText={'Finalizar Compra'} action={() => {}} />
        </>
      ) : (
        <div>
          <h3>Tu carrito está vacío</h3>
          <Button btnText={'Volver al inicio'} route={'/'}/>
        </div>
      )}
    </>
  )
}

export default Cart