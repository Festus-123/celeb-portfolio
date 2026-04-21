import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const Portfolio = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Huge portfolio text */}
            <h1 className="col-span-1 md:col-span-2 font-extrabold text-primary text-[5em] md:text-[10em] lg:text-[15em] text-center tracking-tighter w-full ">
                PORTFOLIO
            </h1>

            {/* Portfolio image to showcase artist */}
            <div>
                <Image 
                    src="/portfolio-img.png"
                    alt="portfolio image"
                    width={640}
                    height={600}
                    className=" hidden md:block w-200 h-140 max-h-140 object-center object-cover"/>
            </div>

            {/* Profile summary section */}
            <div className="">
                <p className="text-xl md:text-2xl text-primary p-4">
                    Hi there, I am a photographer. A hunter with vision for cinematic an aesthetic view capturing the moments at glance and making diamonds from the roughs
                </p>

                {/* Check out page section showcasing name and guide to bio with image */}
                <div className="flex items-center justify-between mt-10">
                    <div className="flex items-center w-[30%] z-10">
                        <div className="text-primary text-4xl md:text-6xl scale-y-[-1] p-2 hover:scale-y-[1] transition duration-500 cursor-pointer">
                            <FiArrowUpRight />
                        </div>
                        <h1 className="text-primary text-xl md:text-4xl font-extrabold uppercase md:leading-8">
                            Mira <br /> Styles
                        </h1>
                    </div>

                    <Image 
                        src="/flower-view.png"
                        alt="flower image"
                        width={400}
                        height={400}
                        className="md:w-[60%] h-60"/>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;