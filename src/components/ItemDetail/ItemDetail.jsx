import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h2>Nombe: {product.title}</h2>
        <h3>Precio: {product.price}</h3>
        <h3>Id: {product.id}</h3>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
    </div>
  )
}

export default ItemDetail