import Image from "next/image";


const Portrait = () => {
    const images = [
        "/portrait1.png",
        "/portrait2.png",
        "/korean-model2.png",
    ]
    return (
        <section
            data-theme="dark"
            className="bg-primary text-text flex flex-col gap-20 mt-20">

                {/* Port series image displayed */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-30">
                    { images.map((item, index) => (
                        <Image 
                            key={index}
                            src={item}
                            alt="portrait series"
                            width={400}
                            height={700}
                            className="object-cover object-center h-100 w-full"/>
                    ))}
                </div>

                {/* Portrait series text */}
                <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0 w-full p-medium">
                    <h1 className="text-[4em] md:text-[5em] lg:text-[7em] font-extrabold uppercase tracking-tight leading-15 md:leading-22">
                        Portrait <br /> Series
                    </h1>

                    <p className="md:text-lg lg:text-xl font-light w-full md:w-[40%]">
                        Portraits tends to bring the light into the viewers perspective, not just bring calm but shifts moods lighting up the expression of every captivating moments
                    </p>
                </div>

            
        </section>
    );
}




export default Portrait;