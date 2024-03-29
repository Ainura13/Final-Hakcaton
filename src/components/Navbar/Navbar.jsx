import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge } from '@mui/material';
import { getCountProductsInCart } from '../../helpers/functions';
import { useCart } from '../../contexts/CartContextProvider';

const pages = [
  { name: 'ABOUT US', link: '/about', id: 1 },
  { name: 'CONTACT US', link: '/contacts', id: 2 },
  { name: 'STORE', link: '/products', id: 3 },
  { name: 'ADMIN', link: '/admin', id: 4 },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const { user, checkAuth, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { addProductToCart } = useCart();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  return (
    <Box
      sx={{
        background: '#F5F3EE;',
        flexWrap: { xs: 'wrap', sm: 'wrap' },
        width: '100%',
      }}
    >
      <AppBar position="static" elevation={3}>
        <Container maxWidth="xl" sx={{ background: '#eeb956' }}>
          <Toolbar disableGutters>
            <Link to="/" mr={4}>
              <img
                src="https://cassandralavalle.com/wp-content/uploads/2021/10/site-logo.svg"
                alt="123"
                width={250}
                height={100}
              />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                  color: 'black',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Box>
                  {pages.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <Link to={page.link}>
                        <Typography
                          sx={{
                            ml: 'auto',
                            my: 1,
                            olor: 'black',
                            display: 'block',
                          }}
                        >
                          {page.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Box>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            ></Typography>
            <Box
              sx={{
                justifyContent: 'center',
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >


        
          <Link to="/cart">


              <Button sx={{ my: 2, color: 'black' }}>
                <Badge
                  badgeContent={count}
                  color="primary"
                  sx={{ mr: '10px', mt: '5px' }}
                >
                  <ShoppingCartIcon sx={{ fontSize: '30px' }} />
                </Badge>
              </Button>
            </Link>

            {user ? (
              <Button
                color="inherit"
                sx={{ color: 'white' }}
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <NavLink to="/login">
                  <Button color="inherit" sx={{ color: 'white' }}>
                    Login
                  </Button>
                </NavLink>

                <NavLink to="/register">
                  <Button color="inherit" sx={{ color: 'white' }}>
                    Register
                  </Button>
                </NavLink>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;