import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const {quantityTotal} = useContext(CartContext);

    return (
        <>
            <Link to={'/cart'}>
                <IconButton>
                        <ShoppingCartIcon style={{ fontSize: 30, color: 'white' }} />
                        <span className='badgeCart'>{quantityTotal}</span>
                </IconButton>
            </Link>
        </>
    )
}

export default CartWidget