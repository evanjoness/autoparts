import { Link, useParams } from "react-router-dom";
import SliderModels from "../../components/home/SliderModels";
import Nav from "../../components/home/Nav";

const HomeModels = () => {
  let { brandId } = useParams();
  return (
    <>
      <Nav/>
      <div className="">
        <SliderModels brandId={brandId}/>
      </div>
    </>
  );
};
export default HomeModels;
