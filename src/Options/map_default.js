
const OPTIONS = {

    title: {
      text: "Imox Technologies"
    },
    plotOptions: {
      map: {
        states: {
          hover: {
            color: "#EEDD66"
          }
        }
      }
    },
    colorAxis: {
      min: 0,
      minColor: "#E6E7E8",
      maxColor: "#005645"
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },

    subtitle: {
      text: "Report By Country and Carrier",
      floating: true,
      align: "right",
      y: 50,
      style: {
        fontSize: "16px"
      }
    },
    series: [
      {
        // mapData: usAll,
        // data: data,
        mapData:[],
        data:[],
        name: "USA",
        dataLabels: {
          enabled: true,
          format: "{point.name}"
        }
      }
    ],
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom"
      }
    }
  };

export default OPTIONS;
