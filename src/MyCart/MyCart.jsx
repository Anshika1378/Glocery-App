import { useEffect, useState } from "react";

function MyCart() {
    const [myProduct, setMyProduct] = useState([]);

    useEffect(() => {
        setMyProduct(JSON.parse(localStorage.getItem("cart-product")) || []);
    }, [])

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="row">
                    {myProduct.length === 0 ? (
                        <h1>CARD IS EMPTY</h1>
                    ) : (
                        myProduct.map((item, index) => (
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border p-4" key={index}>
                                <div className="card h-100">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <img src={item.images[0]} alt={item.title} />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                <h4>{item.brand}</h4>
                                           
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <p>price :${item.price}</p>
                                        <p>Rating: {item.rating}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                    }
                </div>
            </div>
        </>
    )
}
export default MyCart;