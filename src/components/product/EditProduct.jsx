import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(product);
  console.log(id);

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        value={product.name || ''}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        value={product.description || ''}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        value={product.price || ''}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
        value={product.picture || ''}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Category"
        variant="outlined"
        name="category"
        value={product.category || ''}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="MadeIn"
        variant="outlined"
        name="madeIn"

        value={product.madeIn || ''}

        onChange={handleInp}
      />
      <Button
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => {
          saveEditedProduct(product);
          navigate(-1);
        }}
      >
        EDIT PRODUCT
      </Button>
    </Box>
  );
};

export default EditProduct;
