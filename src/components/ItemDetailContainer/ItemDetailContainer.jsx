import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        getSingleProduct(id)
            .then(response => setProduct(response))
    }, [id])

  return (
    <div>
        {product ? <ItemDetail product={product} /> 
        : <Spinner/>}
    </div>
  )
}

export default ItemDetailContainer