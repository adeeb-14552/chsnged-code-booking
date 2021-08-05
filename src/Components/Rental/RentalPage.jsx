import React, { useState } from "react";
import "./RentalPage.modules.css";
import vdata from "../Data/motos.js";
import SingleItem from "../SingleItem/SingleItem";
function RentalPage() {
  const [cArray, setcArray] = useState([]);
  const modeSelectionHandler = (e) => {
    const newArray = vdata.filter((item) => e.target.value === item.type);
    setcArray([...newArray]);
    console.log(newArray);
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <select
          name="modeOfTransport"
          id="mode"
          onChange={modeSelectionHandler}
        >
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="auto">Auto</option>
        </select>
        <input type="text" value="place" placeholder="Search by place" />
      </form>
      <div className="total-cars">
        {cArray.map((item) => (
          <SingleItem
            path={item.imageUrl}
            name={item.ModelName}
            price={item.rentalPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default RentalPage;
