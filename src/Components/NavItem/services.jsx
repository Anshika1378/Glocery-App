import Nav from "../Nav2/Nav";
import Footer from "../Footer/Footer";

function Services(){
    return(
        <>
          <Nav />
            <div className="grid grid-cols-2 gap-4 p-10 h-screen" >
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Glocery Delivery</h2>
                    <p className="text-gray-700">Get your groceries delivered to your doorstap with our fast and real support</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Online Shopping</h2>
                    <p className="text-gray-700">Shop online from the comfort of your home and enjoy</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Grocery Delivery</li>
                        <li>Online Shopping</li>
                        <li>Customer Support</li>
                        <li>Personal Recomdation</li>
                    </ul>
                </div>
            </div>
          <Footer />
        </>
    )
}
export default Services;