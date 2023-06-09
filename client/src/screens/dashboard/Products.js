import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { clearMessage } from "../../store/reducers/globalReducer";
import Wrapper from "./Wrapper";
import { useGetProductsQuery } from "../../store/services/productService";
import ScreenHeader from "../../components/ScreenHeader";
import Spinner from "../../components/Spinner";
import Input from "../../components/Input";
const Products = () => {
  const [searchString, setSearchString] = useState('');

  let { page } = useParams();
  if(!page){
    page = 1;
  }

  const { data = [], isFetching } = useGetProductsQuery(page);
  const [productsToShow, setProductsToShow] = useState([]);
  console.log(data);

  const { success } = useSelector(state => state.globalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    return () => {
      dispatch(clearMessage());
    };
  }, [success, dispatch]);

  const displayModels = (models) => {
    return models.map((model) => model.model).join(', ');
  };
  const filterByModels = (e) => setSearchString(e.target.value);
  useEffect(() => {
    if (searchString) {
        setProductsToShow(data?.products.filter(product => {
            return product.modelId.map(model => model.model).join(', ').includes(searchString);
        }));
    } else {
        setProductsToShow(data?.products);
    }
  }, [data, searchString]);

  return (
    <Wrapper>
        <ScreenHeader>
      <Link to="/dashboard/create-product" className="btn-dark">
        create product
      </Link>
      <Toaster position="top-right" />
      <Input
        name="autopart-search"
        placeholder="Search by autopart name"
        value={searchString}
        onChange={filterByModels}
      />
      </ScreenHeader>
      {!isFetching ? productsToShow?.length > 0 ? <div>
        <table className="w-full bg-gray-900 rounded-md">
                        <thead>
                            <tr className="border-b border-gray-800 text-left">
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">name</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">car models</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">manufacturer</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">specification</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">system</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">price</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">stock</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">photo</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">edit</th>
                                <th className="p-3 uppercase text-sm font-medium  text-gray-600">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                          {productsToShow.map(product => (
                            <tr className="odd:bg-gray-800" key={product._id}>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400">{product.name}</td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400">{displayModels(product.modelId)}</td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400">{product.manufacturer}</td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400">{product.specification}</td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400">{product.system}</td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400">${product.price}.00</td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400">{product.quantity}</td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400">
                                <img src={`/images/${product.picture}`} alt="image name" className="w-20 h-20 rounded-md object-cover"/>
                              </td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400"><Link to={``} className="btn btn-warning">edit</Link></td>
                              <td className="p-3 capitalize text-sm font-normal text-gray-400"><Link to={``} className="btn btn-danger">delete</Link></td>
                            </tr>
                          ))}
                        </tbody>
                    </table>
      </div> :"No products"  : <Spinner/>}
    </Wrapper>
  );
};

export default Products;
