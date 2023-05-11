import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { clearMessage, setSuccess } from "../../store/reducers/globalReducer";
import { useGetQuery } from "../../store/services/categoryService";
const Categories = () => {
    const {page} = useParams();
    console.log("Your page:", page);
    const {success} = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
    const {data=[], isLoading} = useGetQuery(page ? page : 1);
    console.log(data, isLoading);
    useEffect(()=>{
        dispatch(setSuccess(success));
        return()=>{
            dispatch(clearMessage());
        }
    },[dispatch, success])
    return (
        <Wrapper>
            <ScreenHeader>
                <Link to="/dashboard/create-category" className="btn-dark">add categories <i className="bi bi-plus"></i></Link>
            </ScreenHeader>
            {success && <div className="alert-success">{success}</div>}
            
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Wrapper>
    )
}

export default Categories;