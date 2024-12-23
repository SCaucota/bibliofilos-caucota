import React from 'react';
import './itemListContainer.css'

const ItemListContainer = ({userName, businessName}) => {
  return (
    <>
        <h1>Bienvenido/a, {userName} a</h1>
        <h2 className='businessName'>{businessName}</h2>
        <h3>Tu librería online de confianza</h3>
    </>
  )
}

export default ItemListContainer