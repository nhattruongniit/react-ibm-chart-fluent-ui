/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

// fluentui
import { tokens, Input, Label } from "@fluentui/react-components";

// components
import VisualCard from './components/VisualCard';
import MultiSelectDropDown from './components/DropDown/MultiSelectDropDown';
import PieChart from './components/Chart/PieChart';
import LineZoneChart from './components/Chart/LineZoneChart';
import SingleDropDown from './components/DropDown/SingleDropDown';
import FunnelChart from './components/Chart/FunnelChart';

// mock data
import { optionVisualModern, optionsOperators } from './mockData';

Exporting(Highcharts);

function App() {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  return (
    <>
      <div className="dashboard">
        <div className='dashboard_fluids'>
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
            <div className='reportFluid'>
              <div className='lineZoneChart'>
                <LineZoneChart />
              </div>
              <div className='reportChart'>
                <div className='reportChart_area'>
                  are chart
                </div>
                <div className='reportChart_pie'>
                  <PieChart />
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className='reportAside'>
          <div className='dateTime_title'>Last Reporting Period Date</div>
          <div className='dateTime'>15 November 2023</div>
          <a href="javascript:;" className='dateTime_link'>Latest Production Figures</a>

          <br />

          <div className='dropdown dropdown_green'>
            <SingleDropDown 
              options={[
                {label: 'Oil Production (thousand b/d)', value: 'oil-production'},
                {label: 'Production', value: 'production'},
              ]}
            />
            <span>734.6</span>
          </div>
          <div className='dropdown dropdown_orange'>
            <SingleDropDown 
              options={[
                {label: 'Oil Production (thousand b/d)', value: 'oil-production'},
                {label: 'Production', value: 'production'},
              ]}
            />
            <span>734.6</span>
          </div>
          <div className='dropdown dropdown_red'>
            <SingleDropDown 
              options={[
                {label: 'Oil Production (thousand b/d)', value: 'oil-production'},
                {label: 'Production', value: 'production'},
              ]}
            />
            <span>734.6</span>
          </div>
          <div className='dropdown dropdown_brown'>
            <SingleDropDown 
              options={[
                {label: 'Oil Production (thousand b/d)', value: 'oil-production'},
                {label: 'Production', value: 'production'},
              ]}
            />
            <span>734.6</span>
          </div>

          <br />

          <div className='hydrocarbon'>
            <Label>
              Total Hydrocarbon Production (thousand boe/d)
            </Label>
            <Input />
          </div>

          <br />

          <div className='dropdown dropdown_blueLight'>
            <SingleDropDown 
              options={[
                {label: 'Oil Production (thousand b/d)', value: 'oil-production'},
                {label: 'Production', value: 'production'},
              ]}
            />
            <span>734.6</span>
          </div>

          <div className='dropdown dropdown_blue'>
            <SingleDropDown 
              options={[
                {label: 'Oil Production (thousand b/d)', value: 'oil-production'},
                {label: 'Production', value: 'production'},
              ]}
            />
            <span>734.6</span>
          </div>

          <br />

          <div>
            <div className='textRun'>Current Top Producing Fields (thousand boe/d)</div>
          </div>

          <br />

          <FunnelChart /> 
          
         
        </div>

        
      </div>
     
    </>
  );
}

export default App;


//    --colorNeutralStrokeAccessible