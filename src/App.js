import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // user is logged
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/payment"
            element={[<Header />, <h1>Payment Route</h1>, <Payment />]}
          />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
