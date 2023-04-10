import { Link } from "react-router-dom";

const AdminNav = () =>{
    return(
        <nav className="fixed left-64 top-4 right-0 mx-4">
            <div className="bg-gray-800  w-full justify-end flex p-4">
                <Link to="/" className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize">Logout</Link>
            </div>

        </nav>
    )
}
export default AdminNav;