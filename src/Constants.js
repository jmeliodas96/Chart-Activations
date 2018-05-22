const DEFAULT_GRAPH_CONFIG  = {
  chart: {
    type      : 'line',
    zoomType  : 'xy',

    style     : {
      fontFamily  : '"Open Sans",sans-serif',
    },
    animation : {
      duration  : 900,
      easing    : 'easeOutBounce'
    },
  resetZoomButton: {
    position  : {
        // x : -40,
        // y : 0
        x : -50,
        y : 0
      }
    }
  },
  credits: {
      enabled: true
  },
  title: {
      text: 'IMOX TECHNOLOGIES'
  },
  subtitle  : {
    text  : 'Report of Carrier Activation'
  },
  legend  : {
      enabled: true
  },
  xAxis : {
      title   : {
                  text: 'X'
                },
      categories  : ['Carrier','Country','Brand'],
      opposite    : false
  },
  yAxis : {
    title   : {
                text: 'Y'
              },
    resize  : {
                enabled: true
              },
    showFirstLabel  : true,
    showLastLabel   : true,
    opposite: false,
  },
  series  : ['NANI','NANI','NANI'] //array for data
};


export default DEFAULT_GRAPH_CONFIG;
