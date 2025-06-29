import { AiFillHeart } from "react-icons/ai"; 
import { FaPlus } from "react-icons/fa"; 
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";

function CartProduct() {

    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products")
                setProducts(response.data.products)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        };
        fetchProducts();
    }, []);

    if(!products){
        return<div>Loading....</div>
    }
    return (
        <>
           <Navbar />
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-gray-400">
                {products.map((product) => (
                    <div key={product.id} className="items border relative block p-4 rounded">
                        <div className="card hover:bg-gray-200">
                            <p className=" flex text-blue-400 text-xl">{product.discountPercentage}%</p>
                            <button className="absolute mr-2 p-2 cursor-pointer text-red-500 bottom-70 right-0 hover:text-red-800"><AiFillHeart/></button>
                            <Link to={`/product/ ${product.id}`}>
                            <img src={[product.thumbnail]} alt={product.title} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p>${product.price}</p>
                            <button className="absolute bottom-3 mr-2  p-2 right-0 mt-1 hover:bg-blue-600 rounded-full text-blue-500 hover:text-white"><FaPlus /></button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default CartProduct;