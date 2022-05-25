import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../contexts/CartContextProvider';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  const {id} = useParams();
  const { deleteProduct, getProductDetails } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  React.useEffect(()=>{
    getProductDetails(id)
  }, [])

  return (
    <Card sx={{ m: '1rem', maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="400"
        image={item.picture}
        alt={item.name}
      onClick={()=>navigate(`/products/${item.id}`)}
      />
      <CardContent 
      >
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: 'green', fontWeight: '700' }}
        >
          {item.price}$
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: 'green', fontWeight: '700' }}
        >
          {item.madeIn}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          onClick={() => navigate(`/products/${item.id}`)}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>

        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>

        <IconButton onClick={() => addProductToCart(item)}>
          <ShoppingCartIcon
            color={checkProductInCart(item.id) ? 'primary' : ''}
          />
        </IconButton>
        <IconButton onClick={() => addProductToCart(item)}>
          <FavoriteIcon
            color={checkProductInCart(item.id) ? 'primary' : ''}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
