import Footer from "../Footer/Footer";
import Nav from "../Nav2/Nav";

function Contact(){
    return(
        <>
            <Nav />
            <div className="flex flex-col items-center justify-center bg-gray-100 p-10">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg mb-2">For inquiries, please email us at:</p>
                <a href="mailto:glocery@gmail.com " className="text-blue-500 hover:underline">Glocery@gmail.com</a>
            </div>
           
            <div className="flex justify-center items-center h-20 bg-gray-1000 mt-7">
                <p className="text-gray-600">We value your feedback!</p>
            </div>
            <Footer />
        </>
    )
}
export default Contact;