import { useAllModelsByBrandQuery } from "../../store/services/brandService";
import Spinner from "../../components/Spinner";
import { useState } from "react";

const CarModelList = ({ brand, setModel }) => {
    const { data, isFetching } = useAllModelsByBrandQuery(brand);
    console.log(data);
    const [chosenModel, setChosenModel] = useState('');
    const handleInput = (e) => {
        const modelId = e.target.value;
        setChosenModel(modelId);
        setModel(modelId);
    };
    return (
        <div className="w-full md:w-6/12 p-3">
            <label htmlFor="models" className="label">
                models2
            </label>
            {!isFetching ? (
                !!data?.models && (
                <select
                    name="models"
                    id="models"
                    className="form-input"
                    onChange={handleInput}
                    value={chosenModel}
                >
                    <option value="">{data.models.length ? 'Choose model' : 'Brand has no models'}</option>
                    {data?.models?.map(model => (
                        <option value={model._id} key={model._id}>
                            {model.brandId.name} {model.model} {model.year} {model.carBody} {model.carEngine} {model.enginePower}
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

export default CarModelList;

export const CarModelListWithoutBrand = () => {
    return (
        <div className="w-full md:w-6/12 p-3">
            <label htmlFor="models" className="label">
                models
            </label>
            <select
                name="models"
                id="models"
                className="form-input"
            >
                <option value="">Choose brand first</option>
            </select>
        </div>
    )
}
