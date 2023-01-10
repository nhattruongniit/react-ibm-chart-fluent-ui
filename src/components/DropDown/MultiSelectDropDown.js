import React from 'react'
import { Dropdown, Option } from '@fluentui/react-components/unstable';

function MultiSelectDropDown({ label, ariaLabelledby, options }) {
  return (
    <div className="multiSelectDropdown">
      <label id={ariaLabelledby}>
        {label}
      </label>
      <Dropdown
        aria-labelledby={ariaLabelledby}
        multiselect
        size='small'
        placeholder="Select option ..."
        // defaultSelectedOptions={['Cat', 'Dog']}
      >
        {options.map((option, optionIndex) => (
          <Option key={optionIndex} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Dropdown>
    </div>
  )
}

export default MultiSelectDropDown