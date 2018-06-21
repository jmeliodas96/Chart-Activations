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

  // let test_ds = '';
  // // set name and data in every series
  // for (let h = 0; h < brand.length; h++) {
  //   test_ds = brand[h];
  //   for (let i = 0; i < DEFAULT_GRAPH_CONFIG.series.length; i++) {
  //     DEFAULT_GRAPH_CONFIG.series.data = test_ds;
  //     console.log('data : ',DEFAULT_GRAPH_CONFIG.series[i].data);
  //
  //   }
  //   test_ds = ''
  // }


  // chart.addSeries({
  //          name: 'S2',
  //          data: [216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
  //      });


  // // console.log(DEFAULT_GRAPH_CONFIG.series);
  // let test_ds = 'puto';
  // for (let i = 0; i < DEFAULT_GRAPH_CONFIG.series.length; i++) {
  //   DEFAULT_GRAPH_CONFIG.series[i].data = test_ds;
  //   DEFAULT_GRAPH_CONFIG.series[i].name = test_ds;
  //
  //   console.log(DEFAULT_GRAPH_CONFIG.series[i].data);
  //
  // }

  // This is what you care about
  // const obj = JSON.parse(DATA);

  // console.log(obj);

  // for (let i = 0; i < obj.length; i++) {
    // x1  = (obj[i].$.country_name);
    // console.log(x1);
    // chart.series[i].addPoint({x:i, y:i+3});
    // if (obj[i] == 0) {
    // }
  // }
  // obj.map(o => {
  // You need to get o.$ to get the actual object
  	// console.log(o)
    // chart.series[0].addPoint({x:o.$.country_name, y:12});

  // });

  //
  // for (let j = 0; j < brand.length; j++) {
  //   console.log(brand[j]);
  //   if (j === 0){
  //     for (let n = 0; n < data.length; n++) {
  //       console.log(data[n]);
  //       chart.series[j].addPoint({x:n,y:data[n]});
  //
  //     }
  //     // chart.series[j].addPoint({x:j,y:j+1});
  //     // DEFAULT_GRAPH_CONFIG.xAxis.categories.push(brand[j])
  //   }
  //   else if (j === 1) {
  //     for (let n = 0; n < data_two.length; n++) {
  //       console.log(data_two[n]);
  //       chart.series[j].addPoint({x:j+n,y:data_two[n]});
  //
  //     }
  //     // chart.series[j].addPoint({x:j,y:j+1});
  //     // DEFAULT_GRAPH_CONFIG.xAxis.categories.push(brand[j])
  //   }
  //     else if (j === 2)  {
  //       for (let n = 0; n < data_two.length; n++) {
  //         console.log(data_two[n]);
  //         chart.series[j].addPoint({x:j+n,y:data_two[n]});
  //
  //       }
  //       // DEFAULT_GRAPH_CONFIG.xAxis.categories.push(brand[j])
  //   }
  //   else if (j > 2) {
  //           // DEFAULT_GRAPH_CONFIG.xAxis.categories.push(brand[j])
  //   }
  // }

} // end of function

//
// //Destroy chart before unmount.
//   componentWillUnmount(){
//       this.chart.destroy();
//   }
//

  render() {
    return (
        <div className="container">
          <ReactHighcharts config={DEFAULT_GRAPH_CONFIG} ref="chart"/>
        </div>
    );
  }
}
export default Chart;
