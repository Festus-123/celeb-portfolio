import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const AwardsCard = ({ text, date, src, alt }: { text: string, date: string, src: string, alt: string }) => {
    return (
        <div className="relative">
            <Image 
                src={src}
                alt={alt}
                width={600}
                height={800}
                className="h-130 md:h-140 "/>

                <div className="absolute inset-0 bg-black/40" />

                <div className="flex items-start gap-5 absolute bottom-5 left-5 z-10">
                    <div className="text-4xl">
                        <FiArrowUpRight />
                    </div>
                    <div className="text-lg md:text-xl uppercase flex flex-col gap-2">
                        <h1>{text}</h1>
                        <p className="underline font-extralight text-sm">{date}</p>
                    </div>
                </div>
        </div>
    );
}

export default AwardsCard;