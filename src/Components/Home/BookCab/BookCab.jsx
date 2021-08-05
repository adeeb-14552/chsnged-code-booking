import React, { useEffect } from "react";
import useFetch from "react-fetch-hook";
import axios from "axios";
import "./BookCab.modules.css";
function BookCab() {
  const { data } = useFetch(
    "https://apis.mapmyindia.com/advancedmaps/v1/51ddfb31341725b93c19609dda1f80e0/distance_matrix/driving/17.385044%20%2C78.486671%3B17.0005%2C%2081.8040?sources=0%3B1&rtype=0&destinations=2%3B3&region=IND"
  );
  useEffect(() => {
    axios
      .get(
        "https://apis.mapmyindia.com/advancedmaps/v1/51ddfb31341725b93c19609dda1f80e0/distance_matrix/driving/17.385044%20%2C78.486671%3B17.0005%2C%2081.8040?sources=0%3B1&rtype=0&destinations=2%3B3&region=IND"
      )
      .then((res) => {
        return console.log(res.distance);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="BookCab-container">
      <form className="Book-cab-form">
        <label>
          <input type="text" placeholder="Source"></input>
        </label>
        <label>
          <input type="text" placeholder="Destination"></input>
        </label>
        <label>
          <button className="Book-cab-btn">Let's Go</button>
        </label>
      </form>
      <div className="fair-calc"></div>
    </div>
  );
}

export default BookCab;
