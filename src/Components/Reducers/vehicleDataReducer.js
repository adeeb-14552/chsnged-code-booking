import motos from "../Data/motos.js";
const initialData = {
  filter: [...motos],
  allvehicleData: [...motos],
  Selecteditem: "",
};
const vehicleDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case "allVehicles":
      return {
        ...state,
        filter: [...motos],
      };
    case "Car":
      return {
        ...state,
        filter: motos.filter((item) => item.type === "Car"),
      };
    case "Bike":
      return {
        ...state,
        filter: motos.filter((item) => item.type === "Bike"),
      };
    case "displayItem":
      return {
        ...state,
        Selecteditem: action.value,
      };
    default:
      return {
        ...state,
      };
  }
};
export default vehicleDataReducer;
