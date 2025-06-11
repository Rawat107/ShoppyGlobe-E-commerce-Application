import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './redux/store.js';

// Lazy-loaded components
const App = lazy(() => import('./App.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const Checkout = lazy(() => import('./components/Checkout.jsx'));

// Fallback loader
const Loader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background-color)] text-[var(--text-color)]">
    <div className="w-12 h-12 border-4 border-[var(--primary-color)] border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-lg font-semibold">Loading...</p>
  </div>
);


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ProductList /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: '/not-found', element: <NotFound /> },
      { path: '*', element: <Navigate to="/not-found" replace /> } 
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
);
