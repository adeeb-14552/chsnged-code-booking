import React from "react";
import "./SingleItem.modules.css";
function SingleItem(props) {
  return (
    <div>
      <div className="single-item">
        <div className="moto-img" onClick={() => props.clicked(props.vehicle)}>
          <img src={props.path} alt={props.name}></img>
        </div>
        <div className="desc-overlay">
          <h3>{props.name}</h3>
          <h3>&#8377;{props.price} </h3>
          <button className="rent-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
