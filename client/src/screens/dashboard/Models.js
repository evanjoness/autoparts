import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { clearMessage} from "../../store/reducers/globalReducer";
import Wrapper from "./Wrapper";
import { useGetModelsQuery } from "../../store/services/modelService";
const Models = () => {
    let {page} = useParams();
    if(!page){
        page=1;
    }

    const {data = [], isFetching} = useGetModelsQuery(page);
    console.log(data);
    const { success } = useSelector((state) => state.globalReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(success){
            toast.success(success);
        }
        return()=>{
            dispatch(clearMessage())
        }
    },[])
    return (
        <Wrapper>
        <Link to="/dashboard/create-model" className="btn-dark">add car model
        </Link>
        <Toaster position="top-right"/>
        </Wrapper>
    )
}

export default Models;