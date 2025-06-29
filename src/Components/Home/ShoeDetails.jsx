import image1 from "../../assets/images/product.png";
import { QTY, SIZES } from "./Constant";
import Select from "./Select";

function ShoeDetails() {
    return (
        <div className="flex flex-col lg:flex-row-reverse space-y-4 mt-2.5">
            <div className="flex-1 mt-5 lg:-mt-32 lg:ml-30">
                <div className="md:h-160 items-center justify-center flex bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4dd4c6]">
                    <img src={image1} />
                </div>
            </div>
            <div className="flex-1 space-y-6">
                <div className="text-7xl text-black md:text-8xl font-semibold">
                    All Products
                </div>
                <div className="font-medium md:text-xl">
                    {
                        "This side is showing all company product with in best offer ."
                    }
                </div>
                <div className="flex space-x-6">
                    <div className="text-3xl font-extrabold md:text-7xl">
                        100$
                    </div>
                    <Select title={"QTY"} options={QTY} />
                    <Select title={"SIZE"} options={SIZES} />
                </div>
                <div className="space-x-4">
                    <button className="h-12 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
                        Add to Bag
                    </button>
                    <a href="#" className="text-lg font-bold underline underline-offset-4">
                        View details
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ShoeDetails;