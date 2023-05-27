import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { clearMessage, setSuccess } from "../../store/reducers/globalReducer";
import { useGetQuery, useDeleteBrandMutation } from "../../store/services/brandService";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";

const Brands = () => {
  let { page } = useParams();
  if (!page) {
    page = 1;
  }
  console.log("Your page:", page);
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  const { data = [], isFetching } = useGetQuery(page);
  const [removeBrand, response] = useDeleteBrandMutation();
  console.log(response);
  const deleteBr = (id) => {
    if (window.confirm("Are you sure you want to delete the brand?")) {
      removeBrand(id);
    }
  };
  useEffect(() => {
    if (response.isSuccess) {
      dispatch(setSuccess(response?.data?.message));
    }
  }, [response?.isSuccess, response?.data?.message, dispatch]);

  useEffect(() => {
    dispatch(setSuccess(success));
    return () => {
      dispatch(clearMessage());
    };
  }, [dispatch, success]);

  return (
    <Wrapper>
      <ScreenHeader>
<<<<<<< HEAD:client/src/screens/dashboard/Brands.js
        <Link to="/dashboard/create-brand" className="btn-dark">
          add brands <i className="bi bi-plus"></i>
=======
        <Link to="/dashboard/create-category" className="btn-dark">
          add car brand <i className="bi bi-plus"></i>
>>>>>>> main:client/src/screens/dashboard/Categories.js
        </Link>
      </ScreenHeader>
      {success && <div className="alert-success">{success}</div>}
      {!isFetching ? (
        data?.brands?.length > 0 && (
          <>
            <div>
              <table className="w-full bg-gray-900 rounded-md">
                <thead>
                  <tr className="border-b border-gray-800 text-left">
                    <th className="p-3 uppercase text-sm font-medium  text-gray-600">name</th>
                    <th className="p-3 uppercase text-sm font-medium  text-gray-600">edit</th>
                    <th className="p-3 uppercase text-sm font-medium  text-gray-600">delete</th>
                  </tr>
                </thead>
                <tbody>
                {data?.brands?.map((brand) => (
                    <tr key={brand._id} className="odd:bg-gray-800">
                      <td className="p-3 capitalize texy-sm font-normal text-gray-400 ">{brand.name}</td>
                      <td className="p-3 capitalize texy-sm font-normal text-gray-400 ">
                        <Link to={`/dashboard/update-brand/${brand._id}`} className="btn btn-warning">
                          edit
                        </Link>
                      </td>
                      <td className="p-3 capitalize texy-sm font-normal text-gray-400 ">
                        <button className="btn btn-danger" onClick={() => deleteBr(brand._id)}>
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination page={parseInt(page)} perPage={data.perPage} count={data.count} path="dashboard/brands" />
          </>
        )
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};

export default Brands;
