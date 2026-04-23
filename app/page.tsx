import Portfolio from "../pages/Portfolio";
import CallTo from "../pages/CallTo";
import SelectedWorks from "../pages/SelectedWorks";
import Awards from "../pages/Awards";
import Landscape from "../pages/Landscape";
import Event from "../pages/Event";
import Fashion from "../pages/Fashion";
import Portrait from "../pages/Portrait";
import Experiences from "../pages/Experiences";
const page = () => {

  return (
    <div className="w-full h-full bg-neutral text-text">
      <Portfolio />
      <CallTo />
      <SelectedWorks />
      <Awards />
      <Landscape />
      <Event />
      <Fashion />
      <Portrait />
      <Experiences />
    </div>
  );
}

export default page;
