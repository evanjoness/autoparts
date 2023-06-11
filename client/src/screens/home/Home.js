

import Slider from "../../components/home/Slider";
import Nav from "../../components/home/Nav";
import Brands from "../../components/home/Brands";
import BrandList from "../../components/home/BrandList";
import CarModelList from "../../components/home/CarModelList";
import ProductsTable from "../../components/home/ProductsTable";
const Home = () => {
  return (
    <>
        <Nav/>
        <div className="">
          <Slider/>
        </div>
        <div className="my-container mt-10">
          <Brands/>
          <BrandList/>
          <CarModelList/>
          <ProductsTable/>
        </div>
    </>

  );
};
export default Home;