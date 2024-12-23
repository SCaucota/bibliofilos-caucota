import React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CartWidget from '../Cart/CartWidget.jsx';
import './navbar.css';

const pages = ['Inicio', 'Categorías', 'Contacto', 'Sobre Nosotros'];

const Navbar = () => {
    return (
        <>
            <Toolbar className='navbar' disableGutters>
                <img className='logo' src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1734960748/BIBLIOMANIACS_rno8ve.png" alt='logo'/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    BIBLIOFILOS
                </Typography>
                <Box className="navbarOptions" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 3, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <CartWidget />
            </Toolbar>          
        </>
    )
}

export default Navbar