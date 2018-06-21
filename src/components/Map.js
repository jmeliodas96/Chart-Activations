// dependencies
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';

// Highcharts
import Highcharts from 'highcharts';
import HighMaps from 'highcharts/highmaps'

// modules for Highcharts
import drilldown from 'highcharts/modules/drilldown';
import map from 'highcharts/modules/map'

// Data
import usAll from "../Data/usAll.js";
import data from "../Data/USA.js";
import OPTIONS from '../Options/map_default.js';


// Components
import Chart from './Chart.js';

// styles
import './map.css';
import './chart.css';


// constantes
const COUNTRY = {
  chart: {
      height: 250,
      spacingLeft: 0
  },
  credits: {
      enabled: false
  },
  title: {
      text: null
  },
  subtitle: {
      text: null
  },
  xAxis: {
      tickPixelInterval: 50,
      crosshair: true
  },
  yAxis: {
      title: null,
      opposite: true
  },
  tooltip: {
      split: true
  },
  plotOptions: {
      series: {
          data:[],
          animation: {
              duration: 500
          },
          marker: {
              enabled: false
          },
          threshold: 0,
          // pointStart: parseInt(categories[0], 10)
      }
  }
};

class Map extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const ref = this.refs;

    let countryChart = ref.chart;


    countryChart = new Highcharts['chart'](findDOMNode(this), COUNTRY);
    countryChart.addSeries({
          data: data
      });



    let chart = ref.chart;


    chart = new HighMaps['Map'] ( findDOMNode(this), OPTIONS );
    chart.addSeries({
          data: data,
          mapData: usAll,
          name: "USA",
          dataLabels: {
            enabled: true,
            format: "{point.name}"
          }
      });

   /*end loop*/
}


  componentWillUnmount () {
    this.chart.destroy();
  }

render(){
      return (
              <div className='mapcontainer'>
                <div ref='Map'/>
              </div>
              );
        }
}

// end of class
export default Map;
