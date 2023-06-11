import { useAllProductsByModelQuery } from "../../store/services/modelService";

const ProductsTable = ({ model }) => {
  const { data, isFetching } = useAllProductsByModelQuery(model);
  console.log(data);
  return (
    <div>ProductsTable</div>
  )
}

export default ProductsTable;

export const ProductsTableWithoutModel = () => {
  return (
    <div>ProductsTableWithoutModel</div>
  )
}
