import React from 'react'
import * as Highcharts from 'highcharts';

function TreeChart() {
  const treeChartRef = React.useRef(null);

  React.useEffect(() => {
    if(!treeChartRef.current) return;
    Highcharts.chart(treeChartRef.current, {
      colorAxis: {
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[0]
      },
      series: [{
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          data: [{
              name: 'A',
              value: 6,
              colorValue: 1
          }, {
              name: 'B',
              value: 6,
              colorValue: 2
          }, {
              name: 'C',
              value: 4,
              colorValue: 3
          }, {
              name: 'D',
              value: 3,
              colorValue: 4
          }, {
              name: 'E',
              value: 2,
              colorValue: 5
          }, {
              name: 'F',
              value: 2,
              colorValue: 6
          }, {
              name: 'G',
              value: 1,
              colorValue: 7
          }]
      }],
      title: {
          text: 'Highcharts Treemap'
      }
  });
  }, [])

  return (
    <div ref={treeChartRef} className="treeChart" />
  )
}

export default TreeChart