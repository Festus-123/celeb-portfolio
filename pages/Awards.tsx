import AwardsCard from "../components/AwardsCard";

export type AWARDS = {
    src: string;
    alt: string;
  text: string;
  date: string;
};
const Awards = () => {
  const awards: AWARDS[] = [
    {
        src: "/award1.png",
        alt: "bunner-stumn",
      text: "the digital zone click of san tonia",
      date: "22-12-2002",
    },
    {
        src: "/award2.png",
        alt: "jullian",
      text: "Berkely lounge of indiana stage",
      date: "12-03-2009",
    },
    {
        src: "/award3.png",
        alt: "nilter",
      text: "Bellir of resont de noire of the central",
      date: "26-09-2014",
    },
    {
        src: "/award4.png",
        alt: "Akaila-Souza",
      text: "mira de mistra and art piecer",
      date: "12-12-2021",
    },
  ];
  return (
    <section data-theme="dark" className="bg-primary text-text mt-20">
      <h1 className="text-[2em] md:text-[6em] lg:text-[10em] text-center font-extrabold mt-20">
        AWARDS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-5">
        {awards.map((item, index) => (
          <div key={index}>
            <AwardsCard src={item.src} alt={item.alt} text={item.text} date={item.date} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
