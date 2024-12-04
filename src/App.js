import logo from './logo.svg';
import './App.css';
import FrontPage from './Pages/FrontPage.js';
import ProductPage from './Pages/ProductPage.js';
import ProductListPage from './Pages/ProductListPage.js';
import Layout from './Pages/Layout.js';
import CartPage from './Pages/CartPage.js';
import AboutPage from './Pages/AboutPage.js';
import PrivacyPage from './Pages/PrivacyPage.js';
import ContactPage from './Pages/ContactPage.js';

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

import { CartContext } from './Context/CartContext';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
    <head>
      <link href="./output.css" rel="stylesheet" />
    </head>
      <BrowserRouter>
        <Header/>
        <body class="flex flex-col min-h-screen m-4">
        <CartContext.Provider value={{cartItems, setCartItems}}>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<FrontPage />} />
                <Route path="productlist" element={<ProductListPage />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="privacy" element={<PrivacyPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
          </Routes>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </CartContext.Provider>
        </body>
        <Footer />
      </BrowserRouter>
    </>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);

export default App;