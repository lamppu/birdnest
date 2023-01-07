import React from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = React.useState("");

  const fetchData = React.useCallback(async () => {
    axios
      .get("http://localhost:3001")
      .then((response) => setData(response.data));
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.violatorsList}
        </p>
      </header>
    </div>
  );
}

export default App;
