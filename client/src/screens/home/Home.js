import { useState } from "react";

import Slider from "../../components/home/Slider";
import Nav from "../../components/home/Nav";
import Brands from "../../components/home/Brands";
import BrandList from "../../components/home/BrandList";
import CarModelList, { CarModelListWithoutBrand } from "../../components/home/CarModelList";
import ProductsTable, { ProductsTableWithoutModel } from "../../components/home/ProductsTable";

const Home = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  return (
    <>
      <Nav/>
      <div className="">
        <Slider/>
      </div>
      <div className="my-container mt-10">
        <Brands/>
        <BrandList setBrand={setBrand}/>
        {brand ? <CarModelList brand={brand} setModel={setModel}/> : <CarModelListWithoutBrand setModel={setModel}/>}
        {model ? <ProductsTable model={model}/> : <ProductsTableWithoutModel/>}
      </div>
    </>

  );
};
export default Home;
