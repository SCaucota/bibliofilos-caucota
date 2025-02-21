import React, { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CartWidget from '../../common/CartWidget/CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import Search from '../../common/Search/Search.jsx';
import { SearchContext } from '../../../context/SearchContext.jsx';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../services/config.js';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const categoriesQuery = query(collection(db, 'categories'));

        getDocs(categoriesQuery)
            .then(response => {
                let fetchedCategories = response.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCategories(fetchedCategories);
            })
            .catch(error => console.error('Error obteniendo categorías: ', error));
    }, []);

    const { handleEmptySearch } = useContext(SearchContext);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className='navbarContainer'>
            <Toolbar className="navbar" disableGutters>
                <Link to={'/'}>
                    <img
                        className="logo"
                        src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1734960748/BIBLIOMANIACS_rno8ve.png"
                        alt="logo"
                    />
                </Link>
                <Link onClick={handleEmptySearch} className="link brandLink" to={'/'}>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            display: { xs: 'none', md: 'none', lg: 'flex' },
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

                <Box className="navbarOptions" sx={{ flexGrow: 1 }}>
                    {categories.map((category) => (
                        <NavLink onClick={handleEmptySearch} className="link" key={category?.id} to={`/categories/${category.key?.toLowerCase()}`}>
                            <Button sx={{ my: 3, color: 'white', display: 'block' }}>
                                {category.key}
                            </Button>
                        </NavLink>
                    ))}
                </Box>

                <Box className='serachCartIconContainer' sx={{display: {xs: 'none', lg: 'flex'}}}>
                    <Search />
                    <CartWidget />
                </Box>

                <IconButton
                    className='burguerIcon'
                    edge="end"
                    aria-label="menu"
                    sx={{ color: 'white', display: {lg: 'none'}}}
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
            >
                <Box sx={{ width: 250, padding: 2 }}>
                    {categories.map((category) => (
                        <NavLink
                            onClick={() => {
                                handleEmptySearch();
                                toggleDrawer();
                            }}
                            className="link"
                            key={category?.id}
                            to={`/categories/${category.key?.toLowerCase()}`}
                        >
                            <Button sx={{ width: '100%', textAlign: 'left' }}>
                                {category.key}
                            </Button>
                        </NavLink>
                    ))}
                    <Search drawer='drawer'/>
                    <div className='drawerMoodCart'>
                        <CartWidget drawer='drawer'/>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
};

export default Navbar;
