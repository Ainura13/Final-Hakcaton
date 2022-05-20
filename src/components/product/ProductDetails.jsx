import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';

const ProductDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(productDetails);

  return (
    <Paper sx={{ m: 3 }} elevation={24}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            src={productDetails.picture}
            alt=""
            style={{ maxWidth: '100%' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{productDetails.name}</Typography>
          <Typography variant="subtitle1">{productDetails.type}</Typography>
          <Typography variant="caption">{productDetails.price}</Typography>
          <Typography variant="caption">
            {productDetails.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
