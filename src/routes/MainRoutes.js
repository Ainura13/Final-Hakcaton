import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage';
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import ContactUsPage from '../pages/ContactUsPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import PaymentPage from '../pages/PaymentPage';
import ProductsPage from '../pages/ProductsPage';
import EditProductPage from '../pages/EditProductPage';
import ProductDetailesPage from '../pages/ProductDetailesPage';


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <HomePage />,
      id: 1,
    },
    {
      link: '/auth',
      element: <AuthPage />,
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
      element: <ProductDetailesPage />,
      id: 5,
    },
    {
      link: '/contacts',
      element: <ContactUsPage />,
      id: 6,
    },
    {
      link: '/payment',
      element: <PaymentPage />,
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
  ];

  return (
    <>
      <Routes>
      {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
