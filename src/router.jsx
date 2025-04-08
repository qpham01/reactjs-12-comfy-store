import { createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from './reusable/components';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './app-specific/pages';

import { Hero, FeaturedProducts, SingleProduct } from './app-specific/sections';
// loaders
import { loader as landingLoader } from './app-specific/pages/Landing';
import { loader as singleProductLoader } from './app-specific/sections/SingleProduct';
// actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: 'about', element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

export default router;
