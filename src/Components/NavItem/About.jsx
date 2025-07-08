import Footer from "../Footer/Footer";
import Nav from "../Nav2/Nav";

function About() {
    return (
        <>
            <Nav />
            <div className=" items-center justify-center h-screen justify-items-center">
                <h1 className="text-3xl font-serif text-purple-600 hover:text-blue-300">Big Market</h1>
                <p className="text-lg text-gray-500 ">Your one-stop shop for all your grocery needs. We offer a wide selection of products at great prices.</p>
                <p className="mt-4 text-md text-gray-700">
                    At Big Market, we are committed to providing fresh products and excellent customer service. Explore our categories and enjoy a seamless shopping experience!
                </p>
            </div>
            <Footer />
        </>
    )
}
export default About;