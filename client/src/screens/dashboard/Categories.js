import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { clearMessage, setSuccess } from "../../store/reducers/globalReducer";
const Categories = () => {
    const {success} = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
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