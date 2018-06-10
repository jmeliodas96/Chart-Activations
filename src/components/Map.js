// dependencies
import React, {Component} from 'react';
import Highmap from 'highcharts/highmaps';
import Highcharts from 'highcharts/highstock';

// Modules
import exporting from 'highcharts/modules/map';
import exporting_one from 'highcharts/indicators/indicators';
import exporting_two from 'highcharts/indicators/pivot-points';
import exporting_three from 'highcharts/indicators/macd';
import exporting_four from 'highcharts/modules/exporting';

// Style
import './map.css';


// Load module after Highcharts is loaded
exporting(Highmap);
exporting_one(Highcharts);
exporting_two(Highcharts);
exporting_three(Highcharts);
exporting_four(Highcharts);

const data =  [
    ['ni-as', 0],
    ['ni-an', 1],
    ['ni-224', 2],
    ['ni-6330', 3],
    ['ni-ca', 4],
    ['ni-gr', 5],
    ['ni-ji', 6],
    ['ni-le', 7],
    ['ni-mn', 8],
    ['ni-ms', 9],
    ['ni-ci', 10],
    ['ni-es', 11],
    ['ni-md', 12],
    ['ni-mt', 13],
    ['ni-ns', 14],
    ['ni-bo', 15],
    ['ni-co', 16]
];

class Map extends Component {

//   // When the DOM is ready, create the chart.
  componentWillMount(){
}

componentDidMount(){

  console.log('This the Highmap : ',Highmap);
  // let p = this.props;
  // let highcharts = p.highcharts || window.Highmap;
  // let constructorType = p.constructorType || 'chart';

  let countries = {},
      mapChart,
      countryChart;


  let chart = new Highmap.mapChart('container', {
    chart: {
      map: 'custom/world'
    },
    title: {
        text: 'Report by Brand - Imox Technologies'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ni/ni-all.js">Nicaragua</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    // series: [{
        // data: 10,
    //     name: 'Random data',
    //     states: {
    //         hover: {
    //             color: '#BADA55'
    //         }
    //     },
    //     dataLabels: {
    //         enabled: true,
    //         format: '{point.name}'
    //     }
    // }]
});


  console.log('This the chart :',chart);

  console.log(chart.series.length);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }


  // Create chart
  // this.chart =  new Highmap.Map[constructorType](this.container, p.options);

}

// shouldComponentUpdate(nextProps, nextState){
//   let update = this.props.update
//   return (typeof update === 'undefined') || update
// }
//
// componentDidUpdate() {
//   this.chart.update(this.props.options)
// }
//
// componentWillReceiveProps() {
//   this.chart.update(this.props.options)
// }
//
// componentWillUnmount() {
//   // Destroy chart
//   this.chart.destroy();
// }


render(){
      return (
              <div id="container" className="container">
              </div>
            );
    }
// end of class
}
// <Highmap config={mapOptions} />

// <h1>Ichigo-san</h1>
// <Highchart config={Mapconfig} ref="Chart"/>

      // let props = this.props;
      // let self = this;
      // let containerProps = this.props.containerProps || {};
      //
      // // Add ref to div props
      // containerProps.ref = function (container) { self.container = container }

      // console.log(containerProps);

export default Map
