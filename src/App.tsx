import React from 'react';
import Header from './Components/header/header'
import Home from './Telas/Home/home'
import { Area } from './styled'
import Cart from './Telas/Carrinho/CarrinhoItem/cart'

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
]);

const App = () => {

  return (
    <Area>
      <Header />
      <RouterProvider router={router} />
    </Area>
  );
}

export default App;
