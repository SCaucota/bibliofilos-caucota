import React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget.jsx';
import {Link, NavLink} from 'react-router-dom';
import './navbar.css';

const pages = ['Romance', 'Terror', 'Ciencia Ficcion', 'Fantasia', 'Misterio', 'Distopia', 'Clasico'];

const Navbar = () => {
    return (
        <>
            <Toolbar className='navbar' disableGutters>
                <img className='logo' src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1734960748/BIBLIOMANIACS_rno8ve.png" alt='logo'/>
                <Link className='link' to={'/'}>
                    <Typography
                        variant="h6"
                        noWrap
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
                </Link>
                    
                <Box className="navbarOptions" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <NavLink className='link' key={page} to={`/category/${page.toLowerCase()}`}>
                            <Button
                                key={page}
                                sx={{ my: 3, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        </NavLink>
                    ))}
                </Box>
                <CartWidget />
            </Toolbar>          
        </>
    )
}

export default Navbar