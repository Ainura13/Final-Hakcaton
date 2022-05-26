import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';

export const authContext = createContext();

const API = 'https://designshop18.herokuapp.com/api/v1/';

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const register = async (user) => {
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    let formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);

    try {
      const res = await axios.post(`${API}myaccount/register/`, formData, config);
      navigate('/activation');
    } catch (e){
      console.log(e);
      setError('error occured');
    }
  };
  
  const activation = async (act) => {
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      let formData = new FormData();
      formData.append('activation_code', act);

    try{
        const res = await axios.post(
        `${API}myaccount/activation/`,
      formData,
      config
    );
    console.log(res);
    }catch (error) {
      setError('error activation');
      navigate('/login');
    }
  }

  async function login(email, password) {
    console.log(email, password);
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      let res = await axios.post(`${API}myaccount/login/`, formData, config);
      localStorage.setItem('token', JSON.stringify(res.data));
      localStorage.setItem('email', email);
      setUser(email);
      navigate('/');
    } catch (error) {
      setError('error occured');
    }
  }





  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem('token'));
    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}myaccount/refresh/`,
        {
          refresh: token.refresh,
        },
        {
          headers: { Authorization },
        }
      );

      localStorage.setItem(
        'token',
        JSON.stringify({
          refresh: token.refresh,
          access: res.data.access,
        })
      );

      let userName = localStorage.getItem('email');
      setUser(userName);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setUser('');
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        user,
        error,
        checkAuth,
        logout,
       activation,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
