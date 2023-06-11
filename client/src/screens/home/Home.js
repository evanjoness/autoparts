

import Slider from "../../components/home/Slider";
import Nav from "../../components/home/Nav";
import Brands from "../../components/home/Brands";
const Home = () => {
  return (
    <>
        <Nav/>
        <div className="mt-[70px]">
          <Slider/>
        </div>
        <div className="my-container mt-10">
          <Brands/>
        </div>
    </>

  );
};
export default Home;