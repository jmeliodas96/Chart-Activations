import React, { Component } from 'react';
import Map from './components/Map.js'
import Chart from './components/Chart.js'

// styles
import './App.css';

class App extends Component {

  render() {
    return (
        <div className='maincontainer'>
          <h3>Imox Technologies</h3>
          <Map />
          <Chart />
        </div>
    );
  }

}

export default App;
