import { FiArrowUpRight } from "react-icons/fi";

export type EXPERIENCES = {
    title: string;
    ref: string;
    description: string
}

const Experiences = () => {

    const experiences: EXPERIENCES[] = [
        {
            title: "Secretariat Leadership role",
            ref: "Dominical republic",
            description: "Lead the secretariat media at the dominican republic hall of fame, took over 500 pictures and mae out over 1400 selected works"
        },
        {
            title: "Secretariat Leadership role",
            ref: "Dominical republic",
            description: "Lead the secretariat media at the dominican republic hall of fame, took over 500 pictures and mae out over 1400 selected works"
        },
        {
            title: "Secretariat Leadership role",
            ref: "Dominical republic",
            description: "Lead the secretariat media at the dominican republic hall of fame, took over 500 pictures and mae out over 1400 selected works"
        },

    ]
    return (
        <section
            data-theme="light"
            className="p-medium flex flex-col bg-neutral text-primary mt-20">

                {/* eperience text bold and huge */}
                <h1 className="uppercase text-[4em] md:text-[9em] lg:text-[12em] font-extrabold">
                    Experiences
                </h1>

                {/* Experience section to showcae photographer experience */}
                <div className="py-medium px-4 md:px-large">
                    { experiences.map((item, index) => (
                        <div
                            key={index}
                            className="text-black flex flex-row gap-5 md:gap-10 items-start border-b p-medium">
                                <div className="text-6xl text-primary scale-y-[-1]">
                                    <FiArrowUpRight />
                                </div>
                                <div className="flex flex-col md:flex-row items-start  gap-5 md:gap-20">
                                    <div className="flex flex-col gap-2 ">
                                        <h1 className="text-xl md:text-2xl font-bold">{item.title}</h1>
                                        <p className="text-sm font-light">{item.ref}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-lg w-full md:w-100 lg:w-150">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                        </div>
                    ))}
                </div>
            
        </section>
    );
}



export default Experiences;