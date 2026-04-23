"use client"

import Masonry from "react-masonry-css";
import Image from "next/image";

const Fashion = () => {
  const images = ["/Akaila-Souza.png", "/jullian.png", "/Eun-woo.png", "/bunner-stumn.png",  "/jullian.png", "/beauty-woman.png" ];
  const breakpointColumnObj = {
    default: 3,
    1100: 2,
    700: 3,
  };
  return (
    <section
      data-theme="light"
      className="bg-neutral text-primary p-medium flex flex-col md:flex-row md:items-center justify-center gap-5 mt-20"
    >
      {/* Fashion text by photographer */}
      <div className="flex flex-col gap-10">
        <h1 className="uppercase text-[2em] md:text-[4em] font-extrabold tracking-tight leading-12">
          Fashion <br /> Photography
        </h1>
        <p className="text-black text-sm md:text-lg lg:text-xl w-full md:w-[80%]">
          Fashion is at the heart of man&apos;s appearance, as choice is at his
          hands, an aesthetic image tends to move his choice towards what feels
          right. creating a diamond from the rough helps fashion shine promoting
          appearances
        </p>
      </div>

      <div className="w-full">
        <Masonry
          breakpointCols={breakpointColumnObj}
          className="flex gap-3"
          columnClassName="flex flex-col gap-2"
        >
          {images.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="fashion images"
              width={400}
              height={800}
              className=""
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Fashion;
