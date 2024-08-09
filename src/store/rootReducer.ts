import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeReducer";

export const rootReducer = combineReducers({
    themeSlice: themeReducer,
})