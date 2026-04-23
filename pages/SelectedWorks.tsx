"use client"

import Image from "next/image";
import Masonry from "react-masonry-css";

const SelectedWorks = () => {
    const images = [
        "/black-boy.png",
        "/black-chic.png",
        "/beauty-woman.png",
        "/hat-woman.png",
        "/shade-girl.png",
        "/smile.png",
        "/looking-nice.png",
        "/black-pop-boy.png",
        "/looking-nice.png",
        "/black-fine-man.png",
        "/double-damsel.png",
        "/beauty-woman.png",
        "/looking-nice.png",
        "/smile.png",
        "/double-damsel.png",
        // "/spider-man.png"
    ]

    const breakpointColumnObj = {
      default: 5,
      1100: 3,
      700: 2
    }
  return (
    <section data-theme="dark" className="bg-neutral relative mt-20">
      {/* <div className="absolute inset-0 bg-black/20 w-full h-full" /> */}
      <h1 className="absolute top-1/4 text-[3em] md:text-[7em] lg:text-[10em] w-full p-large uppercase font-extrabold text-center text-text leading-tight text-shadow-lg drop-shadow-2xl z-10">
        Selected <br /> works
      </h1>
      <Masonry
        breakpointCols={breakpointColumnObj}
        className="flex gap-4 "
        columnClassName="flex flex-col gap-4 ">
      { images.map((item, index) => (
        <Image
        key={index}
        src={item}
        alt="Selected works image"
        width={600}
        height={600}
        className=""
        />
      ))}
      </Masonry>
    </section>
  );
};

export default SelectedWorks;
