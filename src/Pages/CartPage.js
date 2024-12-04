import '../App.css';
import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';
import CartTile from '../Components/CartTile';

export default function CartPage() {

  const { cartItems } = useContext(CartContext);
  
  return (
    <>
    <div class="m-10">
      <p class="text-3xl">Your Cart</p>
      <div class="mt-5 flex flex-col">
        {cartItems.map(item => { 
            return <CartTile product={item} key={item.id}/>;
          })}
      </div>
    </div>
    </>
  );
}
