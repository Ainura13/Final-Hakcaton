import { Box, Button, FormControl, Input, InputLabel, Menu, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';

const AddProduct = () => {
  const { addProduct, getProducts, categorys,getCategory  } = useProducts();
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
}, []);

useEffect(() => {
  getCategory();
}, []);

console.log(categorys);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    madeIn: '',
  });

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };


  const handleInpFile = (e) => {
    let file = e.target.files[0];
    setProduct({...product, image: file})
}

  return (
    <Box
    className='bgImage' sx={{
    height: '70vh' ,
backgroundImage: `url("https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"), linear-gradient(#fff,#0000)`,
    position: 'relative', 
    color: 'white',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundAttachment: 'fixed',
    opacity: '0.8'}}>

    <Box sx={{ width: '50vw', margin: '10vh auto' }}>
    <Typography
      variant='h4' 
      align='center' 
      color='textPrimary' 
      gutterBottom
      >
        Admin Page
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <Box sx={{ minWidth: 120 }}>
      <Input
                type='file'
                onChange={handleInpFile}
                sx={{mb: 2}}
                />
      </Box>
      {/* {categorys ? (
            categorys.map((item) => (
              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          label="Age"
          onChange={handleInp}
        >
          <MenuItem value={item}>{item}</MenuItem>
        </Select>
            ))
          ) : (
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categorys}
          label="Age"
          onChange={handleInp}
        >
          <MenuItem value={categorys}>No categorys</MenuItem>
        </Select>
          )} */}
     <Box sx={{ minWidth: 120, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Age"
          onChange={handleInp}
        >
          {categorys ? (
            categorys.map((item) => (
              <MenuItem value={item.name}>{item.name}</MenuItem>
            ))
          ) : (
            <MenuItem value={null}>No category</MenuItem>
          )}
          
        </Select>
        </FormControl>
        </Box>
        
      <TextField
        fullWidth
        id="outlined-basic"
        label="Made_in"
        variant="outlined"
        name="made_in"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <Button
        variant="outlined"
        fullWidth
        size="large"
        color='success'
        sx={{mb: 2}}
        onClick={() => {
          addProduct(product);
          navigate('/products');
        }}
      >
        CREATE PRODUCT
      </Button>
    </Box>
    </Box>
  );
};

export default AddProduct;
