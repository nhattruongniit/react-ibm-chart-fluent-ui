import React, { useState } from 'react';
import { tokens } from '@fluentui/react-components';
import DatePicker from "react-datepicker";

// components
import VisualCard from './components/VisualCard';
import MultiSelectDropDown from './components/DropDown/MultiSelectDropDown';

// mock data
import { optionVisualModern, optionsOperators } from './mockData';

function App() {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  return (
    <div className="dashboard flex">
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

      </div>
    </div>
  );
}

export default App;


//    --colorNeutralStrokeAccessible