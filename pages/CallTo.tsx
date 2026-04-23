import { FiArrowUpRight } from "react-icons/fi";

const CallTo = () => {
  return (
    <section data-theme="dark" className="relative bg-primary text-text p-large flex items-center justify-center h-screen mt-30">
      {/* Call to action text */}
      <h1 className="text-[2em] sm:text-[5em] lg:text-[10em] font-extrabold text-center md:leading-20 lg:leading-40">
        <span className="flex items-end justify-center gap-10 ">
          <span>LET&apos;S WORK</span>
          <span className="text-[4xl] md:text-[6xl]">
            <FiArrowUpRight />
          </span>
        </span>
        <span className="flex flex-wrap items-end lg:justify-between justify-center gap-5 ">
          TOGETHER
          <span className="text-sm md:text-base lg:text-lg text-center font-normal w-xs md:text-right">
            I am just a click away ready to take your shotss to the sky and make
            you a diamond from the rough
          </span>
        </span>
      </h1>

      {/* stacked items  at the bottom of the page */}
      <div className="absolute bottom-0 w-full text-xs md:text-sm  font-light flex items-center justify-between p-medium gap-20 md:gap-5">
        <p>DeMInT Photo Ops</p>
        <a href="t.wa" className="hidden md:block">hhtps://DeMInTphotos.com</a>
        <a href="">insta: DeMInTphoto22</a>
      </div>
    </section>
  );
};

export default CallTo;
