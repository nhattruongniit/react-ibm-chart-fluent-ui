import React from 'react';
import { Checkbox } from '@fluentui/react-components';

function VisualCard({ options, ...props }) {
  return (
    <div 
      className="visualCard"
      style={{
        backgroundColor: props.bgColor, 
      }}
    >
      <ul>
        {options.map((option, optionIndex) => (
          <li key={optionIndex}>
            <Checkbox size='medium' label={option.label} value={option.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VisualCard