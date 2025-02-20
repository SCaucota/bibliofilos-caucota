import React, { useContext, useEffect, useState } from 'react';
import './itemListContainer.css';
import {db} from '../../services/config';
import { getDocs, collection, query, where} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { SearchContext } from '../../context/SearchContext';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const {searchTerm} = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    let productsQuery = query(collection(db, 'products'));

    if(id) {
      productsQuery = query(productsQuery, where('category', '==', id));
    }

    getDocs(productsQuery)
      .then(response => {
        let fetchedProducts = (response.docs.map(doc => ({id: doc.id, ...doc.data()})));

        if(searchTerm) {
          fetchedProducts = fetchedProducts.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

          if(fetchedProducts.length === 0) {
            navigate('/error')
          }
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