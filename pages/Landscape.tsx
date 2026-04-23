import Image from "next/image";

const Landscape = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row md:items-end gap-10 mt-20">
            {/* Section for landacpe image with dark theme for nav bar to show nicely */}
            <section 
                data-theme="dark"
                className="w-full h-auto md:h-full">
                <Image 
                    src="/landscape-photo.png"
                    alt="landscape photo"
                    width={600}
                    height={800}
                    className="w-full h-full"/>
            </section>

            {/* Section landscape section text for light theme for navabr to show up nicely  */}
            <section 
                data-theme="light"
                className="bg-neutral flex flex-col gap-10 py-20 px-medium">
                    <h1 className="font-extrabold text-[2em] md:text-[4em] uppercase tracking-tight md:leading-12 text-primary">
                        landscape <br /> photography
                    </h1>
                    <p className="text-lg md:text-2xl w-full md:w-[80%] text-black">
                        Shots so wild and mild that they captue the moment of truth in the hands of a skilled photographer making a diamond from the roughs
                    </p>
            </section>
        </div>
    );
}

export default Landscape;