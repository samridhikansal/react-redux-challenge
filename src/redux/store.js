import { createStore } from "redux";
import combinedReducer from "./reducer/combinedReducer";

export const store = createStore(combinedReducer);
