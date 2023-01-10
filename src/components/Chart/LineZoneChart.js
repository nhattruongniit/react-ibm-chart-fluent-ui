import React from 'react'
import * as Highcharts from 'highcharts';

function LineZoneChart() {
  const lineChartRef = React.useRef(null);

  React.useEffect(() => {
    if(!lineChartRef.current) return;

    Highcharts.getJSON(
      'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
      function (data) {
  
          Highcharts.chart(lineChartRef.current, {
              chart: {
                  zoomType: 'x'
              },
              title: {
                  text: ''
              },
              subtitle: {
                  text: document.ontouchstart === undefined ?
                      'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
              },
              xAxis: {
                  type: 'datetime'
              },
              yAxis: {
                  title: {
                      text: 'Exchange rate'
                  }
              },
              legend: {
                  enabled: false
              },
              plotOptions: {
                  area: {
                      fillColor: {
                          linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                          },
                          stops: [
                              [0, Highcharts.getOptions().colors[0]],
                              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                          ]
                      },
                      marker: {
                          radius: 2
                      },
                      lineWidth: 1,
                      states: {
                          hover: {
                              lineWidth: 1
                          }
                      },
                      threshold: null
                  }
              },
  
              series: [{
                  type: 'area',
                  name: 'USD to EUR',
                  data: data
              }]
          });
      }
  );
  }, [])

  return (
    <div ref={lineChartRef} className="lineChart" />
  )
}

export default LineZoneChart