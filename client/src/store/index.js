import {configureStore} from "@reduxjs/toolkit";
import AuthService from "./services/authService";
import categoryService from "./services/categoryService";
import authReducer from "./reducers/authReducer";
import globalReducer from "./reducers/globalReducer";
const Store = configureStore({
    reducer:{
        [AuthService.reducerPath]:AuthService.reducer,
        [categoryService.reducerPath]:categoryService.reducer,
        "authReducer":authReducer,
        "globalReducer":globalReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthService.middleware)
      .concat(categoryService.middleware)
});

export default Store;