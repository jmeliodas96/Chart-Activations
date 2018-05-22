//dependencies
import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

//data
import DATA from '../Data/Data.js';

//constants
import DEFAULT_GRAPH_CONFIG from '../Constants';

class Chart extends Component {

    // constructor(props)  {
    //   super(props);
    // }

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

componentDidMount(){
  const ref = this.refs;
  let x1    = ''
  // country_name    = []
  let chart       = ref.chart.getChart();
  // let url         = 'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/world-population-history.csv';
  //
  // chart.series[0].addPoint({x:10, y:12});
  // chart.series[1].addPoint({x:12, y:14});
  // chart.series[2].addPoint({x:14, y:16});


  // This is what you care about
  const obj = JSON.parse(DATA);


  for (let i = 0; i < obj.length; i++) {
    x1  = (obj[i].$.country_name);
    console.log(x1.length);
    chart.series[i].addPoint({x:i, y:i+3});
    // if (obj[i] == 0) {
    // }
  }
  // obj.map(o => {
  // // You need to get o.$ to get the actual object
  // 	console.log(o)
  //   // chart.series[0].addPoint({x:o.$.country_name, y:12});
  //
  // });
}
//Destroy chart before unmount.
  componentWillUnmount(){
      this.chart.destroy();
  }


  render() {
    return (
        <div>
          <ReactHighcharts  data={this.props.DATA} config={DEFAULT_GRAPH_CONFIG} ref="chart"/>
        </div>
    );
  }
}
export default Chart;
