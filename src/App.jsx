import All_Images from "./Components/Cart/all_images";
import CartProduct from "./Components/Cart/Cart-products";
import MyCart from "./MyCart/MyCart";
import './index.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./Components/NavItem/About";
import Services from "./Components/NavItem/services";
import Payment from "./Components/NavItem/payment";
import Contact from "./Components/NavItem/Contact";


function App() {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('cart-product')) || [];
    setMyCart(existingData);
  }, []);

  return (
    <>
      <div className="p-10 xl:px-24">
        <Routes>
          <Route path="" element={<CartProduct myCart={myCart} setMyCart={setMyCart} />} />
          <Route path="/product/:id" element={<All_Images myCart={myCart} setMyCart={setMyCart} />} />
          <Route path="/my-cart" element={<MyCart myCart={myCart} setMyCart={setMyCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
