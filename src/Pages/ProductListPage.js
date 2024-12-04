import '../App.css';
import React, { useState, useEffect } from 'react';
import ProductTile from '../Components/ProductTile';

export default function ProductListPage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div class="">
        <h1 class="mx-10 text-3xl text-slate-500">Products</h1>
        <h3 class="mx-10 mt-1 mb-4 text-slate-400">Fall Season</h3>
        <div class="flex justify-center flex-wrap">
            {data.map(item => {
            return <ProductTile product={item} key={item.id}/>;
            })}
        </div>
      </div>
    </>
  );
}
