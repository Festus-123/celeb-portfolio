import Portfolio from "../pages/Portfolio";
import CallTo from "../pages/CallTo";
import SelectedWorks from "../pages/SelectedWorks";
const page = () => {

  return (
    <div className="w-full h-full bg-neutral text-text">
      <Portfolio />
      <CallTo />
      <SelectedWorks />
    </div>
  );
}

export default page;
