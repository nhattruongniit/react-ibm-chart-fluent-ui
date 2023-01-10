import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function PieChart() {
  const pieChartRef = React.useRef(null);

  const options = { 
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: ""
    },
    data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        legendText: "{label}",
        indexLabelFontSize: 12,
        indexLabel: "{label} - {y}%",
        dataPoints: [
            { y: 18, label: "Direct" },
            { y: 49, label: "Organic Search" },
            { y: 9, label: "Paid Search" },
            { y: 5, label: "Referral" },
            { y: 19, label: "Social" }
        ]
    }]
  }

  return (
    <div className="pieChart">
      <CanvasJSChart 
        options={options}
        onRef={ref => pieChartRef.current = ref} 
			/>
    </div>
  )
}

export default PieChart