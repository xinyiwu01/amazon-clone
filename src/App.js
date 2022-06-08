import React, { useState } from 'react';
import { useEffect } from 'react';
import {auth} from './firebase.js';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useStateValue} from "./StateProvider";


function App() {
  const [{},dispatch] = useStateValue();
  
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])
  
  

  return (
    <Router>
      <div className="app">
        <Routes>
          {/*<Route path="/" element={<Home />} > </Route> */}
          <Route path="/" element={<> <Header /><Home /> </>} > 
          </Route> 
          <Route path="/checkout" element={<> <Header /><Checkout />  </>} > 
          </Route>
          <Route path="/login" element={<Login />} > </Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

