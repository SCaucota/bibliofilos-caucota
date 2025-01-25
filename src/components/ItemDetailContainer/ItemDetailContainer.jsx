import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        getSingleProduct(id)
            .then(response => setProduct(response))
    }, [id])

  return (
    <div>
        {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
    </div>
  )
}

export default ItemDetailContainer