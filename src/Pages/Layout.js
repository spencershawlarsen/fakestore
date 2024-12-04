import { Outlet, Link } from "react-router-dom";
import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';

const Layout = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <>
      <nav class="absolute top-0 right-0 m-4">
        <ul class="flex inline-block">
          <li class="m-3 text-blue-300">
            <Link to="/">Home</Link>
          </li>
          <li class="m-3 text-blue-300">
            <Link to="/productlist">Products</Link>
          </li>
          <li class="m-3 text-blue-300">
            <Link to="/cart">Cart</Link>
            {cartItems.length > 0 && 
            <span class="text-blue-600 text-xs relative bottom-2 left-1">{cartItems.length}</span>}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;