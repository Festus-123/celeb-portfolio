import Image from "next/image";

const Event = () => {
  return (
    <section data-theme="dark" className="p-medium bg-primary text-text mt-20">
      {/* Grid container for event item stacking both text an images  */}
      <div className="grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 gap-5">
        {/* Text for event photography */}
        <div className="flex flex-col gap-10 justify-center z-10">
          <h1 className="text-[3em] md:text-[4em] font-extrabold tracking-tight md:leading-12">
            EVENT PHOTOGRAPHY
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-light">
            Every captured moment of the event feels like it is being relived.
            the joy, fun, enomous feeling of freedom all captured in the moment
            by the lens of an expert
          </p>
        </div>

        {/* Large spanned image */}
        <div className="md:col-span-2">
          <Image
            src=""
            alt=""
            width={800}
            height={400}
            className="object-cover object-center w-full"
          />
        </div>

        {/* Normal event images */}
        <div className="">
          <Image
            src=""
            alt=""
            width={500}
            height={400}
            className="object-cover object-ccnter "
          />
        </div>

        <div className="">
          <Image
            src=""
            alt=""
            width={500}
            height={400}
            className="object-cover object-center "
          />
        </div>

        <div className="">
          <Image
            src=""
            alt=""
            width={500}
            height={400}
            className="object-cover object-center "
          />
        </div>
      </div>
    </section>
  );
};

export default Event;
