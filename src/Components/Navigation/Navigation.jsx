import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navigation.modules.css";
import HomePage from "../Home/HomePage";
import RentalPage from "../Rental/RentalPage";
import Login  from "../Login/Login";
import  Signup from "../Signup/Signup";


function Navigation() {
  




  return (
    <Router className="Nav-bar">
      <div className="Nav">
        <ul>
          <li>
            <Link to="/">
              <img
                src="https://image.flaticon.com/icons/png/512/3089/3089803.png"
                alt="logo"
                style={{ height: "60px" }}
              ></img>
            </Link>
          </li>
          <li>
            <Link to="/Rental">Rent</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          
        </ul>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Rental">
            <RentalPage />
          </Route>
          <Route path="/Login">
            < Login />
          </Route>
          <Route path="/SignUp">
            < Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Navigation;


