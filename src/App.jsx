import All_Images from "./Components/Cart/all_images";
import CartProduct from "./Components/Cart/Cart-products";
import './index.css';
import { Routes, Route} from "react-router-dom";

function App(){
  return(
    <>
      <div className=" p-10 xl:px-24 ">
         <Routes>
            <Route path="" element={ <CartProduct />}/>
            <Route path="/product/:id" element={<All_Images/>} />
          </Routes>
      </div>
    </>
  )
}
export default App;
