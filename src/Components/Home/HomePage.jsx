import React, { useState, useEffect } from "react";
import "./Home.modules.css";
import BookCab from "./BookCab/BookCab";
import RentalPage from "../Rental/RentalPage";
function HomePage() {
  const [rideOption, setRideOption] = useState("");
  const rideHandler = (option) => {
    setRideOption(option);
  };
  const HomeOptionComponent = (
    <div>
      <div className="About us">
        <p>
          We ame to provide a vehicle for ur ride following all the covid
          measures
        </p>
      </div>
      <h1>Book a ride to know more </h1>
      <div className="ride-btns">
        <button
          className="hme-bttn"
          onClick={() => {
            rideHandler("Rent");
          }}
        >
          Rent a ride
        </button>
        <button
          className="hme-bttn"
          onClick={() => {
            rideHandler("Cab");
          }}
        >
          Book a cab
        </button>
      </div>
    </div>
  );

  return (
    <div className="Home-page">
      {rideOption === "Cab" ? (
        <BookCab />
      ) : rideOption === "Home" ? (
        HomeOptionComponent
      ) : rideOption === "Rent" ? (
        <RentalPage />
      ) : (
        HomeOptionComponent
      )}
    </div>
  );
}

export default HomePage;
