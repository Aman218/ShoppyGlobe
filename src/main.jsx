import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Body from './component/Body.jsx';
import ProductList from './component/ProductList.jsx';
import ProductDetails from './component/ProductDetails.jsx';
import NotFound from './component/NotFound.jsx';
import appStore from './utils/appStore.js';
import {Provider} from 'react-redux';
// import Cart from './component/cart.jsx';
import { lazy ,Suspense } from 'react';

const Cart=lazy(()=>import('./component/cart.jsx'));

     const approuter=createBrowserRouter([
      {
        path:'/',
        element:<App/>,
        children:[
          {
            path:'/',
            element:<Body/>
          },
          {
            path:'/products',
            element:<ProductList/>
          },
          {
            path:'/product/:id',
            element:<ProductDetails/>
          },
          {
            path:'/cartDetails',
            element:(<Suspense fallback={<div>Loading......</div>}>
              <Cart/>
            </Suspense>)
          }
        ]
      },
      {
        path:'*',
        element:<NotFound/>
      }
     ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={approuter}/>
    </Provider>
  </StrictMode>,
)
