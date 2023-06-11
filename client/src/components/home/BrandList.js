
import { useAllBrandsQuery } from "../../store/services/brandService";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
const BrandList = () =>{
    const [state, setState] = useState({
        brandId: "",
        model: "",
        year: 2023,
        carBody: "",
        carEngine: "",
        enginePower: ""
    });
    const { data = [], isFetching } = useAllBrandsQuery();
  return (
    <div className="w-full md:w-6/12 p-3">
    <label htmlFor="brands" className="label">
        brands
    </label>
    {!isFetching ? (
        data?.brands?.length > 0 && (
            <select
                name="brands"
                id="brands"
                className="form-input"
                // onChange={handleInput}
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
  )
}

export default BrandList