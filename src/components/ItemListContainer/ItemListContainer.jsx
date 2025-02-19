import React, { useContext, useEffect, useState } from 'react';
import './itemListContainer.css';
import {db} from '../../services/config';
import { getDocs, collection, query, getDoc } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { SearchContext } from '../../context/SearchContext';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const {searchTerm} = useContext(SearchContext);

  useEffect(() => {
    setLoading(true);

    const allProducts = query(collection(db, 'products'));

    getDocs(allProducts)
      .then(response => {
        let fetchedProducts = (response.docs.map(doc => ({id: doc.id, ...doc.data()})));

        if(id) {
          fetchedProducts = fetchedProducts.filter(product => product.category === id)
        }

        if(searchTerm) {
          fetchedProducts = fetchedProducts.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        setProducts(fetchedProducts)
      })
      .catch(error => console.error("Error obteniendo productos:", error))
      .finally(() => setLoading(false))

  }, [id, searchTerm])

  return (
    <>
      {
        loading ? <Spinner/> : <ItemList products={products}/>
      }
    </>
  )
}

export default ItemListContainer