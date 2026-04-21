import Image from "next/image";

const SelectedWorks = () => {
    return (
        <div className="relative h-full bg-neutral flex items-center justify-center mt-10">

            <h1 className="relative text-[4em] md:text-[10em] lg:text-[12em] w-full p-large uppercase font-extrabold text-center text-text leading-tight text-shadow-lg z-10">
                Selected <br /> works
            </h1>

            <div className="absolute inset-0 w-full h-fit grid grid-cols-3 gap-4 p-2">
                <div className="absolute inset-0 bg-black/40 w-full h-fit"/>
                <Image 
                    src="/Akaila-Souza.png"
                    alt="Akaila Souza"
                    width={600}
                    height={600}
                    className=""/>
                <Image 
                    src="/nilter.png"
                    alt="nilter"
                    width={600}
                    height={600}
                    className=""/>
                <Image 
                    src="/bunner-stumn.png"
                    alt="Bunner Stumn"
                    width={600}
                    height={600}
                    className=""/>
                <Image 
                    src="/nilter.png"
                    alt="nilter"
                    width={600}
                    height={600}
                    className=""/>
                <Image 
                    src="/bunner-stumn.png"
                    alt="Bunner Stumn"
                    width={600}
                    height={600}
                    className=""/>
                <Image 
                    src="/Akaila-Souza.png"
                    alt="Akaila Souza"
                    width={600}
                    height={600}
                    className=""/>
            </div>

            
        </div>
    );
}



export default SelectedWorks;