import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { useAllModelsQuery } from "../../store/services/categoryService";
import toast, { Toaster } from 'react-hot-toast';
import { useCModelMutation, useGetModelQuery } from "../../store/services/modelService";
import Spinner from "../../components/Spinner";
import { useState, useEffect } from "react";
import { setSuccess } from "../../store/reducers/globalReducer";

const EditModel = () => {
  const { id } = useParams();
  const { data: model, isFetching: fetching } = useGetModelQuery(id, {
    skip: !id, // Skip the initial request if `id` is not available
  });
  console.log("data: ", model);
  const { data = [], isFetching } = useAllModelsQuery();
  const [state, setState] = useState({
    brandId: "",
    brands: "",
    model: "",
    year: 2022,
    body: "",
    engine: "",
    power: ""
  });

  const handleInput = (e) => {
    if (e.target.name === "brands") {
      const selectedBrand = data.brands.find(
        (brand) => brand?.name === e.target.value
      );
      setState({
        ...state,
        brandId: selectedBrand?._id,
        [e.target.name]: e.target.value,
      });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const [createNewModel, response] = useCModelMutation();
  const createModel = (e) => {
    e.preventDefault();
    setState({ ...state });
    // const formData = new FormData();
    // formData.append("data", JSON.stringify(state));
    // createNewModel(formData);
    console.log("create model ", state);
  };

  useEffect(() => {
    if (!response.isSuccess) {
      response?.error?.data?.errors.map(err => {
        toast.error(err.msg);
      });
    }
  }, [response?.error?.data?.errors]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.msg));
      navigate("/dashboard/models");
    }
  }, [response?.isSuccess, response?.data?.message, dispatch, navigate]);

  useEffect(() => {
    if (model) {
      setState((prevState) => ({
        ...prevState,
        brandId: model.brandId,
        brands: model.brands,
        model: model.carModel,
        year: model.year,
        body: model.carBody,
        engine: model.carEngine,
        power: model.enginePower,
      }));
    }
  }, [model]);
  
  console.log("your state: ", state);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/models" className="btn-dark">
          <i className="bi bi-arrow-left-short"></i> models list
        </Link>
      </ScreenHeader>
      <Toaster position="top=right" reverseOrder={true} />
      {!fetching ?       <div className="flex flex-wrap -mx-3">
        <form className="w-full xl:w-8/12 p-3" onSubmit={createModel}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="brands" className="label">
                brands
              </label>
              {!isFetching ? (
                data?.brands?.length > 0 && (
                  <select
                    name="brands"
                    id="brands"
                    className="form-control"
                    onChange={handleInput}
                    value={state.brands}
                  >
                    <option value="">Choose brand</option>
                    {data?.brands?.map(brand => (
                      <option value={brand.name} key={brand._id}>
                        {brand.name}
                      </option>
                    ))}
                  </select>
                )
              ) : (
                <Spinner />
              )}

            </div>
            
            <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="model" className="label">model</label>
                            <input type="text" name="model" className="form-control" id="model" placeholder="model..."
                            onChange={handleInput} value={state.model}></input>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="year" className="label">Year</label>
                            <input type="text" name="year" className="form-control" id="year" placeholder="year..."
                            onChange={handleInput} value={state.year}></input>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="body" className="label">car body</label>
                            <input type="text" name="body" className="form-control" id="body" placeholder="car body..."
                            onChange={handleInput} value={state.body}></input>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="engine" className="label">car engine</label>
                            <input type="text" name="engine" className="form-control" id="engine" placeholder="car engine..."
                            onChange={handleInput} value={state.engine}></input>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="power" className="label">engine power</label>
                            <input type="text" name="power" className="form-control" id="power" placeholder="engine power..."
                            onChange={handleInput} value={state.power}></input>
                        </div>
                        {/* <div className="w-fullp-3">
                            <label htmlFor="image1" className="label">image 1</label>
                            <input type="file" name="image1" id="image1" className="input-file"/>
                        </div> */}
                        <div className="w-full md:w-6/12 p-3">
                            
                            <input type="submit" value={response.isLoading ? "loading..." :"save model"} 
                            disabled={response.isLoading ? true:false} className="btn btn-indigo"></input>
                        </div>
                    </div>
                    
                </form>
      </div>:<Spinner/>}

    </Wrapper>
  );
};

export default EditModel;
