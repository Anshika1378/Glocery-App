import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyCart from "../../MyCart/MyCart";

const ROUTES = [{ name: "Home", path: "/" },
{ name: "About", path: "/about" },
{ name: "Services", path: "/services" },
{ name: "Payment", path: "/payment" },
{ name: "Contaxt", path: "/contact" }
];
function Nav({ myCart = [] }) {
    const [isMoblileMenu, setisMoblieMenu] = useState(false);

    const totalCartItems = myCart.length;
    return (
        <>
            <nav className="relative z-10 flex flex-wrap justify-between items-center ">
                <a href="#">
                    <h3 className=" px-2 py-2 text-blue-500 font-semibold h-12 hover:text-black">Konnichiwa</h3>
                </a>
                {/* burgurbutton */}
                <button onClick={() => setisMoblieMenu(!isMoblileMenu)} className="lg:hidden focus:ring-2 focus:ring-gray-200 p-2 rounded-lg hover:bg-gray-100">
                    <RxHamburgerMenu size={25} />
                </button>
                {/* Menu list */}
                <div className={`${isMoblileMenu === false && "hidden"} w-full lg:w-auto lg:block`}>
                    <ul className="lg:space-x-7 flex flex-col lg:bg-transparent lg:border-none lg:flex-row cursor-pointer bg-gray-50 text-lg border border-gray-50 rounded-lg">
                        {ROUTES.map(({ name, path }) => (
                            <li
                                key={name}
                                className="lg:hover:text-blue-500 py-2 px-3"
                            >
                                <Link to={path}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* cart button */}
                <div className="fixed left-4 bottom-4 lg:static">
                    <Link to={"/my-cart"}>
                        <div className="relative flex items-center rounded-full bg-white shadow-md lg:mr-8 p-2">
                            <TbShoppingBag size={24} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                                {totalCartItems}
                            </span>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}
export default Nav;