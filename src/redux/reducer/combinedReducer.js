import companyReducer from "./companyReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({ companyReducer });

export default combinedReducer;
