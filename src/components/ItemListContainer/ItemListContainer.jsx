import React, { useEffect, useState } from 'react';
import './itemListContainer.css'
import { getProducts, getProductsCategory } from '../products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    const functionProducts = id ? getProductsCategory : getProducts

    functionProducts(id)
      .then(response => setProducts(response))
      .finally(() => setLoading(false));

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