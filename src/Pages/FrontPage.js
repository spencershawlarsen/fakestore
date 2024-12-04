import '../App.css';
import React, { useState, useEffect } from 'react';
import ProductTile from '../Components/ProductTile';
import Hero from '../Components/Hero';

export default function FrontPage() {

  const [data, setData] = useState(Array(5));

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <div class="sm:w-full md:w-full lg:w-5/6 w-full mx-auto">
      <Hero />
      <div class="flex justify-center overflow-scroll mt-4">
        {data.map(item => {
          return <ProductTile product={item} key={item.id}/>;
        })}
      </div>
    </div>
    </>
  );
}
