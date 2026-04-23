import Portfolio from "../pages/Portfolio";
import CallTo from "../pages/CallTo";
import SelectedWorks from "../pages/SelectedWorks";
import Awards from "../pages/Awards";
import Landscape from "../pages/Landscape";
import Event from "../pages/Event";
import Fashion from "../pages/Fashion";
import Portrait from "../pages/Portrait";
import Experiences from "../pages/Experiences";
import About from "../pages/About";
const page = () => {

  return (
    <div className="w-full h-full bg-neutral text-text">
      <Portfolio />
      <About />
      <Experiences />
      <CallTo />
      <SelectedWorks />
      <Awards />
      <Landscape />
      <Event />
      <Fashion />
      <Portrait />
    </div>
  );
}

export default page;
