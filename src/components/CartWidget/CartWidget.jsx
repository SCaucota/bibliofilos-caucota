import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css'

const CartWidget = () => {
    return (
        <>
            <IconButton>
                    <ShoppingCartIcon style={{ fontSize: 30, color: 'white' }} />
                    <span className='badgeCart'>0</span>
            </IconButton>
        </>
    )
}

export default CartWidget