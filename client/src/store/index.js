import {configureStore} from "@reduxjs/toolkit";
import AuthService from "./services/authService";
const Store = configureStore({
    reducer:{
        [AuthService.reducerPath]:AuthService.reducer
    }
});

export default Store;