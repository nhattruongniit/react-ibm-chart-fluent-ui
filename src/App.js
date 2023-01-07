import React, { useState } from 'react';
import { tokens } from '@fluentui/react-components';
import DatePicker from "react-datepicker";
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

// components
import VisualCard from './components/VisualCard';
import MultiSelectDropDown from './components/DropDown/MultiSelectDropDown';

// mock data
import { optionVisualModern, optionsOperators } from './mockData';

Exporting(Highcharts);

function App() {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if(!chartRef.current) return;
    Highcharts.chart(chartRef.current, {
      chart: {
          type: 'pie'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            }
          }
        ]
        
      },
  
      accessibility: {
          announceNewData: {
              enabled: true
          },
          point: {
              valueSuffix: '%'
          }
      },
  
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.y:.1f}%'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
  
      series: [
          {
              name: "Browsers",
              colorByPoint: true,
              data: [
                  {
                      name: "Chrome",
                      y: 61.04,
                      drilldown: "Chrome"
                  },
                  {
                      name: "Safari",
                      y: 9.47,
                      drilldown: "Safari"
                  },
                  {
                      name: "Edge",
                      y: 9.32,
                      drilldown: "Edge"
                  },
                  {
                      name: "Firefox",
                      y: 8.15,
                      drilldown: "Firefox"
                  },
                  {
                      name: "Other",
                      y: 11.02,
                      drilldown: null
                  }
              ]
          }
      ],
      drilldown: {
          series: [
              {
                  name: "Chrome",
                  id: "Chrome",
                  data: [
                      [
                          "v97.0",
                          36.89
                      ],
                      [
                          "v96.0",
                          18.16
                      ],
                      [
                          "v95.0",
                          0.54
                      ],
                      [
                          "v94.0",
                          0.7
                      ],
                      [
                          "v93.0",
                          0.8
                      ],
                      [
                          "v92.0",
                          0.41
                      ],
                      [
                          "v91.0",
                          0.31
                      ],
                      [
                          "v90.0",
                          0.13
                      ],
                      [
                          "v89.0",
                          0.14
                      ],
                      [
                          "v88.0",
                          0.1
                      ],
                      [
                          "v87.0",
                          0.35
                      ],
                      [
                          "v86.0",
                          0.17
                      ],
                      [
                          "v85.0",
                          0.18
                      ],
                      [
                          "v84.0",
                          0.17
                      ],
                      [
                          "v83.0",
                          0.21
                      ],
                      [
                          "v81.0",
                          0.1
                      ],
                      [
                          "v80.0",
                          0.16
                      ],
                      [
                          "v79.0",
                          0.43
                      ],
                      [
                          "v78.0",
                          0.11
                      ],
                      [
                          "v76.0",
                          0.16
                      ],
                      [
                          "v75.0",
                          0.15
                      ],
                      [
                          "v72.0",
                          0.14
                      ],
                      [
                          "v70.0",
                          0.11
                      ],
                      [
                          "v69.0",
                          0.13
                      ],
                      [
                          "v56.0",
                          0.12
                      ],
                      [
                          "v49.0",
                          0.17
                      ]
                  ]
              },
              {
                  name: "Safari",
                  id: "Safari",
                  data: [
                      [
                          "v15.3",
                          0.1
                      ],
                      [
                          "v15.2",
                          2.01
                      ],
                      [
                          "v15.1",
                          2.29
                      ],
                      [
                          "v15.0",
                          0.49
                      ],
                      [
                          "v14.1",
                          2.48
                      ],
                      [
                          "v14.0",
                          0.64
                      ],
                      [
                          "v13.1",
                          1.17
                      ],
                      [
                          "v13.0",
                          0.13
                      ],
                      [
                          "v12.1",
                          0.16
                      ]
                  ]
              },
              {
                  name: "Edge",
                  id: "Edge",
                  data: [
                      [
                          "v97",
                          6.62
                      ],
                      [
                          "v96",
                          2.55
                      ],
                      [
                          "v95",
                          0.15
                      ]
                  ]
              },
              {
                  name: "Firefox",
                  id: "Firefox",
                  data: [
                      [
                          "v96.0",
                          4.17
                      ],
                      [
                          "v95.0",
                          3.33
                      ],
                      [
                          "v94.0",
                          0.11
                      ],
                      [
                          "v91.0",
                          0.23
                      ],
                      [
                          "v78.0",
                          0.16
                      ],
                      [
                          "v52.0",
                          0.15
                      ]
                  ]
              }
          ]
      }
  });
  }, []);
      

  return (
    <>
      <div className="dashboard">
        <div className='producer'>
          <div className='flex'>
            <VisualCard options={optionVisualModern} bgColor={tokens.colorPaletteLightTealBorderActive} />
            <VisualCard options={optionVisualModern} bgColor={tokens.colorPaletteLilacBackground2} />
          </div>
          <div 
            className='producer_filter'
            style={{
              border: `1px solid ${tokens.colorNeutralStrokeAccessible}`,
            }}
          > 
            <div className='producerFilter_row'>
              <MultiSelectDropDown 
                ariaLabelledby="operator-group-name"
                label="Field Operator Group Name"
                options={optionsOperators}
              />
            </div>
            <div className='producerFilter_row'>
              <MultiSelectDropDown 
                ariaLabelledby="region"
                label="Field Region"
                options={optionsOperators}
              />
            </div>
            <div className='producerFilter_row'>
              <MultiSelectDropDown 
                ariaLabelledby="report-unit"
                label="Reporting Unit Type Description"
                options={optionsOperators}
              />
            </div>
            <div className='producerFilter_row'>
              <MultiSelectDropDown 
                ariaLabelledby="field-name"
                label="Field Name"
                options={optionsOperators}
              />
            </div>
            <div className='producerFilter_row'>
              <MultiSelectDropDown 
                ariaLabelledby="shore-status"
                label="Shore Status"
                options={optionsOperators}
              />
            </div>
            <div className='producerFilter_row'>
              <div>Date Range: </div>
              <div className='flex'>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
            </div>
            
          </div>
        </div>

        <div className='report'>
          <div className='reportChart'>
            <div ref={chartRef} className="pieChart" />
          </div>
          <div className='reportAside'>

          </div>
        </div>

        
      </div>
     
    </>
  );
}

export default App;


//    --colorNeutralStrokeAccessible