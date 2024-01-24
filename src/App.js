import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from "./Chart";

function App() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
 
    fetch('/data/YF19_2015.json') 
      .then(response => response.json())
      .then(data => setJsonData(data.results.items))
      .catch(error => console.error('Erreur lors du chargement du JSON:', error));
  }, []);

  // test push

  return (

    
    <div className="App">

      <header className="App-header">
        <h1>Données JSON</h1>

        <Chart data={jsonData} />
        <table>
          <thead>
            <tr>

              <th>Close</th>
              <th>Off Exchange Trade Volume EEX</th>
              <th>On Exchange Trade Volume EEX</th>
              <th>Trade date time GMT</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((item, index) => (
              <tr key={index}>
                <td>{item.close || 'N/A'}</td>
                <td>{item.offexchtradevolumeeex || 'N/A'}</td>
                <td>{item.onexchtradevolumeeex || 'N/A'}</td>
                <td>{item.tradedatetimegmt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
