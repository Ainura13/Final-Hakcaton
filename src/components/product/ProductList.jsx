import { BottomNavigation, Grid, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, getProducts, page, setPage, count} = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

    // console.log(products.results);

  useEffect(() => {
    getProducts();
  }, [page, searchParams]);

  
  // const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  // const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    console.log(p);
    setPage(p);
  };
  // pagination

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <>
      <Grid item md={9}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: '40vh',
            mb: '3.5vh',
          }}
        >
          {products ? (
            (products.results || products).map((item) => {
              return <Box sx={{margin: '15px'}}>
              <ProductCard item={item} key={item.id} />
              </Box>
        })
          ) : (
            <h2>Loading...</h2>
          )}
        </Box>

        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
        />
      </Grid>
    </>
  );
};

export default ProductList;
