const DEFAULT_GRAPH_CONFIG  = {
  chart: {
    // backgroundColor: '#3e3e40',
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
      text: 'IMOX TECHNOLOGIES',
      style     : {
        fontFamily  : '"Open Sans",sans-serif',
        color:'#3e3e40'
      }
  },
  subtitle  : {
    text  : 'Report of Carrier Activation',
    style     : {
      fontFamily  : '"Open Sans",sans-serif',
      color:'#3e3e40'
    }
  },
  legend  : {
      enabled: true
  },
  xAxis : {
      title   : {
                  text: 'Series By Carrier',
                  style     : {
                    fontFamily  : '"Open Sans",sans-serif',
                    color:'#3e3e40'
                  }
                },
      // categories  : ['Carrier','Country','Brand'],
      categories  : [],
      // categories  : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      opposite    : false

  },
  yAxis : {
    title   : {
                text: 'BRAND',
                style     : {
                  fontFamily  : '"Open Sans",sans-serif',
                  color:'#3e3e40'
                }
              },
    resize  : {
                enabled: true
              },
    showFirstLabel  : true,
    showLastLabel   : true,
    // categories  : [],
    opposite: false,

  },
  // series  : [{},{},{}], //array for data
  series: [
    { data: [], name:'', cursor: 'pointer'},
  ]
};


export default DEFAULT_GRAPH_CONFIG;
