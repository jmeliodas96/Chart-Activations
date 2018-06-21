//dependencies
import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

//data
// import DATA from '../Data/Data.js';

// styles
import './chart.css';

//constants
import DEFAULT_GRAPH_CONFIG from '../Constants';

class Chart extends Component {

    constructor(props)  {
      super(props);
    }

  // When the DOM is ready, create the chart.
  componentWillMount(){
    const props = this.props;

    if (props.loadingDataGraph && props.modules) {
      props.modules.foreach(function (module) {
        module(ReactHighcharts);
    });


    this.chart = new ReactHighcharts[props.type || "Chart"]
    (
        props.data,
        props.container,
        props.options
    );


  }
}

// mount the component
componentDidMount(){
  const ref = this.refs;
  let x1    = ''
  // country_name    = []
  let chart       = ref.chart.getChart();
  // let url         = 'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/world-population-history.csv';

  // arrays
  let categories  = ['America Movil', 'Telefonica', 'Tigo'];
  let data        = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
  let data_two    = [25.9, 69.5, 103.4, 120.2, 134.0, 174.0, 123.6, 134.5, 211.4, 196.1, 93.6, 52.4];

  let brand       = ['Alcatel','Azumi','Bmobile','Lanix','Polaroid','Nyx'];

  console.log(chart.series.length);
  for (let k = 0; k < chart.series.length; k++) {
    if (k === 0) {
      for (let j = 0; j < brand.length; j++) {
        if (j === 0) {
          chart.addSeries({
                   name: brand[j],
                   data: data
          })
        }
      }
    }
    else if (k === 1) {
      for (let j = 0; j < brand.length; j++) {
        if (j === 1) {
          chart.addSeries({
                   name: brand[j],
                   data: data_two
          })
        }
      }
    }
  }


} // end of function

//
// //Destroy chart before unmount.
//   componentWillUnmount(){
//       this.chart.destroy();
//   }
//

  render() {
    return (
        <div className="containerchart">
          <ReactHighcharts config={DEFAULT_GRAPH_CONFIG} ref="chart"/>
        </div>
    );
  }
}
export default Chart;
