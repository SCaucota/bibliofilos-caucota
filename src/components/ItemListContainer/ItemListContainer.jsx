import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import {db} from '../../services/config';
import { getDocs, collection, query, getDoc } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    setLoading(true);

    const allProducts = query(collection(db, 'products'));

    getDocs(allProducts)
      .then(response => {
        let fetchedProducts = (response.docs.map(doc => ({id: doc.id, ...doc.data()})));

        if(id) {
          fetchedProducts = fetchedProducts.filter(product => product.category === id)
        }

        setProducts(fetchedProducts)
      })
      .catch(error => console.error("Error obteniendo productos:", error))
      .finally(() => setLoading(false))

  }, [id])

  return (
    <>
      {
        loading ? <Spinner/> : <ItemList products={products}/>
      }
    </>
  )
}

export default ItemListContainer