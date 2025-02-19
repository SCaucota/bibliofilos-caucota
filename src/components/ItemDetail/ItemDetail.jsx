import React from 'react';
import { Star, StarHalf } from '@mui/icons-material';
import './ItemDetail.css'
import Counter from '../Counter/Counter';

const ItemDetail = ({product}) => {

  const formattedPrice = product.price.toLocaleString('es-ES', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

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
          <h3>${formattedPrice}</h3>
          <p>{product.description}</p>
          <Counter stock={product.stock} prod={product} counterType={'detail'}/>
        </div>
    </div>
  )
}

export default ItemDetail