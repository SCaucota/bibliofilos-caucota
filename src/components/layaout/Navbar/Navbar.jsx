import React, { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CartWidget from '../../common/CartWidget/CartWidget.jsx';
import {Link, NavLink} from 'react-router-dom';
import './navbar.css';
import Search from '../../common/Search/Search.jsx';
import { SearchContext } from '../../../context/SearchContext.jsx';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../services/config.js';

const Navbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesQuery = query(collection(db, 'categories'));

        getDocs(categoriesQuery)
            .then(response => {
                let fetchedCategories = (response.docs.map(doc => ({id: doc.id, ...doc.data()})));
                setCategories(fetchedCategories)
            })
            .catch(error => console.error('Error obteniendo categorías: ', error));
    }, [])

    const {handleEmptySearch} = useContext(SearchContext);

    return (
        <>
            <Toolbar className='navbar' disableGutters>
                <img className='logo' src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1734960748/BIBLIOMANIACS_rno8ve.png" alt='logo'/>
                <Link onClick={handleEmptySearch} className='link' to={'/'}>
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
                    {categories.map((category) => (
                        <NavLink onClick={handleEmptySearch} className='link' key={category?.id} to={`/categories/${category.key?.toLowerCase()}`}>
                            <Button
                                key={category.key}
                                sx={{ my: 3, color: 'white', display: 'block' }}
                            >
                                {category.key}
                            </Button>
                        </NavLink>
                    ))}
                </Box>
                <Search/>
                <CartWidget />
            </Toolbar>          
        </>
    )
}

export default Navbar