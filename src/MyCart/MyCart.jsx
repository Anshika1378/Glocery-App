import { useEffect, useState } from "react";
import Nav from "../Components/Nav2/Nav";

function MyCart() {
    const [myProduct, setMyProduct] = useState([]);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart-product")) || [];
        setMyProduct(cartData);
    }, []);

    const handleRemove = (indexToRemove) => {
        const updatedCart = myProduct.filter((_, index) => index !== indexToRemove);
        setMyProduct(updatedCart);
        localStorage.setItem("cart-product", JSON.stringify(updatedCart));
    };

    return (
        <>
            <Nav />
            <div className="container mx-auto p-4">
                {myProduct.length === 0 ? (
                    <h1 className="text-center text-xl font-bold">CART IS EMPTY</h1>
                ) : (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {myProduct.map((item, index) => (
                            <div key={index} className="relative border rounded p-4 shadow">
                                {/* Remove Button */}
                                <button
                                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                                    onClick={() => handleRemove(index)}
                                >
                                    Remove
                                </button>

                                {/* Product Image */}
                                <img
                                    src={item.images?.[0]}
                                    alt={item.title}
                                    className="w-full h-48 object-cover mb-2 rounded"
                                />

                                {/* Product Info */}
                                <h4 className="text-lg font-semibold">{item.brand}</h4>
                                <p className="text-gray-600">Price: ${item.price}</p>
                                <p className="text-gray-600">Rating: {item.rating}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default MyCart;
