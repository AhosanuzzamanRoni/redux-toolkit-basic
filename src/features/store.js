import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import moviesReducer from './movies/movieSlice';


export const store=configureStore({
    reducer:{movies:moviesReducer},
    middleware:getDefaultMiddleware(),
    devTools:process.env.NODE_ENV!=='production',
})