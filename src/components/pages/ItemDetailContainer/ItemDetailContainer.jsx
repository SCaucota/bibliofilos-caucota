import React, { useEffect, useState } from 'react'
import ItemDetail from '../../common/ItemDetail/ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../common/Spinner/Spinner'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../../services/config'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const {id} = useParams();
    const navigation = useNavigate();

    useEffect(() => {
      setLoading(true);

      const allProducts = query(collection(db, 'products'))

      getDocs(allProducts)
        .then(response => {
          let fetchedProducts = (response.docs.map(doc => ({id: doc.id, ...doc.data()})));

          if(id) {
            let productSelected = fetchedProducts.find(item => item.id === id);

            productSelected ? setProduct(productSelected) : navigation('/error')
          }
        })
    }, [id])

  return (
    <div>
        { product ? 
          <ItemDetail product={product} /> 
          : <Spinner/>
        }
    </div>
  )
}

export default ItemDetailContainer