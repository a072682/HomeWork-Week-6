import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slice/dataSlice';
import authReducer from './slice/authSlice';


export const store = configureStore({
    reducer: { // 必要加入 reducer
        auth: authReducer,
        data: dataReducer,
      }
});
export default configureStore;

