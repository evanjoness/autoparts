import { useAllModelsQuery } from "../../store/services/modelService";
import Spinner from "../../components/Spinner";
import { useState, useEffect } from "react";
const CarModelList = () => {
    const { data=[], isFetching } = useAllModelsQuery();
    console.log(data);
    const [state, setState] = useState({
        modelId: [],
        system: "",
        name: "",
        specification:"",
        manufacturer: "",
        country:"",
        price: 0,
        quantity: 0,
        discount: 0,
        photo: ""
    });
    return (
        <div className="w-full md:w-6/12 p-3">
        <label htmlFor="models" className="label">
        models
        </label>
        {!isFetching ? (
            data?.models?.length > 0 && (
                <select
                    name="models"
                    id="models"
                    className="form-input"
                    // onChange={handleInput}
                    value={state.models}
                >
                <option value="">Choose model</option>
                {data?.models?.map(model => (
                    <option value={model.name} key={model._id}>
                        {model.name}
                    </option>
                                // відображення моделі у списку хочу зробити таким чином
                                // displayValue: `${model.brandId.name} ${model.model} ${model.year}
                                // ${model.carBody} ${model.carEngine} ${model.enginePower}`
                    ))}
                </select>
            )
        ) : (
            <Spinner />
        )}
    </div>
      )
    }

export default CarModelList