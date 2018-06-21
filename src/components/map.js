// // dependencies
// import React, {Component} from 'react';
// import ReactHighcharts from 'react-highcharts';


    url: 'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/world-population-history.csv',
    success: function (csv) {

        // Parse the CSV Data
        /*Highcharts.data({
            csv: data,
            switchRowsAndColumns: true,
            parsed: function () {
                console.log(this.columns);
            }
        });*/

        // Very simple and case-specific CSV string splitting
        function CSVtoArray(text) {
            return text.replace(/^"/, '')
                .replace(/",$/, '')
                .split('","');
        }

        csv = csv.split(/\n/);

        var countries = {},
            mapChart,
            countryChart,
            numRegex = /^[0-9\.]+$/,
            lastCommaRegex = /,\s$/,
            quoteRegex = /\"/g,
            categories = CSVtoArray(csv[2]).slice(4);

        // Parse the CSV into arrays, one array each country
        $.each(csv.slice(3), function (j, line) {
            var row = CSVtoArray(line),
                data = row.slice(4);

            $.each(data, function (i, val) {
                val = val.replace(quoteRegex, '');
                if (numRegex.test(val)) {
                    val = parseInt(val, 10);
                } else if (!val || lastCommaRegex.test(val)) {
                    val = null;
                }
                data[i] = val;
            });

            countries[row[1]] = {
                name: row[0],
                code3: row[1],
                data: data
            };
        });

        // For each country, use the latest value for current population
        var data = [];
        for (var code3 in countries) {
            if (countries.hasOwnProperty(code3)) {
                var value = null,
                    year,
                    itemData = countries[code3].data,
                    i = itemData.length;

                while (i--) {
                    if (typeof itemData[i] === 'number') {
                        value = itemData[i];
                        year = categories[i];
                        break;
                    }
                }
                data.push({
                    name: countries[code3].name,
                    code3: code3,
                    value: value,
                    year: year
                });
            }
        }

        // Add lower case codes to the data set for inclusion in the tooltip.pointFormat
        var mapData = Highcharts.geojson(Highcharts.maps['custom/world']);
        $.each(mapData, function () {
            this.id = this.properties['hc-key']; // for Chart.get()
            this.flag = this.id.replace('UK', 'GB').toLowerCase();
        });

        // Wrap point.select to get to the total selected points
        Highcharts.wrap(Highcharts.Point.prototype, 'select', function (proceed) {

            proceed.apply(this, Array.prototype.slice.call(arguments, 1));

            var points = mapChart.getSelectedPoints();
            if (points.length) {
                if (points.length === 1) {
                    $('#info #flag').attr('class', 'flag ' + points[0].flag);
                    $('#info h2').html(points[0].name);
                } else {
                    $('#info #flag').attr('class', 'flag');
                    $('#info h2').html('Comparing countries');

                }
                $('#info .subheader').html('<h4>Historical population</h4><small><em>Shift + Click on map to compare countries</em></small>');

                if (!countryChart) {
                    countryChart = Highcharts.chart('country-chart', {
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
                                animation: {
                                    duration: 500
                                },
                                marker: {
                                    enabled: false
                                },
                                threshold: 0,
                                pointStart: parseInt(categories[0], 10)
                            }
                        }
                    });
                }

                $.each(points, function (i) {
                    // Update
                    if (countryChart.series[i]) {
                        /*$.each(countries[this.code3].data, function (pointI, value) {
                            countryChart.series[i].points[pointI].update(value, false);
                        });*/
                        countryChart.series[i].update({
                            name: this.name,
                            data: countries[this.code3].data,
                            type: points.length > 1 ? 'line' : 'area'
                        }, false);
                    } else {
                        countryChart.addSeries({
                            name: this.name,
                            data: countries[this.code3].data,
                            type: points.length > 1 ? 'line' : 'area'
                        }, false);
                    }
                });
                while (countryChart.series.length > points.length) {
                    countryChart.series[countryChart.series.length - 1].remove(false);
                }
                countryChart.redraw();

            } else {
                $('#info #flag').attr('class', '');
                $('#info h2').html('');
                $('#info .subheader').html('');
                if (countryChart) {
                    countryChart = countryChart.destroy();
                }
            }
        });

        // Initiate the map chart
        mapChart = Highcharts.mapChart('container', {

            title: {
                text: 'Population history by country'
            },

            subtitle: {
                text: 'Source: <a href="http://data.worldbank.org/indicator/SP.POP.TOTL/countries/1W?display=default">The World Bank</a>'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
                type: 'logarithmic',
                endOnTick: false,
                startOnTick: false,
                min: 50000
            },

            tooltip: {
                footerFormat: '<span style="font-size: 10px">(Click for details)</span>'
            },

            series: [{
                data: data,
                mapData: mapData,
                joinBy: ['iso-a3', 'code3'],
                name: 'Current population',
                allowPointSelect: true,
                cursor: 'pointer',
                states: {
                    select: {
                        color: '#a4edba',
                        borderColor: 'black',
                        dashStyle: 'shortdot'
                    }
                }
            }]
        });

        // Pre-select a country
        mapChart.get('us').select();
    }
});






*******************
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

// data
import mapData from '../Data/mapData.js';
import Niall from '../Data/ni-all.js';



// Load module after Highcharts is loaded
exporting(Highmap);
exporting_one(Highcharts);
exporting_two(Highcharts);
exporting_three(Highcharts);
exporting_four(Highcharts);

// const data = [['us-ny', 0], ['us-mi', 5], ['us-tx', 3], ['us-ak', 5]];
const data = [
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

const CONFIG = {
    chart: {
      map: 'countries/ni/ni-all'
    },

    title: {
        text: 'Highmaps basic demo'
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
  //     series: [{
  //     mapData: [u]Niall[/u],
  //     data: data,
  //     name: 'Nicaragua',
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
};

class Map extends Component {

componentDidMount(){

  console.log('This the Highmap : ',Highmap);
  const p = this.props;

  // create container and default state
  let chart = new Highmap.mapChart('container',CONFIG);

  console.log(mapData);

  console.log(chart.series.map);


}

shouldComponentUpdate(nextProps, nextState){
  let update = this.props.update
  return (typeof update === 'undefined') || update
}

componentDidUpdate() {
  this.chart.update(this.props.options)
}

componentWillReceiveProps() {
  this.chart.update(this.props.options)
}

componentWillUnmount() {
  // Destroy chart
  this.chart.destroy();
}


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
