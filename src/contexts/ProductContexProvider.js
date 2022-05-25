import { SettingsCellOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { createContext, useContext, useReducer, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACTIONS, API } from '../helpers/consts';

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
  categorys: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case ACTIONS.GET_CATEGORY:
      return { ...state, categorys: action.payload };
    default:
      return state;
  }
};

const ProductContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const getProducts = async () => {
    const { data } = await axios(`${API}products/`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data.results,
    });
    // console.log(data);
    // console.log(data.results)
  };

  const getCategory = async () => {
    const { data } = await axios(`${API}category/`);
    console.log(data);
    dispatch({
      type: ACTIONS.GET_CATEGORY,
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    let token = JSON.parse(localStorage.getItem('token'));
    const Authorization = `Bearer ${token.access}`;

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token.access}`,
      },
    };
    console.log(config);
    let newProducts = new FormData();
    newProducts.append('category', newProducts.category);
    newProducts.append('name', newProducts.name);
    newProducts.append('price', newProducts.price);
    newProducts.append('description', newProducts.description);
    newProducts.append('made_in', newProducts.made_in);
    newProducts.append('image', newProducts.image);

    await axios.post(`${API}products/`, newProduct, config);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}products/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data.results,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    let newEditProducts = new FormData();
    newEditProducts.append('category', newProduct.category);
    newEditProducts.append('name', newProduct.name);
    newEditProducts.append('price', newProduct.price);
    newEditProducts.append('description', newProduct.description);
    newEditProducts.append('made_in', newProduct.madeIn);
    newEditProducts.append('image', newProduct.image);
    newEditProducts.append('id', newProduct.id);
    let id = newEditProducts.get('id');

    await axios.patch(`${API}products/${id}`, newEditProducts, config);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}products/${id}`);
    getProducts();
  };

  //filter
  const fetchByParams = async (query, value) => {
    if (value === 'all') {
      getProducts();
    } else {
      const { data } = await axios(`${API}filter/?${query}=${value}`);

      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    }
  };

  const searchFilter = async (value) => {
    const { data } = await axios(`${API}search/?q=${value}`);

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  // const toogleLike = async (id) => {
  //   let token = JSON.parse(localStorage.getItem('token'));
  //   const Authorization = `Bearer ${token.access}`;

  //   const config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Authorization: `Bearer ${token.access}`,
  //     },
  //   };

  //   await axios(`${JSON_API_PRODUCTS}${id}/toggle_like/`, config);
  //   getProducts();
  // };

  const values = {
    products: state.products,
    productDetails: state.productDetails,
    categorys: state.categorys,

    addProduct,
    getProducts,
    getProductDetails,
    deleteProduct,
    saveEditedProduct,
    fetchByParams,
    searchFilter,
    getCategory,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContexProvider;
