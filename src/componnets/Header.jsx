import React, { useEffect,useState }from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  
import FavoriteIcon from '@mui/icons-material/Favorite';
import Search from './Search'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useShoppingCart } from 'use-shopping-cart';
import Menu  from '../Menu';

function Header() {
  
     
  
    
  const {cartCount}=useShoppingCart();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const isListClientPath = window.location.pathname !== '/ListArticles';
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <div className="custom-container">
            <Typography variant="h5" color="inherit" noWrap>
              <Link to="/" aria-current="page" style={{ color: "inherit" }}>MedExpress</Link>
              
            </Typography>
            
        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
        <Link className="nav-link "  to="/Cart" style={{ marginRight: '20px' }}>
        {isListClientPath && (
            <div style={{ display: "inline-block", color: "black" }}>
              {cartCount}
            </div>
          )}
        <ShoppingCartIcon/>
        </Link>
        
            <Link className="nav-link " to="/Favorite"  style={{ marginRight: '20px' }}    ><FavoriteIcon /></Link>
            <Search />
            <Menu className="nav-link "  style={{ marginRight: '20px' }}/>
            </div>
            
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
