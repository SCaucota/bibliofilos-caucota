import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import './item.css'

const Item = ({product}) => {

  const formattedPrice = product.price.toLocaleString('es-ES', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

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
        <Typography>${formattedPrice}</Typography>
      </CardContent>
      <CardActions>
        <Link className='btn' to={`/item/${product.id}`}>Ver Detalle</Link>
      </CardActions>
    </Card>
  )
}

export default Item