import {configureStore} from "@reduxjs/toolkit";
import AuthService from "./services/authService";
import brandService from "./services/brandService";
import authReducer from "./reducers/authReducer";
import globalReducer from "./reducers/globalReducer";
const Store = configureStore({
    reducer:{
        [AuthService.reducerPath]:AuthService.reducer,
        [brandService.reducerPath]:brandService.reducer,
        "authReducer":authReducer,
        "globalReducer":globalReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthService.middleware)
      .concat(brandService.middleware)
});

export default Store;