import { createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from './reusable/components';
import {
  HomeLayout,
  Landing,
  Error,
  Cart,
  About,
  Products,
  SingleProduct,
  Register,
  Login,
  Checkout,
  Orders,
} from './app-specific/pages';

// loaders
import { loader as landingLoader } from './app-specific/pages/Landing';
import { loader as singleProductLoader } from './app-specific/pages/SingleProduct';
import { loader as productsLoader } from './app-specific/pages/Products';
// actions
import { loginAction } from './app-specific/pages/Login';
import { registerAction } from './app-specific/pages/Register';
import { store } from './store';

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
        loader: productsLoader,
      },
      {
        path: 'product/:id',
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
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

export default router;
