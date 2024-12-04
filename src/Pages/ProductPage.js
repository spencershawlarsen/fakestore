import '../App.css';
import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';

export default function ProductPage() {

    let params = useParams();
    const [product, setProduct] = useState({});
    
    const { cartItems, setCartItems } = useContext(CartContext);
    const addToCart = () => {
        setCartItems(cartItems.concat(product));
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + params.id)
        .then(res => res.json())
        .then(json => setProduct(json))
        .catch(error => console.error(error));
    }, []);

  return (
    <>
    <div class="w-full flex justify-center mx-auto">
        <div class="flex flex-wrap mx-auto justify-center">
            <div class="flex justify-center h-96 w-96 items-center border-solid border-2 border-grey-600">
                <img src={product.image} class="h-5/6 bg-opacity-100"/>
            </div>
            <div class="flex m-10 w-80">
                <div class="flex h-full flex-col items-start justify-center">
                    <p class="m-4 text-xl text-slate-600">{product.title}</p>
                    <p class="m-4 text-sm text-slate-600">{product.description}</p>
                    <button onClick={addToCart} class="m-4 text-sm text-white w-52 h-12 bg-green-400">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
