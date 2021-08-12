import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allDataFilter,
  carFilter,
  bikeFilter,
  detailDisplay,
} from "../actions/vehicleInput";
import "./RentalPage.modules.css";
import SelectedMode from "../SingleItem/SelectedMode";
import SingleItem from "../SingleItem/SingleItem";

function RentalPage() {
  const dispatch = useDispatch();
  const cArray = useSelector((state) => state.filter);
  const itemDetails = useSelector((state) => state.Selecteditem);
  const modeSelectionHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "All") {
      dispatch(allDataFilter(e.target.value));
    } else if (e.target.value === "Car") {
      console.log(cArray);
      dispatch(carFilter(e.target.value));
    } else if (e.target.value === "Bike") {
      console.log(cArray);
      dispatch(bikeFilter(e.target.value));
    } else {
      console.log(cArray);
      return;
    }
  };
  const vehicleSelectionHandler = (x) => {
    console.log("clicked");
    dispatch(detailDisplay(x));
    console.log(itemDetails);
  };
  return (
    <div className="back">
      <form>
        <select
          name="modeOfTransport"
          id="mode"
          onChange={modeSelectionHandler}
        >
          <option value="All">Ride-Type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
        </select>
        <input type="text" value="place" placeholder="Search by place" />
      </form>
      <div className="select-item">
        <div className="total-cars">
          {cArray.map((item, index) => (
            <SingleItem
              key={index}
              path={item.imageUrl}
              name={item.ModelName}
              price={item.rentalPrice}
              vehicle={item}
              clicked={vehicleSelectionHandler}
            />
          ))}
        </div>
        <div className="single-item-details">
          <SelectedMode vehicle={itemDetails} />
        </div>
      </div>
    </div>
  );
}

export default RentalPage;
