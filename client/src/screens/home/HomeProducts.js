import { Link, useParams } from "react-router-dom";
import Nav from "../../components/home/Nav";
import TableProducts from "../../components/home/TableProducts";

const HomeProducts = () => {
  let { modelId } = useParams();
  return (
    <>
      <Nav/>
      <div className="">
        <TableProducts modelId={modelId}/>
      </div>
    </>

  );
};
export default HomeProducts;
