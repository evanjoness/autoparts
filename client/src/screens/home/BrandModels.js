import Nav from "../../components/home/Nav";
import Header from "../../components/home/Header";
import { useParams } from "react-router-dom";
import {useBrandModelsQuery} from "../../store/services/homeModels";
const BrandModels = () => {
    const {name, page=1} = useParams();
    const {data, isFetching} = useBrandModelsQuery(name, page);
    console.log(data, isFetching);
    console.log(name, page);
  return (
    <>
      <Nav/>
      <div className="">
        <Header>{name}</Header>
      </div>
    </>
  );
}

export default BrandModels;
