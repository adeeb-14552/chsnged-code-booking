import { createStore } from "redux";
import vehicleDataReducer from "../Reducers/vehicleDataReducer";
const store = createStore(vehicleDataReducer);
export default store;
