import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContextProvider';
import { ADMIN } from '../helpers/consts';
import AboutUsPage from '../pages/AboutUsPage';
import ActivationPage from '../pages/ActivationPage';
import AdminPage from '../pages/AdminPage';
import CartPage from '../pages/CartPage';
import ContactUsPage from '../pages/ContactUsPage';
import EditProductPage from '../pages/EditProductPage';
import FavouritPage from '../pages/FavouritPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PaymentPage from '../pages/PaymentPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductsPage from '../pages/ProductsPage';
import RegistrationPage from '../pages/RegistrationPage';

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <HomePage />,
      id: 1,
    },
    {
      link: '/activation',
      element: <ActivationPage />,
      id: 2,
    },
    {
      link: '/about',
      element: <AboutUsPage />,
      id: 3,
    },
    {
      link: '/products',
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: '/products/:id',
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: '/cart',
      element: <CartPage />,
      id: 6,
    },
    {
      link: '/contacts',
      element: <ContactUsPage />,
      id: 7,
    },
    {
      link: '*',
      element: <NotFoundPage />,
      id: 8,
    },
    {
      link: '/admin',
      element: <AdminPage />,
      id: 9,
    },
    {
      link: '/edit/:id',
      element: <EditProductPage />,
      id: 10,
    },
    {
      link: '/favourit',
      element: <FavouritPage />,
      id: 11,
    },
    {
      link: '/login',
      element: <LoginPage />,
      id: 12,
    },
    {
      link: '/register',
      element: <RegistrationPage />,
      id: 13,
    },
    {
      link: '/payment',
      element: <PaymentPage />,
      id: 14,
    }

  ];

const PRIVATE_ROUTES = [
  {
    link: '/admin',
    element: <AdminPage />,
    id: 1,
  },
  {
    link: '/edit/:id',
    element: <EditProductPage />,
    id: 2,
  },
];

  return (
    <>
      <Routes>
      {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
