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
      <div className="flex items-end gap-5 md:gap-20 justify-center p-4 md:p-medium mt-5">
        <h1 className="uppercase text-[3em] md:text-[5em] lg:text-[9em] xl:text-[11em] font-extrabold">
          About Me
        </h1>
        <div className="text-4xl md:text-6xl scale-y-[-1]">
          <FiArrowUpRight />
        </div>
      </div>

      {/*Image of photgrapher and description */}
      <div className="flex flex-col-reverse md:flex-row justify-center mt-20">
        {/* text section */}
        <div className="flex flex-col gap-10 items-center w-full md:w-[50%]">
          <p className="md:text-lg lg:text-xl font-light w-full md:w-[80%] p-4 md:p-0">
            I am DeMInT a skilled Photographer with an eye for capturing every
            memorial and aesthetic moments and the skill of creating diamonds
            from the rough basically a magic touch to every moment that needs
            capturing
          </p>
          <div className="grid grid-cols-2 gap-10 w-full p-4 md:p-medium mt-4">
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
        <div className="w-full md:w-[50%]">
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
