import Footer from "../Footer/Footer";
import Nav from "../Nav2/Nav";

function Payment() {
    return (
        <>
            <Nav />
            <div className=" justify-items-center items-center h-45">
                <h1 className="text-3xl font-bold text-blue-500 items-center justify-center">Payment Page</h1>
            </div>
            <div className="grid grid-cols-2 mt-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md m-4">
                    <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
                    <p className="text-gray-700">Choose your preferred payment method to complete the purchase.</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Credit/Debit Card</li>
                        <li>PayPal</li>
                        <li>Bank Transfer</li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md m-4">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <p className="text-gray-700">Review your order details before proceeding to payment.</p>
                </div>                
            </div>
            <div className="flex justify-center items-center ">
                <p className="text-gray-500 mt-5">Thanks for your purchasing your payment proceed here!</p>    
            </div>    
        
            <Footer />
        </>
    )
}
export default Payment;