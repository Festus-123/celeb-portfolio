import Portfolio from "../pages/Portfolio";
import CallTo from "../pages/CallTo";
import SelectedWorks from "../pages/SelectedWorks";
import Awards from "../pages/Awards";
import Landscape from "../pages/Landscape";
const page = () => {

  return (
    <div className="w-full h-full bg-neutral text-text">
      <Portfolio />
      <CallTo />
      <SelectedWorks />
      <Awards />
      <Landscape />
    </div>
  );
}

export default page;
