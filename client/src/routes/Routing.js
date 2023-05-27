import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";
<<<<<<< HEAD
import Brands from "../screens/dashboard/Brands";
import CreateBrand from "../screens/dashboard/CreateBrand";
import UpdateBrand from "../screens/dashboard/UpdateBrand"
import Products from "../screens/dashboard/Products";
import CreateModel from "../screens/dashboard/CreateModel";
import Models from "../screens/dashboard/Models";
=======
import Categories from "../screens/dashboard/Categories";
import CreateCategory from "../screens/dashboard/CreateCategory";
import UpdateCategory from "../screens/dashboard/UpdateCategory"
// import Products from "../screens/dashboard/Products";
import CreateModel from "../screens/dashboard/CreateModel";
import EditModel from "../screens/dashboard/EditModel";
import Models from "../screens/dashboard/Models"
>>>>>>> main
import Private from "./Private";
import Public from "./Public";

const Routing = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="auth">
                <Route path="admin-login" element={<Public><AdminLogin/></Public>}></Route>
            </Route>
            <Route path="dashboard">
<<<<<<< HEAD
                <Route path="products" element={<Private><Products/></Private>}/>
                <Route path="brands" element={<Private><Brands/></Private>}/>
                <Route path="brands/:page" element={<Private><Brands/></Private>}/>
                <Route path="create-brand" element={<Private><CreateBrand/></Private>}/>
                <Route path="update-brand/:id" element={<Private><UpdateBrand/></Private>}/>
                <Route path="models" element={<Private><Models/></Private>}/>
=======
                <Route path="categories" element={<Private><Categories/></Private>}/>
                <Route path="models" element={<Private><Models/></Private>}/>
                <Route path="models/:page" element={<Private><Models/></Private>}/>
                <Route path="edit-model/:id" element={<Private><EditModel/></Private>}/>
                <Route path="categories/:page" element={<Private><Categories/></Private>}/>
                <Route path="create-category" element={<Private><CreateCategory/></Private>}/>
                <Route path="update-category/:id" element={<Private><UpdateCategory/></Private>}/>
>>>>>>> main
                <Route path="create-model" element={<Private><CreateModel/></Private>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Routing;