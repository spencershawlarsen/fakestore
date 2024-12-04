import '../App.css';
import { Outlet, Link } from "react-router-dom";
import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';

export default function CartTile({product}) {

    const { cartItems, setCartItems } = useContext(CartContext);
    const removeFromCart = () => {
        let removed = false;
        for(let i=0; i<cartItems.length; i++){
            if(!removed){
                if(cartItems[i].id === product.id){      
                    var copy = cartItems.slice();
                    copy.splice(i, 1);  
                    setCartItems(copy);
                    removed = true;
                }
            }
        }
    }

  return (
    <>
        <div class="flex flex-wrap mx-auto md:justify-center">
        <Link to={"/product/" + product.id}>
            <div class="flex justify-center items-center w-40 h-40 justify-center border-solid border-2 border-grey-600 rounded-md">
                <img src={product.image} class="h-5/6"/>
            </div>
        </Link>
            <div class="flex ml-4 mb-10 w-80">
                <div class="flex h-full flex-col items-start justify-center">
                    <p class="text-s text-slate-600">{product.title}</p>
                    <p class="mt-2 text-xs text-slate-600">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <button onClick={removeFromCart} class="mt-3 text-sm text-white w-36 h-10 bg-green-400">Remove</button>
                 </div>
            </div>
        </div>
    </>
  );
}
