import React, { useContext, useEffect, useState } from 'react';
import './itemListContainer.css';
import {db} from '../../../services/config';
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore';
import ItemList from '../../common/ItemList/ItemList'
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../common/Spinner/Spinner';
import { SearchContext } from '../../../context/SearchContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('');
  const {id} = useParams();
  const {searchTerm} = useContext(SearchContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSortBy(event.target.value);
  }

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

        if(sortBy === 'highPrice') {
          productsQuery = fetchedProducts.sort((a, b) => b.price - a.price);
        } else if(sortBy === 'lowPrice') {
          productsQuery = fetchedProducts.sort((a, b) => a.price - b.price);
        }

        setProducts(fetchedProducts)
      })
      .catch(error => console.error("Error obteniendo productos:", error))
      .finally(() => setLoading(false))

  }, [id, searchTerm, sortBy])

  return (
    <>
      {
        loading ? (
          <Spinner/> 
        )
        : (
          <div>
            <div className='filterSelect'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filtrar</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortBy}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value='withoutFilter'>Sin filtro</MenuItem>
                  <MenuItem value='highPrice'>Mayor a menor precio</MenuItem>
                  <MenuItem value='lowPrice'>Menor a mayor precio</MenuItem>
                </Select>
              </FormControl>
            </div>
            <ItemList products={products}/>
          </div>
        )
      }
    </>
  )
}

export default ItemListContainer