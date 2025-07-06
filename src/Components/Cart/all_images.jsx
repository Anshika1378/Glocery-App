import { AiFillStar } from "react-icons/ai"; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../Nav2/Nav";

function All_Images() {

  const { id } = useParams();
  const userId = parseInt(id);

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleCart = () => {
    const existingProduct = JSON.parse(localStorage.getItem("cart-product")) || [];

    const index = existingProduct.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      existingProduct[index].quantity += 1;
      alert("Cart Updated");
    } else {
      existingProduct.push({ ...product, quantity: 1 });
      alert("New Cart Item Added");
    }

    localStorage.setItem("cart-product", JSON.stringify(existingProduct));
    setMyCart(existingProduct);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${userId}`)
        setProduct(response.data)
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    };
    fetchProducts();
  }, [userId])


  if (isLoading) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-2 mt-5">
            <div className="spinner-border text-primary" role="status"></div>
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="container mt-6">
        <h1 className=" text-5xl text-gray-700  font-semibold  font-serif">{product.brand}</h1>
        {/* Star Ratings */}
        <div className="flex  mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500"><AiFillStar /></span>
          ))}
        </div>
        <span className="me-2 mb-4 text-2xl font-bold text-blue-600 hover:text-blue-800">${product.price}</span>
        {/* ✅ Check if images array exists before accessing */}
        {product.images && product.images.length > 0 && (
          <img src={product.images[0]} alt={product.title} className="mx-auto mt-4 max-w-md lg:content-center md:content-center sm:content-center" />
        )}
        <button onClick={handleCart} className="bg-gray-300 hover:bg-blue-500 text-black hover:text-white px-1 py-1 rounded me-1 border-blue-500">Add to Cart</button>
        <button className="bg-blue-600 text-white hover:bg-blue-900 rounded px-1 py-1">Buy Now</button>
        <p className="mt-2"><b>Details: </b>{product.description}</p>
        <h1 className="mt-2 text-xl ">{product.title}</h1>
      </div>
    </>
  )
}
export default All_Images;