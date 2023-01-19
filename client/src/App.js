import React, { useEffect, useState } from "react";
import './App.css';
import DataTable from './Components/DataTable/DataTable.js';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {  
    const sse = new EventSource('https://birdnest-hyl2.onrender.com/');  
    
    sse.onmessage = e => setData(JSON.parse(e.data));  
    sse.onerror = () => {
      // error log here 
      console.log("Unable to fetch resource");
      sse.close();
  }
  return () => {
    sse.close();
  };}, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Birdnest</h1>
      </header>
      <h2>Drones violating the No Drone Zone</h2>
      <DataTable
          data={data}
        />
    </div>
  );
}

export default App;
