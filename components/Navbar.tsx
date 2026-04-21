import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="sticky top-0 w-full flex items-center justify-center text-primary bg-transparent p-medium z-50">
            {/* container for max size */}
            <div className="flex items-center justify-between w-full max-w-12xl">
            {/* Logo section for the project */}
            <div className="font-bold text-xl md:text-2xl ">
                <h1>DeMInT</h1>
            </div>

            {/* Scroll back to top */}
            <div className="hidden md:block text-xl">
                <a href="#top">Go Up</a>
            </div>

            {/* call to action icon */}
            <div className="text-2xl md:text-4xl">
                <FiArrowUpRight />
            </div>
            </div>
        </div>
    );
}

export default Navbar;