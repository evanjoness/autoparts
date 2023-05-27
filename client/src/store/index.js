<<<<<<< HEAD
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
=======
import { configureStore } from '@reduxjs/toolkit';
import AuthService from './services/authService';
import categoryService from './services/categoryService';
import modelService from './services/modelService';
import authReducer from './reducers/authReducer';
import globalReducer from './reducers/globalReducer';
const Store = configureStore({
    reducer: {
        [AuthService.reducerPath]: AuthService.reducer,
        [categoryService.reducerPath]: categoryService.reducer,
        [modelService.reducerPath]: modelService.reducer,
        authReducer: authReducer,
        globalReducer: globalReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(AuthService.middleware)
          .concat(categoryService.middleware)
          .concat(modelService.middleware), // Add the missing middleware
    });
>>>>>>> main

export default Store;