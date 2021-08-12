import "./App.css";
import React ,{Component } from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navigation from "./Components/Navigation/Navigation";
import { Signup } from "./Components/Signup/Signup";
import { Login } from "./Components/Login/Login";
import { auth, db } from './Components/Config/config';
import HomePage from "./Components/Home/HomePage";




export class App extends Component {
  state = {
    user: null,
  }

  componentDidMount() {

    // getting user info for navigation bar
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                this.setState({
                    user: snapshot.data().Name
                })
            })
        }
        else {
          this.setState({user: null
          })
        }
    })

  }

  
  render() {
    return(
      <div>
        < Navigation />
      </div>
    )
  }
}
export default App