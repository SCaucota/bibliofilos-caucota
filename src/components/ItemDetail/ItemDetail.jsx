import React, { useContext } from 'react';
import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import './ItemDetail.css'
import Counter from '../Counter/Counter';
import { CartContext } from '../../context/CartContext';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const ItemDetail = ({product}) => {

  const {formatPrice, openSnack, setOpenSnack} = useContext(CartContext)

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} className='star' />
        ))}
        {hasHalfStar && <StarHalf className='star' />}
        {[...Array(emptyStars)].map((_, index) => (
          <StarBorder key={`empty-${index}`} className='star' />
        ))}
      </>
    )
  }

  const handleCloseSnack = (event, reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setOpenSnack(false)
    
  }

  return (
    <div className='cardContainer'>
        <div>
          <img className='img' src={product.image} alt={product.title} />
          <div className='starsContainer'>
            {renderStars(product.rating)}
            <p>{product.rating}</p>
          </div>
        </div>
        <div className='dataContainer'>
          <h1>{product.title}</h1>
          <h2>{product.author}</h2>
          <h3>${formatPrice(product.price)}</h3>
          <p>{product.description}</p>
          <Counter stock={product.stock} prod={product} counterType={'detail'}/>
        </div>
        <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MuiAlert 
          onClose={handleCloseSnack} 
          severity="success"
          sx={{ width: '100%' }}
        >
          El libro se agregó al carrito
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default ItemDetail