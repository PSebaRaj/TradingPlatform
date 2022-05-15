import "./App.css";

function App() {
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
