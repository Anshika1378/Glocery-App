import All_Images from "./Components/Cart/all_images";
import CartProduct from "./Components/Cart/Cart-products";
import './index.css';
import { Routes, Route} from "react-router-dom";
import MyCart from "./MyCart/MyCart";
import { useEffect, useState } from "react";

function App(){

   const [myCart, setMyCart] = useState([]);
  useEffect(() =>{
    const existingData = JSON.parse(localStorage.getItem('cart-product'))
    setMyCart(existingData);
  },[])
  console.log(myCart);
  return(
    <>
      <div className=" p-10 xl:px-24 ">
         <Routes>
            <Route path="" element={ <CartProduct />}/>
            <Route path="/product/:id" element={<All_Images/>} />
            <Route path='my-cart/' element={<MyCart/>}/>
          </Routes>
      </div>
    </>
  )
}
export default App;
