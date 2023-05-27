import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";
import {useAllBrandsQuery} from "../../store/services/brandService"
import Spinner from "../../components/Spinner";
const CreateModel = ()=>{
    const {data=[], isFetching} = useAllBrandsQuery();
    console.log(data, isFetching)
    return(
        <Wrapper>
            <ScreenHeader>
            <Link to="/dashboard/models" className="btn-dark">
            <i className="bi bi-arrow-left-short"></i> models list
            </Link>
            </ScreenHeader>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full xl:w-8/12 p-3">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="model" className="label">Model</label>
                            <input type="text" name="model" className="form-control" 
                            id="model" placeholder="model..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="year" className="label">Year</label>
                            <input type="number" name="year" className="form-control" 
                            id="year" placeholder="year..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="carBody" className="label">Car body</label>
                            <input type="text" name="carBody" className="form-control" 
                            id="carBody" placeholder="Car body..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="carEngine" className="label">Car engine</label>
                            <input type="text" name="carEngine" className="form-control" 
                            id="carEngine" placeholder="Car engine..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="enginePower" className="label">engine power</label>
                            <input type="text" name="enginePower" className="form-control" 
                            id="enginePower" placeholder="engine power..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="brands" className="label">brands</label>
                            {!isFetching ? data?.brands?.length >0 && 
                            <select name="brands" id="brands" className="form-control">
                                <option value="">Choose brand</option>
                                {data?.brands?.map(brand=>(
                                    <option value={brand.name} key={brand._id}>{brand.name}</option>
                                ))}
                            </select> : <Spinner></Spinner>}

                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default CreateModel;
