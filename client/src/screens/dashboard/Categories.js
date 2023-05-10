import { Link } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
const Categories = () => {
    return (
        <Wrapper>
            <ScreenHeader>
                <Link to="/dashboard/create-category" className="btn-dark">add categories <i class="bi bi-plus"></i></Link>
            </ScreenHeader>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Wrapper>
    )
}

export default Categories;