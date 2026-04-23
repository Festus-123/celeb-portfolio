import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const About = () => {
    const items = [
        {large: 34, small: "Projects"},
        {large: 60, small: "Portraits"},
        {large: 104, small: "Landscape"},
        {large: 13, small: "Events"},
    ]
  return (
    <section data-theme="dark" className="bg-primary text-text mt-40">
      {/* Anout me text huge with arrow to resume */}
      <div className="flex items-end gap-20 justify-center p-medium">
        <h1 className="uppercase text-[4em] md:text-[7em] lg:text-[10em] font-extrabold">
          About Me
        </h1>
        <div className="text-6xl scale-y-[-1]">
          <FiArrowUpRight />
        </div>
      </div>

      {/*Image of photgrapher and description */}
      <div className="flex flex-col md:flex-row justify-center mt-20">
        {/* text section */}
        <div className="flex flex-col gap-10 items-center w-full md:w-[50%]">
          <p className="text-lg md:text-xl font-light w-full md:w-[80%]">
            I am DeMInT a skilled Photographer with an eye for capturing every
            memorial and aesthetic moments and the skill of creating diamonds
            from the rough basically a magic touch to every moment that needs
            capturing
          </p>
          <div className="grid grid-cols-2 gap-20">
            { items.map((item, index) => (
                <div
                    key={index} 
                    className="flex flex-col gap-0 items-center">
                <h1 className="text-[2em] md:text-[3em] lg:text-[4em] font-extrabold">
                    {item.large}
                </h1>
                <p className="text-base md:text-lg">
                    {item.small}
                </p>
            </div>
            ))}

          </div>
        </div>

        {/* Image section */}
        <div className="w-[50%]">
          <Image
            src="/award4.png"
            alt="Photographer image"
            width={700}
            height={400}
            className="object-cover object-center h-140 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
