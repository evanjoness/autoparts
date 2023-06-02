import { Link } from "react-router-dom"
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
const CreateProduct = ()=>{
    return(
        <Wrapper>
            <ScreenHeader>
            <Link to="/dashboard/products" className="btn-dark">
                <i className="bi bi-arrow-left-short"></i> products list
            </Link>
            </ScreenHeader>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full xl:w-8/12 p-3">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="productType" className="label">product type</label>
                            <input type="text" name="productType" className="form-control" 
                            id="productType" placeholder="product type..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="specific" className="label">specific</label>
                            <input type="text" name="specific" className="form-control" 
                            id="specific" placeholder="specific..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="manufacturer" className="label">manufacturer</label>
                            <input type="text" name="manufacturer" className="form-control" 
                            id="manufacturer" placeholder="manufacturer..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="country" className="label">country</label>
                            <input type="text" name="country" className="form-control" 
                            id="country" placeholder="country..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="price" className="label">price</label>
                            <input type="number" name="price" className="form-control" 
                            id="price" placeholder="price..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="discount" className="label">discount</label>
                            <input type="number" name="discount" className="form-control" 
                            id="discount" placeholder="discount..."/>
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="stock" className="label">stock</label>
                            <input type="number" name="stock" className="form-control" 
                            id="stock" placeholder="stock..."/>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-4/12 p-3">
                    images
                </div>
            </div>
        </Wrapper>
    )
}
export default CreateProduct;