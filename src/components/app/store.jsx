import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import React from 'react';


const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
