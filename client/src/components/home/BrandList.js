import { useAllBrandsQuery } from "../../store/services/brandService";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const BrandList = ({ setBrand }) => {
  const [chosenBrand, setChosenBrand] = useState('');
  const { data, isFetching } = useAllBrandsQuery();
  const handleInput = (e) => {
    const brandId = e.target.value;
    setChosenBrand(brandId);
    setBrand(brandId);
  }
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
            onChange={handleInput}
            value={chosenBrand}
          >
            <option value="">Choose brand</option>
            {data?.brands?.map(brand => (
              <option value={brand._id} key={brand._id}>
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
