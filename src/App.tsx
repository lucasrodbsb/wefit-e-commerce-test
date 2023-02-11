import React from 'react';
import Header from './Components/header/header'
import Home from './screens/Home/home'
import { Area } from './styled'
import Cart from './screens/Cart/CartItems/cart'
import Aproved from './screens/AcceptedBuy/aproved'

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/aproved",
    element: <Aproved />,
  },
]);

const App = () => {

  return (
    <Area>
      <RouterProvider router={router} />
    </Area>
  );
}

export default App;
