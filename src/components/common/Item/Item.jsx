import React, { useContext } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import './item.css';
import Button from '../Button/Button';
import { CartContext } from '../../../context/CartContext';

const Item = ({product}) => {

  const {formatPrice} = useContext(CartContext)

  return (
    <Card className='card' sx={{ width: 345 }}>
      <CardMedia
        sx={{height: 300, width: 200}}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography>${formatPrice(product.price)}</Typography>
      </CardContent>
      <Button btnText={'Ver Detalle'} route={`/item/${product.id}`}/>
    </Card>
  )
}

export default Item