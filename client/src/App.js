import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getStocks } from "./actions/stocks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>STOCK TRADER</h1>

      <div className="getTicker">
        <label>Search by Stock Ticker:</label>
        <input type="text" name="inputTicker"/>

        <button>Search</button>
      </div>
      
    </div>
  );
}

export default App;
